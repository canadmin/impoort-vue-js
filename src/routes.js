import LoginPage from "./components/Login/Login";
import Home from "./components/base/Home";
import Index from "./components/Index/Index";
import Message from "./components/message/Message"
import Profile from "./components/profile/Profile";

export const routes = [
  {path: "/", component: LoginPage},

  {
    path: "/index", component: Home, children: [
      {path: "/messages", component: Message},
      {path: "/profile-me", component: Profile},
      {path: "", component: Index}
    ]
  },
  {path: "*", redirect: "/"}

];
