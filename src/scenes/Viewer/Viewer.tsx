import * as React from "react";
import styled from "services/styled-components";
import { Storybook } from "./components/Storybook";
import mockPages from "data/mock/mockPages";
import { Controller } from "./components/Controller";
import mockStorybookList from "../../data/mock/mockStorybookList";
import { Direction } from "./components/Storybook/Storybook";
import { createRef } from "react";

const ControlPanel = styled<{}, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    position: absolute;
    bottom: 0;
    width: 27rem;
    height: 4.5rem;
    background-color: #399df7;
    color: white;
    left: 50%;
    transform: translate(-50%, 4.5rem);
    transition: transform 1s;
    border-radius: 2.2rem 2.2rem 0 0;
`;

interface IShowPanelOnHoverZone {
    height: string;
}
const ShowPanelOnHoverZone = styled<IShowPanelOnHoverZone, "div" & React.HTMLProps<HTMLDivElement>>(
    "div"
)`
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: ${props => props.height};

    &:hover ${ControlPanel} {
        transform: translate(-50%, 0);
    }
`;

const ViewerContainer = styled<{}, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
`;

interface IViewerState {
    currentPage: number;
}

class Viewer extends React.PureComponent<{}, IViewerState> {
    public state: IViewerState = {
        currentPage: 0
    };
    private storybookRef = createRef<Storybook>();

    public render() {
        const { currentPage } = this.state;
        return (
            <ViewerContainer>
                <Storybook
                    ref={this.storybookRef}
                    animationDuration={600}
                    pages={mockPages}
                    onPageChange={(page: number, direction: Direction) =>
                        this.onPageChange(page, direction)
                    }
                />
                <ShowPanelOnHoverZone height={"5.55rem"}>
                    <ControlPanel>
                        <Controller
                            totalPages={mockStorybookList.length}
                            currentPage={currentPage}
                            onClickNext={() => this.onClickNext()}
                            onClickPrev={() => this.onClickPrev()}
                        />
                    </ControlPanel>
                </ShowPanelOnHoverZone>
            </ViewerContainer>
        );
    }
    protected onPageChange(page: number, direction: Direction): void {
        switch (direction) {
            case "prev":
                this.handleOnPrevDirection();
                break;
            case "next":
                this.handleOnNextDirection();
                break;
        }
    }

    protected onClickNext(): void {
        (this.storybookRef.current as Storybook).gotoNextPage();
    }

    protected onClickPrev(): void {
        (this.storybookRef.current as Storybook).gotoPrevPage();
    }

    private handleOnPrevDirection(): void {
        if (this.state.currentPage === 0) {
            return;
        }
        this.setState(s => ({
            ...s,
            currentPage: s.currentPage - 1
        }));
    }
    // TODO: change with server-received books
    private handleOnNextDirection(): void {
        if (this.state.currentPage === mockStorybookList - 1) {
            return;
        }
        this.setState(s => ({
            ...s,
            currentPage: s.currentPage + 1
        }));
    }
}

export default Viewer;
