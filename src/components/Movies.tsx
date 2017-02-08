import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {selectMovie} from '../actions';
import './Movies.css';

import {GridList, GridTile} from 'material-ui/GridList';

interface Movie {
    id: number;
    title: string;
    url: string;
    poster?: string;
}

interface MoviesProps {
    movies: Movie[]
    dispatch: Dispatch<{}>
}

class Movies extends React.Component<MoviesProps, {}> {
    handleClickMovie(id: number) {
        this.props.dispatch(selectMovie(id));
    }

    render() {
        const movies = this.props.movies.map((movie) => {
            return (
                <GridTile
                    key={movie.id}
                    title={movie.title}
                >
                    <img
                        className="movie"
                        src={movie.poster}
                        onClick={this.handleClickMovie.bind(this, movie.id)}
                    />
                </GridTile>
            );
        });

        return (
            <GridList>{movies}</GridList>
        );
    }
}

const mapStateToProps = (state: any) => ({
    movies: state.player.movies
});

export default connect(mapStateToProps)(Movies);
