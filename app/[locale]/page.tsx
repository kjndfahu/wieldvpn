'use client'

import React, {Suspense, useState} from 'react'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import dynamic from "next/dynamic";
import gsap from 'gsap';



export default function Home() {
    gsap.registerPlugin(ScrollToPlugin)
    const aboutus = React.useRef(null)
    const reviews = React.useRef(null)
    const price = React.useRef(null)
    const scrollTo = (target: any) => gsap.to(window, {duration: 1, scrollTo: target})
    const [isReviews, setReviews] = useState<boolean>(false);
    const Header = dynamic(() => import('../../components/shared/header'))
    const Main = dynamic(() => import('../../components/shared/main'))

    return (
        <div className="w-[100vw]">
            <Header aboutus={aboutus} reviews={reviews} price={price} scrollTo={scrollTo} isReviews={isReviews} setReviews={setReviews}/>
            <Main aboutus={aboutus} reviews={reviews} price={price} scrollTo={scrollTo} isReviews={isReviews} setReviews={setReviews}/>
        </div>
);
}
