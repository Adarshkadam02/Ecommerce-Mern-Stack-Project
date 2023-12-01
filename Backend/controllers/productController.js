import EcommerceUser from "../models/product.js";

export const getUsers= async(req,res)=>{
    try{
        const users = await EcommerceUser.find();
        res.json(users);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

export const getUserById = async (req,res)=>{
    try{
        const user= await EcommerceUser.findById(req.params.id);
        res.json(user);
    }catch{
        res.status(404).json({message: error.message});
    }
}


export const deletedUser = async (req,res)=>{
    try{
        const deletedUser= await EcommerceUser.deleteOne({_id:req.params.id});
        console.log('One Data deleted')
        res.status(200).json(deletedUser);
    }catch{
        res.status(400).json({message: error.message});
    }
}


export const addUser = async (req,res)=>{
    const user=new EcommerceUser(req.body)
    try{
        const addingUser= await user.save();
        console.log('Product Added succesfully')
        res.status(201).json(addingUser);
    }catch (error){
        res.status(400).json({message: error.message});
    }
}



