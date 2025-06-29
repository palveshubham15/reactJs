import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvider from './Context/userContextProvider.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Login from './components/login.jsx'
import Profile from './components/profile.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='Login' element={<Login/>}/>
      <Route path='Profile' element={<Profile/>}/>
      <Route path='Contact' element={<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router}/>
      
    
    </UserContextProvider>
  </StrictMode>,
)
