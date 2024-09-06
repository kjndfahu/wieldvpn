'use client'

import React from 'react'

interface Props{
    className?: string;
    isActive: boolean;
    setActive:  React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> =({className, isActive, setActive}) => {
    return (
        <>
            {isActive && (
                <div className="flex mr-10 bg-white py-6 px-5 rounded-full ">
                    <svg
                        width={30}
                        height={24}
                        viewBox="0 0 30 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line y1="23.3572" x2={30} y2="23.3572" stroke="white"/>
                        <line y1="11.9285" x2={30} y2="11.9285" stroke="white"/>
                        <line y1="0.5" x2={30} y2="0.5" stroke="white"/>
                    </svg>
                </div>
            )}
        </>
    )
}