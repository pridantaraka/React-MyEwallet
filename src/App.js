import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import PrivateRoute from './component/PrivateRoute'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CreatePin from './pages/Createpin'
import Pin from './pages/Pin'
import ForgetPwd from './pages/Forgetpwd'
import CreateNewPwd from './pages/CreateNewpwd'
import Dashboard from './homepages/Dashboard'
import History from './homepages/History'
import Confirmation from './homepages/Confirmation';
import Profile from './homepages/Profile'
import Personalinfo from './homepages/Personalinfo';
import Searchpage from './homepages/Searchpage';
import ChangePwd from './homepages/Changepwd';
import ChangePin from './homepages/Changepin';
import AddPhone from './homepages/Addphone';
import ManagePhone from './homepages/Managephone';
import Topup from './homepages/Topup';
import TransferMoney from './homepages/TransferMoney'
import StatusSuccess from './homepages/StatusSuccess'
import StatusFail from './homepages/Statusfail'

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Profile />
        }/>
        <Route path="personalinfo" element={<Personalinfo />}/>
        <Route path="searchpage" element={<Searchpage />}/>
        <Route path="changepwd" element={<ChangePwd />}/>
        <Route path="changepin" element={<ChangePin />}/>
        <Route path="addphone" element={<AddPhone />}/>
        <Route path="managephone" element={<ManagePhone />}/>
        <Route path="topup" element={<Topup />}/>
        <Route path="transfermoney" element={<TransferMoney />}/>
        <Route path="statussuccess" element={<StatusSuccess />}/>
        <Route path="statusfail" element={<StatusFail />}/>
      </Routes>
    // </BrowserRouter>
  )
}

export default App