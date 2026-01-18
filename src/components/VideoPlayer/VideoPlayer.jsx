import React, { useRef } from 'react'
import './VideoPlayer.css'
import clg_vid from '../../assets/clg-vedio.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {

  const player = useRef(null);


  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={() => setPlayState(false)}>
      <video src={clg_vid} autoPlay muted controls></video>
      console.log("Video Player Rendered");

    </div>
    
  )
}

export default VideoPlayer
