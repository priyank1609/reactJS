const FormInput = ({id, label, options, type, name, value, onChange, error}) => {
    const radioComponent = type === "radio" && (
        <>
            {options.map((option) => (
                <label key={option.value}>
                    <input type="radio" value={option.value} onChange={onChange} checked={value === option.value} name={name}/>
                    {option.label}
                </label>
            ))}
        </>
    );
    const selectComponent = type === "select" && (
        <select id={id} name={name} onChange={onChange}>
            {options.map((item) => (
                <option key={item.value} value={item.value}>{item.label}</option>
            ))}
        </select>
    );
    const checkboxComponent = type === "checkbox" && (
        <>
            {options.map((option) => (
                <label key={option.value}>
                    <input type="checkbox" value={option.value} onChange={handleCheckboxUpdate} checked={value.includes(option.value)} name="hobbies"/>
                    {option.label}
                </label>
            ))}
        </>
    );

    function handleCheckboxUpdate(e) {
        const newValue = e.target.checked ? [...value, e.target.value] : value.filter(item => item !== e.target.value);
        onChange({target: {name, value: newValue}})
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            {type === "radio" ? (
                radioComponent
            ) : type === "select" ? (
                selectComponent
            ) : type === "checkbox" ? (
                checkboxComponent
            ) : (
            <input id={id} type={type} name={name} value={value} onChange={onChange} />
            )}
            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    )
}

export default FormInput
