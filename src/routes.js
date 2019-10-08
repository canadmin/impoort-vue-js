import LoginPage from "./components/Login/Login";
import IndexPage from "./components/Index/Index";

export const routes = [
    {path : "/", component :LoginPage},
    {path : "/index",component :IndexPage},
    {path :"*" ,redirect : "/"}
    
];