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
                            className="mdbvp:text-[340px] mdbvp:ml-[28px] mdbvp:leading-[248px] font-bold text-[#01fcee] md:text-[245px] md:ml-[28px] md:leading-[250px] smbvp:text-[155px] smbvp:ml-[15px] smbvp:leading-[158px] text-[122px] ml-[10px] leading-[132px]">VPN</span></h2>
                        <MoveDown color="#ffffff" className="md:h-[68px] md:w-[100px] h-[40px]"/>
                        <Buybtn/>
                    </div>

                </div>
                <Image className="absolute z-10" src={bigletters} alt="bigletters"/>
                <Image className="absolute z-[1] w-full mt-24 max-h-[1300px]" src={lights} alt="lights"/>
            </div>
    )
}