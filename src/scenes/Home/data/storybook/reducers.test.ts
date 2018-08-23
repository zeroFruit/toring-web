import storybookReducers, { ErrStorybookNotFound, findByID } from "./reducers";
import { PageProps, StorybookProps, StorybooksState, StorybookThumbnailProps } from "./index";
import { Action } from "redux-actions";
import { actionCreators } from "./actions";
import { List } from "immutable";

describe("storybook", () => {
    describe("reducers", () => {
        let state: any;

        beforeEach(() => {
            state = storybookReducers(new StorybooksState(), {} as Action<any>);
        });

        describe("findByID", () => {
            it("should successfully find storybook", () => {
                const books1 = List<StorybookProps>([
                    new StorybookProps({
                        storybookID: 1,
                        previews: List<StorybookThumbnailProps>(),
                        pages: List<PageProps>(),
                        title: "title1",
                        creator: "creator1",
                        contact: "contact1",
                        synopsis: "synopsis1",
                        created: "created1",
                        updated: "updated1",
                        stars: 1
                    })
                ]);
                let storybooksState = new StorybooksState();
                storybooksState = storybooksState.withMutations(s => {
                    s.set("storybooks", books1);
                }) as StorybooksState;

                const storybook = findByID(storybooksState.get("storybooks"), 1);

                expect(storybook.get("storybookID")).toEqual(1);
                expect(storybook.get("title")).toEqual("title1");
            });
        });

        describe("initialState", () => {
            it("should be the length of books with zero", () => {
                expect(state.get("storybooks").size).toEqual(0);
            });
        });

        describe("FETCH_STORYBOOK_STARTED", () => {
            it("should be same as old state", () => {
                state = storybookReducers(state, actionCreators.fetchStart());

                expect(state.get("storybooks").size).toEqual(0);
            });
        });

        describe("FETCH_STORYBOOK_COMPLETED", () => {
            it("should add book to list", () => {
                // given
                const books1 = List<StorybookProps>([
                    new StorybookProps({
                        storybookID: 1,
                        previews: List<StorybookThumbnailProps>(),
                        pages: List<PageProps>(),
                        title: "title1",
                        creator: "creator1",
                        contact: "contact1",
                        synopsis: "synopsis1",
                        created: "created1",
                        updated: "updated1",
                        stars: 1
                    })
                ]);
                let storybooksState = new StorybooksState();
                storybooksState = storybooksState.withMutations(s => {
                    s.set("storybooks", books1);
                }) as StorybooksState;
                // when
                state = storybookReducers(state, actionCreators.fetchComplete(books1));
                // then
                expect(state.get("storybooks").size).toEqual(1);
                expect(state.get("storybooks").get(0).storybookID).toEqual(1);

                // given
                const books2 = List<StorybookProps>([
                    new StorybookProps({
                        storybookID: 2,
                        previews: List<StorybookThumbnailProps>(),
                        pages: List<PageProps>(),
                        title: "title2",
                        creator: "creator2",
                        contact: "contact2",
                        synopsis: "synopsis2",
                        created: "created2",
                        updated: "updated2",
                        stars: 2
                    })
                ]);
                // given
                storybooksState = storybooksState.withMutations(s => {
                    s.set("storybooks", books2);
                }) as StorybooksState;
                // when
                state = storybookReducers(state, actionCreators.fetchComplete(books2));
                // then
                expect(state.get("storybooks").size).toEqual(1);
                expect(state.get("storybooks").get(0).storybookID).toEqual(2);
            });
        });

        describe("SELECT_STORYBOOK", () => {
            it("should set book to selectedStorybook", () => {
                // given
                const books1 = List<StorybookProps>([
                    new StorybookProps({
                        storybookID: 1,
                        previews: List<StorybookThumbnailProps>(),
                        pages: List<PageProps>(),
                        title: "title1",
                        creator: "creator1",
                        contact: "contact1",
                        synopsis: "synopsis1",
                        created: "created1",
                        updated: "updated1",
                        stars: 1
                    })
                ]);
                let storybooksState = new StorybooksState();
                storybooksState = storybooksState.withMutations(s => {
                    s.set("storybooks", books1);
                }) as StorybooksState;
                // when
                state = storybookReducers(state, actionCreators.fetchComplete(books1));
                state = storybookReducers(state, actionCreators.select(1));
                // then
                expect(state.get("selectedStorybook").storybookID).toEqual(1);
            });

            it("should return err message", () => {
                // when
                state = storybookReducers(state, actionCreators.select(1));

                // then
                expect(state.get("error")).toEqual(ErrStorybookNotFound);
            });
        });

        describe("READ_STORYBOOK", () => {
            it("should set book to readStorybook", () => {
                // given
                const books1 = List<StorybookProps>([
                    new StorybookProps({
                        storybookID: 1,
                        previews: List<StorybookThumbnailProps>(),
                        pages: List<PageProps>(),
                        title: "title1",
                        creator: "creator1",
                        contact: "contact1",
                        synopsis: "synopsis1",
                        created: "created1",
                        updated: "updated1",
                        stars: 1
                    })
                ]);
                let storybooksState = new StorybooksState();
                storybooksState = storybooksState.withMutations(s => {
                    s.set("storybooks", books1);
                }) as StorybooksState;
                // when
                state = storybookReducers(state, actionCreators.fetchComplete(books1));
                state = storybookReducers(state, actionCreators.read(1));
                // then
                expect(state.get("readStorybook").storybookID).toEqual(1);
            });

            it("should set error message when not found storybook", () => {
                // when
                state = storybookReducers(state, actionCreators.read(1));

                // then
                expect(state.get("error")).toEqual(ErrStorybookNotFound);
            });
        });
    });
});
