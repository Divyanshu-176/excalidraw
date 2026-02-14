import express  from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";

import {createRoomSchema, createUserSchema, signinSchema} from "@repo/common/types"

const app = express()
app.use(express.json())


app.post("/signup", async (req,res)=>{
    
    const data = createUserSchema.safeParse(req.body)
    if(!data.success){
        res.json({
            msg:"Incorrect Inputs"
        })
        return;
    }

    res.json({
        msg:"Success"
    })

})


app.post("/signin", async (req,res)=>{

    const data = signinSchema.safeParse(req.body)
    if(!data.success){
        res.json({
            msg:"Incorrect Inputs"
        })
        return;
    }

    const userId = 1
    const token = await jwt.sign({
        userId
    },JWT_SECRET )
    
    res.json({
        token
    })
})


app.post("/room",middleware, async (req,res)=>{
    const data = createRoomSchema.safeParse(req.body)
    if(!data.success){
        res.json({
            msg:"Incorrect Inputs"
        })
        return;
    }

    res.json({
        roomId:123
    })
})

app.listen(3001)