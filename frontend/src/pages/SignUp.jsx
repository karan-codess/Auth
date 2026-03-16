import React, { useContext ,useRef,useState } from "react";
import profile from "../assets/profile.webp"
import {dataContext} from "../contexts/UserContext"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
let {serverUrl}=useContext(dataContext)
let navigate=useNavigate()
  let [firstName,setFirstName] = useState(null)
  let [lastName,setLastName] = useState(null)
  let [userName,setUserName] = useState(null)
  let [email,setEmail] = useState(null)
  let [password,setPassword] = useState(null)

  let file=useRef(null)

  const handleSignUp=async(e)=>{
    e.preventDefault()
    try {
      let data=await axios.post(serverUrl+"/api/signUp",{
        firstName,lastName,userName,email,password,
      },{withCredentials:true})
      console.log(data)
    } catch (error) {
      console.log(error.message);
      
    }
  }

 function handleImage(e){

}


  return (
    <div className="w-full h-[100vh] bg-black flex justify-center items-center">
      <div className="w-[90%] max-w-[500px] h-[600px] bg-[#141f1f] rounded flex flex-col items-center justify-center gap-[20px]">
        <h1 className="text-white text-[20px] font-semibold">Sign Up</h1>
        <form
          action=""
          className="w-[100%] flex flex-col items-center justify-center gap-[20px]" onSubmit={handleSignUp}
        >
          <input type="file" hidden ref={file} onChange={handleImage} />
            <div className="w-[100px] h-[100px] rounded-full bg-white overflow-hidden relative border-2 border-white">
                <img src={profile} alt="" className="h-[100%] w-[100%] object-cover "/>
                <div className="absolute h-[100%] w-[100%] bg-black top-0 opacity-0 hover:opacity-50 cursor-pointer flex justify-center items-center text-white text-xl font-semibold " onClick={()=>{
                  file.current.click()
                }}>
                  +
                  </div>
            </div>
          <div className="w-[80%] h-[50px] flex items-center justify-center gap-[10px]">
            <input
              type="text"
              placeholder="First Name"
              className="w-[50%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]" value={firstName} onChange={(e)=>setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-[50%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]" value={lastName} onChange={(e)=>setLastName(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="User Name"
            className="w-[80%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]" value={userName} onChange={(e)=>setUserName(e.target.value)}
          />
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
          <button className="bg-[#07c7e4] text-black px-[10px] py-[5px] rounded-lg ">Sign Up</button>
          <p className="text-white cursor-pointer"onClick={()=>navigate("/login")}>Already have an account ? <span className="text-blue-400">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
