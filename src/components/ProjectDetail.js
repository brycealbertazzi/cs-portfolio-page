import React from 'react'
import './ProjectDetail.css'

export const ProjectDetail = props => {
    

    return (
        <div>
            {props.location.projectProps
            ? <div>
                {/* Title */}
                <div className="border-bottom p-3" style={{backgroundColor: '#282828'}}>
                    <h1 className="title text-center text-success pb-2">{props.location.projectProps.title}</h1>
                </div>
                <div className="content m-4">
                    <div className="link mb-5">
                        {/* If we have a link, display it */}
                        {props.location.projectProps.link && 
                             <a href={props.location.projectProps.link} target="_blank">
                                <button className="btn btn-lg btn-outline-info">View on the Web</button>
                             </a>
                        }
                    </div>
                    <div className="description mb-5">
                        {/* Description */}
                        {function() {
                            switch (props.location.projectProps.id) {
                                case '1':
                                    return <h4 className="text-warning">
                                        &emsp; &emsp; Client Panel is an Angular application with authentication and state management. In this app
                                        users can create clients and manage them. Clients are stored in a database with all CRUD operations available.
                                        This Angular app demonstrates the ability to create a fully-functional app and deploy to a server.
                                    </h4>
                                case '2':
                                    return <h4 className="text-warning">
                                        &emsp; &emsp; Note keeper is a hybrid app made with Angular and Ionic. Users are able to
                                        create note collections and create notes in those collections. This Angular/Ionic app stores data in Google Firebase
                                        and is very responsive. The creation of this app demonstrates abilities to use multiple different frameworks together and make a hybrid app,
                                        while also integrating an app with a database for long-term storage.</h4>
                                case '3':
                                    return <h4 className="text-warning">
                                        &emsp; &emsp; GitHub Finder was created with React and integrates with the GitHub API. Users are able to search for any GitHub user
                                        they want from within the app. The UI was strategically designed to display the users nicely. Github Finder uses axios and React state management tools
                                        to search for and organize users on Github. This React app demonstrates the ability to integrate an app with a third party API and make use of it.</h4>
                                case '4':
                                    return <h4 className="text-warning">
                                        &emsp; &emsp; Contact Keeper is a React app with a MERN (Mongo, Express, React, Node) backend. Users may create an account, log in
                                        then create, delete and manage contacts. This app has its own API built into it, including Express to manage registered users and to validate login and
                                        registration. Contact Keeper shows the ability to create a full stack MERN app with authentication and proper state management.</h4>
                                case '5':
                                    return <h4 className="text-warning">
                                        &emsp; &emsp; Starwars Zombies is a game created with Unity. This is one of the better games I've made that I wanted to show off here.
                                        Check it out!</h4>
                                case '6':
                                    return <h4 className="text-warning">
                                        &emsp; &emsp; Prime Dication is a iOS app made with Xcode and deployed to the iOS App Store. It is a dication (voice recording) app where users can make a recording and
                                        send it to their Dropbox account with one click of a button. Prime Dication was created for a client with specific requirements for the app.
                                        This iOS app demonstrates the ability to develop a business-oriented app to the specific needs of a client, while communicating effectively.</h4>                               
                                default:
                                    return <h4 className="text-warning"> &emsp; &emsp; No Description...</h4>  
                            }
                        }()}
                    </div>
                    <div className="images">
                        {/* Images */}
                        {function() {
                            switch (props.location.projectProps.id) {
                                case '1':
                                    return <div>
                                                <img src="https://snipboard.io/kZUagi.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                                <img src="https://snipboard.io/BxMmEF.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                                <img src="https://snipboard.io/aAcfFO.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                            </div>
                                case '2':
                                    return <div>
                                                <img src="https://snipboard.io/SWIOjZ.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                                <img src="https://snipboard.io/izpfwM.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                                <img src="https://snipboard.io/zUMDi0.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                            </div>
                                case '3':
                                    return <div>
                                                <img src="https://snipboard.io/3B5dpu.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                                <img src="https://snipboard.io/KnwGep.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                                <img src="https://snipboard.io/olneMS.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                            </div>
                                case '4':
                                    return <div>
                                                <img src="https://snipboard.io/D8Hmj9.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                                <img src="https://snipboard.io/aBVJed.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                                <img src="https://snipboard.io/2jwKzN.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                                <img src="https://snipboard.io/9XBfrc.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                            </div>
                                case '5':
                                    return <div>
                                                <img src="https://snipboard.io/FqfSs4.jpg" className="img-fluid rounded mx-auto d-block w-75 mb-5" alt="..."></img>
                                            </div>
                                case '6':
                                    return <div>
                                                <img src="https://snipboard.io/Tqa5uN.jpg" className="img-fluid rounded mx-auto d-block w-25 mb-5" alt="..."></img>
                                                <img src="https://snipboard.io/u8MZtw.jpg" className="img-fluid rounded mx-auto d-block w-25 mb-5" alt="..."></img>
                                                <img src="https://snipboard.io/40mV6E.jpg" className="img-fluid rounded mx-auto d-block w-25 mb-5" alt="..."></img>
                                                <img src="https://snipboard.io/seWyiF.jpg" className="img-fluid rounded mx-auto d-block w-25 mb-5" alt="..."></img>
                                            </div>                              
                                default:
                                    return <h4 className="text-danger">No Images...</h4>  
                            }
                        }()}
                    </div>
                    
                </div>
            </div>
            : <div className="text-danger m-4">
                <h3>Please return to the home page...</h3>
            </div> 
            }
        </div>
    )
};


