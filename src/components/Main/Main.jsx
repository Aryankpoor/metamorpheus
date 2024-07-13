import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

   const {onSent,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context);

  return (
    <div className='main'>
        <div className="nav">
            <p>Core Assistant Inspired by Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>


        <div className="main-container">

            {!showResult
            ?<>
               <div className="greet"> 
                <p><span>Hello, Traveller</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Breifly summarise this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activites for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>:<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className='loader'>
                    </div>}
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                </div>
                </div>}
           

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Enter a prompt here" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} onClick={()=>onSent()} alt="" />
                    </div>
                </div>
                <p className="bottom-info">Made using Gemini Api. Core may display inaccurate info, including about people, so double-check it's responses</p>
            </div>
        </div>
    </div>
  )
}

export default Main