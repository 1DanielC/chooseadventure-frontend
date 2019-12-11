import React from "react";

export default function Dialog(props) {
    const { dialog = "" } = props

    return <span>{dialog}</span>;
}