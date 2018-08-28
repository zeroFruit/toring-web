import * as React from "react";
import styled from "services/styled-components";
import { List } from "immutable";

const StarRatings = require("react-star-rating-component");

interface IWrapper {
    width: string;
    height: string;
}
const Wrapper = styled<IWrapper, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    width: ${props => props.width};
    height: ${props => props.height};
`;

const Title = styled<{}, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    flex: 1;
    display: flex;
    height: 3.5rem;
    background-color: #399df7;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    justify-content: center;
    align-items: center;
`;

const Body = styled<{}, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;

const RateMessage = styled<{}, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    font-size: 1rem;
    margin-top: 0.5rem;
`;

interface IRatePageState {
    rating: any;
}

const rateMessageList = List([
    "",
    "많이 별로였어요.",
    "좀 별로였어요",
    "그럭저럭..",
    "괜찮았어요",
    "엄청 좋았어요!"
]);

interface IRatePageProps {
    onRate(rating: number): void;
}

class RatePage extends React.PureComponent<IRatePageProps, IRatePageState> {
    public state: IRatePageState = {
        rating: 0
    };
    public render() {
        const { rating } = this.state;
        return (
            <Wrapper width={"22.4rem"} height={"9.5rem"}>
                <Title>이 책 어땠나요?</Title>
                <Body>
                    <StarRatings
                        value={rating}
                        starColor={"#399df7"}
                        emptyStarColor={"#d3d3d3"}
                        name={"star-rating"}
                        onStarHover={(next: number) => this.onIconHoverIn(next)}
                        onStarHoverOut={() => {
                            this.onIconHoverOut();
                        }}
                        onStarClick={(rates: number) => this.props.onRate(rates)}
                    />
                    <RateMessage>{rateMessageList.get(rating)}</RateMessage>
                </Body>
            </Wrapper>
        );
    }

    protected onIconHoverIn(next: number): void {
        this.setState(s => ({ ...s, rating: next }));
    }

    protected onIconHoverOut(): void {
        this.setState(s => ({ ...s, rating: 0 }));
    }
}

export default RatePage;
