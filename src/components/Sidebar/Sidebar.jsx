import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import Icon from '@hackclub/icons'

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
            <p className="recent-title">Recent Adventures</p>
            {prevPrompts.map((item,index)=>{
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
              <img src={assets.message_icon} alt="message icon" />
              <p><b>{item.slice(0,18)} ...</b></p>
            </div>
              )
            })}
            
          </div>
        : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
        
          {extended?<><img src={assets.sound_icon} alt="" /><button className="side-btn"><p>Sound</p></button></>:null}
        </div>
        <div className="bottom-item recent-entry">
        <Icon glyph="info" size={24} />
          {extended?<a className="side-links" href="https://github.com/Aryankpoor/metamorpheus/blob/master/README.md" target="_blank"><p>Help</p></a>:null}
        </div>
        <div className="bottom-item recent-entry">
        <Icon glyph="important-fill" size={24} />
          {extended?<a href="https://github.com/Aryankpoor/metamorpheus/issues" target="_blank" className="side-links"><p>Report An Issue</p></a>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
