import React from "react";

export default function ErrorBlock(props) {
    const { error = "" } = props

    return <div className="error">{error}</div>;
}