import React, { useState } from 'react'

const Button = props =>  {
    const [text, setText] = useState('Subscribe to Basic');
    
    const handleClick = () =>{
        setText("Proceed to Checkout")
    }
      return (
        <button onClick={handleClick} style={{fontSize: "14px"}}>
          {text || props.text}
        </button>
      );
  }

export default Button;
