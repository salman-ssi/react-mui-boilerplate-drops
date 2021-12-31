import React from "react";
import { IRoute } from "../router/config";

interface IProps {
    routes: IRoute[];
}

const ErrorPage: React.FC<IProps> = () => {
    return <h1>Home Page</h1>;
};

export default ErrorPage;
