import React from 'react'
import './ProjectDetail.css'

export const ProjectDetailItem = ({title, link, description, imageSrcs}) => {

    return (
        <div>
            {/* Title */}
            <div className="p-3">
                <h1 className="title text-center text-success pb-2">{title}</h1>
            </div>
            <div className="content m-4">
                <div className="link mb-5">
                    {/* If we have a link, display it */}
                    {link && 
                        <a href={link} target="_blank" rel="noreferrer">
                            <button className="btn btn-lg btn-outline-info">View on the Web</button>
                        </a>
                    }
                </div>
                <div className="description mb-5 mx-5">
                    <h4 className="text-warning">
                        &emsp; &emsp; {description}
                    </h4>
                </div>
                <div className="images">
                    <div>
                        {imageSrcs.map((src, index) => {
                            return (
                                <img src={src} key={index} className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
  )
}
