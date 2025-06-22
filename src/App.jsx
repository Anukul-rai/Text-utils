import Navbar from "./components/Navbar"
import Textform from "./components/Textform"



function App() {
  return (
    <>
      <Navbar
        text="Home"
        aboutText="About"
        contactText="Contact"
      />
      <div className="container">
      <Textform heading="Enter the text to analyze"/>
      </div>
    </>
  )
}

export default App
