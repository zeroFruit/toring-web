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
                        url: "http://toringapi.online/thumbnails/thumb01.jpg"
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
        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta odio vitae nisl tempus, sed luctus magna sollicitudin. Suspendisse laoreet neque mauris. Curabitur cursus arcu nec faucibus semper. Vivamus condimentum interdum turpis id pellentesque. Integer eget lorem sodales, accumsan erat sit amet, pulvinar nulla. Maecenas sodales metus eu augue placerat blandit. Sed nisl felis, elementum sed risus quis, dignissim aliquam tortor. Aliquam ullamcorper felis quis nunc ullamcorper lobortis sit amet eu sapien. Nullam commodo vulputate ex sit amet accumsan. Sed iaculis orci vel urna euismod, ac venenatis nisi finibus. Nullam a aliquam tellus, quis semper metus. Donec ut libero sollicitudin, malesuada quam ac, feugiat leo.",
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
                        url: "http://toringapi.online/thumbnails/thumb02.jpg"
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
        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta odio vitae nisl tempus, sed luctus magna sollicitudin. Suspendisse laoreet neque mauris. Curabitur cursus arcu nec faucibus semper. Vivamus condimentum interdum turpis id pellentesque. Integer eget lorem sodales, accumsan erat sit amet, pulvinar nulla. Maecenas sodales metus eu augue placerat blandit. Sed nisl felis, elementum sed risus quis, dignissim aliquam tortor. Aliquam ullamcorper felis quis nunc ullamcorper lobortis sit amet eu sapien. Nullam commodo vulputate ex sit amet accumsan. Sed iaculis orci vel urna euismod, ac venenatis nisi finibus. Nullam a aliquam tellus, quis semper metus. Donec ut libero sollicitudin, malesuada quam ac, feugiat leo.",
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
                        url: "http://toringapi.online/thumbnails/thumb03.jpg"
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
        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta odio vitae nisl tempus, sed luctus magna sollicitudin. Suspendisse laoreet neque mauris. Curabitur cursus arcu nec faucibus semper. Vivamus condimentum interdum turpis id pellentesque. Integer eget lorem sodales, accumsan erat sit amet, pulvinar nulla. Maecenas sodales metus eu augue placerat blandit. Sed nisl felis, elementum sed risus quis, dignissim aliquam tortor. Aliquam ullamcorper felis quis nunc ullamcorper lobortis sit amet eu sapien. Nullam commodo vulputate ex sit amet accumsan. Sed iaculis orci vel urna euismod, ac venenatis nisi finibus. Nullam a aliquam tellus, quis semper metus. Donec ut libero sollicitudin, malesuada quam ac, feugiat leo.",
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
                        url: "http://toringapi.online/thumbnails/thumb04.jpg"
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
        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta odio vitae nisl tempus, sed luctus magna sollicitudin. Suspendisse laoreet neque mauris. Curabitur cursus arcu nec faucibus semper. Vivamus condimentum interdum turpis id pellentesque. Integer eget lorem sodales, accumsan erat sit amet, pulvinar nulla. Maecenas sodales metus eu augue placerat blandit. Sed nisl felis, elementum sed risus quis, dignissim aliquam tortor. Aliquam ullamcorper felis quis nunc ullamcorper lobortis sit amet eu sapien. Nullam commodo vulputate ex sit amet accumsan. Sed iaculis orci vel urna euismod, ac venenatis nisi finibus. Nullam a aliquam tellus, quis semper metus. Donec ut libero sollicitudin, malesuada quam ac, feugiat leo.",
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
                        url: "http://toringapi.online/thumbnails/thumb05.jpg"
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
        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta odio vitae nisl tempus, sed luctus magna sollicitudin. Suspendisse laoreet neque mauris. Curabitur cursus arcu nec faucibus semper. Vivamus condimentum interdum turpis id pellentesque. Integer eget lorem sodales, accumsan erat sit amet, pulvinar nulla. Maecenas sodales metus eu augue placerat blandit. Sed nisl felis, elementum sed risus quis, dignissim aliquam tortor. Aliquam ullamcorper felis quis nunc ullamcorper lobortis sit amet eu sapien. Nullam commodo vulputate ex sit amet accumsan. Sed iaculis orci vel urna euismod, ac venenatis nisi finibus. Nullam a aliquam tellus, quis semper metus. Donec ut libero sollicitudin, malesuada quam ac, feugiat leo.",
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
                        url: "http://toringapi.online/thumbnails/thumb06.jpg"
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
        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta odio vitae nisl tempus, sed luctus magna sollicitudin. Suspendisse laoreet neque mauris. Curabitur cursus arcu nec faucibus semper. Vivamus condimentum interdum turpis id pellentesque. Integer eget lorem sodales, accumsan erat sit amet, pulvinar nulla. Maecenas sodales metus eu augue placerat blandit. Sed nisl felis, elementum sed risus quis, dignissim aliquam tortor. Aliquam ullamcorper felis quis nunc ullamcorper lobortis sit amet eu sapien. Nullam commodo vulputate ex sit amet accumsan. Sed iaculis orci vel urna euismod, ac venenatis nisi finibus. Nullam a aliquam tellus, quis semper metus. Donec ut libero sollicitudin, malesuada quam ac, feugiat leo.",
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
                        url: "http://toringapi.online/thumbnails/thumb07.jpg"
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
        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta odio vitae nisl tempus, sed luctus magna sollicitudin. Suspendisse laoreet neque mauris. Curabitur cursus arcu nec faucibus semper. Vivamus condimentum interdum turpis id pellentesque. Integer eget lorem sodales, accumsan erat sit amet, pulvinar nulla. Maecenas sodales metus eu augue placerat blandit. Sed nisl felis, elementum sed risus quis, dignissim aliquam tortor. Aliquam ullamcorper felis quis nunc ullamcorper lobortis sit amet eu sapien. Nullam commodo vulputate ex sit amet accumsan. Sed iaculis orci vel urna euismod, ac venenatis nisi finibus. Nullam a aliquam tellus, quis semper metus. Donec ut libero sollicitudin, malesuada quam ac, feugiat leo.",
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
                        url: "http://toringapi.online/thumbnails/thumb08.jpg"
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
        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta odio vitae nisl tempus, sed luctus magna sollicitudin. Suspendisse laoreet neque mauris. Curabitur cursus arcu nec faucibus semper. Vivamus condimentum interdum turpis id pellentesque. Integer eget lorem sodales, accumsan erat sit amet, pulvinar nulla. Maecenas sodales metus eu augue placerat blandit. Sed nisl felis, elementum sed risus quis, dignissim aliquam tortor. Aliquam ullamcorper felis quis nunc ullamcorper lobortis sit amet eu sapien. Nullam commodo vulputate ex sit amet accumsan. Sed iaculis orci vel urna euismod, ac venenatis nisi finibus. Nullam a aliquam tellus, quis semper metus. Donec ut libero sollicitudin, malesuada quam ac, feugiat leo.",
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
                        url: "http://toringapi.online/thumbnails/thumb09.jpg"
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
        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta odio vitae nisl tempus, sed luctus magna sollicitudin. Suspendisse laoreet neque mauris. Curabitur cursus arcu nec faucibus semper. Vivamus condimentum interdum turpis id pellentesque. Integer eget lorem sodales, accumsan erat sit amet, pulvinar nulla. Maecenas sodales metus eu augue placerat blandit. Sed nisl felis, elementum sed risus quis, dignissim aliquam tortor. Aliquam ullamcorper felis quis nunc ullamcorper lobortis sit amet eu sapien. Nullam commodo vulputate ex sit amet accumsan. Sed iaculis orci vel urna euismod, ac venenatis nisi finibus. Nullam a aliquam tellus, quis semper metus. Donec ut libero sollicitudin, malesuada quam ac, feugiat leo.",
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
                        url: "http://toringapi.online/thumbnails/thumb10.jpg"
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
        synopsis:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta odio vitae nisl tempus, sed luctus magna sollicitudin. Suspendisse laoreet neque mauris. Curabitur cursus arcu nec faucibus semper. Vivamus condimentum interdum turpis id pellentesque. Integer eget lorem sodales, accumsan erat sit amet, pulvinar nulla. Maecenas sodales metus eu augue placerat blandit. Sed nisl felis, elementum sed risus quis, dignissim aliquam tortor. Aliquam ullamcorper felis quis nunc ullamcorper lobortis sit amet eu sapien. Nullam commodo vulputate ex sit amet accumsan. Sed iaculis orci vel urna euismod, ac venenatis nisi finibus. Nullam a aliquam tellus, quis semper metus. Donec ut libero sollicitudin, malesuada quam ac, feugiat leo.",
        created: "created10",
        updated: "updated10",
        stars: 0
    })
);

export default storybookList;
