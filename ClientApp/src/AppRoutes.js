import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import CreateProfileUserPage from './components/CreateProfileUserPage'
import CreateProfileCompanyPage from './components/CreateProfileCompanyPage'
import SearchJobPage from './components/SearchJobPage'
import CandidateProfilePage from './components/CandidateProfilePage'
import CandidatesPage from './components/CandidatesPage'
import CreateJobPage from './components/CreateJobPage'
import ListJobPage from './components/ListJobPage'

const AppRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    // C & E
    path: '/iniciar-sesion', //! DONE
    element: <LoginPage />,
  },
  {
    // C & E
    path: '/registrarse', //! DONE
    element: <SignUpPage />,
  },
  {
    // C
    path: '/perfil-usuario', // TODO: Salva
    element: <CreateProfileUserPage />,
  },
  {
    // E
    path: '/perfil-empresa', //? TODO: Wintop
    element: <CreateProfileCompanyPage />,
  },
  {
    // C
    path: '/buscar-empleo', // TODO filters: Salva
    element: <SearchJobPage />,
  },
  {
    // E
    path: '/perfil-candidato', // TODO: Salva
    element: <CandidateProfilePage />,
  },
  {
    // E
    path: '/crear-empleo', //! DONE
    element: <CreateJobPage />,
  },
  {
    // E
    path: '/lista-empleos', //? TODO: Wintop
    element: <ListJobPage />,
  },
  {
    // E
    path: '/lista-candidatos', //? TODO: Wintop
    element: <CandidatesPage />,
  },
]

export default AppRoutes
