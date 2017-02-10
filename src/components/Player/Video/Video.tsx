import * as React from 'react';
import * as styles from './Video.css';

interface VideoProps {
    onTimeUpdate?(value: number): void;
    onLoadedData?(): void;
    url: string;
}

interface CrossBrowserHTMLVideoElement extends HTMLVideoElement {
    mozRequestFullScreen(): void;
}

class Video extends React.Component<VideoProps, {}> {
    timeUpdate() {
        const value = this.inputs.video.currentTime / this.inputs.video.duration;
        this.props.onTimeUpdate(value);
    }

    seekTo(value: number) {
        this.inputs.video.currentTime = value * this.inputs.video.duration;
    }

    play() {
        this.inputs.video.play();
    }

    pause() {
        this.inputs.video.pause();
    }

    fullscreen() {
        if (this.inputs.video.requestFullscreen) {
            this.inputs.video.requestFullscreen();
        } else if (this.inputs.video.mozRequestFullScreen) {
            this.inputs.video.mozRequestFullScreen();
        } else if (this.inputs.video.webkitRequestFullscreen) {
            this.inputs.video.webkitRequestFullscreen();
        }
    }

    inputs: {
        video?: CrossBrowserHTMLVideoElement
    } = {};

    render() {
        return (
            <video
                className={styles.video}
                onLoadedData={this.props.onLoadedData.bind(this)}
                onTimeUpdate={this.timeUpdate.bind(this)}
                autoPlay={true}
                ref={(video: CrossBrowserHTMLVideoElement) => {this.inputs.video = video}}
            >
                <source src={this.props.url} />
            </video>
        );
    }
}

export default Video;