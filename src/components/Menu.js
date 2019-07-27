import React from 'react';
import MenuItem from "./MenuItem";
import MenuRightItem from "./MenuRightItem";
import Image from "./Image";
import {loginPath, logoutPath, homePath, profilePath} from "../utils/constants/PathConstants";

import profileImg from '../styles/something.png';
import profileImgHovered from '../styles/somethinghovered.png';

export default function Menu() {
    return (
        <div className="menu">
            <MenuItem path={homePath}>Home</MenuItem>
            <MenuItem path={loginPath}>Login</MenuItem>
            <MenuItem path={logoutPath}>Logout</MenuItem>
            <MenuRightItem path={profilePath}><Image src={profileImg} srcHovered={profileImgHovered}/> </MenuRightItem>

        </div>
    )
}