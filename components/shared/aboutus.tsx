import React from 'react'
import Image from 'next/image'
import line from '../../assets/line down text.png'
import biglogo from '../../assets/logo 3d 1 (1).png'
import lights from '../../assets/lights_aboutsus.png'
import downline from '../../assets/down line.png'

interface Props {
    className?: string
}

export const AboutUs: React.FC<Props> = ({className}) => {
    return (
        <div className="flex items-center z-30 justify-center flex-col rounded-tl-[68px] rounded-tr-[68px] mt-64">
            <Image src={downline} alt="line"/>
            <Image src={biglogo} alt="biglogo" className="absolute z-20 top-[275px] right-[-100px]"/>
            <div
                className="flex flex-col z-10 items-center text-white max-w-[1030px] mt-[170px] mb-[140px]">
                <h3 className="text-[48px] leading-[58px] italic font-semibold">Немного о нас</h3>
                <Image src={line} alt="logo"/>
                <p className="text-[24px] leading-6 font-semibold px-10 mt-10 border-l-2 border-r-2 ">Мы отечественный VPN-проект, который позволяет
                    пользоваться зарубежными сервисами после их блокировки в РФ<br/>
                    Открылись ещё в самом начале блокировок в 2022 году, с тех пор стабильно работаем уже более двух
                    лет. Располагаемся в надёжных ЦОД большинства мира с Uptime 99.99%.</p>
            </div>
            <Image className="absolute z-[1] w-full h-[545px]" src={lights} alt="lights"/>
            <Image src={downline} alt="line"/>
        </div>
    )
}