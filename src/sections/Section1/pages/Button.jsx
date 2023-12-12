import React from "react";
import ReactDOM from 'react-dom/client';

function Button ({text, textColor, color}){
    return (
        <button className='btn global_btn' style={{ color: `${textColor}`, background: `${color}`}}>{text}</button>
    );
}
export default Button;