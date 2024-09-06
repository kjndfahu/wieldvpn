import React from 'react'
import {cn} from "@/lib/utils";
import light from '../../assets/light behind.png'
import mainlogo from '../../assets/logo 3d.png'
import Image from "next/image";
import {HeaderNavigation} from "@/components/shared/header-navigation";
import {HeaderRightblock} from "@/components/shared/header-rightblock";
import headerlogo from '../../assets/headerlogo.png';
import downline from "@/assets/down line.png";

interface Props{
    className?:string
}

export const Header: React.FC<Props> = ({className}) => {

    return (
        <>
            <div className="absolute z-10 mb-10">
                <Image src={light} alt="light"/>
            </div>

            <header className={cn('py-[29px]', className)}>
                <Image src={downline} alt="line"/>
                <div className="flex items-center justify-between bg-white/10 py-4 backdrop-blur-[10px] z-20">
                    <Image className="ml-[100px] z-10" src={headerlogo} alt="biglogo" width={88}/>
                    <HeaderNavigation/>
                    <HeaderRightblock/>
                </div>
                <Image src={downline} alt="line"/>
                <div className="hidden "></div>
            </header>
        </>

    )
}