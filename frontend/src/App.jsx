import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

const App = () => {
  return (
    
    <Routes>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      {/* <Route path='/' element={<Login/>}/> */}
    </Routes>
  )
}

export default App