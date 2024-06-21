import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';

function BlogPage() {
    const [blogs,setBlogs]= useState([]);

    useEffect(()=>{
        async function fetchBlogs(){
            let url= `1.32 time`;
            const response= await fetch(url);
            const data= await response.json();
            console.log(data);
            setBlogs(data); 
        }

        fetchBlogs();
    },[])
  return (
    <div>
        {/* category section */}
        <div>Page Category</div>

        {/* blogcards section */}
        <div>
            <BlogCards blogs={}/>
        </div>

        {/* pagination section */}
        <div>Paginations</div>
    </div>
  )
}

export default BlogPage