import { useActionState, useState } from "react";

const IntroForm = () => {
    const initState = {
        name: "priyank sharma",
        email: "priyank@gmail.com",
        password: "1234",
        gender: 'male',
        country: 'usa',
        hobbies: ["sports"]
    }
    const [state, action, isPending] = useActionState(formSubmition, initState);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        hobbies: [],
        country: "",
    });
    const emptyState= {
        name: "",
        email: "",
        password: "",
        gender: "",
        hobbies: [],
        country: "",
    };

    async function formSubmition(prevData, formData) {
        console.log(prevData);
        console.log(Object.fromEntries(formData));
        console.log("Submitting...");
        await new Promise((res) => setTimeout(res, 4000));

        let data=Object.fromEntries(formData);
        const allHobbies = formData.getAll("hobbies");
        data={...data, hobbies: allHobbies};

        console.log(`Submitted data ${data}`);

        return {};
    }
    function handleInputUpdate(e) {
        const { name, value, type, checked } = e.target;
        if(type==='checkbox'){
            const newHobbies = checked ? [...data.hobbies, value] : data.hobbies.filter(item => item !== value);
            const newData = {...data, hobbies: newHobbies}
            setData(newData);
            return;
        }
        const newData = {...data, [name]: value};
        setData(newData);
    }
    function onFormSubmit(e) {
        e.preventDefault();
        console.log(data);
        setData(emptyState);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label>
                Name
                <input type="text" name="name" value={data.name} onChange={handleInputUpdate}/>
            </label>
            <br />
            <label>
                Email
                <input type="email" name="email" value={data.email} onChange={handleInputUpdate}/>
            </label>
            <br />
            <label>
                Password
                <input type="password" name="password" value={data.password} onChange={handleInputUpdate}/>
            </label>
            <br />
            <label>
                Gender
                <label>
                    <input type="radio" value="male" name="gender" checked={"male" === data.gender} onChange={handleInputUpdate}/>
                    Male
                </label>
                <label>
                    <input type="radio" value="female" name="gender" checked={"female" === data.gender} onChange={handleInputUpdate}/>
                    Female
                </label>
                <label>
                    <input type="radio" value="others" name="gender" checked={"other" === data.gender} onChange={handleInputUpdate}/>
                    Otehrs
                </label>
            </label>
            <br />
            <label>
                Select a country
                <select name="country" value={data.country} onChange={handleInputUpdate}>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                </select>
            </label>
            <br />
            <label>
                Hobbies
                <label>
                    <input type="checkbox" value="reading" name="hobbies" checked={data.hobbies?.includes("reading")} onChange={handleInputUpdate}/>
                    Reading
                </label>
                <label>
                    <input type="checkbox" value="sports" name="hobbies" checked={data.hobbies?.includes("sports")} onChange={handleInputUpdate}/>
                    Sports
                </label>
                <label>
                    <input type="checkbox" value="cooking" name="hobbies" checked={data.hobbies?.includes("cooking")} onChange={handleInputUpdate}/>
                    Cooking
                </label>
            </label>
            <br />
            <button disabled={isPending} type="submit">Submit</button>
            <button type="button">Cancel</button>
        </form>
    )
}

export default IntroForm
