import React from 'react'

const Input = ({ value, onChange, placeholder, name, className, type, ...props }) => {
    return (
        <input value={value} onChange={onChange} placeholder={placeholder} name={name} className={`border-blue-500 ${className}`} type={type} {...props} />
    )
}

export default Input
