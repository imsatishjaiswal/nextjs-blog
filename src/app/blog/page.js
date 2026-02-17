import React from 'react'
import Link from 'next/link'
import posts from "../data.js"
// const posts = [
//     {
//         id: 1,
//         blogTitle: "Title 1",
//         blogPost: "This is 1 post!!"
//     },
//     {
//         id: 2,
//         blogTitle: "Title 2",
//         blogPost: "This is 2 post!!"
//     },
//     {
//         id: 3,
//         blogTitle: "Title 3",
//         blogPost: "This is 3 post!!"
//     }
// ]
function blog() {
    return (
        <>
            <h1>Blog Posts</h1>
            {posts.map((item, index) => (
                <div key ={index}>
                    <Link href={`/blog/${item.id}`}>{item.blogTitle}</Link>
                </div>
            ))}
        </>
    )
}

export default blog