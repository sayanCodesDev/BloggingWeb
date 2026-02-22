const express = require('express');
const {connectToMongodb}=require("./connect");

const cookieParser=require("cookie-parser");
const path=require("path");

const {checkForAuthentication}=require("./middlewares/auth")
const userAuthRouter=require("./routes/authRoute");

const addblogRouter=require("./routes/blog");

const PORT=process.env.PORT ;
const app=express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

//Connection
connectToMongodb("process.env.MONGO_URL")
    .then(()=> console.log("MongoDb Connected")
);

//routes
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

app.use("/", userAuthRouter);


app.use(checkForAuthentication);

app.use("/", addblogRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${port}`);
});