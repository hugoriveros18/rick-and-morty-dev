'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function BarraBusqueda({slug, placeholder}:BarraBusquedaProps) {

    //ROUTER
    const router = useRouter();

    //STATES
    const [inputValue, setInputValue] = useState<string>('');

    //METHODS
    const handleKeyDownSearch = (e:any) => {
        if(inputValue !== '' && e.key === 'Enter') {
            router.push(`${slug}/${inputValue}/pagina/1`);
        }
    }

    const handleSearch = () => {
        if(inputValue !== '') {
            router.push(`${slug}/${inputValue}/pagina/1`);
        }
    }

    const handleInputChange = (e:any) => {
        setInputValue(e.target.value)
    }

    //JSX
    return (
        <div className={`w-full px-3 pb-8 pt-3 max-w-[450px] lg:max-w-[550px] mx-auto`}>
            <div className={`flex w-full rounded-[25px] overflow-hidden`}>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={inputValue}
                    onKeyDown={handleKeyDownSearch}
                    onChange={handleInputChange}
                    className={`w-[78%] px-4 font-gilmory text-black`}
                />
                <picture
                    onClick={handleSearch}
                    className={`flex justify-center align-middle w-[22%] p-1 box-border bg-[#5b1ce6] cursor-pointer`}
                >
                    <img 
                        alt="search icon"
                        src="/img/search-icon.svg"
                        className={`w-[27px]`}
                    />
                </picture>
            </div>
        </div>
    )
}
