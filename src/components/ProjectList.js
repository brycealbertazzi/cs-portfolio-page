import React from 'react'
import { ProjectItem } from './ProjectItem';

export const ProjectList = () => {
    return (
        <div className="py-5">
            {/* List all project items below with a title and a link */}
                <ProjectItem title="Keyword Clutch" id="keyword-clutch"/>
                <ProjectItem title="Github Finder" id="github-finder"/>
                <ProjectItem title="Prime Dictation: View on iOS App Store" id="prime-dictation"/>
                <ProjectItem title="Note Keeper" id="note-keeper"/>
                <ProjectItem title="Client Panel" id="client-panel"/>
                <ProjectItem title="Starwars Zombies" id="starwars-zombies"/>
        </div>
    )
}
