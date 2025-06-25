
import { useState } from 'react';
import styled from 'styled-components';


function Alert({alert}) {
    const [visible, setVisible] = useState(true);

    const dismissAlert = () => {
        setVisible(false);
    };

    if (!visible) return null;

  return (
    <div style={{height:'50px'}}>
    {alert && <AlertWrapper role='alert' >
            <StrongText>{alert.type}</StrongText>: {alert.msg}
            {/* <CloseButton onClick={dismissAlert}>&times;</CloseButton> */}
        </AlertWrapper>}
        </div>
    );
}

export default Alert

const AlertWrapper = styled.div`
  padding: 15px;
  background-color: #ffcc00;
  color: #333;
  border: 1px solid #e6b800;
  border-radius: 5px;
  position: relative;
  margin: 20px;
  font-family: Arial, sans-serif;
`;

const StrongText = styled.strong`
  font-weight: bold;
`;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 15px;
//   background: none;
//   border: none;
//   font-size: 20px;
//   font-weight: bold;
//   cursor: pointer;
//   color: #333;
// `;



