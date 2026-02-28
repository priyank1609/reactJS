import { useQuery } from "@tanstack/react-query";

const PostsList = () => {
    function fetchPosts() {
        return fetch("https://dummyjson.com/posts?limit=5")
        .then(r => r.json())
        .then(d => d.posts);
    }

    const { data: posts, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts
    });

    if (isLoading) return <p>Loading...</p>;

    return (
        <ul>
            {posts.map(p => (
                <li key={p.id}>{p.title}</li>
            ))}
        </ul>
    );
};

export default PostsList;