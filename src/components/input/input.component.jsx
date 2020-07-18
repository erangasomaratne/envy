import React from 'react';
import './input.styles.scss';

const Input = ({ label, ...rest }) => {
    return (
        <div className='input'>
           <label className='input-label'>{label}</label>
           <input className='input-text-box' {...rest} />
        </div>
    );
};

export default Input;