import { requests, URL, Results, STATUS_OK, Response } from "./index";
import { Record, List } from "immutable";
import { ID, StorybookProps } from "scenes/Home/data/storybook";
import { Error } from "data/error";
import { SrcProps } from "../../scenes/Home/data/storybook";

interface ISrcParams {
    id: ID;
    url: string;
}
const SrcRecord = Record({
    id: 0,
    url: ""
});
export class SrcEntity extends SrcRecord {
    public id: ID;
    public url: string;

    constructor(params: ISrcParams) {
        super({ ...params });
    }
}

interface IPageEntityParams {
    id: ID;
    url: string;
}
const PageEntityRecord = Record({
    id: 0,
    url: ""
});
export class PageEntity extends PageEntityRecord {
    public id: ID;
    public url: string;
    constructor(params: IPageEntityParams) {
        super({ ...params });
    }
}

const StorybookThumbnailEntityRecord = Record({
    id: 0,
    srcSet: List(),
    placeholder: ""
});

interface IStorybookThumbnailEntityParams {
    id: ID;
    srcSet: List<SrcProps>;
    placeholder?: string;
}

export class StorybookThumbnailEntity extends StorybookThumbnailEntityRecord {
    public id: ID;
    public srcSet: List<SrcProps>;
    public placeholder?: string;
    constructor(params: IStorybookThumbnailEntityParams) {
        super({ ...params });
    }
}

interface IStorybookParams {
    id: ID;
    thumbnails: List<SrcEntity>;
    pages: List<PageEntity>;
    title: string;
    creator: string;
    contact: string;
    synopsis: string;
    created: string;
    updated: string;
    stars: number;
}
const StorybookEntityRecord = Record({
    id: "",
    thumbnails: List<SrcEntity>(),
    pages: List<PageEntity>(),
    title: "",
    creator: "",
    contact: "",
    synopsis: "",
    created: "",
    updated: "",
    stars: 0
});
class StorybookEntity extends StorybookEntityRecord {
    public id: ID;
    public thumbnails: List<StorybookThumbnailEntity>;
    public pages: List<PageEntity>;
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

class StorybookApi {
    public async getAll(): Promise<Results<List<StorybookProps>, any>> {
        const response = await requests.get<List<StorybookEntity>, any>(URL, "/storybooks");

        if (response.status !== STATUS_OK) {
            return new Results<List<StorybookProps>, any>({
                error: new Error("getAll status is not ok")
            });
        }

        const storybookPropsList = convertToStorybookPropsList(response.get("data"));

        return new Results<List<StorybookProps>, any>({
            data: new Response<List<StorybookProps>, any>({
                data: storybookPropsList
            })
        });
    }

    public async getByID(storybookID: ID): Promise<Results<StorybookEntity, any>> {
        const response = await requests.get<StorybookEntity, any>(URL, "/storybook", {
            params: { id: storybookID }
        });

        if (response.status !== STATUS_OK) {
            return new Results<StorybookEntity, any>({
                data: response,
                error: new Error("getByID status is not ok")
            });
        }

        return new Results<StorybookEntity, any>({
            data: response
        });
    }
}

// TODO: change each thumbnails, pages to Record
const convertToStorybookPropsList = (entities: List<StorybookEntity>): List<StorybookProps> => {
    const storybookPropsList = entities.map((entity: StorybookEntity) => {
        return new StorybookProps({
            storybookID: entity.id,
            previews: entity.thumbnails,
            pages: entity.pages,
            title: entity.title,
            creator: entity.creator,
            contact: entity.contact,
            synopsis: entity.synopsis,
            created: entity.created,
            updated: entity.updated,
            stars: entity.stars
        });
    });

    return List<StorybookProps>(storybookPropsList);
};

export default new StorybookApi();
