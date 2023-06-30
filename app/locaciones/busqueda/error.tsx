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
                slug="/locaciones/busqueda"
                placeholder="Encontrar ubicacion..."
            />
            <p className={`w-full mb-3 px-5 sm:px-9 text-center font-gilmory text-xl sm:text-2xl font-semibold`}>Oops, parece que esa ubicación está más oculta que las intenciones de Evil Morty. No encontramos resultados para <span className={`text-[#61d718] font-semibold`}>'{routePathAsArray[2].replaceAll('%20', ' ')}'</span> Sigue buscando, podrías encontrar una dimensión aún más loca y divertida</p>
            <div className="flex justify-center gap-3 md:gap-6 py-8 w-full">
                <Link 
                    href='/locaciones'
                    className={`px-[15px] py-[10px] text-center font-gilmory text-xl font-semibold transition-colors bg-[#b908f6] hover:bg-[#61d718] rounded-[12px]`}
                >
                    Ver locaciones
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