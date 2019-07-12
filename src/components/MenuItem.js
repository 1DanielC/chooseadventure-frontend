import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({path = "", children = ""}) {
    return (
        <Link to={path} className="menuItem">{children}</Link>
    )
}
