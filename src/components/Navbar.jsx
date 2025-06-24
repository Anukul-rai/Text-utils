import styled from "styled-components"


function Navbar({text,aboutText,contactText,mode,toggleMode}) {
  return (
    <NavContainer>
    <nav className={`navbar ${mode}`}>
    <div className="nav-bar">
        <h1>Textutils</h1>
        <a href="/">{text}</a>
        <a href="about">{aboutText}</a>
        <a href="Contact-us">{contactText}</a>
      </div>
        {/* <input type="text" id="search" placeholder="Search..."/>
        <button>Search</button> */}
            {/* Toggle switch */}
        <SwitchWrapper mode={mode}>
          <span>Dark Mode</span>
          <SwitchContainer>
            <input type="checkbox" id="toggle" onChange={toggleMode} />
            <label htmlFor="toggle" className="slider" />
          </SwitchContainer>
        </SwitchWrapper>
    </nav>
    </NavContainer>
  )
}

export default Navbar



const NavContainer = styled.div`
  margin: 0;
  padding: 0;

  nav {
    display: flex;
    align-items: center;
    padding: 12px 20px;

    &.light {
        background-color: #559d70;
        color: #000000;
        h1 {
        color: #3c3636;
        }
        .nav-bar a {
        color: #4e0a0a;
        }
    }

    &.dark {
        background-color: #1c1c1c;
        color: white;
        h1 {
        color: white;
        }
        .nav-bar a {
        color: white;
        }
    }

    h1 {
        margin-left: 15px;
        font-weight: 700;
        font-size: 1.8rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        &:hover {
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
    }

    .nav-bar {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 15px;
        padding: 10px;
        flex-grow: 1;

        a {
            text-decoration: none;
            font-weight: 500;
            font-size: 18px;
            padding: 8px 16px;
            border-radius: 25px;
            position: relative;
            overflow: hidden;
            margin: 2px;

        &:hover {
            background-color: #557d56;
            border-radius: 10px;
            margin: 2px;
            box-shadow: 0 6px 20px rgba(62, 142, 65, 0.4);
        }
        }
    }

    #search {
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

    button {
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

const SwitchWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    span {
        font-size:18px;
        font-weight: 500;
        color: ${({ mode }) => (mode === "dark" ? "white" : "#4e0a0a")};
    }
`

const SwitchContainer =styled.div`
    position: relative;
    width: 50px;
    height: 24px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        background-color: #ccc;
        border-radius: 24px;
        top: 0;
        left: 0;
        right: 2px;
        bottom: 0;
        transition: 0.4s;
    }

    .slider::before {
        content: "";
        position: absolute;
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        border-radius: 50%;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: #2196f3;
    }

    input:checked + .slider::before {
        transform: translateX(26px);
    }
`