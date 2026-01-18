import React, { useRef } from 'react'
import './VideoPlayer.css'
import clg_vid from '../../assets/clg-vedio.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {

  const player = useRef(null);


  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={() => setPlayState(false)}>
      <div className="video-wapper">
        <video src={clg_vid} autoPlay muted controls></video>
      </div>

    </div>
    
  )
}

export default VideoPlayer
