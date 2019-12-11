import React, {useState, useEffect} from "react";
import {apiUrl, beginSuffix, commandSuffix} from "../utils/constants/ApiConstants";
import {get, post} from "../utils/ApiService";
import Dialog from "./Dialog";
import Scenario from "./Scenario";
import ErrorBlock from "./ErrorBlock";
import Cmd from "./Cmd";

export default function Home() {

    const [dialog, setDialog] = useState("Loading...");
    const [scenario, setScenario] = useState("Loading...");
    const [error, setError] = useState(false);

    //Start
    useEffect(() => {
        get(apiUrl + beginSuffix)
            .then(res => {
                if (res.status === 500) {
                    setError(true);
                }

                return res.json() || "";
            }).then(data => {
            setScene(data);
        }).catch(fail);
    }, []);

    const postInput = event => {
        event.preventDefault();

        const {target} = event;
        const {command} = target;
        const {value} = command;

        if (value === "help") {
            setDialog(help());
        } else {

            post(apiUrl + commandSuffix + "?command=" + value)
                .then(res => {
                    if (res.status === 500) {
                        setError(true);
                    } else {
                        setError(false);
                    }

                    return res.json() || "";
                }).then(data => {
                setScene(data);
            }).catch(fail);
        }
    };

    const setScene = data => {
        const {
            dialog = "The situation broke itself, you're somehow in a nothingless void",
            scenario
        } = data;
        setDialog(dialog);
        !!scenario && setScenario(scenario);
    };

    const fail = (data) => {
        console.log("poop");
        console.log(data);
        const {message} = data;
        setScenario("The entire world fragments into disarray. The world is broken. It's creator failed you.");
        setDialog("You can't do anything. There is nothing you can do. You are unable to accomplish tasks." +
            " There is no command available to execute. You are useless.");
        setError(true);
    };

    const help = () => {
        return (
            <ul>You can:
                <li>GO (LEFT, RIGHT, FORWARD, BACKWARD)</li>
                <li>TAKE (anItemInTheRoom)</li>
                <li>EXAMINE (somethingInTheRoom)</li>
                <li>INSPECT (anItemInYourInventory)</li>
            </ul>
        );
    }

    return (
        <div class="root">
            <Scenario scenario={scenario}/>
            <Cmd postFunction={postInput.bind(this)}/>
            <Dialog dialog={dialog}/>
            {error && (
                <ErrorBlock error={"The game either got a server error, or failed to handle the HTTP Request... " +
                "try refreshing the page? The game might be broken. Sorry!"}/>
            )}
        </div>
    )
}