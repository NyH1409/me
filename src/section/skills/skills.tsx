import { FC } from "react";
import java from "@/assets/java.png"
import javascript from "@/assets/javascript.png"
import typescript from "@/assets/typescript.png"
import postgres from "@/assets/Postgresql_elephant.svg.png"
import react from "@/assets/react.png"
import spring from "@/assets/springboot.png"
import hibernate from "@/assets/hibernate.svg"
import tailwind from "@/assets/tailwind-css3232.logowik.com.webp"
import aws from "@/assets/aws-logo.png"
import azurefunc from "@/assets/azure.png"

export const Skills : FC = ()=>{
    return(
        <div id="skills" className="my-12">
         <div className="h-60 container flex gap-2 justify-between items-center">
            <div className="m-auto text-center" style={{ flexBasis: "25%" }}>
                <div className="font-bold">Languages</div>
                <br />
                <br />
                <div className="flex justify-between items-center">
                   <div>
                        <img className="w-12" src={java} alt="java" />
                   </div>
                   <div>
                        <img className="w-12" src={javascript} alt="javascript" />
                   </div>
                   <div>
                        <img className="w-12" src={typescript} alt="typescript" />
                   </div>
                   <div>
                        <img className="w-12" src={postgres} alt="postgres" />
                   </div>
                </div>
            </div>
            <div className="my-2 items-center">
               <div className="h-40 bg-gray-200" style={{ width:"1px" }}></div>
            </div>
            <div className="m-auto text-center" style={{ flexBasis: "25%" }}>
                <div className="font-bold">Librairies and Framework</div>
                <br />
                <br />
                <div className="flex justify-between">
                   <div>
                        <img className="w-12" src={react} alt="react" />
                   </div>
                   <div>
                        <img className="w-14" src={tailwind} alt="" />
                   </div>
                   <div>
                        <img src={spring} alt="" className="w-11" />
                   </div>
                   <div>
                        <img src={hibernate} alt="" className="w-11" />
                   </div>
                </div>
            </div>
            <div className="my-2 items-center">
               <div className="h-40 bg-gray-200" style={{ width:"1px" }}></div>
            </div>
            <div className="m-auto text-center" style={{ flexBasis: "20%" }}>
                <div className="font-bold">Tools</div>
                <br />
                <br />
                <div className="flex justify-between">
                   <div><img src={aws} alt="" className="w-14" /></div>
                   <div><img src={azurefunc} alt="" className="w-12" /></div>
                </div>
            </div>
         </div>
        </div>
    )
}