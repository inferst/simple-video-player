import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';

interface PlayPauseButtonProps {
    played: boolean;
    onClick(played: boolean): void;
}

class PlayButton extends React.Component<PlayPauseButtonProps, {}> {
    render() {
        let icon = <i className="material-icons">play_circle_filled</i>;

        if (this.props.played) {
            icon = <i className="material-icons">pause_circle_filled</i>;
        }

        return (
            <FlatButton
                onClick={this.props.onClick.bind(this, !this.props.played)}
                icon={icon}
            />
        );
    }
}

export default PlayButton;