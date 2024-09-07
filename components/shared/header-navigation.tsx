import React from 'react'

interface Props{
    className?: string;
    aboutus: any;
    reviews: any;
    price: any;
    scrollTo: any;
}

export const HeaderNavigation: React.FC<Props> =({aboutus, reviews, price, scrollTo, className}) => {

    return (
        <div className="lg:flex lg:z-30 lg:cursor-pointer lg:justify-center lg:items-center lg:gap-10 lg:text-white lg:text-[24px] lg:leading-6 lg:font-normal hidden">
            <div onClick={() => scrollTo(aboutus.current)} className="cursor-pointer">О нас</div>
            <div onClick={() => scrollTo(reviews.current)} className="cursor-pointer">Отзывы</div>
            <div onClick={() => scrollTo(price.current)} className="cursor-pointer">Цены</div>
        </div>
    )
}