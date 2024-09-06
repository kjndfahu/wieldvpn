import React from 'react'
import vpntext from '../../assets/vpntext.png'
import Image from 'next/image'

interface Props{
    className?: string;
}

export const Hero:React.FC<Props> = ({className}) => {
    return (
        <>
            <div className="flex flex-col text-[64px] items-center justify-center font-bold text-white text-center mt-[158px] z-20">
                    <div>
                        <div style={{backgroundImage: "url('https://cdn.discordapp.com/attachments/936596739937431563/1281558336961118229/rectangle.png?ex=66dc27b5&is=66dad635&hm=f6ef0fd36a72bc9e01e9007bf8d3f314bb5be9596d4afbfd8f95af975726e2da&')"}} className="flex  max-w-[370px] items-center justify-center bg-no-repeat text-[rgba(0,_255,_240,_1)]">WieldVPN</div>
                        - быстро, надёжно,<br/> конфиденциально.
                    </div>
            </div>

            <div className="absolute z-10 mt-[-115px]">
                <Image className="flex z-[1]" src={vpntext} alt="vpntext"/>
            </div>
        </>
    )
}