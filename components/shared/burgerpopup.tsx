import React from 'react'

interface Props{
    className?: string;
}

export const BurgerPopup: React.FC<Props> = ({className}) => {
    return (
        <div className="flex flex-col absolute top-0 right-0 bg-white/20 w-[150px] h-[300px] z-35">
            <div className="flex mt-[135px] flex-col gap-[2px] text-white font-bold backdrop-filter backdrop-blur-[20px]">
                <div className="flex bg-white/20 w-full h-[40px] items-center justify-center">Отзывы</div>
                <div className="flex bg-white/20 w-full h-[40px] items-center justify-center">Покупка</div>
                <div className="flex bg-white/20 w-full h-[40px] items-center justify-center">Помощь</div>
                <div className="flex bg-white/20 w-full h-[40px] items-center justify-center">О нас</div>
            </div>
        </div>
    )
}