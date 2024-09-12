'use client'

import React from 'react'

import {useTranslations} from "next-intl";
import {motion} from 'framer-motion'
import Link from "next/link";
import {SortPopup} from "@/components/shared/sortpopup";


interface Props{
    className?:string;
}

export const HeaderRightblock: React.FC<Props> = ({className}) => {
    const t = useTranslations("HeaderRightblock")
    return (
        <>
            <div className="lg:flex lg:gap-10 lg:text-white lg:text-[24px] lg:leading-6 lg:font-normal lg:mr-10 hidden items-center z-[100]">
                <Link href="https://help.wieldvpn.ru/">
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cursor-pointerr">{t('help')}</motion.div>
                </Link>
                <SortPopup/>
            </div>
        </>
    )
}