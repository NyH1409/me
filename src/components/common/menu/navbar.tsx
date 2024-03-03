import { FC } from "react"
import { Button } from "@/components/ui/button"
import { SendHorizonalIcon } from "lucide-react"


export const NavBar : FC = () => {

    return(
        <div>
            <div className="flex justify-between py-3 px-5 items-center z-20 fixed w-full">
                <div>
                    <h1 className="font-bold text-blue-500">VAGNO</h1>
                </div>
                <div className="flex justify-between text-xs" style={{ flexBasis: "40%" }}>
                    <div><a href="#">Home</a></div>
                    <div><a href="#skills">Skills</a></div>
                    <div><a href="#contacts">Contacts</a></div>
                </div>
                <div className="text-center flex items-center justify-between">
                    <Button className="text-xs bg-blue-500 rounded-[8px] hover:bg-blue-700">
                        <span className="mx-2"><SendHorizonalIcon width="20" /></span>
                        Email
                    </Button>
                </div>
            </div>
        </div>
    )
}