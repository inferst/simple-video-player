import * as React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

interface PlayerProps {
    load: boolean;
}

const styles = {
    top: '50%',
    left: '50%',
    position: 'absolute'
};

class Player extends React.Component<PlayerProps, {}> {
    render() {
        return this.props.load ? <CircularProgress style={styles} /> : null;
    }
}

export default Player;
