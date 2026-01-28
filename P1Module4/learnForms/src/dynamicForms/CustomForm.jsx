import { useState } from "react"
import FormInput from "./FormInput"

const CustomForm = ({config, onSubmit, isPending}) => {
    const initData = config.reduce((acc, field) => {
        acc[field.name] = field.defaultValue || ""
        return acc;
    }, {});
    const [data, setData] = useState(initData);
    const [error, setError] = useState({});

    function handleInputUpdate(e) {
        const {name, value} = e.target;
        const newData= {...data, [name]: value};
        setData(newData);

        const field = config.find(item => item.name === name);
        const message = field.validate(value, data);
        if(message){
            setError(prevError => {
                return {...prevError, [name]: message}
            })
        }else{
            setError(prevError => {
                return {...prevError, [name]: undefined}
            })
        }
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        const newError = {};
        config.forEach(item => {
            const name = item.name;
            const value = data[name];
            const error = item.validate && item.validate(value, data);
            if(error){
                newError[name] = error;
            }
        })
        setError(newError);
        if(Object.keys(newError).length == 0){
            onSubmit(data);
            console.log("Success",data);
        }else{
            console.log("Errors are here", newError)
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {config.map(item => <FormInput {...item} key={item.id} value={data[item.name]} onChange={handleInputUpdate} error={error[item.name]}/>)}

            <button disabled={isPending} type="submit">Submit</button>
        </form>
    )
}

export default CustomForm
