import * as React from "react";
import styled from "services/styled-components";

const Wrapper = styled<{}, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0 2.8rem;
`;

interface IPagePanel {
    width: string;
    height: string;
}
const PagePanel = styled<IPagePanel, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: white;
    color: black;
    border-radius: 0.2rem;
`;

interface IButton {
    width: string;
    height: string;
}
const Button = styled<IButton, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 0.9rem;
    background-color: white;
`;

interface IControllerProps {
    totalPages: number;
    currentPage: number;
    onClickNext(): void;
    onClickPrev(): void;
}

class Controller extends React.PureComponent<IControllerProps> {
    public render() {
        const { totalPages, currentPage, onClickNext, onClickPrev } = this.props;
        return (
            <Wrapper>
                <Button width={"1.9rem"} height={"1.9rem"} onClick={onClickPrev} />
                <PagePanel
                    width={"8.8rem"}
                    height={"1.7rem"}
                >{`${currentPage} / ${totalPages}`}</PagePanel>
                <Button width={"1.9rem"} height={"1.9rem"} onClick={onClickNext} />
            </Wrapper>
        );
    }
}

export default Controller;
