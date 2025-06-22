import styled from "styled-components"


function Navbar({text,aboutText,contactText}) {
  return (
    <NavContainer>
    <nav>
      <div className="nav-bar">
        <h1>Textutils</h1>
        <a href="/">{text}</a>
        <a href="about">{aboutText}</a>
        <a href="Contact-us">{contactText}</a>
      </div>
        <input type="text" id="search" placeholder="Search..."/>
        <button>Search</button>
    </nav>
    </NavContainer>
  )
}

export default Navbar


const NavContainer =styled.div`
    background-color: #559d70;
    margin: 0;
    padding: 0;
    nav{
        display: flex;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        
        h1{
            margin-left: 15px;
            color: #3c3636;
            font-weight: 700;
            font-size: 1.8rem;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            
            &:hover {
                text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
            }
        .nav-bar{
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 15px;
            padding: 10px;
            flex-grow: 1;
            a{
                text-decoration: none;
                color: #4e0a0a;
                font-weight: 500;
                font-size: 18px;
                padding: 8px 16px;
                border-radius: 25px;
                position: relative;
                overflow: hidden;
                margin: 2px;
            
            &:hover{
                background-color: #557d56;
                border-radius: 10px;
                margin: 2px;
                box-shadow: 0 6px 20px rgba(62, 142, 65, 0.4);
            }}
            }
        #search{
            padding: 12px 16px;
            margin: 20px 15px 20px auto;
            border: 2px solid transparent;
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.95);
            font-size: 1rem;
            min-width: 250px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            outline: none;
            
            &::placeholder {
                color: #888;
                font-style: italic;
                }
            }
            button{
                padding: 12px;
                border-radius: 15px;
                border: none;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                background-color: rgba(66, 60, 60, 0.95);
                color: white;
                font-size: 15px;
                margin-right: 5px;
            }
    }
`