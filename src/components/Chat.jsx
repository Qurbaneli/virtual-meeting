import React from "react";

import detail from "../assets/img/details.svg";
import chat1 from "../assets/img/chat1.png";
import chat2 from "../assets/img/chat2.png";
import document from "../assets/img/document.svg"
import chatSmile from "../assets/img/chat-smile.svg"
import addFile from "../assets/img/add-file.svg"
import arrowRight from "../assets/img/arrow-right.svg"
import send from "../assets/img/send.svg"

function Chat() {
  return (
    <div className="chat">
      <div className="chat-header">
        <div className="chat-count">Chats(3)</div>
        <div className="chat-icon">
          <img src={detail} alt="" />
        </div>
      </div>
      <div className="chat-body">
        <div className="chat-item">
          <div className="chat-img">
            <img src={chat1} alt="" />
          </div>
          <div className="chat-message-right">
            <div className="chat-message-desc">
              <div className="chat-message-name">
                from <span>Marry</span> to <span>Everyone</span>
              </div>

              <div className="chat-message-time">05:32 PM</div>
            </div>
            <div className="chat-message-text">
              I am great, Thanks! How are you?
            </div>
          </div>
        </div>

        <div className="chat-item">
          <div className="chat-message-left">
            <div className="chat-message-desc">
              <div className="chat-message-name">
                from <span>Marry</span> to <span>Everyone</span>
              </div>

              <div className="chat-message-time">05:32 PM</div>
            </div>
            <div className="chat-message-text">
              I am great, Thanks! <br />
              How are you?
            </div>
          </div>

          <div className="chat-img">
            <img src={chat2} alt="" />
          </div>
        </div>

        <div className="chat-item">
          <div className="chat-img">
            <img src={chat1} alt="" />
          </div>
          <div className="chat-message-right">
            <div className="chat-message-desc">
              <div className="chat-message-name">
                from <span>Marry</span> to <span>Everyone</span>
              </div>

              <div className="chat-message-time">05:32 PM</div>
            </div>
            <div className="chat-message-text">
              Fine thanks.Send me schedule
            </div>
          </div>
        </div>

        <div className="chat-item">
          <div className="chat-message-left">
            <div className="chat-message-desc">
              <div className="chat-message-name">
                from <span>Marry</span> to <span>Everyone</span>
              </div>

              <div className="chat-message-time">05:32 PM</div>
            </div>
            <div className="chat-message-text">
             <div className="chat-message-icon">
                <img src={document} alt="" />
             </div>
             <div className="chat-message-file-name">
                <p>workout schedule.xlsx</p>
                <span>43 Kb</span>
             </div>
            </div>
          </div>

          <div className="chat-img">
            <img src={chat2} alt="" />
          </div>
        </div>
      </div>
      <div className="chat-send-box">
          <div className="send-send-box-header">
            <div className="tag">
                Everyone <img src={arrowRight} alt="" />
            </div>

            <div className="send-box-icons">
              <div className="add-file">
                  <img src={addFile} alt="" />
              </div>

              <div className="little-smile">
                <img src={chatSmile} alt="" />
              </div>
            </div>
          </div>

          <div className="chat-send-input-box">
                <input type="text" placeholder="Message to everyone..."/>

                <div className="send-button"><img src={send} alt="" /></div>

          </div>
      </div>
    </div>
  );
}

export default Chat;
