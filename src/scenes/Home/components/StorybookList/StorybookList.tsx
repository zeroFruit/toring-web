import * as React from "react";
import { StorybookProps } from "scenes/Home/data/storybook";
import { StorybookThumbnail } from "scenes/Home/components/StorybookThumbnail";
import { InfiniteCarousel } from "components/InfiniteCarousel";
import { List } from "immutable";
import mockStorybookList from "data/mock/mockStorybookList";

interface IStorybookListProps {
    storybooks: List<StorybookProps>;
    onClickStorybook(storybookID: number): void;
}

class StorybookList extends React.PureComponent<IStorybookListProps> {
    public render() {
        return (
            <InfiniteCarousel
                slidesToShow={1}
                slidesToScroll={1}
                slideWidth={"250px"}
                cellSpacing={17}
            >
                {this.renderThumbnailList()}
            </InfiniteCarousel>
        );
    }

    public renderThumbnailList() {
        return mockStorybookList.map((book: StorybookProps) => {
            return (
                <StorybookThumbnail
                    key={book.storybookID}
                    storybookID={book.storybookID}
                    onClick={() => this.props.onClickStorybook(book.storybookID)}
                    previews={book.previews}
                />
            );
        });
    }
}

export default StorybookList;
