import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import CreateProfileUserPage from "./components/CreateProfileUserPage";
import CreateProfileCompanyPage from "./components/CreateProfileCompanyPage";
import SearchJobPage from "./components/SearchJobPage";
import CandidateProfilePage from "./components/CandidateProfilePage";
import CandidatesPage from "./components/CandidatesPage";
import CreateJobPage from "./components/CreateJobPage";
import ListJobPage from "./components/ListJobPage";

const AppRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    // C & E
    path: "/iniciar-sesion",
    element: <LoginPage />,
  },
  {
    // C & E
    path: "/registrarse",
    element: <SignUpPage />,
  },
  {
    // C
    path: "/perfil-usuario",
    element: <CreateProfileUserPage />,
  },
  {
    // E
    path: "/perfil-empresa",
    element: <CreateProfileCompanyPage />,
  },
  {
    // C
    path: "/buscar-empleo",
    element: <SearchJobPage />,
  },
  {
    // E
    path: "/perfil-candidato",
    element: <CandidateProfilePage />,
  },
  {
    // E
    path: "/crear-empleo",
    element: <CreateJobPage />,
  },
  {
    // E
    path: "/lista-empleos",
    element: <ListJobPage />,
  },
  {
    // E
    path: "/lista-candidatos",
    element: <CandidatesPage />,
  },
];

export default AppRoutes;
