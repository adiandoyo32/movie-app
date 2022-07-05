import React from 'react';

import './input.scss';

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: any;
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange ? (e) => props.onChange(e) : undefined}
        />
    );
}

export default Input;
