import { useParams } from 'react-router-dom';
import './Blogdetails.css'
import { useEffect, useState } from 'react';

const Blogdetails = () => {
    const {id}=useParams();
    console.log(id)
    const [packagePost,setPackagePost]=useState(null);
    useEffect(()=>{
       fetch('http://localhost:5000/blog')
       .then(res=>res.json())
       .then(data=>{
           const post = data.find(post=>post.id===id);
           setPackagePost(post)
           console.log(packagePost)
       })
    },[])
    return (
        <div>
            <div>
               <div id='' className="blog  mx-auto ">
                
                <div className="blog-div">
                <figure><img className='blog-img' src="https://i.ibb.co/cLy8Q38/image.png" alt="Shoes"/></figure>
                    <h2 className="blog-title font-bold">Web Developer</h2>
                    <p className='blog-p'>If a dog chews shoes whose shoes does he choose? ChatGPT is a natural language processing tool driven by AI technology that allows you to have human-like conversations and much more with the chatbot. The language model can answer questions and assist you with tasks, such as composing emails, essays, and code</p>
                   
         
           
                </div>
       
            </div>
           
        </div>
        </div>
    );
};

export default Blogdetails;