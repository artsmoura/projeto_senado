import React from 'react';
import './checkbox.css';

export default ({ name, text, changeInput, id, checked, disabled }) => {
    return (
        <div className='custom-control-checkbox'>
            <input type='checkbox' className='custom-input' name={name} id={id ? id : name} onChange={changeInput} checked={checked} value={checked} disabled={disabled} />
            <label className='custom-label' htmlFor={id ? id : name}>
                {text}
            </label>
        </div>
    );
};