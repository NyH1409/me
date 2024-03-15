import { FC } from "react";
import client from "@/assets/friends.jpg"

export const Testimonial : FC = ()=>{
    return(
        <div id="skills" className="container my-12 px-24">
          <div className="m-auto text-center w-xl my-4">
               <h1 className="text-center text-2xl font-bold">They trust me</h1>
               <p className="text-xs text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam illo eius tenetur odit.</p>
          </div>
          <div className="md:flex gap-6">
            <div className="m-auto shadow-xl text-center p-10">
                <img className="w-20 h-20 my-4 m-auto rounded-[8px]" src={client} alt="" />
                <div className="text-xs m-auto">
                    <p className="font-bold">John Doe</p>
                    <br />
                    <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quia doloribus quaerat repellat dolorem nesciunt totam harum amet voluptas eveniet fugiat fuga labore velit blanditiis enim, sunt ea suscipit ipsam?</p>
                </div>
            </div>
            <div className="m-auto shadow-xl text-center p-10">
                <img className="w-20 h-20 my-4 m-auto rounded-[8px]" src={client} alt="" />
                <div className="text-xs m-auto">
                    <p className="font-bold">John Doe</p>
                    <br />
                    <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quia doloribus quaerat repellat dolorem nesciunt totam harum amet voluptas eveniet fugiat fuga labore velit blanditiis enim, sunt ea suscipit ipsam?</p>
                </div>
            </div>
            <div className="m-auto shadow-xl text-center p-10">
                <img className="w-20 h-20 my-4 m-auto rounded-[8px]" src={client} alt="" />
                <div className="text-xs m-auto">
                    <p className="font-bold">John Doe</p>
                    <br />
                    <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quia doloribus quaerat repellat dolorem nesciunt totam harum amet voluptas eveniet fugiat fuga labore velit blanditiis enim, sunt ea suscipit ipsam?</p>
                </div>
            </div>
          </div>
        </div>
    )
}