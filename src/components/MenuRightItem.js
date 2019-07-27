import React from "react";
import { Link } from "react-router-dom";

export default function MenuRightItem({path = "", children = ""}) {
    return (
        <Link to={path} className="menuItem rightItem">{children}</Link>
    )
}
