import React from 'react'
import GridItem from './GridItem'

import cam1 from "../assets/img/cam1.jpg"
import cam2 from "../assets/img/cam2.jpg"
import cam3 from "../assets/img/cam3.jpg"
import cam4 from "../assets/img/cam4.jpg"
import cam5 from "../assets/img/cam5.jpg"
import cam6 from "../assets/img/cam6.jpg"
import cam7 from "../assets/img/cam7.jpg"
import cam8 from "../assets/img/cam8.jpg"
import cam9 from "../assets/img/cam9.jpg"
import cam10 from "../assets/img/cam10.jpg"
import cam11 from "../assets/img/cam11.jpg"
import cam12 from "../assets/img/cam12.jpg"
import cam13 from "../assets/img/cam13.jpg"
import cam14 from "../assets/img/cam14.jpg"
import cam15 from "../assets/img/cam15.jpg"
import cam16 from "../assets/img/cam16.jpg"

import dot from "../assets/img/dot.svg"
import dotActive from "../assets/img/dot-active.svg"
import navRight from "../assets/img/right.svg"
import navLeft from "../assets/img/left.svg"

let arr=[
  {name:"Natura",img:cam1,mic:true,verify:true},
  {name:"Cecile",img:cam2,mic:false,verify:true},
  {name:"Nico",img:cam3,mic:false,verify:false},
  {name:"Bryan",img:cam4,mic:true,verify:false},
  {name:"Azzura",img:cam5,mic:true,verify:false},
  {name:"Ahmed",img:cam6,mic:true,verify:false},
  {name:"Marry",img:cam7,mic:false,verify:false},
  {name:"Diana",img:cam8,mic:false,verify:false},
  {name:"Lucas",img:cam9,mic:false,verify:false},
  {name:"Mike",img:cam10,mic:true,verify:false},
  {name:"Daniel",img:cam11,mic:true,verify:false},
  {name:"Shandy",img:cam12,mic:true,verify:false},
  {name:"Stephany",img:cam13,mic:true,verify:false},
  {name:"Robert",img:cam14,mic:true,verify:false},
  {name:"Lily",img:cam15,mic:true,verify:false},
  {name:"Michael",img:cam16,mic:true,verify:false},
]

function Grid() {
  return (
    <div id="grid">
      <div className="grid-container">
      {
        arr.map(el => {
        return ( <GridItem name={el.name} img={el.img} mic={el.mic} verify={el.verify}/> )
      })
      }   
      </div>

      <div className="navigation">
        <div className="nav-left">
        <img src={navLeft} alt="" />
        </div>

        <div className="nav-dots">
          <div className="nav-dot">
              <img src={dotActive} alt="" />
          </div>
          <div className="nav-dot">
              <img src={dot} alt="" />
          </div>
          <div className="nav-dot">
              <img src={dot} alt="" />
          </div>
        </div>

        <div className="nav-right">
        <img src={navRight} alt="" />
        </div>
      </div>   
    </div>


  )
}

export default Grid