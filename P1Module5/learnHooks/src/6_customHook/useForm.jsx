import { useState } from "react"

export const useForm = ({initialValues, onSubmit}) => {
    const [formData, setFormData] = useState(initialValues);

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        onSubmit(formData);
    }
    function register(name) {
        return {
            name,
            onChange: handleChange,
            value: formData[name] || ""
        }
    }

    return {handleFormSubmit, register}
}