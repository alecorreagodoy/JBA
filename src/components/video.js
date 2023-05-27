import React from 'react';
import ReactPlayer from 'react-player'
import Video from '../assets/img/Quik_2018-08-08_21-48-14-2.mp4';

class MiVideoCover {
  constructor(props) {

    const videoOptions = {
      src: Video,
      ref: videoRef => {
        this.videoRef = videoRef;
      },


      onMouseOver: () => {
        if (this.videoRef && this.videoRef.paused) {
          this.videoRef.play();
        } else if (this.videoRef) {
          this.videoRef.pause();
        }
      },
      title: 'click to play/pause',
    };
    return (
      <div style={{
        width: '400px',
        height: '400px',
        overflow: 'hidden',
        margin: 'auto'
      }}>
        <ReactPlayer
          videoOptions={videoOptions} />
      </div>

    );
  }
}




export default MiVideoCover;