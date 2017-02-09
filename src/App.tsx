import * as React from 'react';
import {connect} from 'react-redux';
import Movies from './containers/Movies';
import Player from './containers/Player';
import {IState} from './interfaces/state';

interface AppProps {
    showPlayer: boolean;
}

class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <div className="app">
                {this.props.showPlayer ? <Player /> : <Movies />}
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => ({
    showPlayer: state.movie.showPlayer
});

export default connect(mapStateToProps)(App);
