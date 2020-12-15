require('dotenv').config();
const mongoose =require('mongoose');
const express = require('express');
const app = express();


const BlogPost= require('./models/blog.js')

mongoose.connect(`mongodb://localhost/mongooseAssociation`)

const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
})

db.on('error', (err)=>{console.log('Error', ErrorEvent)})

app.use(express.urlencoded({ extended: false}))

app.get('/',(req, res)=>{
    res.send('Home Route, Backend')
})

app.get('/blog', (req,res)=>{
    BlogPost.create({ title: 'Mongoose all for Mongoose',
body: 'This is a cool blog post.'})

const post1 = new BlogPost({title: 'SEI1019', body:'Software Engineers are Cool!'});
post1.save();
res.send('Post Completed')
});

app.get('./comment', (req,res)=> {
    const post2 = new BlogPost({title:'Cool Post', body: "Let there be lights!"})
    const myComment =({header: 'Cool', content: "THis is a cool post"})
    post2.comments.push(myComment)
})

const PORT = process.env.PORT || 3000;

app.listen( PORT, ()=> {
console.log(`Server listening to on PORT: ${PORT}`)})