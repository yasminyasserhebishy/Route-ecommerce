import express from "express"
import { Server } from "socket.io";
import bootstrap from './src/bootstrap.js'
import * as dotenv from 'dotenv'
import path from 'path'
import postModel from "./DB/model/Post.model.js";
dotenv.config({path:path.resolve('./config/.env')})
const app = express()


const port = +process.env.PORT


bootstrap(app, express)

//http server
const httpserver = app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
//new server
const io = new Server(httpserver, {
  cors: "*",
});
//on connection
io.on("connection", (socket) => {
  // socket.emit("sayHi", "BE to FE")
    socket.on("createPost", async (data) => {
        const post = await postModel.create(data)
        AllPosts()
    //socket.emit("created", post)
    });
    async function AllPosts => {
        const posts = await postModel.find()
        io.emit("allposts",posts)
    }
    socket.on("requestPosts", as()=> {
        AllPosts()
    })
});

app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})