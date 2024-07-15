import React, { useContext, useEffect } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

   const {onSent,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context);

  return (
    <div className='main'>

        
        <div className="nav">
            <p>METAMORPHEUS - VIRTUAL ASSISTANT</p>
            <a href="https://github.com/Aryankpoor/metamorpheus" target="_blank"><img src={assets.github_icon} alt="" /></a>
          </div>


        <div className="main-container">

            {!showResult
            ?<>
               <div className="greet"> 
                <p><span>Hello, Traveller</span></p>
                <p>Ask me Anything</p>
            </div> <div className="cards">
                <div className="card">
                    <p><b>DID YOU KNOW? Metamorpheus uses Gemini API.</b></p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p><b>TIP FOR USE: <br />Pressing enter key won't work. Click the send icon to ask your question.</b></p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p><b>FUN FACT: Metamorphosis was developed in just 3 days. There are still some bugs but we are working on it.</b></p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p><b>USAGE INFORMATION: Response time of metamorphosis depends upon the complexity of the prompt.</b></p>
                    <img src={assets.message_icon} alt="" />
                </div>
            </div>
           
            </>:<div className='result'>
                <div className="result-title">
                    <img src={assets.gemini_icon} alt="" className='response-img' />
                    <p className='recent-prompt'>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    
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
                    
                    <input className='input' type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="I can be a little slow, sowwy..."
                     />
                     
                    <div>
                        <img src={assets.send_icon} onClick={()=>onSent()} className='send-btn' alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                MetaMorpheus may display inaccurate info, including about people. Please double check it's responses.</p>
            </div>
        </div>
        
        
    </div>
  )
}

export default Main