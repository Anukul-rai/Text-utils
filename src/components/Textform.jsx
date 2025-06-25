import React, { useState } from 'react'
import styled from 'styled-components'
import {Button} from '../styled/Button'

function Textform({heading,mode,showAlert}) {

    

    const[text,setText]=useState(" ")

    const handleUpClick= ()=>{
        if (text.trim().length === 0) return;
        setText(text.toUpperCase());
        showAlert("Converted to uppercase","Sucess")

    }

    const handleLowClick=()=>{
        if (text.trim().length === 0) return;
        setText(text.toLowerCase());
        showAlert("Converted to Lowercase","Sucess")

    }

    const handleClearClick=()=>{
        if (text.trim().length === 0) return;
        setText("");
        showAlert("Text cleared","Sucess")
    }
    const handleReserveClick=()=>{
        if (text.trim().length === 0) return;
        setText(text.split("").reverse().join(""))
        showAlert("Texted reserved","Sucess")
    }
    const handleCopyClick =()=>{
        if (text.trim().length === 0) return;
        navigator.clipboard.writeText(text) 
        showAlert("TExted copied","Sucess")
        
    }
    const isDisabled = text.trim().length === 0;
return (
<FormContainer mode={mode}> 
    <div>
        <div className="cont ">
        <h1 style={{textAlign:'center'}}>{heading}</h1>
        <div className='form'>
            <div className="txt">
                <textarea 
                id="mybox" 
                value={text} 
                onChange={(e)=>(setText(e.target.value))} rows={8}
                placeholder='Please enter the text...'
                />           
                <Button disabled={isDisabled} onClick={handleUpClick}>Convert to Uppercase</Button>
                <Button disabled={isDisabled} onClick={handleLowClick}>Convert to Lowercase</Button>
                <Button disabled={isDisabled} onClick={handleClearClick}>Clear Text</Button>
                <Button disabled={isDisabled} onClick={handleReserveClick}>Reserve Text</Button>
                <Button disabled={isDisabled} onClick={handleCopyClick}>Copy Text</Button>
            </div>
        </div>
    </div>

    <div className="cont">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((e)=>{return e.length !==0}).length}: words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((e)=>{return e.length !==0}).length} Mintues to read</p>
        <h2>Preview:</h2>
        <p>{text}</p>
    </div>
    </div>
</FormContainer>
)
}

export default Textform

const FormContainer = styled.div`
    max-width: 500px;
    margin: auto;;
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
        max-width: 100%;
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
