import React from 'react'
import {Hero} from "@/components/shared/hero";
import {AboutUs} from "@/components/shared/aboutus";
import {Reviews} from "@/components/shared/reviews";
import {BuyVpn} from "@/components/shared/buyvpn";
import {Footer} from "@/components/shared/footer";

interface Props{
    className?:string,
    aboutus: any;
    reviews: any;
    price: any;
    scrollTo: any;
}

export const Main: React.FC<Props> = ({aboutus, reviews, scrollTo, price, className}) => {
    return (
        <div className="flex flex-col">
            <Hero scrollTo={scrollTo} price={price}/>
            <AboutUs aboutus={aboutus}/>
            <Reviews reviews={reviews}/>
            <BuyVpn price={price}/>
            <Footer/>
        </div>
    )
}