import { FetchData } from './components/FetchData'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import CreateProfileUser from './components/CreateProfileUser'
import CreateProfileCompany from './components/CreateProfileCompany'
import SearchJob from './components/SearchJob'

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/fetch-data',
    element: <FetchData />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/create-profile-user',
    element: <CreateProfileUser />,
  },
  {
    path: '/create-profile-company',
    element: <CreateProfileCompany />,
  },
  {
    path: '/search-job',
    element: <SearchJob />,
  },
]

export default AppRoutes
