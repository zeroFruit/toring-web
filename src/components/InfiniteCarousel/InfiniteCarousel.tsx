import * as React from "react";
import Carousel from "nuka-carousel";

interface IInfiniteCarouselProps {
    slidesToShow: number;
    slidesToScroll: number;
    slideWidth: string;
    cellSpacing: number;
}

class InfiniteCarousel extends React.PureComponent<IInfiniteCarouselProps> {
    public render() {
        const { slidesToShow, slidesToScroll, slideWidth, cellSpacing } = this.props;
        return (
            <Carousel
                cellAlign={"center"}
                slidesToShow={slidesToShow}
                slidesToScroll={slidesToScroll}
                swiping={true}
                wrapAround={true}
                slideWidth={slideWidth}
                cellSpacing={cellSpacing}
                renderCenterRightControls={() => <div />}
                renderCenterLeftControls={() => <div />}
                renderCenterCenterControls={() => <div />}
                renderBottomCenterControls={() => <div />}
            >
                {this.props.children}
            </Carousel>
        );
    }
}

export default InfiniteCarousel;
