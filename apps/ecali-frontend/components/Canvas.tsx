import { initDraw } from "@/draw"
import { useEffect, useRef, useState } from "react"
import { IconButton } from "./IconButton"
import { CircleIcon, Pencil, PencilIcon, RectangleHorizontalIcon } from "lucide-react"


type Shape = "circle"|"rect"|"pencil"



export function Canvas({roomId, socket}:{roomId:string, socket:WebSocket}){
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [selectedTool, setSelectedTool] = useState<Shape>("circle")

    useEffect(()=>{
        //@ts-ignore
        window.selectedTool = selectedTool

    },[selectedTool])

    useEffect(()=>{
        if(canvasRef.current){
            initDraw(canvasRef.current, roomId, socket)
        }
        
    },[canvasRef])
    
    return <div>
        <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className="bg-black"></canvas>
        <Topbar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
    </div>
}




function Topbar({selectedTool, setSelectedTool}:{selectedTool: Shape, setSelectedTool:(s:Shape)=>void}){
    return <div className="fixed top-0 left-0 text-white flex gap-2 bg-slate-800/50 p-2 rounded-2xl">
            <IconButton activated={selectedTool==="pencil"} icon={<PencilIcon/>} onClick={()=>{setSelectedTool("pencil")}}/>
            <IconButton activated={selectedTool==="rect"} icon={<RectangleHorizontalIcon/>} onClick={()=>{setSelectedTool("rect")}}/>
            <IconButton activated={selectedTool==="circle"} icon={<CircleIcon/>} onClick={()=>{setSelectedTool("circle")}}/>
        </div>

}