const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const blog = require("../models/blog");
const { handleBlogSubmission } = require("../controllers/index");

router.get("/home", async (req, res) => {
    const blogs = await blog.find()
                            .populate("createdBy")
                            .sort({ createdAt: -1 });
   
    
    res.render("home", { blogs ,user:req.user});
});


//  Multer Storage Config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads");
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

// Show Add Blog Form
router.get("/add-blog", (req, res) => {
    res.render("addBlog",{
        user:req.user,
    });
});

router.post("/add-blog",upload.single("thumbnail"), handleBlogSubmission);

router.get("/showMyBlogs", async (req,res)=>{
    const blogs = await blog.find({
        createdBy: req.user._id
    }).populate("createdBy");

    res.render("showMyBlogs", { blogs ,user:req.user});
    
});

router.get("/blog/:id", async (req, res) => {
    try {
        const Blog = await blog.findById(req.params.id)
                               .populate("createdBy");

        if (!Blog) {
            return res.send("Blog not found");
        }
        res.render("blogDetails", { Blog ,user:req.user});

    } catch (err) {
        console.log(err);
        res.send("Error loading blog");
    }
});


module.exports = router;