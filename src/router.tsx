import { BrowserRouter, useRoutes } from "react-router-dom";
import Game from "./page/game";
import Home from "./page/home";
import SignIn from "./page/signIn/signIn";
import DefaultAppBar from "./component/appBar";

const route = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/game',
    element: <Game></Game>
  },
  {
    path: 'sign-in',
    element: <SignIn></SignIn>
  }
];

const MyRouter = () => {
  return useRoutes(route);
};



const Routers = (
  <BrowserRouter>
    <DefaultAppBar/>
    <MyRouter></MyRouter>
  </BrowserRouter>
)

export default Routers;

