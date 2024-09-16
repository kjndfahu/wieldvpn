import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import Image from 'next/image'
import block from '../../assets/slideblock.webp'
import profile3d from '../../assets/prfile3d 2.png'
import {useTranslations} from "next-intl";
import { Autoplay, Pagination } from 'swiper/modules';

interface Props{
    className?: string;

}

export const AdaptiveSwiper: React.FC<Props> = ({className}) => {
    const t = useTranslations("Reviews")
    return (
        <div className="z-[100] md:mt-[50px] w-[100vw] ">
            <Swiper spaceBetween={30}
                    centeredSlides={true}
                    pagination={true}
                    speed={400}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1.35}
                    allowTouchMove={false}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className="flex items-center justify-center gap-[100px] w-[100vw] h-[500px]" >

                <SwiperSlide className="bg-block h-[250px]">
                    <div className="flex text-center flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[18px] sm:text-[16px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">{t('text1')}</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-block">
                    <div className="flex text-center flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[18px] sm:text-[16px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">{t('text2')}</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-block">
                    <div className="flex text-center flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[18px] sm:text-[16px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">{t('text3')}</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-block">
                    <div className="flex text-center flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[18px] sm:text-[16px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">{t('text4')}</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-block">
                    <div className="flex text-center flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[18px] sm:text-[16px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">{t('text5')}</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}
