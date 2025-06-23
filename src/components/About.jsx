import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'

function About() {
    
    const [showTopic, setShowTopic] = useState(false)

    
  return (
    <AboutContainer>
      <div className='head'>
        <h1>About us</h1>
        <div className="drop">
            <h3>Topic 1</h3>
            <Button onClick={() => setShowTopic(!showTopic)}>
            {showTopic ? 'Close' : 'Open'}
            </Button>
            {showTopic && (
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Iste, explicabo quas harum beatae fuga quod quo corrupti 
                nihil inventore assumenda numquam vero maxime soluta nat, 
                dicta consequuntur consectetur ea corporis.
                </p>
            )}
        </div>
        <div className='.btn'>
        <Button>Enable Dark Mode</Button>
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
        }
        
    }
`