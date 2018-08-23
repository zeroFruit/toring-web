import { Record, List } from "immutable";
import { Error } from "data/error";

export type ID = number;

const SrcRecord = Record({
    id: 0,
    url: ""
});
interface ISrcParams {
    id: ID;
    url: string;
}
export class SrcProps extends SrcRecord {
    public id: ID;
    public url: string;

    constructor(params: ISrcParams) {
        super({ ...params });
    }
}

const PageRecord = Record({
    id: 0,
    url: ""
});
interface IPageParams {
    id: ID;
    url: string;
}
export class PageProps extends PageRecord {
    public id: ID;
    public url: string;
    constructor(params: IPageParams) {
        super({ ...params });
    }
}

const StorybookThumbnailRecord = Record({
    id: 0,
    srcSet: List(),
    placeholder: ""
});

interface IStorybookThumbnailParams {
    id: ID;
    srcSet: List<SrcProps>;
    placeholder?: string;
}

export class StorybookThumbnailProps extends StorybookThumbnailRecord {
    public id: ID;
    public srcSet: List<SrcProps>;
    public placeholder?: string;
    constructor(params: IStorybookThumbnailParams) {
        super({ ...params });
    }
}

const StorybookRecord = Record({
    storybookID: "",
    previews: List(),
    pages: List(),
    title: "",
    creator: "",
    contact: "",
    synopsis: "",
    created: "",
    updated: "",
    stars: 0
});

interface IStorybookParams {
    storybookID: ID;
    previews: List<StorybookThumbnailProps>;
    pages: List<PageProps>;
    title: string;
    creator: string;
    contact: string;
    synopsis: string;
    created: string;
    updated: string;
    stars: number;
}

export class StorybookProps extends StorybookRecord {
    public storybookID: ID;
    public previews: List<StorybookThumbnailProps>;
    public pages: List<PageProps>;
    public title: string;
    public creator: string;
    public contact: string;
    public synopsis: string;
    public created: string;
    public updated: string;
    public stars: number;

    constructor(params: IStorybookParams) {
        super({ ...params });
    }
}

const StorybooksRecord = Record({
    storybooks: List(),
    selectedStorybook: new StorybookProps({
        storybookID: 0,
        previews: List<StorybookThumbnailProps>(),
        pages: List<PageProps>(),
        title: "",
        creator: "",
        contact: "",
        synopsis: "",
        created: "",
        updated: "",
        stars: 0
    }),
    readStorybook: new StorybookProps({
        storybookID: 0,
        previews: List<StorybookThumbnailProps>(),
        pages: List<PageProps>(),
        title: "",
        creator: "",
        contact: "",
        synopsis: "",
        created: "",
        updated: "",
        stars: 0
    }),
    error: null
});

interface IStorybooksParams {
    storybooks: List<StorybookProps>;
}

export class StorybooksState extends StorybooksRecord {
    public storybooks: List<StorybookProps>;
    public selectedStorybook?: StorybookProps;
    public readStorybook?: StorybookProps;
    public error?: Error;
    constructor(params?: IStorybooksParams) {
        super({ ...params });
    }
}
