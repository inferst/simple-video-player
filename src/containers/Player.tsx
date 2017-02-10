import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {IState} from '../interfaces/state';
import {hidePlayer} from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import Player from '../components/Player/Player';

interface PlayerProps {
    dispatch: Dispatch<{}>;
    url: string;
}

class PlayerContainer extends React.Component<PlayerProps, {}> {
    render() {
        return (
            <div>
                <Player url={this.props.url} />
                <RaisedButton
                    primary={true}
                    onClick={() => this.props.dispatch(hidePlayer())}
                    label="Back to movies"
                />
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        url: state.movie.selected.url
    }
};

export default connect(mapStateToProps)(PlayerContainer);
