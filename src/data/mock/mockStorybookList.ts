import {
    PageProps,
    SrcProps,
    StorybookProps,
    StorybookThumbnailProps
} from "scenes/Home/data/storybook/index";
import { List } from "immutable";

let storybookList = List<StorybookProps>();

storybookList = storybookList.push(
    new StorybookProps({
        storybookID: 40001,
        previews: List<StorybookThumbnailProps>([
            new StorybookThumbnailProps({
                id: 1,
                srcSet: List<SrcProps>([
                    new SrcProps({
                        id: 1,
                        url: "https://dummyimage.com/240x240/000/fff.png"
                    })
                ]),
                placeholder: ""
            })
        ]),
        pages: List<PageProps>([
            new PageProps({
                id: 1,
                url: "https://dummyimage.com/240x240/000/fff.png"
            })
        ]),
        title: "title01",
        creator: "creator01",
        contact: "contact01",
        synopsis: "synopsis01",
        created: "created01",
        updated: "updated01",
        stars: 0
    })
);

storybookList = storybookList.push(
    new StorybookProps({
        storybookID: 40002,
        previews: List<StorybookThumbnailProps>([
            new StorybookThumbnailProps({
                id: 2,
                srcSet: List<SrcProps>([
                    new SrcProps({
                        id: 2,
                        url: "https://dummyimage.com/240x240/000/fff.png"
                    })
                ]),
                placeholder: ""
            })
        ]),
        pages: List<PageProps>([
            new PageProps({
                id: 2,
                url: "https://dummyimage.com/240x240/000/fff.png"
            })
        ]),
        title: "title02",
        creator: "creator02",
        contact: "contact02",
        synopsis: "synopsis02",
        created: "created02",
        updated: "updated02",
        stars: 0
    })
);

storybookList = storybookList.push(
    new StorybookProps({
        storybookID: 40003,
        previews: List<StorybookThumbnailProps>([
            new StorybookThumbnailProps({
                id: 3,
                srcSet: List<SrcProps>([
                    new SrcProps({
                        id: 3,
                        url: "https://dummyimage.com/240x240/000/fff.png"
                    })
                ]),
                placeholder: ""
            })
        ]),
        pages: List<PageProps>([
            new PageProps({
                id: 3,
                url: "https://dummyimage.com/240x240/000/fff.png"
            })
        ]),
        title: "title03",
        creator: "creator03",
        contact: "contact03",
        synopsis: "synopsis03",
        created: "created03",
        updated: "updated03",
        stars: 0
    })
);

storybookList = storybookList.push(
    new StorybookProps({
        storybookID: 40004,
        previews: List<StorybookThumbnailProps>([
            new StorybookThumbnailProps({
                id: 4,
                srcSet: List<SrcProps>([
                    new SrcProps({
                        id: 4,
                        url: "https://dummyimage.com/240x240/000/fff.png"
                    })
                ]),
                placeholder: ""
            })
        ]),
        pages: List<PageProps>([
            new PageProps({
                id: 4,
                url: "https://dummyimage.com/240x240/000/fff.png"
            })
        ]),
        title: "title04",
        creator: "creator04",
        contact: "contact04",
        synopsis: "synopsis04",
        created: "created04",
        updated: "updated04",
        stars: 0
    })
);

storybookList = storybookList.push(
    new StorybookProps({
        storybookID: 40005,
        previews: List<StorybookThumbnailProps>([
            new StorybookThumbnailProps({
                id: 5,
                srcSet: List<SrcProps>([
                    new SrcProps({
                        id: 5,
                        url: "https://dummyimage.com/240x240/000/fff.png"
                    })
                ]),
                placeholder: ""
            })
        ]),
        pages: List<PageProps>([
            new PageProps({
                id: 5,
                url: "https://dummyimage.com/240x240/000/fff.png"
            })
        ]),
        title: "title05",
        creator: "creator05",
        contact: "contact05",
        synopsis: "synopsis05",
        created: "created05",
        updated: "updated05",
        stars: 0
    })
);

