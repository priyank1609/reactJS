import React from 'react'
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
    const {register, handleSubmit, reset} = useForm({
        defaultValues: {
            firstName: "Anuj",
            email: "priyank123@gmail.com"
        }
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("firstName")} />
                <input placeholder="Email" {...register("email")} />
                <button type='submit'>Submit</button>
                <button type="button" onClick={() => reset({email: "", password: ""})}>Reset</button>
            </form>
        </div>
    )
}

export default ReactHookForm
