import React from "react";

const SignUp = () => {
  return (
    <div className="w-full h-[100vh] bg-black flex justify-center items-center">
      <div className="w-[90%] max-w-[500px] h-[600px] bg-[#141f1f] rounded flex flex-col items-center justify-center gap-[20px]">
        <h1 className="text-white text-[20px] font-semibold">Sign Up</h1>
        <form
          action=""
          className="w-[100%] flex flex-col items-center justify-center gap-[20px]"
        >
            <div className="w-[100px] h-[100px] rounded-full bg-white">
                
            </div>
          <div className="w-[80%] h-[50px] flex items-center justify-center gap-[10px]">
            <input
              type="text"
              placeholder="First Name"
              className="w-[50%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-[50%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]"
            />
          </div>
          <input
            type="text"
            placeholder="User Name"
            className="w-[80%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[80%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[80%] h-[50px] bg-white outline-none border-none rounded-lg px-[10px] py-[5px]"
          />
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
