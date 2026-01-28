import { useState } from "react"
import { z, ZodError } from "zod";
import './LearnZod.js'

const ZodLogin = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const zodSchema = z.object({
        email: z.string().trim().email("Not a valid email bro"),
        password: z.string().trim().min(6, "We need 6 chars atleast").max(10, "Not more than 10 chars bro")
    })

    function handleFormSubmit(e) {
        e.preventDefault();
        try {
            zodSchema.parse(data);
            setErrors({});
        } catch (err) {
            if (err instanceof ZodError) {
                const newErrors = err.issues.reduce((acc, field) => {
                    acc[field.path[0]] = field.message;
                    return acc;
                }, {});
                setErrors(newErrors);
            }
        }
    }
    function handleInputUpdate(e) {
        const {name, value} = e.target;
        setData({...data, [name]: value})
    }

    return (
        <div>
            <h1>Zod Login</h1>
            <form onSubmit={handleFormSubmit} noValidate>
                <label>
                    Email
                    <input type="email" name="email" value={data.email} onChange={handleInputUpdate}/>
                </label>
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                <br />
                <label>
                    Password
                    <input type="password" name="password" value={data.password} onChange={handleInputUpdate}/>
                </label>
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ZodLogin
