export interface IMovie {
    id: number;
    title: string;
    poster: string;
    url: string
}

export interface ISelectedMovie {
    title: string;
    url: string;
}

export interface IState {
    items: IMovie[];
    selected: ISelectedMovie;
    showPlayer: boolean;
}
