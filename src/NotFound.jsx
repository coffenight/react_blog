import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry, this page not found</h2>
            <Link to="/">Go to Homepage</Link>
        </div>
     );
}
 
export default NotFound;