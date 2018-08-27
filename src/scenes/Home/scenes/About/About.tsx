import * as React from "react";
import styled from "services/styled-components";
import { AboutContentLeft } from "./components/AboutContentLeft";
import { AboutContentCenter } from "./components/AboutContentCenter";
import { AboutContentRight } from "./components/AboutContentRight";

// const backgroundImage = require("./data/images/about_background.jpg") as ILQIP;

interface IAboutContainerProps {
    height: number;
    backgroundUrl: string;
}

// interface ILQIP {
//     preSrc: string;
//     palette: string[];
//     src: string;
// }

const AboutContainer = styled<IAboutContainerProps, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    display: flex;
    height: ${props => props.height}rem;
    background-image: url(${props => props.backgroundUrl});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
`;

const ContentWrapper = styled<{}, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
    margin: 0 1rem;
    color: white;
`;

class About extends React.PureComponent {
    public render() {
        return (
            <AboutContainer
                height={29.33}
                backgroundUrl={require("./data/images/about_background.jpg").src}
            >
                <ContentWrapper>
                    <AboutContentLeft />
                </ContentWrapper>
                <ContentWrapper>
                    <AboutContentCenter />
                </ContentWrapper>
                <ContentWrapper>
                    <AboutContentRight />
                </ContentWrapper>
            </AboutContainer>
        );
    }
}

export default About;
