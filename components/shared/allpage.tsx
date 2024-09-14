'use client'

import ScrollToPlugin from 'gsap/ScrollToPlugin'
import gsap from 'gsap';
import {Header} from "@/components/shared/header";
import Main from "@/components/shared/main";
import {notFound} from "next/navigation";
import React, {useState} from "react";

interface Props{
    className?:string
}


export const AllPage:React.FC<Props> = ({className}) => {
    gsap.registerPlugin(ScrollToPlugin)
    const aboutus = React.useRef(null)
    const reviews = React.useRef(null)
    const price = React.useRef(null)
    const adaptiveabout = React.useRef(null)
    const scrollTo = (target: any) => gsap.to(window, {duration: 1, scrollTo: target})
    const [isReviews, setReviews] = useState<boolean>(false);

    return (
        <div className="w-[100vw]">
            <Header aboutus={aboutus} reviews={reviews} price={price} scrollTo={scrollTo} isReviews={isReviews}
                    setReviews={setReviews}/>
            <Main aboutus={aboutus} reviews={reviews} price={price} adaptiveabout={adaptiveabout} scrollTo={scrollTo}
                  isReviews={isReviews} setReviews={setReviews}/>
        </div>
    )
}