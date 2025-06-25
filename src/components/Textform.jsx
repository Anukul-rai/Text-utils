import React, { useState } from 'react'
import styled from 'styled-components'
import {Button} from '../styled/Button'

function Textform({heading,mode}) {
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
    const handleCopyClick =()=>{
        navigator.clipboard.writeText(text) 
        
    }
return (
<FormContainer mode={mode}> 
    <div className="cont ">
        <h1>{heading}</h1>
        <div className='form'>
            <div className="txt">
                <textarea 
                id="mybox" 
                value={text} 
                onChange={(e)=>(setText(e.target.value))} rows={8}
                placeholder='Please enter the text...'
                />           
                <Button onClick={handleUpClick}>Convert to Uppercase</Button>
                <Button onClick={handleLowClick}>Convert to Lowercase</Button>
                <Button onClick={handleClearClick}>Clear Text</Button>
                <Button onClick={handleReserveClick}>Reserve Text</Button>
                <Button onClick={handleCopyClick}>Copy Text</Button>
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
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background-color: ${({ mode }) => (mode === 'dark' ? '#4a3f3f' : '#ffffff')};
    
    .cont {
        background-color: ${({ mode }) => (mode === 'dark' ? 'transparent' : '#ffffff')};
        color: ${({ mode }) => (mode === 'dark' ? 'white' : 'black')};
        border-radius: ${({ mode }) => (mode === 'dark' ? '0' : '10px')};
        margin-bottom: 2rem;

    h1, h2 {
        color: ${({ mode }) => (mode === 'dark' ? 'white' : 'black')};
        }

    p {
        color: ${({ mode }) => (mode === 'dark' ? '#ccc' : '#333')};
    }
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

            textarea {
                width: 100%;
                font-size: 1rem;
                padding: 10px;
                border-radius: 6px;
                border: 1px solid #ccc;
                background-color: ${({ mode }) => (mode === 'dark' ? '#f8f8f8' : '#fff')};
                color: ${({ mode }) => (mode === 'dark' ? '#333' : '#000')};

                &::placeholder {
                    color: ${({ mode }) => (mode === 'dark' ? '#666' : '#693b3b')};
                }
            }
        }
    }
`
