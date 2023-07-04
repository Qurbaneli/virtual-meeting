import React from 'react'
import UserItem from './UserItem'
import Chat from './Chat'

import user from '../assets/img/user.svg'
import apps from '../assets/img/apps.svg'

import user1 from "../assets/img/user1.png"
import user2 from "../assets/img/user2.png"
import user3 from "../assets/img/user3.png"
import user4 from "../assets/img/user4.png"
import user5 from "../assets/img/user5.png"
import user6 from "../assets/img/user6.png"

import mic1 from "../assets/img/mic1.svg"
import mic2 from "../assets/img/mic2.svg"
import mic3 from "../assets/img/mic3.svg"

let users=[
  {img:user1,name:"Natura",job:"Project Manager",status:"Host",mic:mic3},
  {img:user2,name:"Cecile",job:"Software Developer",status:"Co-Host",mic:mic2},
  {img:user3,name:"Nico",job:"UI/UX Designer",status:false,mic:mic1},
  {img:user4,name:"Bryan",job:"Ethical Hacker",status:false,mic:mic3},
  {img:user5,name:"Azzura",job:"Team Leader",status:false,mic:mic3},
  {img:user6,name:"Ahmed",job:"UI/UX Designer",status:false,mic:mic3},
]
function Sidebar() {
  return (
    <div id="sidebar">
      <div className="sidebar-header">

            <div className="sidebar-header-icons-box">

              <div className="sidebar-header-icon active">
                <img src={user} alt="" /> Participants
              </div>

              <div className="sidebar-header-icon">
                <img src={apps} alt="" /> Apps
                <div className="red-dot"></div>
              </div>

            </div>
      </div>

      <div className="users-box">

        {users.map((el)=>{
          return ( <UserItem img={el.img} name={el.name} job={el.job} status={el.status} mic={el.mic}/> )
        })}
        
      </div>
      <div className="keywords-box">
        <div className="keyword-item">
            Invite
        </div>

        <div className="keyword-item">
            Mute All
        </div>

        <div className="keyword-item">
            Ask to start video
        </div>

      </div>

        <Chat/>
        
    </div>
  )
}

export default Sidebar