import React from "react";

export default function Scenario(props) {
    const { scenario = "" } = props

    return <span>{scenario}</span>;
}