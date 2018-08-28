import * as React from "react";
import styled from "services/styled-components";
import { AboutContent } from "./components/AboutContent"

const backgroundImage = require("./data/images/about_background.jpg") as ILQIP;

interface IAboutContainerProps {
    height: number;
    backgroundUrl: string;
}

interface ILQIP {
    preSrc: string;
    palette: string[];
    src: string;
}

const AboutContainer = styled<
  IAboutContainerProps,
  "div" & React.HTMLProps<HTMLInputElement>
>("div")`
  height: ${props => props.height}rem;
  background-image: url(${props => props.backgroundUrl});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
`;

class About extends React.PureComponent {
  public render() {
    return (
      <AboutContainer height={29.33} backgroundUrl={backgroundImage.src}>
        <AboutContent />
      </AboutContainer>
    );
  }
}

export default About;
