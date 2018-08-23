import * as React from "react";
import styled from "services/styled-components";
import { Storybook } from "./components/Storybook";
import mockPages from "data/mock/mockPages";

const ViewerContainer = styled<{}, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    flex: 1;
    height: 100vh;
`;

class Viewer extends React.PureComponent {
    public render() {
        return (
            <ViewerContainer>
                <Storybook animationDuration={600} width={960} height={540} pages={mockPages} />
            </ViewerContainer>
        );
    }
}

export default Viewer;
