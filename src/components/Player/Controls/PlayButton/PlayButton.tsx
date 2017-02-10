import * as React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

interface PlayPauseButtonProps {
    played: boolean;
    onClick(played: boolean): void;
}

class PlayButton extends React.Component<PlayPauseButtonProps, {}> {
    render() {
        let icon = <i className="material-icons">play_arrow</i>;

        if (this.props.played) {
            icon = <i className="material-icons">pause</i>;
        }

        return (
            <FloatingActionButton mini={true} onClick={this.props.onClick.bind(this, !this.props.played)}>
                {icon}
            </FloatingActionButton>
        );
    }
}

export default PlayButton;