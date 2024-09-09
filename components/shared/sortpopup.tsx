
import React, {useState} from 'react'
import {ChevronDown, ChevronUp} from "lucide-react";
import {Switch} from "@/components/ui/switch";

interface Props{
    className?: string;
}

export const SortPopup: React.FC<Props> =({className}) => {
    const [isActive, setActive] = React.useState(false)

    return (
        <div className="flex flex-row">
            {isActive && (
                <div className="flex items-center">
                    <Switch className="rotate-90"/>
                </div>
            )}
            <div onClick={() => setActive(!isActive)} className="flex flex-col cursor-pointer">
            <div className="flex flex-row">
                    En
                    {isActive ? (
                        <ChevronUp className="mt-1" width={20}/>
                    ) : (
                        <ChevronDown className="mt-1" width={20}/>
                    )}
                </div>
                {isActive && (
                    <div className="flex flex-col leading-[30px]">
                        <span className="leading-[4px]">-</span>
                        Ru
                    </div>
                )}
            </div>
        </div>
    )
}