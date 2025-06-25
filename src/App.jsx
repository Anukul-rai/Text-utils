// import About from "./components/About"
import { useState,useEffect } from "react"
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import Alert from "./components/ALert"

function App() {
  const [mode , setMode]=useState('light')//wheather dark mode is enabled or not
  const [alert, setAlert]=useState(null)

  const toggleMode=()=>{
    if(mode==="light"){
        setMode("dark")
        showAlert("Darkmode is enabled","Sucess")
      }
      else{
        setMode("light")
        // showAlert("Lightmode is enabled","Sucess")
        }
  }

  useEffect(() => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#392c2c";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [mode]);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,  
      type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  return (
    <>
      <Navbar
        text="Home"
        aboutText="About"
        contactText="Contact"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert
      alert={alert}/>

      {/* <About/> */}
      <div >
      <Textform
      heading="Enter the text to analyze"
      showAlert={showAlert}
      mode={mode}/>
      </div>
    </>
  )
}

export default App
