import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context);
 
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="menu icon" className="menu" />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="new chat icon" />
          {extended ? <p>New Prompt</p> : null}
        </div>
        {extended 
        ? <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
              <img src={assets.message_icon} alt="message icon" />
              <p>{item.slice(0,18)} ...</p>
            </div>
              )
            })}
            
          </div>
        : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question icon" />
          {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="question icon" />
          {extended?<p>Creator</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="question icon" />
          {extended?<p>Report An Issue</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
