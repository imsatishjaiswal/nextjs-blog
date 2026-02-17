// "use client"
import { useParams } from 'next/navigation.js'
import React from 'react'

// function BlogDetails() {
//  const param = useParams()
//  const {id} = param;
//   return (
//     <div>blog Details {id}</div>
//   )
// }

async function BlogDetails({param}) {
const id = await param;
   return (
    <>
    <div>blog Details {id}</div>
    </>
  )
}
export default BlogDetails