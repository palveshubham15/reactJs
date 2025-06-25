import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Header from './components/header/header.jsx'
import About from './components/About/about.jsx';
import Home from './components/Home/home.jsx';
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//        {
//         path:"",
//         element:<Home/>
//       }
//       ,
//       {
//         path:"About",
//         element:<About/>
//       }
//       ,
//       {
//         path:"Contact",
//         element:<Contact/>
//       }
      
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="User/:userid" element={<User/>}/>
        <Route path= "Github" element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>   {/*ek aisa element joh router se value/element le*/} 
  </StrictMode>,
)
