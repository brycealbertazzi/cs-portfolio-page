import React from 'react'
import { ProjectItem } from './ProjectItem';

export const ProjectList = () => {
    return (
        <div className="py-5">
            {/* List all project items below with a title and a link */}
                <ProjectItem title="Keyword Clutch" link="https://keywordclutch.com" id="keyword-clutch"/>
                <ProjectItem title="Github Finder" link="https://githubfinder0820.netlify.app" id="github-finder"/>
                <ProjectItem title="Prime Dictation: View on iOS App Store" id="prime-dictation"/>
                <ProjectItem title="Note Keeper" link="https://note-keeper-3e377.firebaseapp.com/collections" id="note-keeper"/>
                <ProjectItem title="Client Panel" link="https://clientpanelprod-23957.firebaseapp.com" id="client-panel"/>
                <ProjectItem title="Starwars Zombies" link="https://gamejolt.com/games/starwars-zombies/421504" id="starwars-zombies"/>
        </div>
    )
}
