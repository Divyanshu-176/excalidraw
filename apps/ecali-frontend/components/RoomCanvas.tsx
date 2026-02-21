"use client"

import { WS_URL } from "@/config"
import { useEffect, useRef, useState } from "react"
import { Canvas } from "./Canvas"

export function RoomCanvas({roomId}:{roomId:string}){

    const [socket, setSocket] = useState<WebSocket | null>(null)

    useEffect(()=>{
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkOTRkNTlhMy02Njg3LTRhM2QtYTY1Mi05NmI1MGMzOTkyNDMiLCJpYXQiOjE3NzE2OTkxMzl9.HlFgWzcH8IfAgWqYiT_XYZ48jItz2FzIiQGVaI7_Q5Y`)

        ws.onopen=()=>{
            setSocket(ws)
            ws.send(JSON.stringify({
                type:"join_room",
                roomId
            }))
        }
    },[])


    

    if(!socket){
        return <div>Connecting to server...</div>
    }
    
    
    return <div>
        <Canvas roomId={roomId} socket={socket}/>
    </div>
}