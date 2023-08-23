import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import CreateProfileUserPage from './components/CreateProfileUserPage'
import CreateProfileCompanyPage from './components/CreateProfileCompanyPage'
import SearchJobPage from './components/SearchJobPage'
import CandidateProfilePage from './components/CandidateProfilePage'
import Candidates from './components/Candidates'
import CreateJob from './components/CreateJob'
import ListJob from './components/ListJob'

const AppRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/create-profile-user',
    element: <CreateProfileUserPage />,
  },
  {
    path: '/create-profile-company',
    element: <CreateProfileCompanyPage />,
  },
  {
    path: '/search-job',
    element: <SearchJobPage />,
  },
  {
    path: '/perfil-candidato',
    element: <CandidateProfilePage />,
  },
  {
    path: '/create-job',
    element: <CreateJob />,
  },
  {
    path: '/list-job',
    element: <ListJob />,
  },
  {
    path: '/candidatos',
    element: <Candidates />,
  },
]

export default AppRoutes
