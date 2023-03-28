import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";


const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory();

    const handleClick = () => {
                 
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push("/")
        })
    }
    return (  
        <div className="blog-details">
            {error && <div className="notification" style={{textAlign:"center", color:"red", fontSize:"25px"}}> { `${error}.....` } </div> }
            { isPending && <div className="container"> 
                <div className="load load1"></div>
                <div className="load load2"></div>
                <div className="load load3"></div>
            </div> } 
            { blog && (
                <article>
                    <h2> { blog.title }</h2>
                    <p>Written by { blog.author } </p>
                    <div className="bodies"> { blog.body} </div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;