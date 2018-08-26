import * as React from "react";
import styled from "services/styled-components";

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

const AboutContentRight = () => {
  return (
    <div>
      <ContentImg src={contentImageRight.src} alt={"toring"} />
      <ContentTitle>
        Life comes story, Story comes life
      </ContentTitle>
      <ContentDetail>
        토링은 당신의 특별한 삶을 이야기로 만들어 드립니다.
        당신의 이야기로 더 많은 사람들에게 특별한 삶을 선물해주세요.
      </ContentDetail>
    </div>
  );
}

export default AboutContentRight;
