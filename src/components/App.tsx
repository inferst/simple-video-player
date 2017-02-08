import * as React from 'react';
import {connect} from 'react-redux';
import Movies from './Movies';
import Player from './Player';

interface AppProps {
    showDialog: boolean;
}

class App extends React.Component<AppProps, {}> {
    render() {
        let component = null;

        if (this.props.showDialog) {
            component = <Player />;
        } else {
            component = <Movies />;
        }

        return (
            <div className="app">
                {component}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    showDialog: state.player.show
});

export default connect(mapStateToProps)(App);