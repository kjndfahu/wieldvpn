'use client'

import React from 'react'
import Image from 'next/image'
import {ChevronDown} from "lucide-react";
import {BurgerMenu} from "@/components/shared/burgermenu";
import {SortPopup} from "@/components/shared/sortpopup";
import {useTranslations} from "next-intl";

interface Props{
    className?:string;
}

export const HeaderRightblock: React.FC<Props> = ({className}) => {
    const [isActive, setActive] = React.useState(false)
    const t = useTranslations("HeaderRightblock")
    return (
        <>
            <div className="lg:flex lg:gap-10 lg:text-white lg:text-[24px] lg:leading-6 lg:font-normal lg:mr-10 hidden items-center">
                <span className="cursor-pointerr">{t('help')}</span>
                <SortPopup/>
            </div>

        </>
    )
}