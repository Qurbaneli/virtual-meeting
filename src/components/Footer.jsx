import React from 'react'
import ControlButton from './ControlButton'

import volume from '../assets/img/volume.svg'
import miControl from '../assets/img/mic-control.svg'
import screen from '../assets/img/screen.svg'
import recordButton from '../assets/img/record-button.svg'
import videCam from '../assets/img/video-cam.svg'
import hand from '../assets/img/hand.svg'
import smile from '../assets/img/smile.svg'
import gridButton from '../assets/img/grid-button.svg'

function Footer() {
  return (
    <div id="footer">
      <div className="volume-button-box">
        <div className="volume-button">
        <img src={volume} alt="" />
        <input type="range" />
        </div>
      </div>

      <div className="control-buttons-box">
          <ControlButton img={miControl}/>
          <ControlButton img={videCam}/>
          <ControlButton img={screen}/>
          <ControlButton status={true} img={recordButton}/>
          <ControlButton img={gridButton}/>
          <div className="stroke"></div>
          <ControlButton img={hand}/>
          <ControlButton img={smile}/>
      </div>

    <div className="leave-meeting-box">
      <div className="leave-meeting">
        Leave Meeting
      </div>
    </div>

    </div>
  )
}

export default Footer