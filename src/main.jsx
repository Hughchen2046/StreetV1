import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './scss/all.scss'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'

const router = createHashRouter(routes)

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
