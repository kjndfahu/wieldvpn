import React from 'react'
import Link from "next/link";
import {useTranslations} from "next-intl";

interface Props{
    className?: string;
    adaptiveabout: any;
    scrollTo: any;
    setReviews: Function;
}

export const Footer: React.FC<Props> = ({adaptiveabout, setReviews, scrollTo, className}) => {
    const t = useTranslations('HeaderNavigation')
    return (
        <div className="flex items-center justify-center z-20 flex-col rounded-tl-[68px] gap-4 rounded-tr-[68px] bg-black mt-16 py-16 border border-white">
            <div className="flex md:py-0 md:px-0 flex-row gap-1.5 md:border-none border-white border-[1px] py-[10px] px-[19px] rounded-[7px]">
                <svg
                    width={25}
                    height={24}
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.3318 23.3157L13.3183 23.3182L13.2309 23.3612L13.2063 23.3662L13.1891 23.3612L13.1017 23.3182C13.0886 23.3141 13.0787 23.3161 13.0721 23.3243L13.0672 23.3366L13.0463 23.8634L13.0525 23.888L13.0648 23.904L13.1927 23.995L13.2112 24L13.226 23.995L13.354 23.904L13.3687 23.8843L13.3737 23.8634L13.3527 23.3379C13.3495 23.3247 13.3425 23.3173 13.3318 23.3157ZM13.6579 23.1766L13.6419 23.1791L13.4143 23.2936L13.402 23.3059L13.3983 23.3194L13.4204 23.8486L13.4266 23.8634L13.4364 23.872L13.6838 23.9864C13.6994 23.9905 13.7113 23.9872 13.7195 23.9766L13.7244 23.9593L13.6826 23.2037C13.6785 23.1889 13.6703 23.1799 13.6579 23.1766ZM12.778 23.1791C12.7726 23.1758 12.7661 23.1747 12.7599 23.1761C12.7537 23.1775 12.7483 23.1812 12.7448 23.1865L12.7374 23.2037L12.6956 23.9593C12.6964 23.9741 12.7034 23.984 12.7165 23.9889L12.7349 23.9864L12.9823 23.872L12.9946 23.8621L12.9995 23.8486L13.0205 23.3194L13.0168 23.3046L13.0045 23.2923L12.778 23.1791Z"
                        fill="white"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.173 0.144562C22.4771 0.01656 22.81 -0.0275868 23.1369 0.0167154C23.4639 0.0610176 23.773 0.19215 24.0321 0.396463C24.2912 0.600776 24.4908 0.870801 24.6102 1.17843C24.7295 1.48606 24.7642 1.82005 24.7106 2.14564L21.9194 19.0761C21.6487 20.7092 19.8568 21.6457 18.3591 20.8322C17.1063 20.1517 15.2455 19.1031 13.5718 18.0091C12.7349 17.4614 10.1714 15.7077 10.4865 14.4598C10.7572 13.3928 15.0646 9.38325 17.5259 6.99943C18.492 6.06289 18.0514 5.52262 16.9106 6.38409C14.0776 8.52301 9.52899 11.7757 8.02511 12.6913C6.69844 13.4986 6.00679 13.6365 5.17978 13.4986C3.67097 13.2476 2.27169 12.8587 1.12962 12.3849C-0.413645 11.7449 -0.338574 9.62323 1.12839 9.00543L22.173 0.144562Z"
                        fill="white"
                    />
                </svg>
                <h3 className="text-white font-semibold md:text-[24px] leading-6 text-[32px]">Telegram</h3>
            </div>

            <div className="flex md:flex-col md:gap-0 gap-[30px]">
                <div className="flex md:flex-row md:text-[20px] leading-6 text-white md:gap-[31px] flex-col text-[15px] gap-2.5">
                    <h4 onClick={() => {
                        scrollTo(adaptiveabout.current)
                        setReviews(false)}
                    }>{t('aboutus')}</h4>
                    <Link href="https://help.wieldvpn.ru/">
                        <h4>{t('help')}</h4>
                    </Link>
                    <Link href="https://stats.uptimerobot.com/Q5MDPCXK9L">
                        <h4>{t('status')}</h4>
                    </Link>
                </div>

                <div className="mt-12 text-white md:text-center">
                    <h5 className="md:text-[20px] md:leading-6 leading-[26px] font-normal text-[15px]">abuse@wieldvpn.ru</h5>
                    <h3 className="md:text-[24px] md:leading-[29px] leading-[20px] font-semibold text-[10px]">©2022-2024 WieldVPN</h3>
                </div>
            </div>
        </div>
    )
}