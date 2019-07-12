import React, {useState} from "react";
import {apiUrl, loginSuffix} from "../utils/constants/ApiConstants";
import interstitialGif from '../styles/interstitial.gif';
import {loginPost} from "../utils/ApiService";
import {homePath} from "../utils/constants/PathConstants";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  function login(event) {
    event.preventDefault();
    setIsLoading(true);
    const response = loginPost(apiUrl + loginSuffix, `username=${username}&password=${password}`)
      .then(response => {
        if (response.ok) {
          setLoginMessage("Login Successful")
          window.location = homePath;
        } else {
          setLoginMessage("Login Failed")
        }
      })
      .catch(error => {
        setIsLoading(false);
        setLoginMessage("Login Failure: Error Occurred");
      })

  }

  function changeValue(event) {
    const val = event.target.value;
    switch (event.target.name) {
      case 'username':
        setUsername(val);
        break;
      case 'password':
        setPassword(val);
        break;
    }
    console.log("Username: " + username);
    console.log("Password: " + password);
  }

  return !isLoading ? (
    <div className="login">
      <h3>Login</h3>
      {console.log("Username: ddawg")}
      <form>
        Username: <input type="text" className="loginInput" name="username" placeholder="Email"
                         value={username}
                         onChange={changeValue}/>
        {console.log("Password: yomama")}
        Password: <input type="text" className="loginInput" name="password" placeholder="Password"
                         value={password} onChange={changeValue}/>
        <button className="loginInput button" onClick={login}>Login</button>
        {loginMessage && <p>{loginMessage}</p>}
      </form>
    </div>
  ) : <div className="login"><img src={interstitialGif}/></div>
}