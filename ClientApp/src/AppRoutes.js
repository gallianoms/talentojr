import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreateProfileUser from "./components/CreateProfileUser";
import CreateJob from "./components/CreateJob";
import Candidates from "./components/Candidates";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/fetch-data",
    element: <FetchData />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/candidatos",
    element: <Candidates />,
  },
  {
    path: "/create-profile-user",
    element: <CreateProfileUser />,
  },

  {
    path: "/create-job",
    element: <CreateJob />,
  },
];

export default AppRoutes;
