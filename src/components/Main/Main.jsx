import React, { useContext, useEffect } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

   const {onSent,recentPrompt,showResult,loading,resultData,input,setInput} = useContext(Context);

  /* useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
   }, []) */

 //  const detectKeyDown = (e) => {
 //   console.log("Clicked Key:", e.key)
  //  if( e.key === "Enter" ) {
        
 //   }
  // }

  return (
    <div className='main'>

        
        <div className="nav">
            <p>METAMORPHEUS - HACKCLUB'S VERY OWN VIRTUAL ASSISTANT</p>
            <a href="https://hackclub.com" target="_blank"><img src={assets.color_icon} alt="" /></a>
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
                    <img src={assets.rounded_icon} alt="" className='response-img' />
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
                    <input className='inputtag' type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Enter a prompt here"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') 
                            handlerFunction();
                        
                    }} />
                    <div>
                        <img src={assets.send_icon} onClick={()=>onSent()} className='send-btn' alt="" />
                    </div>
                </div>
                <p className="bottom-info">Made using Gemini Api. MetaMorpheus may display inaccurate info, including about people, so double-check it's responses</p>
            </div>
        </div>
        
        
    </div>
  )
}

export default Main