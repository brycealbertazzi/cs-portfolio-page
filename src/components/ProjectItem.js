import React from 'react'
import { Link } from 'react-router-dom';

export const ProjectItem = ({title, id}) => {
    
    return (
        <div className="card text-center text-light m-4 p-3 border border-light" style={{backgroundColor: "#212529"}}>
            <h3 className="text-success">{title}</h3>
                <Link to={{
                    pathname: `/project/${id}`,
                }}>
                    <button className="btn btn-outline-light">Detail</button>
                </Link>
        </div>
    )
};


