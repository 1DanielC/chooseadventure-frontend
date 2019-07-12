import React from 'react';
import MenuItem from "./MenuItem";
import { loginPath, logoutPath, homePath } from "../utils/constants/PathConstants";

export default function Menu() {
  return (
      <div className="menu">
        <MenuItem path={homePath}>Home</MenuItem>
        <MenuItem path={loginPath}>Login</MenuItem>
        <MenuItem path={logoutPath} >Logout</MenuItem>
      </div>
  )
}