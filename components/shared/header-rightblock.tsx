

import React from 'react'

import {useTranslations} from "next-intl";
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
                    <span className="cursor-pointerr">{t('help')}</span>
                </Link>
                <SortPopup/>
            </div>
        </>
    )
}