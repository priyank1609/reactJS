import React from 'react'

const TodoWithSlug = async ({params}) => {
    const {slug} = await params;
    console.log(slug);

    return (
        <div>
            Todo With Slug
        </div>
    )
}

export default TodoWithSlug
