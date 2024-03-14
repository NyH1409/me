import { FC, useEffect, useState } from "react"
import { MailsIcon, MenuIcon } from "lucide-react"
import logo from "@/assets/logo.png"
import "./navbar.css"


export const NavBar : FC = () => {
    const [bgColor, setBgColor] = useState<string>();

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setBgColor("#ffff") : setBgColor("transparent")
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
        window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return(
        <div className="md:flex flex justify-between px-5 z-20 fixed w-full" style={{backgroundColor: bgColor}}>
            <div>
                <img className="w-32" src={logo} alt="" />
            </div>
            <div id="nav-bar" className="md:relative md:block hidden absolute" style={{ flexBasis: "40%" }}>
                <div className="md:flex py-6 justify-between text-sm">
                    <div><a href="/"><span></span>Home</a></div>
                    <div><a href="#skills">Skills</a></div>
                    <div><a href="/blog">Blog</a></div>
                    <div><a href="#footer">Contacts</a></div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <MailsIcon className="md:block hidden"/>
                    <MenuIcon className="md:hidden"/>
                </div>
            </div>
        </div>
    )
}