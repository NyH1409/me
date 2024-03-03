import { FC } from "react";
import france from "@/assets/france.jpg"
import england from "@/assets/england.jpg"
import { Star } from "lucide-react";

export const Basics : FC = ()=>{
    return(
        <div>
            <div className="container flex justify-between items-center py-12">
                <div className="m-auto text-center" style={{ flexBasis: "35%" }}>
                    <h1 className="font-bold">Languages</h1>
                    <br />
                   <div className="flex justify-between">
                        <div>
                                <img className="w-14 m-auto" src={france} alt="" />
                                <br />
                                <div className="flex">
                                    <span><Star color="yellow"/></span>
                                    <span><Star color="yellow"/></span>
                                    <span><Star color="yellow"/></span>
                                    <span><Star color="yellow"/></span>
                                    <span><Star /></span>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <img className="w-16 m-auto" src={england} alt="" />
                                    <br />
                                    <div className="flex">
                                        <span><Star color="yellow"/></span>
                                        <span><Star color="yellow"/></span>
                                        <span><Star color="yellow"/></span>
                                        <span><Star /></span>
                                        <span><Star /></span>
                                    </div>
                                </span>
                        </div>
                   </div>
                </div>
                <div className="m-auto">
                    <h1 className="font-bold">Hobbies and Interest</h1>
                    <br />
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}