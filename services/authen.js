const jwt=require("jsonwebtoken");
const secret ="Sayan@&!12435!!#@&@*#";
function setUser(user){
    
    return jwt.sign({
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    profilePicture: user.profilePicture,
    role: user.role,
    },
    secret);

};

function getUser(token){
    try {
        return jwt.verify(token,secret);
    } catch (error) {
    return null;    
    }
};

module.exports={
    setUser,
    getUser,
};
