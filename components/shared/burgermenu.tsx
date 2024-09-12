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
    isReviews: boolean;
    setReviews: Function;
}

export const BurgerMenu: React.FC<Props> = ({aboutus, reviews, price, scrollTo, className, isReviews, setReviews}) => {
    const [isActive, setActive] = React.useState(false)

    return (
        <div className=" lg:hidden items-center flex mr-5">
            <div className="z-[50]">
                <AdaptiveCheck/>
            </div>
        </div>
    )
}



