import { FC } from "react";
import { Icons } from "../icons/icons";


export const Footer: FC = ()=>{
    return(
        <div id="footer" className="absolute z-24 b-0 w-full">
            <div className="flex my-1">
                <div className="bg-gray-200 p-20 text-justufy text-xs" style={{ flexBasis: "50%"}}>
                    <h1 className="font-bold text-2xl">Get a website that will make a lasting impression.</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quam esse at quae odio quidem cum aut nulla nostrum, ipsa amet saepe fugiat nam labore neque alias! Aliquam, ut quae!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci neque commodi perspiciatis magnam cumque consectetur dolore ab, sit, voluptas vero doloremque, nobis voluptate porro. Qui dolor esse molestias sequi culpa.</p>
                    <br />
                    <div className="flex justify-between w-60">
                        <Icons.gitHub className="w-6"/>
                        <Icons.facebook />
                        <Icons.social />
                    </div>
                    <br />
                    <p> &copy; Copyright 2024, powered by Ny Hasina VAGNO</p>
                </div>
                <div className="p-20 bg-blue-400" style={{ flexBasis: "50%"}}>
                    
                </div>
            </div>
        </div>
    )
}