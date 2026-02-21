const mongoose=require("mongoose");
const bycrpt=require("bcrypt");
//Schema
 const userSchema=new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
        validate: {
        validator: function(value) {
            return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value);
        },
        message: "Please enter a valid Gmail address (example@gmail.com)"
    }
    },
    password:{
        type: String,
        required: true, 
    },    
    role:{
        type: String,
        enum:["admin","user"],
        default:"user",
    },
    profilePicture:{
        type: String,
        default:"/images/default-profile.png",
    }
 },
 {timestamps:true}
);

userSchema.pre("save", async function(next) {

    if (!this.isModified("password")) return next();

    this.password = await bycrpt.hash(this.password, 10);
    next();
});


const userAuth = mongoose.model("user", userSchema);

module.exports=userAuth;    