const Post = ({item}) => {
    return (
        <div key={item.id}>
            <h3>
                {item.id}. {item.title}?
            </h3>
            <p>{item.body}</p>
        </div>
    )
}

export default Post
