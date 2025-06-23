import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'


function About() {
    
    const [showTopic, setShowTopic] = useState(false)
    const [myStyle,setMyStyle] = useState({backgroundColor:'#f0f0f0',color:"black"
    })
    const [btnText,setBtnText]=useState("Enable Dark mode")

    //Dark mode setup
    const toggleDark=()=>{
        if(myStyle.color =="black"){
            setMyStyle({backgroundColor:'black',color:"white",border:"1px solid white"})
            setBtnText("Enable Light mode")
            }else{  
            setMyStyle({backgroundColor:'#f0f0f0',color:"black"})
            setBtnText("Enable Dark mode")
        }
    }
  return (
    <AboutContainer style={myStyle}>
      <div className='head'>
        <h1>About us</h1>
        <div className="drop" style={myStyle}>
            <h3>Topic 1</h3>
            <Button onClick={() => setShowTopic(!showTopic)}>
            {showTopic ? 'Close' : 'Open'}
            </Button>
            {showTopic && (
                <p >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Iste, explicabo quas harum beatae fuga quod quo corrupti 
                nihil inventore assumenda numquam vero maxime soluta nat, 
                dicta consequuntur consectetur ea corporis.
                </p>
            )}
        </div>
        <div className='.btn'>
        <Button onClick={toggleDark}>{btnText}</Button> {/* //for Dark mode  */}
        </div>
      </div>
    </AboutContainer>
  )
}

export default About


const AboutContainer =styled.div`
    background-color: #f0f0f0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 5px;
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
            h3{
                margin-bottom: 10px;
                }
        }
        
    }
`