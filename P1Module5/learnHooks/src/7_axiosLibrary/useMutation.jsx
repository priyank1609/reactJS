import axios from "axios";
import { useEffect, useState } from "react"

export const useMutation = (url, method) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    async function mutate(payload) {
        try {
            setIsPending(true);
            const response = await axios({
                url,
                method,
                data: payload
            })
            setData(response.data);
        } catch(e) {
            setError(e.message);
        } finally {
            setIsPending(false);
        }
    }

    return { mutate, data, isPending, error };
}