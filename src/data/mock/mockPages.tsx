import { List } from "immutable";
import { PageProps } from "../../scenes/Home/data/storybook";

let pageList = List<PageProps>();

pageList = pageList.push(
    new PageProps({
        id: 1,
        url: "http://localhost:8080/storybook/storybook01.jpg"
    })
);

pageList = pageList.push(
    new PageProps({
        id: 2,
        url: "http://localhost:8080/storybook/storybook02.jpg"
    })
);

pageList = pageList.push(
    new PageProps({
        id: 3,
        url: "http://localhost:8080/storybook/storybook03.jpg"
    })
);

pageList = pageList.push(
    new PageProps({
        id: 4,
        url: "http://localhost:8080/storybook/storybook04.jpg"
    })
);

pageList = pageList.push(
    new PageProps({
        id: 5,
        url: "http://localhost:8080/storybook/storybook05.jpg"
    })
);

export default pageList;
