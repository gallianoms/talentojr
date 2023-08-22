import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CreateProfileUser from "./components/CreateProfileUser";
import CreateProfileCompany from "./components/CreateProfileCompany";
import SearchJob from "./components/SearchJob";
import Candidates from "./components/Candidates";
import CreateJob from "./components/CreateJob";
import ListJob from "./components/ListJob";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
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
    path: "/create-profile-user",
    element: <CreateProfileUser />,
  },
  {
    path: "/create-profile-company",
    element: <CreateProfileCompany />,
  },
  {
    path: "/search-job",
    element: <SearchJob />,
  },
  {
    path: "/createJob",
    element: <CreateJob />,
  },
  {
    path: "/listJob",
    element: <ListJob />,
  },
  {
    path: "/candidatos",
    element: <Candidates />,
  },
];

export default AppRoutes;
