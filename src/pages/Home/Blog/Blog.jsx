
import { useEffect, useState } from 'react';
import './Blog.css'
import Blogdetail from './Blogdetail/Blogdetail';

const Blog = () => {
    const [blogs,setBlog]=useState([])
    
    // setArrr(arrr.sort(0, 6))
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div className='mt-8  flex flex-wrap justify-evenly'>
         
             {
                blogs.map(blog=><Blogdetail key={blog.id} blog={blog}></Blogdetail>)
             }
        </div>
    );
};

export default Blog;