import React from "react";
import littleCam from "../assets/img/little-cam.svg";

function UserItem(props) {
  return (
    <div className="user-item">
      <div className="user-item-left">
        <div className="user-img">
          <img src={props.img} alt="" />
        </div>
        <div className="user-name">
          <h4>{props.name}</h4>
          <p>{props.job}</p>
        </div>
      </div>

      <div className="user-item-right">
        {props.status ? <div className="user-status">{props.status}</div> : ""}
        

        <div className="user-icons">
          <div className="user-mic">
            <img src={props.mic} alt="" />
          </div>

          <div className="user-cam">
            <img src={littleCam} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
