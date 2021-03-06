import * as React from "react";
import { ID, StorybookThumbnailProps } from "scenes/Home/data/storybook";
import styled from "services/styled-components";
import { List } from "immutable";

interface IThumbnailImageProps {
    width: number;
    height: number;
}
const ThumbnailImage = styled<IThumbnailImageProps, "img" & React.HTMLProps<HTMLImageElement>>(
    "img"
)`
    display: flex;
    width: 250px;
    height: 250px;
`;

interface IStorybookThumbnailProps {
    storybookID: number;
    previews: List<StorybookThumbnailProps>;
    onClick(id: ID): void;
}

// https://dummyimage.com/240x240/000/fff.png

const StorybookThumbnail: React.SFC<IStorybookThumbnailProps> = ({
    storybookID,
    previews,
    onClick
}) => {
    return (
        <ThumbnailImage
            src={previews
                .get(0)
                .get("srcSet")
                .get(0)
                .get("url")}
            onClick={() => onClick(storybookID)}
        />
    );
};

export default StorybookThumbnail;
