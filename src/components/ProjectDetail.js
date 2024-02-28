import React from 'react'
import './ProjectDetail.css'
import { ProjectDetailItem } from './ProjectDetailItem';
import { ProjectDescriptions, ProjectImages } from '../Utils';

export const ProjectDetail = props => {
    const { id, title, link } = props.location.projectProps;

    return (
        <div>
            {props.location.projectProps
            ?   
                <ProjectDetailItem title={title} link={link} description={ProjectDescriptions[`${id}`]} imageSrcs={ProjectImages[id]} />
            : 
                <div className="text-danger m-4">
                    <h3>Please return to the home page...</h3>
                </div> 
            }
        </div>
    )
};


