import Home from '../Pages/Front/Home'
import About from '../Pages/Front/About'
import FrontLayout from '../Layout/FrontLayout'

const routes = [
  {
    path: '/',
    element: <FrontLayout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]

export default routes
