import { FC, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { SendHorizonalIcon } from "lucide-react"
import logo from "@/assets/logo.png"
import "./navbar.css"


export const NavBar : FC = () => {
    const [progress, setProgress] = useState<number>();
    const [bgColor, setBgColor] = useState<string>();

    const listenScrollEvent = () => {
        setProgress(window.scrollY)
        window.scrollY > 10 ? setBgColor("#ffff") : setBgColor("transparent")
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
        window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return(
        <div>
            <div className="flex justify-between px-5 items-center z-20 fixed w-full" style={{backgroundColor: bgColor}}>
                <div>
                    <img className="w-32" src={logo} alt="" />
                </div>
                <div id="nav-bar" className="flex justify-between text-sm" style={{ flexBasis: "40%" }}>
                    <div><a href="#">Home</a></div>
                    <div><a href="#skills">Skills</a></div>
                    <div><a href="#contacts">Contacts</a></div>
                </div>
                <div className="text-center flex items-center justify-between">
                    <Button className="text-xs bg-blue-400 rounded-[8px] hover:bg-blue-700">
                        <span className="mx-2"><SendHorizonalIcon width="20" /></span>
                        Email
                    </Button>
                </div>
            </div>
            <div className="bg-yellow-500" style={{position: "fixed", bottom: 0, width: progress, height: "5px"}}></div>
        </div>
    )
}