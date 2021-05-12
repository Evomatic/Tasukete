import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default function LoginPanel ({users, currentUser, setCurrentUser, username, setUsername, password, setPassword}) {

    const [userField, setUserField] = useState("")
    const [passField, setPassField] = useState("")
    const [passedCheck, setPassedCheck] = useState(false)

    async function loginSubmitButton() {
        const correctUser = users.filter(user => user.username === username && user.password === password)
        console.log(correctUser)
        if (correctUser.length === 0) {console.log("WRONG"); return alert("Error, please select matching username and password.") }
        else {
            setCurrentUser(correctUser)
            setPassedCheck(true)}
    }
/*
    useEffect(() => {
        currentUser.length !== 0;
        console.log("trigger")
    }, [currentUser])
*/
    return passedCheck ? (
        <section>
            <Redirect to="/formpage" />
        </section>
    ) : (
        <section>
            <p>Please input Username and Password</p>
                <form>                
                        <label htmlFor="userField">Username: </label>
                        <input type="text" id="userField" name="userField" maxLength="16" onChange={(e) => setUsername(e.target.value)}/><br/>
                        <label htmlFor="passField">Password:</label>
                        <input type="password" id="passField" name="passField" maxLength="16"onChange={(e) => setPassword(e.target.value)}/><br/>
                </form>
            <button className="loginSubmitButton" onClick={() => loginSubmitButton()}>Submit</button>
        </section>
        )
}