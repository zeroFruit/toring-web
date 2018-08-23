import { List } from "immutable";
import { PageProps } from "../../scenes/Home/data/storybook";

let pageList = List<PageProps>();

pageList = pageList.push(
    new PageProps({
        id: 1,
        url: "https://placeimg.com/960/540/animals"
    })
);

pageList = pageList.push(
    new PageProps({
        id: 2,
        url: "https://placeimg.com/960/540/tech"
    })
);

pageList = pageList.push(
    new PageProps({
        id: 3,
        url: "https://placeimg.com/960/540/nature"
    })
);

pageList = pageList.push(
    new PageProps({
        id: 4,
        url: "https://placeimg.com/960/540/arch"
    })
);

pageList = pageList.push(
    new PageProps({
        id: 5,
        url: "https://placeimg.com/960/540/people"
    })
);

export default pageList;
