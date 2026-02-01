import axios from "axios";
import { useEffect, useState } from "react"

export const useQuery = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            setIsPending(true);
            const response = await axios.get(url);
            setData(response.data);
        } catch(e) {
            setError(e);
        } finally {
            setIsPending(false);
        }
    }

    useEffect(() =>{
        fetchData()
    }, [url]);

    return { data, isPending, error };
}