import React from 'react';
import './radioButton.css';

const RadioButton = ({ name, text, options, selected, changeInput, validate }) => {
    return (
        <div className={`custom-control-radio ${validate && validate.erro && "show-error-hint"}`}>
            <label>{text}</label>
            {options.map(option => (
                <div key={option} className='radio-inline'>
                    <input
                        type='radio'
                        value={option}
                        checked={selected === option}
                        id={`${name}-${option}`}
                        name={name}
                        onChange={changeInput}
                    />
                    <label htmlFor={`${name}-${option}`}>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default RadioButton;