const {getUser}=require("../services/authen");

function checkForAuthentication(req,res,next){
    
    const tokenCookie=req.cookies?.token; 
    if(!tokenCookie) return res.redirect("/login");

    const token=tokenCookie; 
    const user=getUser(token);
    if(!user) return res.redirect("/login");
    
    req.user=user;   
    
    return next();
}

module.exports={
    checkForAuthentication,
}