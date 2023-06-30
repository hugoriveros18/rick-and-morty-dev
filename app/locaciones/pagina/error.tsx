'use client'

import Link from "next/link"

export default function ErrorNotFound() {

    //JSX
    return (
        <div className={`mt-16 max-w-[1140px] mx-auto`}>
            <p className={`w-full text-center font-circular text-[100px]`}>404</p>
            <picture className={`flex justify-center w-full overflow-hidden`}>
                <img 
                    src="/img/pagina-404-r-m.png"
                    alt="Pagina 404"
                    className={`max-w-none lg:w-[70%]`}
                />
            </picture>
            <p className={`w-full mb-3 px-5 sm:px-9 text-center font-gilmory text-xl sm:text-2xl font-semibold`}>¡Ups! Parece que te has aventurado a una dimensión desconocida. La página que buscas se perdió en algún portal intergaláctico.</p>
            <div className="flex justify-center py-8 w-full">
                <Link 
                    href='/'
                    className={`px-[15px] py-[10px] text-center font-gilmory text-xl font-semibold transition-colors bg-[#5b1ce6] hover:bg-[#b908f6] rounded-[12px]`}
                >
                    Ir al inicio
                </Link>
            </div>
        </div>
    )
}