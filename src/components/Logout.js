import {apiUrl, logoutSuffix} from "../utils/constants/ApiConstants";
import {loginPath} from "../utils/constants/PathConstants";
import {get} from "../utils/ApiService"
import React, {useState, useEffect} from "react";

export default function Logout() {

  const [message, setMessage] = useState("");

  useEffect( () => {
    get(apiUrl + logoutSuffix)
      .then(response => {
        if (response.ok) {
          setMessage("Logout Successful")
        } else {
          setMessage("Failure to log out")
        }
      })
      .catch(error => setMessage("Failure to log out: " + error.toString()));
  }, []);


  return (<div> {message} </div>)
}