import React from 'react'
import { ProjectItem } from './ProjectItem';


export const ProjectList = () => {
    return (
        <div className="py-5">
            {/* List all project items below with a title and a link */}
                <ProjectItem title="Client Panel (Angular)" link="https://clientpanelprod-23957.firebaseapp.com" id="1"/>
                <ProjectItem title="Note Keeper (Angular + Ionic)" link="https://note-keeper-3e377.firebaseapp.com/collections" id="2"/>
                <ProjectItem title="Github Finder (React)" link="https://githubfinder0820.netlify.app" id="3"/>
                <ProjectItem title="Contact Keeper (React)" link="https://guarded-earth-48792.herokuapp.com" id="4"/>
                <ProjectItem title="Starwars Zombies (Unity Game)" link="https://gamejolt.com/games/starwars-zombies/421504" id="5"/>
                <ProjectItem title="BeavDMS Senior Project (Vue, AWS)" link="http://www.beavdms.com" id="6"/>
                <ProjectItem title="Prime Dictation (XCode): View on iOS App Store" id="7"/>
        </div>
    )
}
