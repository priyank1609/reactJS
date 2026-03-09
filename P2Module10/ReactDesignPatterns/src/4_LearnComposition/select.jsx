import React, { createContext, use } from 'react'

const  SelectContext = createContext();

const Select = ({ selected, setSelected, children }) => {    
    return (
        <SelectContext value={{selected, setSelected}}>
            <div>
                {children}
            </div>
        </SelectContext>
    )
}

Select.Option = ({children, value}) => {
    const {selected, setSelected} = use(SelectContext);
    const isSelected = value === selected;

    return <div className={`text-white ${isSelected ? 'bg-blue-400' : 'bg-gray-700'}`} onClick={() => setSelected(value)}>{children}</div>
}

export default Select
