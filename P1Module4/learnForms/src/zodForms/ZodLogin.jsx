import { z, ZodError } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import "./LearnZod.js";
import { useForm } from "react-hook-form";

const ZodLogin = () => {
    // old code
    // const [data, setData] = useState({
    //     email: "",
    //     password: "",
    // });
    // const [errors, setErrors] = useState({});
    // function handleFormSubmit(e) {
    //     e.preventDefault();
    //     try {
    //         zodSchema.parse(data);
    //         setErrors({});
    //     } catch (err) {
    //         if (err instanceof ZodError) {
    //         const newErrors = err.issues.reduce((acc, field) => {
    //         acc[field.path[0]] = field.message;
    //         return acc;
    //         }, {});
    //         setErrors(newErrors);
    //     }
    //   }
    // }
    // function handleInputUpdate(e) {
    //     const { name, value } = e.target;
    //     setData({ ...data, [name]: value });
    // }
    const zodSchema = z.object({
        email: z.string().trim().email("Not a valid email bro"),
        password: z
            .string()
            .trim()
            .min(6, "We need 6 chars atleast")
            .max(10, "Not more than 10 chars bro"),
        age: z.number().min(18).optional()
    });
    const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting, isValid } } = useForm({
        defaultValues: {
            email: "anuj@gmail.com",
            password: "adminn"
        },
        resolver: zodResolver(zodSchema),
        shouldUnregister: true
    });
    const [email, isAdult] = watch(["email", "isAdult"]);

    async function sendToBackend(data) {
        console.log("Sending to the backend");
        await new Promise((resolve) => setTimeout(resolve,3000))
        console.log("Sent", data);
    }

    return (
        <div>
            <h1>Zod Login</h1>
                <form onSubmit={handleSubmit(sendToBackend)} noValidate>
                <label>
                    Email
                    <input
                        type="email"
                        {...register("email")}
                        // name="email"
                        // value={data.email}
                        // onChange={handleInputUpdate}
                    />
                </label>
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                <br />
                <label>
                    Password
                    <input
                        type="password"
                        {...register("password")}
                        // name="password"
                        // value={data.password}
                        // onChange={handleInputUpdate}
                    />
                </label>
                {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                <br />
                <label>
                    Are you above 18?
                    <input type="checkbox" {...register("isAdult")}/>
                </label>
                <br />
                {isAdult && <label>
                    Age
                    <input type="number" {...register("age", {valueAsNumber: true})}/>
                </label>}
                <br />
                <button disabled={isSubmitting || !isValid}>Submit</button>
                <button type="button" onClick={() => reset({email: "", password: ""})}>Reset</button>
            </form>
        </div>
    );
};

export default ZodLogin;
