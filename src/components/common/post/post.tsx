import { FC } from "react";
import {Icon} from "@iconify/react";
import { Reader } from "../wisiwig";
import { Button } from "@/components/ui/button";
import { Icons } from "../icons/icons";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import profile from "@/assets/profile.jpeg"
import error from "@/assets/azurefunctionerror.png"
import { htmlContent } from "@/lib/string_to_color";

export const PostCard : FC = ()=>{
    return(
        <div>
            <div
                data-testid="post-title"
                className="flex w-full justify-center p-11 text-center"
            >
                <p className="font-optical-sizing-auto normal font-title text-4xl font-bold w-xl">
                Azure Function : No HTTP routes mapped (python3.6 and azure function core tools 3)
                </p>
            </div>
            <div className="flex w-full justify-center">
                <div
                data-testid="post-details"
                className="grid w-[31.25rem] grid-cols-8"
                >
                <div className="col-span-3 flex items-center justify-center">
                    <Icon icon="material-symbols-light:face-6" className="text-2xl" />
                    <span className="mx-1">
                    <strong>@hysnav</strong>
                    </span>
                </div>
                <div className="col-span-2 flex items-center justify-center">
                    <Icon
                    icon="material-symbols-light:nest-clock-farsight-analog-outline"
                    className="text-2xl"
                    />{" "}
                    <p className="">Read 0s ago</p>
                </div>
                <div className="col-span-3 flex items-center justify-center">
                    <Icon
                    icon="material-symbols-light:calendar-month-outline"
                    className="text-2xl"
                    />{" "}
                    <p>About 18 hours ago</p>
                </div>
                </div>
            </div>
            <div className="my-5 grid grid-cols-8">
                <div className="col-span-1 h-[18.75rem]"></div>
                <div className="col-span-6 grid grid-cols-8 gap-5">
                <div data-testid="post-content" className="col-span-8 p-4">
                    <div className="mx-10"></div>

                    <div className="">
                    <img
                        src={error}
                        alt=""
                        className=" m-auto mb-[5rem] h-[40rem] w-[70rem]"
                    />
                    </div>
                    <div className="mx-10">
                    <Reader>{htmlContent}</Reader>
                    </div>
                    <div className=" flex justify-between">
                    <div className="flex items-stretch justify-self-center">
                        <Button
                        className="mx-2 mb-2 inline-block rounded bg-yellow-500 px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        >
                        <Icons.like data-testid="like-svg" />
                        <label data-testid="like-reaction" className="ml-2"></label>
                        </Button>
                        <Button
                            className="mb-2 inline-block rounded bg-yellow-500 px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        >
                            <Icons.dislike data-testid="dislike-svg" />
                        </Button>
                    </div>

                    <div className="flex justify-between ">
                        <span className="flex justify-between">
                        <div className="mx-2 flex items-center rounded-[8px]">
                            <FacebookShareButton url={""}>
                                <Icons.facebook />
                            </FacebookShareButton>
                        </div>
                        <div className="flex items-center rounded-[8px]">
                            <TwitterShareButton url={""}>
                                <Icons.twiter />
                            </TwitterShareButton>
                        </div>
                        </span>
                    </div>
                    </div>
                </div>
                </div>

                <div className="col-span-1 h-[18.75rem]"></div>
            </div>
            <div data-testid="user-details" className="grid grid-cols-8 bg-slate-50 ">
                <div className="col-span-1 h-[18.75rem]"></div>
                <div className="col-span-6 grid h-[18.75rem] grid-cols-8">
                <div
                    data-testid="user-profile-picture"
                    className=" col-span-2 flex justify-center"
                >
                    <img
                    src={profile}
                    className="m-auto h-[12.5rem] w-[12.5rem] rounded-md bg-white object-cover"
                    />
                </div>
                <div className="container col-span-6 flex flex-col justify-center">
                    {" "}
                    <p className=" font-thin"> Author</p>
                    <p className="mb-5 text-left font-title text-2xl hover:text-slate-700 focus:text-slate-200 active:font-semibold">
                     Ny Hasina Marolahy VAGNO
                    </p>
                    <p className="overflow-hidden truncate">Programmer, c'est donner vie a des idees virtuelles.</p>
                    <Button className="my-4 w-32 text-xs bg-yellow-500 rounded-[8px] hover:bg-yellow-700">Contact</Button>
                </div>
                </div>
                <div className="col-span-1 h-[18.75rem]"></div>
            </div>
        </div>
    )
}