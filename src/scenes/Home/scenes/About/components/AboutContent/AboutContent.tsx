import * as React from "react";
import styled from "services/styled-components";

const contentImageCenter = require("../../data/images/pencil.png");
const contentImageLeft = require("../../data/images/ribbon.png");
const contentImageRight = require("../../data/images/hat.png");

const ContentImg = styled<
  {},
  "img" & React.HTMLProps<HTMLImageElement>
>("img")`
  width: 35%;
  height: 35%;
  margin: 30% auto 1rem;
`;

const ContentTitle = styled<
  {},
  "div" & React.HTMLProps<HTMLInputElement>
>("div")`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const ContentDetail = styled<
  {},
  "div" & React.HTMLProps<HTMLInputElement>
>("div")`
  font-size: 0.9rem;
`;

const ContentWrapper = styled<
  {},
  "div" & React.HTMLProps<HTMLInputElement>
>("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  margin: 0 1rem;
  color: white;
`;

const ContentContainer = styled<
  {},
  "div" & React.HTMLProps<HTMLInputElement>
>("div")`
  display: flex;
`

const AboutContent = () => {
  return (
    <ContentContainer>
      <ContentWrapper>
        <ContentImg src={contentImageLeft.src} alt={"toring"} />
        <ContentTitle>
          Do not wait more.
        </ContentTitle>
        <ContentDetail>
          언제, 어디서나 당신은 훌륭한 그림책 작가가 될 수 있습니다. 지금 토링과 함께하세요.
        </ContentDetail>
      </ContentWrapper>
      <ContentWrapper>
        <ContentImg src={contentImageCenter.src} alt={"toring"} />
        <ContentTitle>
          Just choose and create.
        </ContentTitle>
        <ContentDetail>
          토링은 복잡하지 않습니다. 토링에는 글 작가와 그림 작가들이 협업자를 기다리고 있습니다.
          마음에 드는 작가와 함께 작품을 완성하고 토링의 독자들과 만나세요.
        </ContentDetail>
      </ContentWrapper>
      <ContentWrapper>
        <ContentImg src={contentImageRight.src} alt={"toring"} />
        <ContentTitle>
          Life comes story, Story comes life
        </ContentTitle>
        <ContentDetail>
          토링은 당신의 특별한 삶을 이야기로 만들어 드립니다.
          당신의 이야기로 더 많은 사람들에게 특별한 삶을 선물해주세요.
        </ContentDetail>
      </ContentWrapper>
    </ContentContainer>
  );
}

export default AboutContent;
