import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CheckoutButton from './checkout'

const helpers =[
    
{first_name: "Gaetan", last_name: "Karst", location: "Tokyo", date_birth: "1900-01-01", 
description: "Hello, my name is Gaetan. I have been an Tokyo local for 35 years and have a lot of experience with the city office, legal, medical and some experience in banking.", 
image: "/asset/gaetan.jpg", services: ["city office", "medical", "legal"]},

{first_name: "Yoshio", last_name: "Hasegawa", location: "Tokyo", date_birth: "1900-01-01", 
description: "Hi, my name is Yoshio, I am here to help! I have lived in Tokyo for 25 years and have a lot of experience with administration and banks.", 
image: "/asset/yoshio.jpg", services: ["banking", "apartments", "immigration", "city office", "medical", "legal", "mobile"]},

{first_name: "Evan", last_name: "Trujillo", location: "Tokyo", date_birth: "1989-10-30", 
description: "Hi, my name is Evan, Moving to Tokyo for the first time can be tough! I am here to take the burden...", 
image: "/asset/evan.jpg", services: ["banking", "apartments", "immigration", "city office", "medical", "legal", "mobile"]}, 

{first_name: "Julie", last_name: "Stocks", location: "Osaka", date_birth: "1991-02-10", 
description: "Hi, my name is Julie, I am here to take the burden, I have a lot of experience in apartment hunting!", 
image: "/asset/julie.jpg", services: ["apartments", "immigration", "medical", "mobile"]},

{first_name: "Chris", last_name: "Ackermann", location: "Tokyo", date_birth: "1900-01-01", 
description: "Hi, my name is Chris, and I'd like to offer my help. Having been in Japan for 8 years, I have a lot of experience with the immigration office and apartments.", 
image: "/asset/chirs.jpg", services: ["apartments", "immigration"]}
]

let i = 0;

export default function HelperPanel({ helperInfo, setHelperInfo, userInfo, setUserInfo }) {
    
    // const matchingHelpers = [helpers];
    const [matchingHelpers, setMatchingHelpers] = useState(helpers);
    // const [matchingHelpers, setMatchingHelpers] = useState([]);
    /*
    const getCorrectHelpers = () => {
        console.log("here")

        let rightHelper = helpers.filter((helper) => {
            console.log('😀', helper.services[5])
            console.log('🍆', userInfo[0].service)
           let tempVar = helper.services.includes(userInfo[0].service);
           return tempVar;
        });
        console.log(rightHelper)
        matchingHelpers.push(rightHelper);
        // setMatchingHelpers(rightHelper);
    }
    */
    /*
    useEffect(() => {
        console.log("useeffect")
        getCorrectHelpers();
    }, []);
    */

    function nextHelper() {
        
        if (i >= helpers.length-1) {i = 0}
        else if (i < helpers.length) {i++;}
        
        console.log(helpers[i].first_name)
        //console.log(helpers[i+1].first_name)
        console.log(i)
        console.log(helpers.length)
        setMatchingHelpers(matchingHelpers.concat(helpers[i]))
        console.log(matchingHelpers)
    }

    function displayHelperPanel() {
        return (
            <div className="helper-information">
            <h3 key={matchingHelpers[i].first_name}>{matchingHelpers[i].first_name} is ready to help...</h3>
            <img src={matchingHelpers[i].image} id="helper-picture" alt="helper-picture" />
            <p>{matchingHelpers[i].description}</p>
            </div>
            )
    }

    useEffect(() => {
        displayHelperPanel();
    }, [])
    
    return (
        <>
            <div className="helper-panel">
                
                    {displayHelperPanel()}
                    
                
                <div id="button-container">
                    <button id="next-btn" onClick={() => {nextHelper()}}>Next</button>
                    <CheckoutButton />
                </div>
            </div>
        </>
    )
}