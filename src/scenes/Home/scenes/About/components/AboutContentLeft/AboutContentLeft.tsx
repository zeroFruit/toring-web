import * as React from "react";
import styled from "services/styled-components";

const contentImageLeft = require("../../data/images/ribbon.png");

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

const AboutContentLeft = () => {
  return (
    <div>
      <ContentImg src={contentImageLeft.src} alt={"toring"} />
      <ContentTitle>
        Just choose and create.
      </ContentTitle>
      <ContentDetail>
        토링은 복잡하지 않습니다. 토링에는 글 작가와 그림 작가들이 협업자를 기다리고 있습니다.
        마음에 드는 작가와 함께 작품을 완성하고 토링의 독자들과 만나세요.
      </ContentDetail>
    </div>
  );
}

export default AboutContentLeft;
