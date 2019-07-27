import React from 'react';
import MenuItem from "./MenuItem";
import MenuRightItem from "./MenuRightItem";
import {loginPath, logoutPath, homePath, profilePath} from "../utils/constants/PathConstants";

export default function Menu() {
    return (
        <div className="menu">
            <MenuItem path={homePath}>Home</MenuItem>
            <MenuItem path={loginPath}>Login</MenuItem>
            <MenuItem path={logoutPath}>Logout</MenuItem>
            <MenuRightItem path={profilePath}>Profile</MenuRightItem>

        </div>
    )
}