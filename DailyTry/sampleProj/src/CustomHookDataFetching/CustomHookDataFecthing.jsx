import Post from "./Post";
import { useQuery } from "./useQuery";

const CustomHookDataFecthing = () => {
    const { data, isPending, error } = useQuery("https://dummyjson.com/posts");

    if(error) {
        return <p>Error: {error}</p>
    }

    if(isPending) {
        return <p>Loading .....</p>
    }

    return (
        <div>
            {data?.posts.map((item) => (
                <Post key={item.id} item={item} />
            ))}
        </div>
    )
}

export default CustomHookDataFecthing
