import * as React from "react";
import styled from "services/styled-components";

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

const ContentDescription = styled<
  {},
  "div" & React.HTMLProps<HTMLInputElement>
>("div")`
  font-size: 0.9rem;
`;

interface IAboutContentDetailProps {
  contentID: number;
  contentImage: string;
  contentTitle: string;
  contentDescription: string;
};

const AboutContentDetail: React.SFC<IAboutContentDetailProps> = ({
  contentID,
  contentImage,
  contentTitle,
  contentDescription
}) => {
  return (
    <ContentWrapper>
      <ContentImg src={contentImage} alt={"toring"} />
      <ContentTitle>
        { contentTitle }
      </ContentTitle>
      <ContentDescription>
        { contentDescription }
      </ContentDescription>
    </ContentWrapper>
  );
}

export default AboutContentDetail;
