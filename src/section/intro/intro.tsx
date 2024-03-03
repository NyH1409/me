import { NavBar } from "@/components/common/menu";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { FC } from "react";
import profile from "@/assets/profile.jpeg"

export const IntroSection : FC = ()=>{
    return (
        <div>
            <NavBar />
            <div className="container flex items-center justify-between py-24 px-28" id="intro">
                <div>
                    <h1 className="font-bold text-4xl">Ny Hasina Marolahy VAGNO</h1>
                    <p>Software and AI Developer</p>
                    <br />
                    <p className="text-xs text-gray-500">SpringBoot | React.js | AWS | Artificial Intelligence</p>
                    <p className="text-xs text-gray-500">2 years in IT Departement, trust me to design, develop and implement features in your web application</p>
                    <Button className="text-xs bg-yellow-500 rounded-[8px] hover:bg-yellow-600 my-6">
                        <span className="mx-2">
                            <DownloadIcon width="20"/>
                        </span>
                        Resume
                    </Button>
                </div>
                <div className="w-60">
                    <img className="w-full" src={profile} alt="profile picture" />
                </div>
            </div>
        </div>
    )
}