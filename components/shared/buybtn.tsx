'use client'

import React from 'react'
import {motion} from 'framer-motion'
import {useTranslations} from "next-intl";
import Link from "next/link";

interface Props{
    className?: string;
}

export const Buybtn: React.FC<Props> = ({className}) => {
    const t = useTranslations('BuyBtn')

    return (
        <Link href="https://t.me/wieldvpnrobot">
            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}
                        className="rounded-[29px] flex cursor-pointer items-center justify-center mdbvp:w-[725px] mdbvp:h-[230px] [box-shadow:1px_25px_86px_28px_rgba(0,255,238,0.20)] md:w-[580px] md:h-[195px] smbvp:w-[300px] smbvp:h-[130px] w-[294px] h-[94px]"
                        style={{
                            backgroundImage: "url('https://i.imgur.com/fUIABUs.png')"
                        }}>
                <h2 className="md:text-[55px] text-white font-bold italic smbvp:text-[40px] text-[30px]">{t('btn')}</h2>
            </motion.div>
        </Link>
    )
}
