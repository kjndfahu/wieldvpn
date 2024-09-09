'use client'

import React, {ChangeEvent, useState, useTransition} from 'react'
import { useRouter } from 'next/navigation';
import {ChevronDown, ChevronUp} from "lucide-react";
import {Switch} from "@/components/ui/switch";
import i18n from "@/i18n";
import {locales} from "@/config";
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
        <label className='rounded'>
            <p className='sr-only'>change language</p>
            <select
                defaultValue={localActive}
                className='bg-transparent py-2'
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option value='en'>En</option>
                <option value='ru'>Ru</option>
            </select>
        </label>
    )
}