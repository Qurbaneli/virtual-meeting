import React from 'react'
import protect from '../assets/img/Protect.svg'
import menu1 from '../assets/img/menu1.svg'
import menu2 from '../assets/img/menu2.svg'
import menu3 from '../assets/img/menu3.svg'
import menu4 from '../assets/img/menu4.svg'
import record from '../assets/img/record.svg'

function Header() {
  return (
    <div  id="header">
        <div className="protect">
            <img src={protect} alt="" />
        </div>
        <div className="header-menu">
            <ul>
                <li><img src={menu1} alt="" /></li>
                <li><img src={menu2} alt="" /></li>
                <li><img src={menu3} alt="" /></li>
                <li><img src={menu4} alt="" /></li>
            </ul>
        </div>

        <div className="recod">
            <div className="record-button">
              <img src={record} alt="" />  <span>13:03:34</span>
            </div>
        </div>
    </div>
  )
}

export default Header