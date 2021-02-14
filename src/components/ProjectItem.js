import React from 'react'

export const ProjectItem = ({title, link}) => {
    return (
        <div className="card text-center bg-dark text-light m-4 p-3">
            <h3 className="text-success">{title}</h3>
                <a href={link} target="_blank">View</a>
        </div>
    )
}
