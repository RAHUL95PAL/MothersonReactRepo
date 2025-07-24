import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Children } from 'react'
import About from './Components/About/About.jsx'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contacts/Contact.jsx'
import User from './Components/User/User.jsx'
import Github,{githubInfoLoader} from './Components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: '/About',
//         element: <About />
//       },
//       {
//         path: '/Contact',
//         element:<Contact />
//       }
//     ]
//   }
// ]);


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' element={<Github/>}/>
      </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
