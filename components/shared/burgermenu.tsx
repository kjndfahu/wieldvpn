'use client'

import React from 'react'
import {BurgerPopup} from "@/components/shared/burgerpopup";
import {AdaptiveCheck} from "@/components/shared/adaptivecheck";

interface Props {
    className?: string;
    aboutus: any;
    reviews: any;
    price: any;
    scrollTo: any;
}

export const BurgerMenu: React.FC<Props> = ({aboutus, reviews, price, scrollTo, className}) => {
    const [isActive, setActive] = React.useState(false)

    return (
        <div className=" lg:hidden  items-center flex z-50">
            <AdaptiveCheck/>

            {isActive ? (
                <div onClick={() => setActive(!isActive)}
                     className="flex z-[100] cursor-pointer mr-3 py-6 px-5 bg-white rounded-full">
                    <svg
                        width={30}
                        height={24}
                        viewBox="0 0 30 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line y1="23.3572" x2={30} y2="23.3572" stroke="black"/>
                        <line y1="11.9285" x2={30} y2="11.9285" stroke="black"/>
                        <line y1="0.5" x2={30} y2="0.5" stroke="black"/>
                    </svg>
                </div>
            ) : (
                <div onClick={() => setActive(!isActive)} className="flex cursor-pointer mr-3 py-6 px-5">
                    <svg
                        width={30}
                        height={24}
                        viewBox="0 0 30 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line y1="23.3572" x2={30} y2="23.3572" stroke="white"/>
                        <line y1="11.9285" x2={30} y2="11.9285" stroke="white"/>
                        <line y1="0.5" x2={30} y2="0.5" stroke="white"/>
                    </svg>
                </div>
            )}

            {isActive && (
                <BurgerPopup aboutus={aboutus} reviews={reviews} price={price} scrollTo={scrollTo}/>
            )}
        </div>
    )
}



