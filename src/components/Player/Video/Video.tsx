import * as React from 'react';
import * as styles from './Video.css';

interface VideoProps {
    onTimeUpdate?(value: number): void;
    onLoadedData?(): void;
    url: string;
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

    inputs: {
        video?: HTMLVideoElement
    } = {};

    render() {
        return (
            <video
                className={styles.video}
                onLoadedData={this.props.onLoadedData.bind(this)}
                onTimeUpdate={this.timeUpdate.bind(this)}
                autoPlay={true}
                ref={(video: HTMLVideoElement) => {this.inputs.video = video}}
            >
                <source src={this.props.url} />
            </video>
        );
    }
}

export default Video;