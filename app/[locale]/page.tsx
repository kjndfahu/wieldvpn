'use client'

import React from 'react'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import Image from "next/image";
import {Header} from "@/components/shared/header";
import {Main} from "@/components/shared/main";
import gsap from 'gsap';


export default async function Home() {
    gsap.registerPlugin(ScrollToPlugin)
    const aboutus = React.useRef(null)
    const reviews = React.useRef(null)
    const price = React.useRef(null)
    const scrollTo = (target:any) => gsap.to(window, {duration: 1, scrollTo: target})

  return (
   <div>
           <Header aboutus={aboutus} reviews={reviews} price={price} scrollTo={scrollTo}/>
           <Main aboutus={aboutus} reviews={reviews} price={price} scrollTo={scrollTo}/>
   </div>
  );
}
