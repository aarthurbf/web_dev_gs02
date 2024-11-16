import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Error from './routes/Error.jsx'
import Car from './routes/Car.jsx'
import Energias from './routes/Energias.jsx'
import Eolica from './routes/Eolica.jsx'
import Solar from './routes/Solar.jsx'
import Hidraulica from './routes/Hidraulica.jsx'
import Selection from './routes/Selection.jsx'


const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/car', element: <Car /> },
      { path: '/energias', element: <Energias /> },
      { path: '/energiaeolica', element: <Eolica/>},
      { path: '/energiasolar', element: <Solar/>},
      { path: '/energiahidraulica', element: <Hidraulica/>},
      { path: '/selection', element: <Selection /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
