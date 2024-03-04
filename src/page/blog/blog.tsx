import { Footer } from "@/components/common/footer";
import { NavBar } from "@/components/common/menu";
import { FC } from "react";

export const BlogPage : FC = ()=>{
    return(
        <div className="w-full h-screen relative">
            <NavBar />
            <div className="h-full"></div>
            <Footer />
        </div>
    )
}