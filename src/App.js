import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import PrivateRoute from './component/PrivateRoute'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CreatePin from './pages/CreatePin'
import Pin from './pages/Pin'
import ForgetPwd from './pages/ForgetPwd'
import CreateNewPwd from './pages/CreateNewPwd'
import Dashboard from './homepages/Dashboard'
import History from './homepages/History'
import Confirmation from './homepages/Confirmation';
import Profile from './homepages/Profile'
import Personalinfo from './homepages/Personalinfo';
import Searchpage from './homepages/Searchpage';
import ChangePwd from './homepages/ChangePwd';
import ChangePin from './homepages/ChangePin';
import AddPhone from './homepages/AddPhone';
import ManagePhone from './homepages/ManagePhone';
import Topup from './homepages/Topup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="createpin" element={<CreatePin />}/>
        <Route path="pinsuccess" element={<Pin />}/>
        <Route path="forgetpwd" element={<ForgetPwd />}/>
        <Route path="createnewpwd" element={<CreateNewPwd />}/>
        <Route path="dashboard" element={
          <PrivateRoute>
          <Dashboard />
          </PrivateRoute>
        }/>
        <Route path="historypage" element={<History />}/>
        <Route path="confirmation" element={<Confirmation />}/>
        <Route path="profile" element={
        <PrivateRoute>
        <Profile />
        </PrivateRoute>
        }/>
        <Route path="personalinfo" element={<Personalinfo />}/>
        <Route path="searchpage" element={<Searchpage />}/>
        <Route path="changepwd" element={<ChangePwd />}/>
        <Route path="changepin" element={<ChangePin />}/>
        <Route path="addphone" element={<AddPhone />}/>
        <Route path="managephone" element={<ManagePhone />}/>
        <Route path="topup" element={<Topup />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App