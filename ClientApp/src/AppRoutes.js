import { FetchData } from './components/FetchData'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import CreateProfileUserPage from './components/CreateProfileUserPage'
import CreateProfileCompanyPage from './components/CreateProfileCompanyPage'
import SearchJobPage from './components/SearchJobPage'
import CandidateProfilePage from './components/CandidateProfilePage'

const AppRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: '/fetch-data',
    element: <FetchData />,
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
]

export default AppRoutes
