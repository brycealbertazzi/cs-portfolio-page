/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './ProjectDetail.css'
import { ProjectDetailItem } from './ProjectDetailItem';
import { PageLinks, PageTitles, ProjectDescriptions, ProjectImages } from '../Utils';
import { useParams } from 'react-router-dom'

export const ProjectDetail = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    
    useEffect(() => {
        setTitle(PageTitles[id])
        setLink(PageLinks[id])
    }, [id])

    return (
        <div>
            {id ?   
                <ProjectDetailItem title={title} link={link} description={ProjectDescriptions[id]} imageSrcs={ProjectImages[id]} />
            : 
                <div className="text-danger m-4">
                    <h3>Please return to the home page...</h3>
                </div> 
            }
        </div>
    )
};


