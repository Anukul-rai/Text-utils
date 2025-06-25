import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'


function About({mode}) {
    
    const [showTopic1, setShowTopic1] = useState(false)
    const [showTopic2, setShowTopic2] = useState(false)
    // const [myStyle,setMyStyle] = useState({backgroundColor:'#f0f0f0',color:"black"})
    // const [btnText,setBtnText]=useState("Enable Dark mode")

    //Dark mode setup
    // const toggleDark=()=>{
    //     if(myStyle.color === "black"){
    //         setMyStyle({backgroundColor:'black',color:"white",border:"1px solid white"})
    //         setBtnText("Enable Light mode")
    //         }else{  
    //         setMyStyle({backgroundColor:'#f0f0f0',color:"black"})
    //         setBtnText("Enable Dark mode")
    //     }
    // }
  return (
    <AboutContainer mode={mode} >
      <div className='head'>
        <h1>About us</h1>
        <div className="drop" > {/* style={myStyle} */}
            <h3><strong>Analyze Your text</strong></h3>
            <Button onClick={() => setShowTopic1(!showTopic1)}>
            {showTopic1 ? 'Close' : 'Open'}
            </Button>
            {showTopic1 && (
                <p >
                  Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
                  reading time estimations, our tool has got you covered. The tool is free to use and
                </p>
            )}
        </div>
        <div className="drop" > {/* style={myStyle} */}
            <h3><strong>Free to use</strong></h3>
            <Button onClick={() => setShowTopic2(!showTopic2)}>
            {showTopic2 ? 'Close' : 'Open'}
            </Button>
            {showTopic2 && (
                <p >
                TextUtils is a free character counter tool that provides instant character count & word count
                statistics for a given text. TextUtils reports the number of words and characters. Thus it
                is suitable for writing text with word/ character limit.
                </p>
            )}
        </div>
        {/* <div className='.btn'>
        <Button onClick={toggleDark}>{btnText}</Button> 
        </div> */}
      </div>
    </AboutContainer>
  )
}

export default About


const AboutContainer =styled.div`
    background-color: #f0f0f0;
    padding: 20px;
    border: 1px dashed #2c2525;
    border-radius: 10px;
    margin: 15px;
    background-color: ${({ mode }) => (mode === 'dark' ? '#472626' : '#ffffff')};
    color: ${({ mode }) => (mode === 'dark' ? 'white' : 'black')};

    .head{
        display: flex;
        flex-direction: column;
        .drop{
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            border: 1px dashed black;
            padding: 10px;
            border-radius: 10px;
            border-color: ${({mode})=>(mode ==="dark" ? "white":"black" )};

          h3{
                margin-bottom: 10px;
                }
          p{
            margin-bottom: 10px;
            font-size: 20px;
          }
        }
        
    }
`