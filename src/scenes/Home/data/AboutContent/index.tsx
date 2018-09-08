import { Record } from "immutable";

export type ID = number;

const AboutContentRecord = Record({
  contentID: "",
  contentImage: "",
  contentTitle: "",
  contentDescription: ""
});

interface IAboutContentParams {
  contentID: ID;
  contentImage: string,
  contentTitle: string,
  contentDescription: string
}

export class AboutContentProps extends AboutContentRecord {
    public contentID: ID;
    public contentImage: string;
    public contentTitle: string;
    public contentDescription: string;

    constructor(params: IAboutContentParams) {
        super({ ...params });
    }
}
