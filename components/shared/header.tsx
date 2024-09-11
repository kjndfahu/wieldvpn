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
 const Header: React.FC<Props> = ({aboutus, reviews, price, scrollTo,  className}) => {

    return (
        <>
            <div className="absolute z-1 mb-10">
                <Image src={light} alt="light"/>
            </div>

            <header className={cn('py-[29px] z-[100] w-[100vw]', className)}>
                <Image className="lg:flex hidden" src={downline} alt="line"/>
                <div className="flex items-center justify-between lg:bg-white/10 lg:backdrop-blur-[50px] md:bg-transparent">
                    <Image className="mdbvp:w-[88px] w-[60px] ml-10" src={headerlogo} alt="logo"/>
                    <HeaderNavigation aboutus={aboutus} reviews={reviews} price={price} scrollTo={scrollTo}/>
                    <HeaderRightblock/>
                    <BurgerMenu aboutus={aboutus} reviews={reviews} price={price} scrollTo={scrollTo}/>
                </div>
                <Image className="lg:flex hidden"  src={downline} alt="line"/>
            </header>
        </>

    )
}
export default Header;