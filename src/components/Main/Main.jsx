import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

   const {onSent,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context);

  return (
    <div className='main'>
        <div className="nav">
            <p>METAMORPHEUS - HACKCLUB'S VERY OWN VIRTUAL ASSISTANT</p>
            <img src={assets.icon_rounded} alt="" />
        </div>


        <div className="main-container">

            {!showResult
            ?<>
               <div className="greet"> 
                <p><span>Hello, Traveller</span></p>
                <p>Ask me Anything</p>
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
                        <hr />
                        <hr />
                        <hr />
                    </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    
                </div>
                </div>}
           

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Enter a prompt here" />
                    <div>
                        
                        <img src={assets.send_icon} onClick={()=>onSent()} alt="" />
                    </div>
                </div>
                <p className="bottom-info">Made using Gemini Api. MetaMorpheus may display inaccurate info, including about people, so double-check it's responses</p>
            </div>
        </div>
    </div>
  )
}

export default Main