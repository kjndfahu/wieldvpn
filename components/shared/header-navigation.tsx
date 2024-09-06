import React from 'react'

interface Props{
    className?: string;
}

export const HeaderNavigation: React.FC<Props> =({className}) => {

    return (
        <div className="flex cursor-pointer justify-center items-center gap-10 text-white text-[24px] leading-6 font-normal">
            <div className="cursor-pointer">О нас</div>
            <div className="cursor-pointer">Отзывы</div>
            <div className="cursor-pointer">Цены</div>
        </div>
    )
}