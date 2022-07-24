import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Createpin from './pages/Createpin'
import Pinsuccess from './pages/Pinsuccess'
import Forgetpwd from './pages/Forgetpwd'
import CreateNewpwd from './pages/CreateNewpwd'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="createpin" element={<Createpin />}/>
        <Route path="pinsuccess" element={<Pinsuccess />}/>
        <Route path="forgetpwd" element={<Forgetpwd />}/>
        <Route path="createnewpwd" element={<CreateNewpwd />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App