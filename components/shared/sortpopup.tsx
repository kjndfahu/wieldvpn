import React from 'react'
import {ChevronDown, ChevronUp} from "lucide-react";

interface Props{
    className?: string;
}

export const SortPopup: React.FC<Props> =({className}) => {
    const [isActive, setActive] = React.useState(false)

    return (
        <div onClick={() => setActive(!isActive)} className="flex cursor-pointer">
            <div className="flex flex-row">
                En
                {isActive ? (
                    <ChevronUp className="mt-1" width={20}/>
                ) : (
                    <ChevronDown className="mt-1" width={20}/>
                )}
            </div>
            {isActive && (
                <div className="flex absolute flex-col bg-gray-400 opacity-10 items-center justify-center w-[70px] h-[100px]">
                    <div className=""></div>
                </div>
            )}
        </div>
    )
}