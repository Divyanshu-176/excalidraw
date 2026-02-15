import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt, { JwtPayload } from "jsonwebtoken"




interface extendedReq extends Request{
    userId?:string
}


export function middleware(req:extendedReq, res:Response, next:NextFunction){
    const token = req.headers["authorization"]

    if(typeof token !== "string"){
        console.log('Jwt token undefined')
        return;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
    if (decoded){
        req.userId = decoded.userId
        next()
    } else {
        res.status(403).json({
            msg:"Unauthorized"
        })
    }
}