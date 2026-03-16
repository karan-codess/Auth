import React, { useContext, useState } from 'react'
import { dataContext } from '../contexts/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let {serverUrl}=useContext(dataContext)
  let [email,setEmail] = useState(null)
  let [password,setPassword] = useState(null)
  let navigate=useNavigate()

  const handleLogin=async(e)=>{
e.preventDefault()
    try {
      let data=await axios.post(serverUrl+"/api/login",{
        email,password,
      },{withCredentials:true})
      console.log(data)
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message)
      
    }
  }

  return (
    <div className="w-full h-[100vh] bg-black flex justify-center items-center">
      <div className="w-[90%] max-w-[500px] h-[600px] bg-[#141f1f] rounded flex flex-col items-center justify-center gap-[20px]">
        <h1 className="text-white text-[20px] font-semibold">Log In</h1>
        <form
          action=""
          className="w-[100%] flex flex-col items-center justify-center gap-[20px]" onSubmit={handleLogin}
        > 
          <input
            type="email"
            placeholder="Email"
            className="w-[80%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]" value={email} onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[80%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]" value={password} onChange={(e)=>setPassword(e.target.value)}
          />
          <button className="bg-[#07c7e4] text-black px-[10px] py-[5px] rounded-lg ">Log In</button>
          <p className="text-white cursor-pointer"onClick={()=>navigate("/signup")}>Want to Create new account ? <span className="text-blue-400">Register</span></p>
        </form>
      </div>
    </div>
  );
};


export default Login