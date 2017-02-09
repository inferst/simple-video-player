import {IState, ISelectedMovie} from '../interfaces/movie';

interface Action {
    type: string;
    selected: ISelectedMovie;
}

const initialState: IState = {
    items: [
        {
            id: 1,
            title: 'Movie 1',
            url: 'https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv',
            poster: 'http://camendesign.com/code/video_for_everybody/poster.jpg'
        },
        {
            id: 2,
            title: 'Movie 2',
            url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
            poster: 'http://camendesign.com/code/video_for_everybody/poster.jpg'
        },
        {
            id: 3,
            title: 'Movie 3',
            url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
            poster: 'http://camendesign.com/code/video_for_everybody/poster.jpg'
        },
        {
            id: 4,
            title: 'Movie 4',
            url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
            poster: 'http://camendesign.com/code/video_for_everybody/poster.jpg'
        },
        {
            id: 5,
            title: 'Movie 5',
            url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
            poster: 'http://camendesign.com/code/video_for_everybody/poster.jpg'
        },
        {
            id: 6,
            title: 'Movie 6',
            url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
            poster: 'http://camendesign.com/code/video_for_everybody/poster.jpg'
        }
    ],
    selected: {
        title: '',
        url: ''
    },
    showPlayer: false
};

const movie = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SELECT_MOVIE': {
            return {
                ...state,
                selected: action.selected
            };
        }

        case 'SHOW_PLAYER': {
            return {
                ...state,
                showPlayer: true
            };
        }

        case 'HIDE_PLAYER': {
            return {
                ...state,
                showPlayer: false
            };
        }

        default: {
            return state;
        }
    }
};

export default movie;
