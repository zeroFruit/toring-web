import * as React from "react";
import { PageProps } from "scenes/Home/data/storybook";
import styled from "services/styled-components";

const Wrapper = styled<{}, "div" & React.HTMLProps<HTMLDivElement>>("div")`
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface IPageProps {
    page: PageProps;
}

const Page: React.SFC<IPageProps> = ({ page }) => {
    return (
        <Wrapper>
            <img src={page.url} />
        </Wrapper>
    );
};

export default Page;
