import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddPost = () => {

    function addPost(post) {    
        return fetch("https://dummyjson.com/posts/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(r => r.json());
    }

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: addPost,
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]);
        }
    });

    return (
        <button
            onClick={() =>
                mutation.mutate({
                    title: "New Post",
                    body: "Hello",
                    userId: 1
                })
            }
        >
            Add post
        </button>
    );
}

export default AddPost
