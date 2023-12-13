import React from 'react'
import { Link } from 'react-router-dom';

export const ProjectItem = props => {
    
    return (
        <div className="card text-center text-light m-4 p-3 border border-light" style={{backgroundColor: "#212529"}}>
            <h3 className="text-success">{props.title}</h3>
                <Link to={{
                    pathname: `/project/${props.id}`,
                    projectProps: {
                        id: props.id,
                        title: props.title,
                        link: props.link
                    }
                }}>
                    <button className="btn btn-outline-light">Detail</button>
                </Link>
        </div>
    )
};


