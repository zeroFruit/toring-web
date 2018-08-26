import * as React from "react";
import { ID, StorybookProps } from "../../data/storybook";
import styled from "services/styled-components";

interface IStorybookPreviewWrapper {
    marginTop: number;
    paddingHorizontal: number;
}
const StorybookPreviewWrapper = styled<IStorybookPreviewWrapper, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    display: flex;
    margin-top: ${props => props.marginTop}rem;
    padding: 0 ${props => props.paddingHorizontal}rem;
`;

interface IContent {
    paddingRight: number;
}
const Content = styled<IContent, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    flex: 1;
    flex-direction: column;
    padding-right: ${props => props.paddingRight}rem;
`;

interface IPreview {
    width: number;
    height: number;
}
const Preview = styled<IPreview, "img" & React.HTMLProps<HTMLImageElement>>("img")`
    width: ${props => props.width}rem;
    height: ${props => props.height}rem;
`;

interface ITitle {
    marginTop: number;
    fontSize: number;
}
const Title = styled<ITitle, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    margin-top: ${props => props.marginTop}rem;
    font-size: ${props => props.fontSize}rem;
    color: #2b2b2b;
`;

interface IAuthor {
    fontSize: number;
}
const Author = styled<IAuthor, "div">("div")`
    font-size: ${props => props.fontSize}rem;
    color: #676767;
`;

interface ISynopsis {
    marginTop: number;
}
const Synopsis = styled<ISynopsis, "div">("div")`
    margin-top: ${props => props.marginTop}rem;
`;

interface IStorybookPreviewProps {
    storybook: StorybookProps;
    onClickView(storybookID: ID): void;
}

interface IViewContainer {
    marginTop: number;
    height: number;
}
const ViewContainer = styled<IViewContainer, "div">("div")`
    display: flex;
    margin-top: ${props => props.marginTop}rem;
    height: ${props => props.height}rem;
`;

interface IViewButton {
    height: number;
    width: number;
    backgroundColor: string;
    color: string;
    fontSize: number;
}
const ViewButton = styled<IViewButton, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: ${props => props.fontSize}rem;
    font-weight: 500;
    height: ${props => props.height}rem;
    width: ${props => props.width}rem;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
`;

class StorybookPreview extends React.PureComponent<IStorybookPreviewProps> {
    public render() {
        const { storybook } = this.props;
        return (
            <StorybookPreviewWrapper paddingHorizontal={7.22} marginTop={2}>
                <Content paddingRight={2}>
                    <Title marginTop={1.22} fontSize={2.33}>
                        {storybook.title}
                    </Title>
                    <Author fontSize={1.5}>{storybook.creator}</Author>
                    <Synopsis marginTop={3.38}>{storybook.synopsis}</Synopsis>
                    <ViewContainer marginTop={3} height={2.5}>
                        <ViewButton
                            onClick={() => this.props.onClickView(storybook.storybookID)}
                            height={2.5}
                            width={9.5}
                            backgroundColor={"#3fa4ff"}
                            color={"#ffffff"}
                            fontSize={0.8}
                        >
                            보러가기
                        </ViewButton>
                    </ViewContainer>
                </Content>
                <Preview src={storybook.previews[0].srcSet[0].url} width={20} height={20} />
            </StorybookPreviewWrapper>
        );
    }
}

export default StorybookPreview;
