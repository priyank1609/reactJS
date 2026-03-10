import { useEffect, useState } from "react";
import axios from 'axios';
import { Loader2 } from "lucide-react";

export default function withFetchData(Component, url) {
    return (props) => {
        const [data, setData] = useState(); 
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    await new Promise(resolve => setTimeout(resolve, 2000))
                    const response = await axios.get(url);
                    setData(response.data);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            }
            fetchData();
        }, [])

        if(loading) return <Loader2 className="animate-spin" />

        if(error) return <p className="text-red-500">{error.message}</p>

        return <Component {...props} data={data} />
    }
}