storybookList = storybookList.push(
    new StorybookProps({
        storybookID: 40006,
        previews: List<StorybookThumbnailProps>([
            new StorybookThumbnailProps({
                id: 6,
                srcSet: List<SrcProps>([
                    new SrcProps({
                        id: 6,
                        url: "https://dummyimage.com/240x240/000/fff.png"
                    })
                ]),
                placeholder: ""
            })
        ]),
        pages: List<PageProps>([
            new PageProps({
                id: 6,
                url: "https://dummyimage.com/240x240/000/fff.png"
            })
        ]),
        title: "title06",
        creator: "creator06",
        contact: "contact06",
        synopsis: "synopsis06",
        created: "created06",
        updated: "updated06",
        stars: 0
    })
);

storybookList = storybookList.push(
    new StorybookProps({
        storybookID: 40007,
        previews: List<StorybookThumbnailProps>([
            new StorybookThumbnailProps({
                id: 7,
                srcSet: List<SrcProps>([
                    new SrcProps({
                        id: 7,
                        url: "https://dummyimage.com/240x240/000/fff.png"
                    })
                ]),
                placeholder: ""
            })
        ]),
        pages: List<PageProps>([
            new PageProps({
                id: 7,
                url: "https://dummyimage.com/240x240/000/fff.png"
            })
        ]),
        title: "title07",
        creator: "creator07",
        contact: "contact07",
        synopsis: "synopsis07",
        created: "created07",
        updated: "updated07",
        stars: 0
    })
);

storybookList = storybookList.push(
    new StorybookProps({
        storybookID: 40008,
        previews: List<StorybookThumbnailProps>([
            new StorybookThumbnailProps({
                id: 8,
                srcSet: List<SrcProps>([
                    new SrcProps({
                        id: 8,
                        url: "https://dummyimage.com/240x240/000/fff.png"
                    })
                ]),
                placeholder: ""
            })
        ]),
        pages: List<PageProps>([
            new PageProps({
                id: 8,
                url: "https://dummyimage.com/240x240/000/fff.png"
            })
        ]),
        title: "title08",
        creator: "creator08",
        contact: "contact08",
        synopsis: "synopsis08",
        created: "created08",
        updated: "updated08",
        stars: 0
    })
);

storybookList = storybookList.push(
    new StorybookProps({
        storybookID: 40009,
        previews: List<StorybookThumbnailProps>([
            new StorybookThumbnailProps({
                id: 9,
                srcSet: List<SrcProps>([
                    new SrcProps({
                        id: 9,
                        url: "https://dummyimage.com/240x240/000/fff.png"
                    })
                ]),
                placeholder: ""
            })
        ]),
        pages: List<PageProps>([
            new PageProps({
                id: 9,
                url: "https://dummyimage.com/240x240/000/fff.png"
            })
        ]),
        title: "title09",
        creator: "creator09",
        contact: "contact09",
        synopsis: "synopsis09",
        created: "created09",
        updated: "updated09",
        stars: 0
    })
);

storybookList = storybookList.push(
    new StorybookProps({
        storybookID: 40010,
        previews: List<StorybookThumbnailProps>([
            new StorybookThumbnailProps({
                id: 10,
                srcSet: List<SrcProps>([
                    new SrcProps({
                        id: 10,
                        url: "https://dummyimage.com/240x240/000/fff.png"
                    })
                ]),
                placeholder: ""
            })
        ]),
        pages: List<PageProps>([
            new PageProps({
                id: 10,
                url: "https://dummyimage.com/240x240/000/fff.png"
            })
        ]),
        title: "title10",
        creator: "creator10",
        contact: "contact10",
        synopsis: "synopsis10",
        created: "created10",
        updated: "updated10",
        stars: 0
    })
);

export default storybookList.toJS();
