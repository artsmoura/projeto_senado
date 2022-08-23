import React from "react";
import '../Input/input.css';

const Input = ({
    type = '',
    name = '',
    id = '',
    value = '',
    changeInput,
    leftButton,
    placeholder,
    onPressEnter = () => { },
    onKeyDown = () => { },
}) => {
    return (
        <div className="inputBox">
            <button onClick={leftButton.action} name={name} type='button' title={leftButton.text} className='input-left-icon'>
                {leftButton.icon}
            </button>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={changeInput}
                placeholder={placeholder}
                onKeyPress={onPressEnter}
                onKeyDown={onKeyDown}
            >
            </input>
        </div>
    );
};

export default Input;