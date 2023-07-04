import React from 'react'
import microphone from '../assets/img/microphone.svg'
import verify from "../assets/img/verify-small.svg"


function GridItem(props) {
  console.log(props.verify)
  return (
    <div className="grid-item">
      <img src={props.img} alt="" />
      <div className="grid-item-name"> {props.verify && <img src={verify} alt="" /> } {props.name}</div>
      {props.mic  && <div className="grid-item-microphone"><img src={microphone} alt="" /></div>  }
    </div>
  )
}

export default GridItem