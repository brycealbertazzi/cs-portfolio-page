import React from 'react'
import { ProjectItem } from './ProjectItem';

export const ProjectList = () => {
    return (
        <div className="bg-secondary py-5">
            {/* List all project items below with a title and a link */}
                <ProjectItem title="Client Panel (Angular)" link="https://clientpanelprod-23957.firebaseapp.com"/>
                <ProjectItem title="Place Finder (Angular + Ionic)" link="https://place-finder-67a19.firebaseapp.com"/>
                <ProjectItem title="Note Keeper (Angular + Ionic)" link="https://note-keeper-3e377.firebaseapp.com/collections"/>
                <ProjectItem title="Github Finder (React)" link="https://githubfinder0820.netlify.app"/>
                <ProjectItem title="Starwars Zombies (Unity Game)" link="https://gamejolt.com/games/starwars-zombies/421504"/>
                <ProjectItem title="BeavDMS Senior Project (Vue, AWS)" link="http://www.beavdms.com"/>
                <ProjectItem title="Prime Dictation (XCode): View on iOS App Store"/>
        </div>
    )
}
