import { Counter } from './components/Counter'
import CreateProfileUser from './components/CreateProfileUser'
import { FetchData } from './components/FetchData'
import { Home } from './components/Home'
import Login from './components/Login'

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/counter',
    element: <Counter />,
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
    path: '/create-profile-user',
    element: <CreateProfileUser />,
  },
]

export default AppRoutes
