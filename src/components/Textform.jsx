import React, { useState } from 'react'
import styled from 'styled-components'
import {Button} from '../styled/Button'

function Textform({heading}) {
    const[text,setText]=useState("Enter a texts")

    const handleUpClick= ()=>{
        setText(text.toUpperCase());
    }

    const handleLowClick=()=>{
        setText(text.toLowerCase());
    }

    const handleClearClick=()=>{
        setText("");
    }
    const handleReserveClick=()=>{
        setText(text.split("").reverse().join(""))
    }

return (
<FormContainer>
    <div className="cont">
        <h1>{heading}</h1>
        <div className='form'>
            <div className="txt">
            <textarea id="mybox" value={text} onChange={(e)=>(setText(e.target.value))} rows={8} placeholder='PLease enter the text...'></textarea>           
            <Button onClick={handleUpClick}>Convert to Uppercase</Button>
            <Button onClick={handleLowClick}>Convert to Lowercase</Button>
            <Button onClick={handleClearClick}>Clear Text</Button>
            <Button onClick={handleReserveClick}>Reserve Text</Button>
        </div>
        </div>
    </div>
    <div className="cont">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008*text.split(" ").length} Mintues to read</p>
        <h2>Preview:</h2>
        <p>{text}</p>
    </div>
</FormContainer>
)
}

export default Textform


const FormContainer = styled.div`
    max-width: 400px;
    margin: 30px auto;
    padding: 20px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    
    h1 {
        text-align: center;
        color: #333;
        margin-bottom: 2rem;
    }
    
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .txt {
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 100%;
                        
            /* button {
                padding: 12px 24px;
                border-radius: 6px;
                background-color: #0044ff;
                color: white;
                border: none;
                font-size: 1rem;
                cursor: pointer;
                
                &:hover {
                    background-color: #0033cc;
                }
            } */
        }
    }
`