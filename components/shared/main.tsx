import React from 'react'
import {Hero} from "@/components/shared/hero";
import {AboutUs} from "@/components/shared/aboutus";
import {Reviews} from "@/components/shared/reviews";
import {BuyVpn} from "@/components/shared/buyvpn";
import {Footer} from "@/components/shared/footer";

interface Props{
    className?:string,
}

export const Main: React.FC<Props> = ({className}) => {
    return (
        <div className="flex flex-col">
            <Hero/>
            <AboutUs/>
            <Reviews/>
            <BuyVpn/>
            <Footer/>
        </div>
    )
}