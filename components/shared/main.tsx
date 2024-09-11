import React, {useState} from 'react'
import {Hero} from "@/components/shared/hero";
import {AboutUs} from "@/components/shared/aboutus";
import {Reviews} from "@/components/shared/reviews";
import {BuyVpn} from "@/components/shared/buyvpn";
import {Footer} from "@/components/shared/footer";
import {AdaptiveAboutUs} from "@/components/shared/adaptiveaboutus";
import {ReviewsAdaptive} from "@/components/shared/reviewsadaptive";

interface Props{
    className?:string,
    aboutus: any;
    reviews: any;
    price: any;
    scrollTo: any;
    isReviews: boolean;
    setReviews: Function;
}

const Main: React.FC<Props> = ({aboutus, reviews, scrollTo, price, isReviews, setReviews, className}) => {

    return (
        <div className="flex flex-col">
            {isReviews ? ('') : (<Hero scrollTo={scrollTo} price={price}/>)}
            <ReviewsAdaptive isReviews={isReviews} setReviews={setReviews}/>
            {isReviews ? ('') : (<AdaptiveAboutUs isReviews={isReviews} setReviews={setReviews}/>)}
            <AboutUs aboutus={aboutus}/>
            <Reviews reviews={reviews}/>
            {isReviews ? ('') : (<BuyVpn price={price}/>)}
            <Footer/>
        </div>
    )
}

export default Main;