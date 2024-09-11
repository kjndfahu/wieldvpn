import React from 'react'
import {useTranslations} from "next-intl";
import Link from "next/link";

interface Props{
    className?: string;
    isReviews: boolean;
    setReviews: Function;
}

export const BurgerPopup: React.FC<Props> = ({className, isReviews, setReviews}) => {
    const t = useTranslations('HeaderNavigation')
    return (
        <div className="flex flex-col absolute top-0 right-0 bg-[#333d41] w-[150px] h-[300px] [transition:1s] z-[100]">
            <div className="flex mt-[135px] flex-col gap-[2px] text-white font-bold backdrop-filter backdrop-blur-[20px]">
                <div className="flex bg-white/20 w-full h-[40px] items-center justify-center">{t('reviews')}</div>
                <div onClick={() => setReviews(false)}  className="flex bg-white/20 w-full h-[40px] items-center justify-center">{t('prices')}</div>
                <Link href="https://help.wieldvpn.ru/">
                    <div className="flex bg-white/20 w-full h-[40px] items-center justify-center">{t('help')}</div>
                </Link>
                <div onClick={() => setReviews(!isReviews)} className="flex bg-white/20 w-full h-[40px] items-center justify-center">{t('aboutus')}</div>
            </div>
        </div>
    )
}