import { FC } from "react";
import { Carousel } from "@material-tailwind/react";
import bg from "@/assets/bg-profile.jpg"

export const Testimonial : FC = ()=>{
    return(
        <div id="skills" className="container my-12 px-24">
          <div className="m-auto text-center w-xl my-4">
               <h1 className="text-center text-2xl font-bold">They trust me</h1>
               <p className="text-xs text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam illo eius tenetur odit.</p>
          </div>
          <Carousel placeholder={bg} className="md:w-full">
            <div className="relative isolate overflow-hidden bg-white sm:py-32">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                        <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <img className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <div className="text-gray-600">CEO of Workcation</div>
                            </div>
                        </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="relative isolate overflow-hidden bg-white sm:py-32">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                        <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <img className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Judith Black</div>
                            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <div className="text-gray-600">CEO of Workcation</div>
                            </div>
                        </figcaption>
                        </figure>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}