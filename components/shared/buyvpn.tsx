import React from 'react'
import {MoveDown} from "lucide-react";
import Image from 'next/image'
import lights from '../../assets/lights behind price.png'
import bigletters from '../../assets/bigletters.png'
import {Buybtn} from "@/components/shared/buybtn";
import {useTranslations} from "next-intl";


interface Props {
    className?: string
    price: any;
}

export const BuyVpn: React.FC<Props> = ({price, className}) => {
    const t = useTranslations("BuyVpn")
    return (
            <div ref={price} className="flex mt-20 items-center justify-center">
                <div className="flex flex-col z-20 items-center justify-center">
                    <div className="flex flex-col mdbvp:gap-16 items-center justify-center text-center md:gap-10">
                        <h2 className="mdbvp:text-[96px] text-white font-semibold mdbvp:leading-[82px] md:text-[70px] md:leading-[60px] smbvp:text-[44px] smbvp:leading-[50px] text-[35px] leading-[35px]">{t('title')}<br/> <span
                            className="mdvp:text-[348px] mdbvp:leading-[248px] font-bold text-[#01fcee] md:text-[250px] md:leading-[250px] smbvp:text-[158px] smbvp:leading-[158px] text-[132px] leading-[132px]">VPN</span></h2>
                        <MoveDown color="#ffffff" className="md:h-[68px] md:w-[100px] h-[40px]"/>
                        <Buybtn/>
                    </div>

                </div>
                <Image className="absolute z-10" src={bigletters} alt="bigletters"/>
                <Image className="absolute z-[1] w-full mt-24" src={lights} alt="lights"/>
            </div>
    )
}