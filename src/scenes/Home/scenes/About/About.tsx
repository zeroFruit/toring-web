import * as React from "react";
import styled from "services/styled-components";

const backgroundImage = require("./data/images/sky.jpg") as ILQIP;

interface IAboutContainerProps {
    height: number;
    backgroundUrl: string;
}

interface ILQIP {
    preSrc: string;
    palette: string[];
    src: string;
}

const AboutContainer = styled<IAboutContainerProps, "div" & React.HTMLProps<HTMLInputElement>>(
    "div"
)`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: ${props => props.height}rem;
    background-image: url(${props => props.backgroundUrl});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
    background-color: "#3fa4ff";
`;

class About extends React.PureComponent {
    public render() {
        return (
            <AboutContainer height={29.33} backgroundUrl={backgroundImage.preSrc}>
                <div>Toring</div>
                <div>소개내용 들어가기~</div>
            </AboutContainer>
        );
    }
}

export default About;
