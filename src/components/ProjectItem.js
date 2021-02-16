import React from 'react'

export const ProjectItem = ({title, link}) => {
    return (
        <div className="card text-center text-light m-4 p-3 border border-light" style={{backgroundColor: "#212529"}}>
            <h3 className="text-success">{title}</h3>
            {/* If we have a link, display it */}
            {link && <a href={link} target="_blank">View</a>}
        </div>
    )
}
