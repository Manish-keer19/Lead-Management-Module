import mongoose, { Schema } from "mongoose";


const leadSchema = new Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    trim:true
  },
  phone:{
    type:String,
    required:true,
    trim:true
  },
  status:{
    type:String,
    enum: ["New", "In Progress", "Converted", "Lost"],
    required:true,
    trim:true
  },
  
},{timestamps:true})

export const Lead = new mongoose.model("Lead",leadSchema)