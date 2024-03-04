import { About } from "@/components/common/about";
import { Footer } from "@/components/common/footer";
import { IntroSection } from "@/components/common/intro";
import { Skills } from "@/components/common/skills";
import { Testimonial } from "@/components/common/testimonial";
import { FC } from "react";

export const HomePage : FC = ()=>{
    return(
        <>
            <IntroSection />
            <About />
            <Skills />
            <Testimonial />
            <Footer />
        </>
    )
}