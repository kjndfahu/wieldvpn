'use client'

import React from 'react'
import Image from 'next/image'
import {ChevronDown} from "lucide-react";
import {BurgerMenu} from "@/components/shared/burgermenu";
import {SortPopup} from "@/components/shared/sortpopup";

interface Props{
    className?:string;
}

export const HeaderRightblock: React.FC<Props> = ({className}) => {
    const [isActive, setActive] = React.useState(false)

    return (
        <>
            <div className="flex gap-10 text-white text-[24px] leading-6 font-normal mr-10 ">
                <span className="cursor-pointer">Помощь</span>
                <SortPopup/>
            </div>

           <BurgerMenu isActive={isActive} setActive={setActive}/>
        </>
    )
}