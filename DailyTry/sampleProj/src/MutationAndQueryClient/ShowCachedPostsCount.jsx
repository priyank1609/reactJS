import { useQueryClient } from "@tanstack/react-query";

const ShowCachedPostsCount = () => {
    const queryClient = useQueryClient();

    const posts = queryClient.getQueryData(["posts"]);

    return (
        <p>
            Cached posts count: {posts ? posts.length : 0}
        </p>
    );
}

export default ShowCachedPostsCount