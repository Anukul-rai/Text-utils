// import About from "./components/About"
import { useState,useEffect } from "react"
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"



function App() {
  const [mode , setMode]=useState('light')//wheather dark mode is enabled or not

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      
      }
      else{
        setMode("light")
        
        }
  }

  useEffect(() => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#392c2c";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [mode]);

  return (
    <>
      <Navbar
        text="Home"
        aboutText="About"
        contactText="Contact"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <About/> */}
      <div >
      <Textform heading="Enter the text to analyze"
      mode={mode}/>
      </div>
    </>
  )
}

export default App
