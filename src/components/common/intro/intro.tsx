import { NavBar } from "@/components/common/menu";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { FC } from "react";
import profile from "@/assets/vector-profile.png"
import { Typewriter} from "react-simple-typewriter";


export const IntroSection : FC = ()=>{
    return (
        <div className="bg-gray-200">
            <NavBar />
            <div className="container md:flex items-center justify-between md:px-28 md:py-20 py-60" id="intro">
                <div className="wave">
                    <h1 className="font-bold md:text-4xl text-2xl">Ny Hasina Marolahy VAGNO</h1>
                    <p>I'm a <Typewriter
                                words={['Software Developer', 'Data Developer']}
                                loop={false}
                                cursor
                                cursorStyle='|'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            /></p>
                    <br />
                    <p className="text-xs text-gray-500">SpringBoot | React.js | AWS | Artificial Intelligence</p>
                    <p className="text-xs text-gray-500">2 years in IT Departement, trust me to design, develop and implement features in your web application</p>
                    <Button className="text-xs bg-yellow-500 rounded-[8px] hover:bg-yellow-600 my-6">
                        <span className="mx-2">
                            <DownloadIcon width="15"/>
                        </span>
                        Resume
                    </Button>
                </div>
                <div className="md:block hidden w-96">
                    <img className="w-full" src={profile} alt="profile picture" />
                </div>
            </div>
        </div>
    )
}