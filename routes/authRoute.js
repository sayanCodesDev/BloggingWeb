const express=require("express");
const {
    handleUserSignup,
    handleUserLogin,
}=require("../controllers/authControl")

const router=express.Router();

router.post("/signup",handleUserSignup);
router.post("/login",handleUserLogin);

router.get("/signup",(req,res)=>{
    res.render("signup", { 
        error:null,
        user:req.user,
    })
});
router.get("/login",(req,res)=>{
    res.render("login", {
        user:req.user,
    })
});

router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
});


module.exports = router;
