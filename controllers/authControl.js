const userAuth=require("../models/userAuth");
const bycrpt=require("bcrypt");
const {setUser}=require("../services/authen");
async function handleUserSignup(req,res){
    const {fullName, email, password}=req.body;

    const existingUser= await userAuth.findOne({email});
    if(existingUser){
        return res.render("signup",{
            error:"User already exist, Login yourself",
        });
    }

    await userAuth.create({
        fullName,
        email,
        password,
    });
    res.redirect("/login");
}

async function handleUserLogin(req,res){
    const {email, password}=req.body;
    
    const user= await userAuth.findOne({email});
    if(!user){ 
        return res.render("login",{
            error:"Invalid email or password",
        });
    }
    // Compare entered password with stored hash
    const match = await bycrpt.compare(password, user.password);

    if (match) {
        const token=setUser(user)  
        res.cookie("token",token);
        return res.redirect("/home");
    } else {
        return res.render("login",{
            error:"Invalid email or password",
        });
    }     
}

module.exports={
    handleUserSignup,
    handleUserLogin,
}