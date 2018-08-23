import * as React from "react";
import { List } from "immutable";
import { PageProps } from "scenes/Home/data/storybook";
import { Page } from "./components/Page";

const FlipPage = require("react-flip-page").default;

interface IStorybookProps {
    pages: List<PageProps>;
    width: number;
    height: number;
    animationDuration: number;
}

const storybookStyles = {
    position: "relative",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
};

class Storybook extends React.PureComponent<IStorybookProps> {
    public render() {
        const { width, height, animationDuration } = this.props;
        return (
            <FlipPage
                orientation={"horizontal"}
                animationDuration={animationDuration}
                flipOnTouch={true}
                showTouchHint={true}
                showSwipeHint={true}
                style={storybookStyles}
                width={width}
                height={height}
            >
                {[
                    <Page key={this.props.pages.get(0).id} page={this.props.pages.get(0)} />,
                    <Page key={this.props.pages.get(1).id} page={this.props.pages.get(1)} />,
                    <Page key={this.props.pages.get(2).id} page={this.props.pages.get(2)} />,
                    <Page key={this.props.pages.get(3).id} page={this.props.pages.get(3)} />
                ]}
            </FlipPage>
        );
    }

    // private renderPages() {
    //     return this.props.pages.map((page: PageProps) => <Page key={page.id} page={page} />);
    // }
}

export default Storybook;
