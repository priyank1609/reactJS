import React, { useState } from 'react'
import LoginPresentational from './Login-Presentational';

const LoginContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            await new Promise((res) => setTimeout(res, 1000));

            if (!email || !password)
                throw new Error("Email and password are required");

            console.log("Login success with", email, "and", password);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <LoginPresentational 
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                error={error}
                isSubmitting={isSubmitting}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default LoginContainer
