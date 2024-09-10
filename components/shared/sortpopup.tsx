'use client'

import React, {ChangeEvent, useState, useTransition} from 'react'
import { useRouter } from 'next/navigation';
import {useLocale} from "next-intl";

interface Props{
    className?: string;
}

export const SortPopup: React.FC<Props> =({className}) => {
    const [isActive, setActive] = React.useState(false)
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };


    return (
        <label className='rounded block mb-2 text-[25px] font-medium text-gray-900 dark:text-white'>
            <p className='sr-only block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>change language</p>
            <select
                defaultValue={localActive}
                className='rounded-3xl bg-transparent z-[50] py-2 text-white text-[25px]'
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option className="text-white bg-[#032736] rounded-full text-[20px]" value='en'>En</option>
                <option className="text-white bg-[#032736] rounded-full text-[20px]" value='ru'>Ru</option>
            </select>
        </label>
    )
}