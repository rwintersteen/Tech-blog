const { Post } = require("../models")

const postData = [
    {
        title:"Title of post", 
        post_text: "Here is some more example text",
        user_id: 1
    },
]


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;