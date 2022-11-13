import React from 'react'
import {Routes, Route} from 'react-router-dom'
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
        <Route path="historypage" element={
        <PrivateRoute>
          <History />
        </PrivateRoute>
        }/>
        <Route path="confirmation" element={
        <PrivateRoute>
          <Confirmation />
        </PrivateRoute>
        }/>
        <Route path="profile" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
        }/>
        <Route path="personalinfo" element={
        <PrivateRoute>
          <Personalinfo />
        </PrivateRoute>
        }/>
        <Route path="searchpage" element={
        <PrivateRoute>
          <Searchpage />
        </PrivateRoute>
        }/>
        <Route path="changepwd" element={
        <PrivateRoute>
          <ChangePwd />
        </PrivateRoute>
        }/>
        <Route path="changepin" element={
        <PrivateRoute>
          <ChangePin />
        </PrivateRoute>
        }/>
        <Route path="addphone" element={
        <PrivateRoute>
          <AddPhone />
        </PrivateRoute>
        }/>
        <Route path="managephone" element={
        <PrivateRoute>
          <ManagePhone />
        </PrivateRoute>}/>
        <Route path="topup" element={
        <PrivateRoute>
          <Topup />
        </PrivateRoute>
        }/>
        <Route path="transfermoney" element={
        <PrivateRoute>
          <TransferMoney />
        </PrivateRoute>
        }/>
        <Route path="statussuccess" element={
        <PrivateRoute>
          <StatusSuccess />
        </PrivateRoute>
        }/>
        <Route path="statusfail" element={
        <PrivateRoute>
          <StatusFail />
        </PrivateRoute>
        }/>
      </Routes>
    // </BrowserRouter>
  )
}

export default App