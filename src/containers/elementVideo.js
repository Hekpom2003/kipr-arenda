import React from 'react';
import YouTube from 'react-youtube';

class elementVideo extends React.Component {
    constructor(props) {
        super(props);

        this._onReady = this._onReady.bind(this);
        this.playerReady = false;

        this.ratio = 16 / 9;
        this.videoWidth = Math.min(window.innerWidth / props.ratio, 960);
        this.videoHeight = this.videoWidth / this.ratio;
        console.log(this.videoHeight, this.videoWidth);
        // if (this.videoHeight < (window.innerHeight / 2)) {
        //     this.videoHeight = window.innerHeight / 2;
        //     this.videoWidth = this.videoHeight * this.ratio;
        // }
        this.state = {
            slideContent: this.props.item,
            videoTimer: this.props.item.time || 0,
        };
        this.muteToggler = this.muteToggler.bind(this);
    }
    videoDidMountHandler(videoTimer) {
        this.setState({videoTimer: videoTimer});
    }

    componentWillUnmount() {
        if (this.playerReady) this.videoDidMountHandler(this.player.getCurrentTime());
    }

    render() {
        // console.log({'SlideContentVideo' : this.props.item});
        // console.log({'SlideContentVideo' : this});
        return (
            <div className="youtube-video-outher" onClick={()=>this.muteToggler()}>
                <YouTube
                    videoId={this.props.item.videoId}
                    id={this.props.item.videoId}
                    className={'youtube-main-video'}
                    containerClassName={"youtube-video"}
                    onReady={this._onReady}
                    opts={{
                        height: parseInt(this.videoHeight),
                        width: parseInt(this.videoWidth),
                        playerVars: {
                            autoplay: 1,
                            loop: 1,
                            controls: 0,
                            showinfo: 0,
                        },
                    }}
                />

            </div>
        );
    }

    _onReady(event) {
        this.playerReady = true;
        this.player = event.target;
        this.player.mute(); //выключаем звук
        this.player.seekTo(this.props.time, true);

        this.iframe = document.getElementsByClassName('youtube-main-video')[0];

    }
}

export default elementVideo