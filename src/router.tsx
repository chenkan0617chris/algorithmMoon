import { BrowserRouter, useRoutes } from "react-router-dom";
import Game from "./page/game";
import Home from "./page/home";

const route = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/game',
    element: <Game></Game>
  }
];

const MyRouter = () => {
  return useRoutes(route);
};



const Routers = (
  <BrowserRouter>
    <MyRouter></MyRouter>
  </BrowserRouter>
)

export default Routers;

