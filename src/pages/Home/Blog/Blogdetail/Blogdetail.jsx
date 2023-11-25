
import { Link } from 'react-router-dom';
import './Blogdetail.css'
const Blogdetail = ({blog}) => {
    console.log('Blogdetail props:', blog);
    const { img, title, description, _id} = blog;



    return (
        
            <Link to={`/blog/${_id}`}>

                <div>
                    <div id='blog-card' className="card  card-compact w-96 bg-base-100 shadow-xl mt-5">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title  blog-title">{title}</h2>
                            <p id="my-paragraph">{description}<span>...</span></p>
                            


                        </div>
                    </div>

                </div>
            </Link>

       

    );
};
export default Blogdetail;