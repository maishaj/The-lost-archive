"use server"

import { collections, dbconnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs"

export const postUser=async(payload)=>{

    //check payload

    const {email,password,name,image}=payload;
    if(!email || !password) return null;

    //check user
    
    const isExist=await dbconnect(collections.USERS).findOne({email});
    if(isExist){
        return null;
    }

    //create user

    const newUser={
        provider:"credentials",
        name,
        email: email.toLowerCase(),
        password: await bcrypt.hash(password,14),
        image: image || "",
        role:"user",
        joinedAt: new Date()
    }

    //insert user

     const result=await dbconnect(collections.USERS).insertOne(newUser);
     if(result.acknowledged){
        return {...result, insertedId:result.insertedId.toString()};
     }
}

export const loginUser=async(payload)=>{

    const {email,password}=payload;
    if(!email || !password){
        return null;
    }

    const user=await dbconnect(collections.USERS).findOne({email});
    if(!user) return null;

    const isMatched=await bcrypt.compare(password,user.password);
    if(isMatched){
        return user;
    }
    else{
        return null;
    }


}