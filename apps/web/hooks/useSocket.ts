import { useEffect, useState } from "react";
import { WS_URL } from "../app/room/config";

export function useSocket(){
    const [loading, setloading] = useState(true)
    const [socket, setSocket] = useState<WebSocket> ()

    useEffect(()=>{
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNjFkYjI2ZC0xMDliLTQ3ODUtYmJhNS1lMGU2NDc1NmJkYWYiLCJpYXQiOjE3NzExNTIzNDB9.SDYPnlj1dg8n9Hd3Zy2tLz6OeALKDjwwITTqJNv_YK8`)
        ws.onopen=()=>{
            setloading(false)
            setSocket(ws)
        }
    },[])


    return{
        socket,
        loading
    }
}