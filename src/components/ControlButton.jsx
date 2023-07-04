import React from 'react'
import up from  '../assets/img/up.svg'
import upWhite from  '../assets/img/up-white.svg'

function ControlButton(props) {
  return (
    <div className={`${props.status ? "control-button active" : "control-button"} `}>
        <img style={{fill:"silver"}} src={props.img} alt="" />
        {props.status ? <img className="up-button" src={upWhite} alt="" /> :
        <img className="up-button" src={up} alt="" /> }
        
  </div>
  )
}

export default ControlButton