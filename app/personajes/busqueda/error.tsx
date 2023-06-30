'use client'

import BarraBusqueda from "@/app/components/BarraBusqueda";
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function ErrorTermNotFound() {

    //ROUTER
    const routePath = usePathname();
    const routePathAsArray: string[] = routePath.replace('/', '').split('/');

    //JSX
    return (
        <div className={`mt-16 lg:mt-24 max-w-[1140px] mx-auto`}>
            {/* BARRA BUSQUEDA */}
            <BarraBusqueda
                slug="/personajes/busqueda"
                placeholder="Buscar personaje..."
            />
            <p className={`w-full mb-3 px-5 sm:px-9 text-center font-gilmory text-xl sm:text-2xl font-semibold`}>Dimensiones desconocidas, personaje extraviado. ¿Quizás se perdieron en un universo paralelo? No encontramos resultados para <span className={`text-[#61d718] font-semibold`}>'{routePathAsArray[2].replaceAll('%20', ' ')}'</span> ¡Intenta otra vez, Morty!</p>
            <div className="flex justify-center gap-3 md:gap-6 py-8 w-full">
                <Link 
                    href='/personajes'
                    className={`px-[15px] py-[10px] text-center font-gilmory text-xl font-semibold transition-colors bg-[#b908f6] hover:bg-[#61d718] rounded-[12px]`}
                >
                    Ver personajes
                </Link>
                <Link 
                    href='/'
                    className={`px-[15px] py-[10px] text-center font-gilmory text-xl font-semibold transition-colors bg-[#5b1ce6] hover:bg-[#61d718] rounded-[12px]`}
                >
                    Ir al inicio
                </Link>
            </div>
        </div>
    )
}