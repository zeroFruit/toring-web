import * as React from "react";
import styled from "services/styled-components";

const backgroundImage = require("./data/images/about_background.jpg") as ILQIP;
const contentImageRight = require("./data/images/hat.png");
const contentImageLeft = require("./data/images/ribbon.png");
const contentImageCenter = require("./data/images/pencil.png");


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
  display: flex;
  height: ${props => props.height}rem;
  background-image: url(${props => props.backgroundUrl});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
`;

interface IAboutContentWrapperProps {
    color: string;
}

const AboutContentWrapper = styled<
  IAboutContentWrapperProps,
  "div" & React.HTMLProps<HTMLInputElement>
>("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  margin: 0 1rem;
  color: ${props => props.color};
`;

interface IAboutContentImgProps {
  maxWidth: number;
}

const AboutContentImg = styled<
  IAboutContentImgProps,
  "img" & React.HTMLProps<HTMLImageElement>
>("img")`
  max-width: ${props => props.maxWidth}%;
  width: auto;
  height: auto;
  margin: 30% auto 1rem;
`;

interface IAboutContentTitleProps {
  fontSize: number;
}

const AboutContentTitle = styled<
  IAboutContentTitleProps,
  "div" & React.HTMLProps<HTMLInputElement>
>("div")`
  font-size: ${props => props.fontSize}rem;
  margin-bottom: 1rem;
`;

interface IAboutContentDetailProps {
  fontSize: number;
}

const AboutContentDetail = styled<
  IAboutContentDetailProps,
  "div" & React.HTMLProps<HTMLInputElement>
>("div")`
  font-size: ${props => props.fontSize}rem;
`;

class About extends React.PureComponent {
  public render() {
    return (
      <AboutContainer height={29.33} backgroundUrl={backgroundImage.src}>
        <AboutContentWrapper color={"white"}>
          <AboutContentImg src={contentImageLeft.src} alt={"toring"} maxWidth={35} />
          <AboutContentTitle fontSize={1.3}>
            Do not wait more.
          </AboutContentTitle>
          <AboutContentDetail fontSize={0.9}>
            언제, 어디서나 당신은 훌륭한 그림책 작가가 될 수 있습니다. 지금 토링과 함께하세요.
          </AboutContentDetail>
        </AboutContentWrapper>
        <AboutContentWrapper color={"white"}>
          <AboutContentImg src={contentImageCenter.src} alt={"toring"} maxWidth={35} />
          <AboutContentTitle fontSize={1.3}>
            Just choose and create.
          </AboutContentTitle>
          <AboutContentDetail fontSize={0.9}>
            토링은 복잡하지 않습니다. 토링에는 글 작가와 그림 작가들이 협업자를 기다리고 있습니다.
            마음에 드는 작가와 함께 작품을 완성하고 토링의 독자들과 만나세요.
          </AboutContentDetail>
        </AboutContentWrapper>
        <AboutContentWrapper color={"white"}>
          <AboutContentImg src={contentImageRight.src} alt={"toring"} maxWidth={35} />
          <AboutContentTitle fontSize={1.3}>
            Life comes story, Story comes life
          </AboutContentTitle>
          <AboutContentDetail fontSize={0.9}>
            토링은 당신의 특별한 삶을 이야기로 만들어 드립니다.
            당신의 이야기로 더 많은 사람들에게 특별한 삶을 선물해주세요.
          </AboutContentDetail>
        </AboutContentWrapper>
      </AboutContainer>
    );
  }
}

export default About;
