import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter as Router, RouterProvider } from 'react-router-dom'

import Layout from './Layout.tsx'

import App from './App'

// const App = lazyLoad(() => import('./App'))
// const Experience = lazyLoad(() => import('./pages/Experience'))
// const Projects = lazyLoad(() => import('./pages/Projects'))
// const Contact = lazyLoad(() => import('./pages/Contact'))


import './index.css'
import Experience from './pages/Experience.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'

const router = Router([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/about',
        element: <Experience />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)