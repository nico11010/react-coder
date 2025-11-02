import React from "react";
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Error = () => {

    return(
        <div className="d-flex flex-column justify-content-center align-items-center" >
            <img style ={{height: '400px'}} src="../../public/404-error.png" alt="404-error"/>
            <h1>
                Page Not Found
            </h1>
            <Link className="btn btn-dark" to={'/'}>Volver a Inicio</Link>
        </div>
    );

};

export default Error