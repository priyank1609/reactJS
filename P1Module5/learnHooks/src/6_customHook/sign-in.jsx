import React, { useState } from 'react'
import { useForm } from './useForm';

const SignIn = () => {
    const {handleFormSubmit, register} = useForm({
        initialValues: { email: "", password: "" },
        onSubmit
    })

    function onSubmit(formData) {
        console.log(formData);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Email
                    <input type="email" {...register('email')} />
                </label>

                <label>
                    Password
                    <input type="password" {...register('password')} />
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignIn
