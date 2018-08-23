import * as React from "react";
import { PageProps } from "scenes/Home/data/storybook";

interface IPageProps {
    page: PageProps;
}

const Page: React.SFC<IPageProps> = ({ page }) => {
    return (
        <div>
            <img src={page.url} />
        </div>
    );
};

export default Page;
