import { FC } from "react";
import { Icons } from "../icons/icons";


export const Footer: FC = ()=>{
    return(
        <div id="footer" className="absolute z-24 b-0 w-full">
            <div className="md:flex my-1">
                <div className="px-20 md:pt-20 py-20 bg-blue-400" style={{ flexBasis: "50%"}}>
                    <form action="" method="post">
                        <div className="form">
                            <input type="text" className="w-[90%] rounded-[4px] p-2 text-xs" placeholder="example@gmail.com" name="" id="" />
                        </div>
                        <div className="md:flex w-[90%] my-4 justify-between">
                            <div className="form">
                                <input type="text" className="rounded-[4px] w-full md:w-[100%] p-2 text-xs" placeholder="example@gmail.com" name="" id="" />
                            </div>
                            <div className="form">
                                <input type="text" className="rounded-[4px] md:mt-0 mt-2 w-full md:w-[100%] p-2 text-xs" placeholder="example@gmail.com" name="" id="" />
                            </div>
                        </div>
                        <div className="form my-2">
                            <textarea name="" id="" className="w-[90%] h-[200px] p-2 rounded-[4px] text-xs" placeholder="Write here..."></textarea>
                        </div>
                    </form>
                </div>
                <div className="bg-gray-200 p-20 text-justufy text-xs" style={{ flexBasis: "50%"}}>
                    <h1 className="font-bold text-2xl">Get a website that will make a lasting impression.</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quam esse at quae odio quidem cum aut nulla nostrum, ipsa amet saepe fugiat nam labore neque alias! Aliquam, ut quae!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci neque commodi perspiciatis magnam cumque consectetur dolore ab, sit, voluptas vero doloremque, nobis voluptate porro. Qui dolor esse molestias sequi culpa.</p>
                    <br />
                    <div className="flex justify-between w-60">
                        <Icons.gitHub />
                        <Icons.facebook />
                        <Icons.social />
                    </div>
                    <br />
                    <p> &copy; Copyright 2024, powered by Ny Hasina VAGNO</p>
                </div>
            </div>
        </div>
    )
}