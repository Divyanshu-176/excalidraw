"use client"

import Link from "next/link"

export function AuthPage({isSignin}:{isSignin:boolean}){

    return <div className="w-screen h-screen flex justify-center items-center ">
        <div className="w-[50%] h-screen bg-white flex flex-col items-center justify-center p-8">
            <div className="max-w-sm text-center">
                <h1 className="text-4xl font-bold text-zinc-900 mb-4">Excalidraw</h1>
                <p className="text-zinc-600 text-sm">Draw, collaborate, and create together</p>
            </div>
        </div>



        <div className="w-[50%] h-screen bg-black flex justify-center items-center">
            
            <div className="p-2 m-2  w-fit text-white flex flex-col gap-5 ">
                <div className="p-3 rounded-lg border-white border outline-none">
                    <input type="text" placeholder="Email" className="outline-none"/>
                </div>
                <div className="p-3 rounded-lg border-white border">
                    <input type="password" placeholder="Password" className="outline-none"/>
                </div>

                {!isSignin &&  <div className="p-3 rounded-lg border-white border"><input type="text" placeholder="Username" className="outline-none"/></div> }

                <button className="border border-white-500 p-2 rounded-lg bg-white text-black cursor-pointer hover:bg-gray-200 " onClick={()=>{
                }}>{isSignin ? "Sign-in" : "Sign-up"}</button>

                <div>
                    {isSignin ? <span>Dont have an Account? <Link href={"/signup"} className="text-blue-400">Sign up</Link></span>:<span>Already have an account? <Link href={"/signin"} className="text-blue-400">Sign in</Link></span>}
                </div>
            </div>
        </div>



    </div>
}