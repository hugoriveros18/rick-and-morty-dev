'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BreadCrumb() {

    //ROUTER
    const routePath = usePathname();
    const routePathAsArray: string[] = routePath.replace('/', '').split('/');

    return (
        <div className={`flex gap-2 lg:gap-3 px-3 sm:px-5 pb-4 lg:max-w-[1140px] lg:mx-auto lg:my-0`}>
            {
                routePathAsArray.map((route, index) => {
                    return (
                        <div key={index} className={`flex gap-2 lg:gap-3 items-center py-1`}>
                            <picture className={`flex items-center pb-1 sm:pb-0`}>
                                <img 
                                    alt="breadcrumb icon"
                                    src="/img/flecha-right.svg"
                                    className={`w-[10px] sm:w-[14px] lg:w-[16px]`}
                                />
                            </picture>
                            {
                                index === 0
                                ?
                                <Link 
                                    className={`flex items-center font-gilmory italic underline text-xs sm:text-sm lg:text-base`}
                                    href={`/${route}`}
                                >
                                    {route}
                                </Link>
                                :
                                <p className={`flex items-center font-gilmory italic text-xs sm:text-sm lg:text-base`}>{route.replaceAll('%20', ' ')}</p>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

