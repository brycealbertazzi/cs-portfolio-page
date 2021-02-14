import React from 'react'
import { ProjectItem } from './ProjectItem';

export const ProjectList = () => {
    return (
        <div className="bg-secondary py-5">
            {/* List all project items below with a title and a link */}
                <ProjectItem title="Project 1" link="https://www.google.com"/>
                <ProjectItem title="Project 2" link="https://www.google.com"/>
                <ProjectItem title="Project 3" link="https://www.google.com"/>
                <ProjectItem title="Project 4" link="https://www.google.com"/>
                <ProjectItem title="Project 5" link="https://www.google.com"/>
        </div>
    )
}
