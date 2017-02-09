import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {selectMovie, showPlayer} from '../actions';
import {IMovie} from '../interfaces/movie';
import {IState} from '../interfaces/state';

import {GridList} from 'material-ui/GridList';
import Movie from '../components/Movie/Movie';

interface MoviesProps {
    movies: IMovie[]
    dispatch: Dispatch<{}>
}

class Movies extends React.Component<MoviesProps, {}> {
    selectMovie(url: string) {
        this.props.dispatch(selectMovie(url));
        this.props.dispatch(showPlayer());
    }

    render() {
        const movies = this.props.movies.map((movie) => {
            return (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    url={movie.url}
                    poster={movie.poster}
                    onSelect={this.selectMovie.bind(this)}
                />
            );
        });

        return (
            <GridList>{movies}</GridList>
        );
    }
}

const mapStateToProps = (state: IState) => ({
    movies: state.movie.items
});

export default connect(mapStateToProps)(Movies);
