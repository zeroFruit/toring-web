import * as React from "react";
import styled, { keyframes } from "services/styled-components";
import { Storybook } from "./components/Storybook";
import mockPages from "data/mock/mockPages";
import { Controller } from "./components/Controller";
import mockStorybookList from "../../data/mock/mockStorybookList";
import { Direction } from "./components/Storybook/Storybook";
import { createRef } from "react";
import { RatePage } from "./components/RatePage";
import { RouteComponentProps } from "react-router";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

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
    opacity: 1;
    background-color: white;
`;

const ModalContainer = styled<{}, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    color: black;
    animation: 1s ${fadeIn} ease-out;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 2px #399df7;
`;

interface IViewerProps extends RouteComponentProps<IViewerProps> {}

interface IViewerState {
    currentPage: number;
    readDone: boolean;
}

class Viewer extends React.PureComponent<IViewerProps, IViewerState> {
    public state: IViewerState = {
        currentPage: 0,
        readDone: false
    };
    private storybookRef = createRef<Storybook>();

    public render() {
        const { currentPage, readDone } = this.state;
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
                            totalPages={mockStorybookList.size}
                            currentPage={currentPage}
                            onClickNext={() => this.onClickNext()}
                            onClickPrev={() => this.onClickPrev()}
                        />
                    </ControlPanel>
                </ShowPanelOnHoverZone>

                {readDone ? (
                    <ModalContainer>
                        <RatePage onRate={(rates: number) => this.onRate(rates)} />
                    </ModalContainer>
                ) : null}
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

    protected onRate(rates: number): void {
        console.log("rates: ", rates);
        this.props.history.push("/");
    }

    private handleOnPrevDirection(): void {
        if (this.state.currentPage === 0) {
            return;
        }
        this.setState(s => ({ ...s, currentPage: s.currentPage - 1 }));
    }

    // TODO: change with server-received books
    private handleOnNextDirection(): void {
        if (this.state.currentPage === 2) {
            this.setState(s => ({ ...s, readDone: true }));
            return;
        }
        this.setState(s => ({ ...s, currentPage: s.currentPage + 1 }));
    }
}

export default Viewer;
