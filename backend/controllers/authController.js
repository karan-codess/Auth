import generateToken from "../config/token.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password, userName } = req.body;

    if ((!firstName || !lastName || !email || !password || !userName)) {
      return res.status(400).json({
        message: "all field required",
      });
    }

    let existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        message: "user already exist",
      });
    }

    const hassedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hassedPassword,
    });

    let token;
    try {
        token=generateToken(user._id)
    } catch (error) {
        console.log(error);
        
    }

    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENVIRONMENT=="production",
        sameSite:"strict",
        maxAge:7*24*60*60*1000
    })
    
    return res.status(201).json({
      user: {
        firstName,
        lastName,
        userName,
        email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};


export const login=async(req,res)=>{
  try {
    const {email,password}=req.body

    let existUser=await User.findOne({email})
    if(!existUser){
      return res.status(400).json({message:"user does not exist"})
    }
    let match=await bcrypt.compare(password,existUser.password)
    if(!match){
      return res.status(400).json({message:"incorrect password"})
    }

    let token;
    try {
        token=generateToken(existUser._id)
    } catch (error) {
        console.log(error);
        
    }

    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENVIRONMENT=="production",
        sameSite:"strict",
        maxAge:7*24*60*60*1000
    })

    return res.status(200).json({
      user: {
        firstName:existUser.firstName,
        lastName:existUser.lastName,
        userName:existUser.userName,
        email:existUser.email,
      },
    });

  } catch (error) {
    return res.status(500).json(error)
  }
}


export const logOut=async(req,res)=>{
  try {
    res.clearCookie("token")
    res.status(200).json({message:"logout successfully"})
  } catch (error) {
    return res.status(500).json(error)
  }
}