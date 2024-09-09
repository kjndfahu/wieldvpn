import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import Image from 'next/image'
import block from '../../assets/slideblock.png'
import profile3d from '../../assets/prfile3d 2.png'

interface Props{
    className?: string;

}

export const AdaptiveSwiper: React.FC<Props> = ({className}) => {
    return (
        <div className="z-[100] md:mt-[50px] w-[100vw] ">
            <Swiper spaceBetween={10}
                    centeredSlides={true}
                    pagination={true}
                    slidesPerView={1.35}
                    grabCursor={true}
                    loop={true}
                    modules={[Pagination]}
                    className="flex items-center justify-center gap-[100px] w-[100vw]">

                <SwiperSlide className="bg-block">
                    <div className="flex flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[19px] sm:text-[17px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">Я очень довольна VPN-сервисом! Отличная скорость, стабильное соединение, блокировка рекламы и простота использования за довольно небольшую цену. Очень рекомендую его к использованию!</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-block">
                    <div className="flex flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[19px] sm:text-[17px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">Я пользуюсь этим VPN уже более полугода, он работает крайне стабильно и быстро, администратор быстро реагирует, если появляются проблемы. Советую WieldVPN всем!</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-block">
                    <div className="flex flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[19px] sm:text-[17px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">Я пользуюсь этим сервисом уже полгода. Он очень прост в установке и использовании, обладает высокой скоростью и всегда стабильным соединением. Почти все время у меня включен WieldVPN. Если у вас возникнут какие-либо вопросы, служба поддержки всегда готова прийти на помощь круглосуточно!</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-block">
                    <div className="flex flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[19px] sm:text-[17px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">Как самый обычный пользователь, который не очень хорошо разбирается в этом, я могу только сказать, что скорость работы с VPN просто бомба!! Я очень рада, потому что, по моему опыту, это лучший VPN из всех, которыми я пользовалась, также абсолютно все мои вопросы решаются быстро!</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-block">
                    <div className="flex flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[19px] sm:text-[17px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">Это лучший VPN, которым я когда-либо пользовался! Всегда под рукой на всех устройствах, не имеет проблем с блокировками. А если возникнут проблемы — служба поддержки ответит даже глубокой ночью! Определенно надолго с WieldVPN!</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>




            </Swiper>
        </div>

    )
}