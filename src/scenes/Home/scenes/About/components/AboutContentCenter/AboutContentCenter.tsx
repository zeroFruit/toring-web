import * as React from "react";
import styled from "services/styled-components";

const contentImageCenter = require("../../data/images/pencil.png");

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

const AboutContentCenter = () => {
  return (
    <div>
      <ContentImg src={contentImageCenter.src} alt={"toring"} />
      <ContentTitle>
        Do not wait more.
      </ContentTitle>
      <ContentDetail>
        언제, 어디서나 당신은 훌륭한 그림책 작가가 될 수 있습니다. 지금 토링과 함께하세요.
      </ContentDetail>
    </div>
  );
}

export default AboutContentCenter;
