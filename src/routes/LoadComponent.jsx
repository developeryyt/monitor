import {Loadable} from "../utils";
import {lazy} from "react";

export const Login = Loadable(lazy(() => import('../pages/auth/Login')));
export const Register = Loadable(lazy(() => import('../pages/auth/Register')))


export const DashBoard = Loadable(lazy(() => import('../pages/DashBoard')))