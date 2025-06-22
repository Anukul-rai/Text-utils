import React, { useState } from 'react'
import styled from 'styled-components'


function Textform({heading}) {
    const[text,setText]=useState("enter a text")

    const handleUpClick= ()=>{
        setText(text.toUpperCase());
    }




return (
<FormContainer>
    <h1>{heading}</h1>
    <div className='form'>
        <div className="txt">
        <textarea id="mybox" value={text} onChange={(e)=>(setText(e.target.value))} rows={8} placeholder='Enter the text...'></textarea>           
        <button onClick={handleUpClick}>Convert to uppercase</button>
        </div>
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
                        
            button {
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
            }
        }
    }
`