/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './ProjectDetail.css'
import { ProjectDetailItem } from './ProjectDetailItem';
import { ProjectDescriptions, ProjectImages } from '../Utils';

export const ProjectDetail = props => {

    useEffect(() => {
        if (!props.location.projectProps) props.history.push('/')
    }, [])

    return (
        <div>
            {props.location.projectProps
            ?   
                <ProjectDetailItem title={props?.location?.projectProps?.title} link={props.location.projectProps?.link} description={ProjectDescriptions[`${props?.location?.projectProps?.id}`]} imageSrcs={ProjectImages[props?.location?.projectProps?.id]} />
            : 
                <div className="text-danger m-4">
                    <h3>Please return to the home page...</h3>
                </div> 
            }
        </div>
    )
};


