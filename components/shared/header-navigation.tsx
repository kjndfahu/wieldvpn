import React from 'react'
import {useTranslations} from "next-intl";

interface Props{
    className?: string;
    aboutus: any;
    reviews: any;
    price: any;
    scrollTo: any;
}

export const HeaderNavigation: React.FC<Props> =({aboutus, reviews, price, scrollTo, className}) => {
    const t = useTranslations("HeaderNavigation")
    return (
        <div className="absolute inset-0 lg:flex lg:z-30 lg:cursor-pointer lg:justify-center lg:items-center lg:gap-10 lg:text-white lg:text-[24px] lg:leading-6 lg:font-normal hidden">
            <div onClick={() => scrollTo(aboutus.current)} className="cursor-pointer">{t('aboutus')}</div>
            <div onClick={() => scrollTo(reviews.current)} className="cursor-pointer">{t('reviews')}</div>
            <div onClick={() => scrollTo(price.current)} className="cursor-pointer">{t('prices')}</div>
        </div>
    )
}