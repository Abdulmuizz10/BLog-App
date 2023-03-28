import { Link } from "react-router-dom";

const ErrorPage = () => {
    return ( 
        <div className="error">
            <p style={{textAlign: "center", margin:"10px", fontSize:"25px"}}>Sorry</p>
            <h2 style={{textAlign:"center", color:"red", fontSize:"25px",margin:"10px"}}>THIS IS AN ERROR PAGE</h2>
            <p style={{ textAlign:"center", textDecoration:"underline" }}><Link to="/">Back to the hompage</Link></p>
        </div>
     );
}
 
export default ErrorPage;