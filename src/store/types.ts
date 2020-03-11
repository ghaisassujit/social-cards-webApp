export interface Story {
    title: string;
    content: string;
    author: string;
    createdDate?: string;
}

export enum Progress {
    Loading,
    Loaded,
    Error
}

export interface ErrorDetail {
    code?: string;
    message: string;
}

export interface StoreType<T> {
    progress?: Progress
    data: T;
    error?: ErrorDetail
}

export interface StoryStore {
    list: StoreType<Story[]>;
    newStory: StoreType<Story>;
}

export const initialState: StoryStore = {
    list: {
        data: [
            {
                createdDate: 'Wed Feb 19 2020',
                content: 'Sample Story 1 Sample Story 1 Sample Story 1 Sample Story 1 Sample Story 1 Sample Story 1 Sample Story 1',
                title: 'Sample Title 1',
                author: 'Sample Author 1'
            },
            {
                createdDate: 'Thr Feb 20 2020',
                content: 'Sample Story 2 Sample Story 2 Sample Story 2 Sample Story 2 Sample Story 2 Sample Story 2 Sample Story 2 Sample Story 2 Sample Story 2',
                title: 'Sample Title 2',
                author: 'Sample Author 2'
            }
        ]
    },
    newStory: { data: {createdDate: '', content: '', title: '', author: ''}}
};
