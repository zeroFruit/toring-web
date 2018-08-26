import * as React from "react";
import styled from "services/styled-components";

interface IServiceInfoContainerProps {
    height: number;
    horizontalPadding: number;
    backgroundColor: string;
}

const ServiceInfoContainer = styled<
    IServiceInfoContainerProps,
    "div" & React.HTMLProps<HTMLInputElement>
>("div")`
    display: flex;
    flex: 1;
    align-items: center;
    padding: 0 ${props => props.horizontalPadding}rem;
    height: ${props => props.height}rem;
    background-color: ${props => props.backgroundColor};
`;

interface ISocialIconWrapperProps {
    marginRight: number;
}

const SocialIconWrapper = styled<ISocialIconWrapperProps, "a" & React.HTMLProps<HTMLInputElement>>(
    "a"
)`
    margin-right: ${props => props.marginRight}rem;
    text-decoration: none;
    cursor: pointer;
    color: black;
`;

const Icon = styled<{}, "img" & React.HTMLProps<HTMLImageElement>>("img")`
    width: 1.5rem;
    height: 1.5rem;
`;

class ServiceInfo extends React.PureComponent {
    public render() {
        return (
            <ServiceInfoContainer horizontalPadding={3} height={5.22} backgroundColor={"#f1f1f1"}>
                <SocialIconWrapper marginRight={0.5} href={"https://www.facebook.com/toring.kr"}>
                    <Icon src={require("./data/images/facebook-icon.svg")} />
                </SocialIconWrapper>

                <SocialIconWrapper marginRight={0.5} to={"https://www.instagram.com/toring.kr"}>
                    <Icon src={require("./data/images/instagram-icon.svg")} />
                </SocialIconWrapper>
            </ServiceInfoContainer>
        );
    }
}

export default ServiceInfo;
