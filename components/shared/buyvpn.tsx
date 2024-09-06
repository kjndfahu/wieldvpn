import React from 'react'
import {MoveDown} from "lucide-react";
import Image from 'next/image'
import lights from '../../assets/lights behind price.png'
import bigletters from '../../assets/bigletters.png'
import {Buybtn} from "@/components/shared/buybtn";


interface Props {
    className?: string
}

export const BuyVpn: React.FC<Props> = ({className}) => {
    return (

            <div className="flex mt-64 items-center justify-center">
                <div className="flex flex-col z-20 items-center justify-center">
                    <div className="flex flex-col gap-16 items-center justify-center">
                        <h2 className="text-[96px] text-white font-semibold leading-[82px]">Купить лучший<br/> <span
                            className="text-[348px] leading-[248px] font-bold text-[#01fcee]">VPN</span></h2>
                        <MoveDown color="#ffffff" className="h-[68px] w-[100px]"/>
                        <Buybtn/>
                    </div>
                    <div className="h-[200px]"></div>
                </div>
                <Image className="absolute z-10" src={bigletters} alt="bigletters"/>
                <Image className="absolute z-[1] w-full mt-24" src={lights} alt="lights"/>
            </div>
    )
}