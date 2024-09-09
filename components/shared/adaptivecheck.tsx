import React, {ChangeEvent, useTransition} from 'react'
import {useRouter} from "next/navigation";
import {useLocale} from "next-intl";

interface Props{
    className?:string,
}

export const AdaptiveCheck: React.FC<Props> = ({className}) => {
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
                className=' rounded-3xl bg-black/20 z-[50] py-2 text-white text-[25px]'
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option className="text-white bg-black/20 rounded-full text-[20px]" value='en'>En</option>
                <option className="text-white bg-black/20 rounded-full text-[20px]" value='ru'>Ru</option>
            </select>
        </label>
    )
}