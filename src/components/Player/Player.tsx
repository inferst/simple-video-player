import * as React from 'react';
import Slider from 'material-ui/Slider';

import Video from './Video/Video';
import PlayButton from './Controls/PlayButton/PlayButton';
import Preloader from './Controls/Preloader/Preloader';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import * as styles from './Player.css';

interface PlayerProps {
    url: string;
}

interface PlayerState {
    played: boolean;
    fullscreen: boolean;
    progress: number;
    loaded: boolean;
}

class Player extends React.Component<PlayerProps, PlayerState> {
    constructor(props: PlayerProps) {
        super(props);

        this.state = {
            played: true,
            fullscreen: false,
            progress: 0,
            loaded: false
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.moveSlider.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.moveSlider.bind(this));
    }

    moveSlider(e: KeyboardEvent) {
        let progress = this.state.progress;

        if (e.keyCode == 37) {
            progress = progress - 0.05;
        } else if (e.keyCode == 39) {
            progress = progress + 0.05;
        }

        if (progress < 0) {
            progress = 0
        }

        if (progress > 1) {
            progress = 1
        }

        this.setState({
            progress
        });

        this.video.seekTo(progress);
    }

    togglePlay(played: boolean) {
        this.setState({
            played
        });

        if (played) {
            this.video.play();
        } else {
            this.video.pause();
        }
    }

    changeProgress(event: MouseEvent, value: number) {
        this.video.seekTo(value);
    }

    setProgress(value: number) {
        this.setState({
            progress: value
        });
    }

    loaded() {
        this.setState({
            loaded: true
        });
    }

    fullscreen() {
        this.video.fullscreen();
    }

    video?: Video;

    render() {
        return (
            <div className={styles.player}>
                <Preloader load={!this.state.loaded} />
                <Video
                    url={this.props.url}
                    onTimeUpdate={this.setProgress.bind(this)}
                    onLoadedData={this.loaded.bind(this)}
                    ref={(video) => {this.video = video}}
                />
                <div className={styles.controls}>
                    <div className={styles.playButton}>
                        <PlayButton played={this.state.played} onClick={this.togglePlay.bind(this)} />
                    </div>
                    <div className={styles.progress}>
                        <div><Slider onChange={this.changeProgress.bind(this)} value={this.state.progress} /></div>
                    </div>
                    <div className={styles.fullscreenButton}>
                        <FloatingActionButton mini={true} onClick={this.fullscreen.bind(this)}>
                            <i className="material-icons">fullscreen</i>
                        </FloatingActionButton>
                    </div>
                </div>

            </div>
        );
    }
}

export default Player;
