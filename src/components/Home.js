import React, {useState, useEffect} from "react";
import {apiUrl, userSuffix} from "../utils/constants/ApiConstants";
import {get} from "../utils/ApiService";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");


  const getMe = useEffect(() => {
     get(apiUrl + userSuffix)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Getting data failed")
        }
      })
      .then(data => {
        console.log(data);
        const {username: user = ""} = data;
        setUsername(user);
        setIsLoading(false);
        return data;
      })
      .catch(() => setIsLoading(false));
  }, []);

  return !isLoading ? (
    <p>hello {username}!</p>
  ) : (
    <p>Loading...</p>
  )
}