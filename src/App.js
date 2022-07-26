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
import Homepage from './homepages/Homepage'
import Historypage from './homepages/Historypage'
import Confirmpage from './homepages/Confirmpage'
import Profilepage from './homepages/Profilepage'
import Personalinfo from './homepages/Personalinfo';
import Searchpage from './homepages/Searchpage';
import Changepwd from './homepages/Changepwd';
import Changepin from './homepages/Changepin';
import Addphone from './homepages/Addphone';
import Managephone from './homepages/Managephone';
import Topup from './homepages/Topup';

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
        <Route path="homepage" element={<Homepage />}/>
        <Route path="historypage" element={<Historypage />}/>
        <Route path="confirmpage" element={<Confirmpage />}/>
        <Route path="profilepage" element={<Profilepage />}/>
        <Route path="personalinfo" element={<Personalinfo />}/>
        <Route path="searchpage" element={<Searchpage />}/>
        <Route path="changepwd" element={<Changepwd />}/>
        <Route path="changepin" element={<Changepin />}/>
        <Route path="addphone" element={<Addphone />}/>
        <Route path="managephone" element={<Managephone />}/>
        <Route path="topup" element={<Topup />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App