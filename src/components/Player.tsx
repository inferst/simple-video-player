import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {hidePlayer} from '../actions';
import FlatButton from 'material-ui/FlatButton';
import Slider from 'material-ui/Slider';
import './Player.css';

interface PlayerProps {
    showDialog: boolean;
    dispatch: Dispatch<{}>;
    url: string;
}

interface PlayerState {
    progress: number;
    played: boolean;
}

interface CrossBrowserHTMLVideoElement extends HTMLVideoElement {
    msRequestFullscreen(): void;
    mozRequestFullScreen(): void;
}

class Player extends React.Component<PlayerProps, PlayerState> {
    constructor(props: PlayerProps) {
        super(props);

        this.state = {
            played: true,
            progress: 0
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.moveSlider.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.moveSlider.bind(this));
    }

    inputs: {
        video?: CrossBrowserHTMLVideoElement
    } = {};

    handleCloseDialog() {
        this.props.dispatch(hidePlayer());
    }

    handleTimeUpdate() {
        const progress = this.inputs.video.currentTime / this.inputs.video.duration;

        this.setState({
            progress
        });
    }

    handleChangeProgress(e: any, v: any) {
        this.inputs.video.currentTime = v * this.inputs.video.duration;
    }

    handlePlay() {
        this.inputs.video.play();

        this.setState({
            played: true
        });
    }

    handlePause() {
        this.inputs.video.pause();

        this.setState({
            played: false
        });
    }

    fullscreen() {
        if (this.inputs.video.requestFullscreen) {
            this.inputs.video.requestFullscreen();
        } else if (this.inputs.video.msRequestFullscreen) {
            this.inputs.video.msRequestFullscreen();
        } else if (this.inputs.video.mozRequestFullScreen) {
            this.inputs.video.mozRequestFullScreen();
        } else if (this.inputs.video.webkitRequestFullscreen) {
            this.inputs.video.webkitRequestFullscreen();
        }
    }

    moveSlider(e: KeyboardEvent) {
        if (e.keyCode == 37) {
            this.inputs.video.currentTime = this.inputs.video.currentTime - 1;
        } else if (e.keyCode == 39) {
            this.inputs.video.currentTime = this.inputs.video.currentTime + 1;
        }
    }

    render() {
        let playPauseButton = null;

        if (this.state.played) {
            playPauseButton = (
                <FlatButton
                    onClick={this.handlePause.bind(this)}
                    icon={<i className="material-icons">pause_circle_filled</i>}
                />
            );
        } else {
            playPauseButton = (
                <FlatButton
                    onClick={this.handlePlay.bind(this)}
                    icon={<i className="material-icons">play_circle_filled</i>}
                />
            );
        }

        return (
            <div className="player">
                <video
                    onTimeUpdate={this.handleTimeUpdate.bind(this)}
                    autoPlay={true}
                    ref={(video: CrossBrowserHTMLVideoElement) => {this.inputs.video = video}}
                >
                    <source src={this.props.url} />
                </video>
                <Slider onChange={this.handleChangeProgress.bind(this)} value={this.state.progress} />
                {playPauseButton}
                <FlatButton
                    label="Fullscreen"
                    primary={true}
                    onClick={this.fullscreen.bind(this)}
                />
                <FlatButton
                    label="Back to movies"
                    primary={true}
                    onClick={this.handleCloseDialog.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    let url = '';
    const selectedMovie = state.player.movies.find((movie: any) => movie.id == state.player.selected);

    if (selectedMovie) {
        url = selectedMovie.url
    }

    return {url};
};

export default connect(mapStateToProps)(Player);