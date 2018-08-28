import * as React from "react";
import styled from "services/styled-components";

type CarouselDirection = "next" | "prev";

interface ICarouselContainer {
    sliding: boolean;
}
const CarouselContainer = styled<ICarouselContainer, "div" & React.HTMLProps<HTMLDivElement>>(
    "div"
)`
    display: flex;
    margin: 0 0 20px 20px;
    transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
    transform: ${props => {
        if (!props.sliding) {
            return "translateX(calc(-80% - 20px))";
        }
        return "translateX(0%)";
    }};
`;

const Wrapper = styled<{}, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    width: 100%;
    overflow: hidden;
`;
interface ICarouselSlot {
    order: number;
}
const CarouselSlot = styled<ICarouselSlot, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    flex: 1 0 100%;
    flex-basis: 80%;
    margin-right: 20px;
    order: ${props => props.order};
`;

interface ICarouselState {
    position: number;
    sliding: boolean;
    direction: CarouselDirection;
}

class Carousel extends React.Component<{}, ICarouselState> {
    public state: ICarouselState = {
        position: 0,
        sliding: false,
        direction: "next"
    };

    public render() {
        const { children } = this.props;
        const { sliding } = this.state;
        console.log(sliding);
        return (
            <Wrapper>
                <CarouselContainer slidding={sliding}>
                    {(children as Array<React.ReactElement<any>>).map((child, index) => (
                        <CarouselSlot key={index} order={() => this.getOrder(index)}>
                            {child}
                        </CarouselSlot>
                    ))}
                </CarouselContainer>
                <button onClick={() => this.nextSlide()}>Next</button>
            </Wrapper>
        );
    }

    private getOrder(itemIndex: number): number {
        const { position } = this.state;
        const { children } = this.props;
        const numItems = (children as Array<React.ReactElement<any>>).length || 1;

        if (itemIndex - position < 0) {
            return numItems - Math.abs(itemIndex - position);
        }
        return itemIndex - position;
    }

    private nextSlide() {
        const { position } = this.state;
        const { children } = this.props;
        const numItems = (children as Array<React.ReactElement<any>>).length || 1;
        this.doSliding(position === numItems - 1 ? 0 : position + 1);
    }

    private doSliding(position: number) {
        this.setState({
            sliding: true,
            position
        });
        setTimeout(() => {
            this.setState({ sliding: false });
        }, 50);
    }
}
export default Carousel;
