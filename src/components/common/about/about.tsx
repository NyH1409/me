import { FC } from "react";
import profile from "@/assets/profile.jpeg"
import { Button } from "@/components/ui/button";


export const About : FC = ()=>{
    return(
        <div className="px-32 py-12">
            <div className="container flex justify-between items-center">
                <div className="m-auto" style={{ flexBasis: "50%"}}>
                    <img className="w-96" src={profile} alt="" />
                </div>
                <div className="text-justify text-sm" style={{ flexBasis: "50%"}}>
                    <h1 className="font-bold text-2xl py-6">About Me</h1>
                    <div className="text-gray-800">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ut? Sapiente sed veniam similique perspiciatis molestiae temporibus recusandae voluptate fuga. Quod temporibus facere similique placeat delectus animi omnis quidem sapiente.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum fuga quisquam facere dolorum expedita! Dolorem itaque explicabo velit, ipsam dolore repellat beatae vel facilis ut labore est laudantium laborum?</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam mollitia vitae, voluptas distinctio reprehenderit aliquam dolore. Totam voluptatibus ullam sunt, assumenda voluptas iste. Tempora a dignissimos sit assumenda nostrum.</p>
                    </div>
                    <Button className="my-4 bg-yellow-500 rounded-[8px] hover:bg-yellow-700">Contact me</Button>
                </div>
            </div>
        </div>
    )
}