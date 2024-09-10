import React from 'react'
import {cn} from "@/lib/utils";
import light from '../../assets/light behind.png'
import mainlogo from '../../assets/logo 3d.png'
import Image from "next/image";
import {HeaderNavigation} from "@/components/shared/header-navigation";
import {HeaderRightblock} from "@/components/shared/header-rightblock";
import headerlogo from '../../assets/headerlogo.png';
import downline from "@/assets/down line.png";
import {BurgerMenu} from "@/components/shared/burgermenu";
import {useTranslations} from "next-intl";
import {AdaptiveCheck} from "@/components/shared/adaptivecheck";

interface Props{
    className?:string
    aboutus: any;
    reviews: any;
    price: any;
    scrollTo: any;
}

export const Header: React.FC<Props> = ({aboutus, reviews, price, scrollTo,  className}) => {

    return (
        <header className="z-[100] py-8">
            <div className="flex items-center justify-between">
                <Image className="w-[88px]" src={headerlogo} alt="logo"/>
                <HeaderNavigation aboutus={aboutus} reviews={reviews} price={price} scrollTo={scrollTo}/>
                <HeaderRightblock/>
                <BurgerMenu aboutus={aboutus} reviews={reviews} price={price} scrollTo={scrollTo}/>
            </div>
        </header>

    )
}