import * as React from 'react';
import {GridTile} from 'material-ui/GridList';
import * as styles from './Movie.css';

interface MovieProps {
    title: string;
    poster: string;
    url: string;
    onSelect(): void;
}

class Movie extends React.Component<MovieProps, {}> {
    render() {
        return (
            <GridTile title={this.props.title}>
                <img
                    className={styles.movie}
                    src={this.props.poster}
                    onClick={this.props.onSelect.bind(this, this.props.url, this.props.title)}
                />
            </GridTile>
        );
    }
}

export default Movie;
