import * as React from "react";
import { connect } from "react-redux";
import styled from "services/styled-components";
import { About } from "./scenes/About";
import { ServiceInfo } from "./scenes/ServiceInfo";
import { StorybookList } from "./components/StorybookList";
import { StorybookPreview } from "./components/StorybookPreview";
import { bindActionCreators, Dispatch } from "redux";
import { actionCreators as storybookActions } from "./data/storybook/actions";
import { IRootReducersState } from "../../reducers";
import { List } from "immutable";
import { ID, StorybookProps } from "./data/storybook";
import { findByID } from "./data/storybook/reducers";
import { History } from "history";

interface ISectionWrapperProps {
    marginBottom: number;
}

const SectionWrapper = styled<ISectionWrapperProps, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-bottom: ${props => props.marginBottom}rem;
`;

const StorybookListWrapper = styled<ISectionWrapperProps, "div" & React.HTMLProps<HTMLDivElement>>(
    "div"
)`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-bottom: ${props => props.marginBottom}rem;
`;

const HomeContainer = styled<{}, "div" & React.HTMLProps<HTMLInputElement>>("div")`
    display: flex;
    flex-direction: column;
`;

const Footer = styled<{}, "div" & React.HTMLProps<HTMLInputElement>>("div")`
    display: flex;
    flex-grow: 1;
`;

interface IHomeProps {
    storybookActions: typeof storybookActions;
    storybooks: List<StorybookProps>;
    httpCallsInProgress: boolean;
    history: History;
}
interface IHomeState {
    selectedStorybook?: StorybookProps;
}
class Home extends React.Component<IHomeProps, IHomeState> {
    public state: IHomeState = {
        selectedStorybook: undefined
    };

    public componentDidMount() {
        console.log("Home did mount", this.props.history);
        this.props.storybookActions.fetchStart();
    }

    public componentWillReceiveProps(nextProps: IHomeProps) {
        console.log("next props: ", nextProps.storybooks);
    }

    public componentWillUnmount() {
        this.setState(s => ({
            ...s,
            selectedStorybook: undefined
        }));
    }
    public render() {
        const { storybooks } = this.props;

        return (
            <HomeContainer>
                <SectionWrapper marginBottom={3.28}>
                    <About />
                </SectionWrapper>
                <StorybookListWrapper marginBottom={3.28}>
                    <StorybookList
                        onClickStorybook={this.onClickStorybook}
                        storybooks={storybooks}
                    />
                    {this.renderStorybookPreview()}
                </StorybookListWrapper>
                <Footer>
                    <ServiceInfo />
                </Footer>
            </HomeContainer>
        );
    }
    private renderStorybookPreview = () => {
        const { selectedStorybook } = this.state;
        return selectedStorybook !== undefined ? (
            <StorybookPreview
                onClickView={this.onClickStorybookView}
                storybook={selectedStorybook}
            />
        ) : null;
    };

    private onClickStorybook = (storybookID: ID): void => {
        const storybook = findByID(this.props.storybooks, storybookID);
        this.setState(s => ({
            ...s,
            selectedStorybook: storybook
        }));
    };

    private onClickStorybookView = (storybookID: ID) => {
        console.log(storybookID);
        this.props.storybookActions.select(storybookID);
        this.props.history.push("/viewer");
    };
}

const mapStateToProps = (state: IRootReducersState) => ({
    storybooks: state.scenes.home.get("storybooks"),
    httpCallsInProgress: state.common.http.httpCallsInProgress
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    storybookActions: bindActionCreators(storybookActions, dispatch)
});

const ContainerHome = connect<{}>(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default ContainerHome;
