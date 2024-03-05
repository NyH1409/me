import { Footer } from "@/components/common/footer";
import { NavBar } from "@/components/common/menu";
import { PostCard } from "@/components/common/post";
import { FC } from "react";

export const BlogPage : FC = ()=>{
    return(
        <div className="w-full h-screen relative">
            <NavBar />
            <div className="py-12">
                <PostCard />
            </div>
            <Footer />
        </div>
    )
}