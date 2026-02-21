import express  from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";

import {createRoomSchema, createUserSchema, signinSchema} from "@repo/common/types"
import {prisma} from "@repo/db/client"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors())


app.post("/signup", async (req,res)=>{
    
    const parsedData = createUserSchema.safeParse(req.body)
    if(!parsedData.success){
        res.json({
            msg:"Incorrect Inputs"
        })    
        return;
    }

    try {
        const user = await prisma.user.create({
            data:{
                email:parsedData.data?.username,
                password:parsedData.data?.password,
                name:parsedData.data?.name
            }
        })
        res.json({
            msg:"Signed Up!",
            userId:user.id
        })
    } catch (error) {
        res.status(411).json({
            msg:"User already exists with these credentials",
            error
        })
    }

})


app.post("/signin", async (req,res)=>{

    const parsedData = signinSchema.safeParse(req.body)
    if(!parsedData.success){
        res.json({
            msg:"Incorrect Inputs"
        })
        return;
    }

    const user = await prisma.user.findFirst({
        where:{
            email:parsedData.data?.username,
            password:parsedData.data?.password
        }
    })


    if(!user){
        res.status(403).json({
            msg:"not authorized"
        })
    }

    const token = jwt.sign({
        userId:user?.id
    }, JWT_SECRET)
    
    res.json({
        msg:"Signed In!",
        token
    })
})


app.post("/room",middleware, async (req,res)=>{
    const parsedData = createRoomSchema.safeParse(req.body)
    if(!parsedData.success){
        res.json({
            msg:"Incorrect Inputs"
        })
        return;
    }

    //@ts-ignore
    const userId = req.userId


    try{
        const room = await prisma.room.create({
            data:{
                slug:parsedData.data.name,
                adminId:userId
            }
        })

        res.json({
            msg:"Room created",
            roomId:room.id
        })
    }catch(e){
        res.status(403).json({
            msg:"Room with this name already exists"
        })
    }
})

app.get("/chats/:roomId", async (req,res)=>{

    try {
        
    const roomId = Number(req.params.roomId)
    const messages = await prisma.chat.findMany({
        where:{
            roomId:roomId
        },
        orderBy:{
            id:"desc"
        },
        take:50
    })

    res.json({
        messages
    })
    } catch (error) {
        res.json({
            messages:[]
        })
    }

})


//get room of slug
app.get("/room/:slug", async (req,res)=>{
    const slug = req.params.slug
    const room = await prisma.room.findFirst({
        where:{
            slug
        }
    })


    res.json({
        room
    })
})




app.listen(3001)