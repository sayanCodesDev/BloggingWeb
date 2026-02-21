const blog=require("../models/blog");

async function handleBlogSubmission(req,res){

    const { title, body } = req.body;

        await blog.create({
            title,
            body,
            thumbnailUrl: `/uploads/${req.file.filename}`,
            createdBy: req.user._id,
        });

        res.redirect("/home");
    };

module.exports={        
    handleBlogSubmission,
    };
