import React, {useState, useEffect} from "react";
import {apiUrl, commandSuffix} from "../utils/constants/ApiConstants";
import {post} from "../utils/ApiService";

export default function Cmd(props) {

    const { postFunction } = props;

    return <form onSubmit={postFunction}>
        > <input autoComplete="off" autoFocus="" type="text" name="command" onSubmit={postFunction} />
    </form>;
}