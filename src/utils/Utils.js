import cookie from "react-cookies";
import { sessionCookie } from "./constants/Constants";

export const isLoggedIn = () => {
  return cookie.load(sessionCookie) && true;
}