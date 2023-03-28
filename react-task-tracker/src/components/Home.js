import React from 'react';
import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    // const handleDelete = (id) => {
    //     const newblogs = blogs.filter((blog) => blog.id !== id)
    //     setBlog(newblogs)
    // }


    return (
        <div className="home">
            {error && <div className="notification" style={{textAlign:"center", color:"red", fontSize:"25px"}}> { `${error}.....` } </div> }
            {isPending && <div className="container">
                <div className='load load1'></div>
                <div className='load load2'></div>
                <div className='load load3'></div>
            </div> }
            { blogs && <Bloglist blogs={blogs} />}
        </div>
    );
}
 
export default Home;