import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import Image from 'next/image'
import block from '../../assets/slideblock.png'
import profile3d from '../../assets/prfile3d 2.png'
import {useTranslations} from "next-intl";

interface Props{
    className?: string;

}

export const AdaptiveSwiper: React.FC<Props> = ({className}) => {
    const t = useTranslations("Reviews")
    return (
        <div className="z-[100] md:mt-[50px] w-[100vw] ">
            <Swiper spaceBetween={10}
                    centeredSlides={true}
                    pagination={true}
                    slidesPerView={1.35}
                    grabCursor={true}
                    loop={true}
                    modules={[Pagination]}
                    className="flex items-center justify-center gap-[100px] w-[100vw] ">

                <SwiperSlide className="bg-block h-[250px]">
                    <div className="flex flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[19px] sm:text-[17px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">{t('text1')}</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-block">
                    <div className="flex flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[19px] sm:text-[17px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">{t('text2')}</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-block">
                    <div className="flex flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[19px] sm:text-[17px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">{t('text3')}</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-block">
                    <div className="flex flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[19px] sm:text-[17px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">{t('text4')}</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-block">
                    <div className="flex flex-col items-center mdbvp:text-[24px] md:text-[22px] smbvp:text-[19px] sm:text-[17px] text-white py-3 ">
                        <Image className="absolute z-[60]" src={profile3d} alt="profile3d"/>
                        <h2 className="absolute z-[60] mx-2 md:mt-[120px] smbvp:mt-[65px] sm:mt-[60px]">{t('text5')}</h2>
                        <Image className=" z-[50] w-[100vw] h-[450px]" src={block} alt="block"/>
                    </div>
                </SwiperSlide>




            </Swiper>
        </div>

    )
}