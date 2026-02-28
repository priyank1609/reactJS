import React, { useActionState } from 'react'

const UseActionState = () => {
    // Topic 1 – What is useActionState (in detail)
    // async function increment(previousState) {
    //     return previousState + 1;
    // }

    // const [count, formAction] = useActionState(increment, 0);

    // return (
    //     <form>
    //         <p>Count: {count}</p>
    //         <button formAction={formAction}>Increment</button>
    //     </form>
    // );


    // Topic 2 – How to use useActionState with form data and
    async function submitName(previousState, formData) {
        const name = formData.get("username");
        // simulate server delay
        await new Promise(res => setTimeout(res, 1500));
        return `Hello ${name}`;
    }

    const [message, formAction, isPending] = useActionState(submitName, "");

    return (
        <form action={formAction}>
            <input
                name="username"
                placeholder="Enter name"
            />

            <button disabled={isPending}>
                {isPending ? "Submitting..." : "Submit"}
            </button>

            <p>{message}</p>
        </form>
    );
}

export default UseActionState
