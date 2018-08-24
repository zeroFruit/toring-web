import * as React from "react";
import { List } from "immutable";
import { PageProps } from "scenes/Home/data/storybook";
import { Page } from "./components/Page";

const FlipPage = require("react-flip-page").default;

export type Direction = "prev" | "next";

interface IStorybookProps {
    pages: List<PageProps>;
    width?: string;
    height?: string;
    animationDuration: number;
    onPageChange(page: number, direction: Direction): void;
}

class Storybook extends React.PureComponent<IStorybookProps> {
    private self?: React.Component;

    public render() {
        const { width, height, animationDuration, onPageChange } = this.props;
        return (
            <FlipPage
                ref={(self: React.Component): void => {
                    this.self = self;
                }}
                orientation={"horizontal"}
                animationDuration={animationDuration}
                flipOnTouch={true}
                showTouchHint={true}
                showSwipeHint={true}
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    width,
                    height
                }}
                onPageChange={(page: any, direction: any) => onPageChange(page, direction)}
            >
                {this.renderPages()}
            </FlipPage>
        );
    }

    public gotoPrevPage(): void {
        (this.self as any).gotoPreviousPage();
    }

    public gotoNextPage(): void {
        (this.self as any).gotoNextPage();
    }

    private renderPages(): any[] {
        const pages: any[] = [];
        this.props.pages.forEach((page: PageProps) => {
            pages.push(<Page key={page.id} page={page} />);
        });

        return pages;
    }
}

export default Storybook;
