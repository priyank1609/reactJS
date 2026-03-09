import { useState } from "react";

export default function useloginForm() {
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

    return { setEmail, setPassword, email, password, isSubmitting, error, handleSubmit };
}