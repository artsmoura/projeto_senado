import React from 'react';
import './checkboxSwitch.css';

export default props => {
    const { title, id, name, label, checked, changeInput, disabled } = props;

    return (
        <div className='custom-control-checkbox-switch'>
            <input
                type='checkbox'
                onChange={changeInput}
                defaultChecked={checked}
                className='custom-input'
                id={id}
                name={name}
                disabled={disabled}
            />
            <label className='custom-label' htmlFor={id} title={title}>
                {label}
            </label>
        </div>
    );
};
