'use client'
import { useRouter } from 'next/navigation'

export default function BotonDePaginacion({
    paginaActual,
    lastPage,
    slugBase,
    slugBusqueda
}:BotonDePaginacionProps) {

    //ROUTER
    const router = useRouter();

    //METODOS
    const handleNavigation = (pagina:number) => {

        if(pagina < 1 || pagina > lastPage || pagina === paginaActual) return

        if(pagina === 1) {
            router.push(slugBase);
            return;
        }

        router.push(`${slugBusqueda}/${pagina}`);
    }
    
    const estadoFlecha = (pagina:number) => {
        if(pagina < 1 || pagina > lastPage || pagina === paginaActual) {
            return 'opacity-50';
        }

        return 'opacity-100 cursor-pointer';
    
        
    }

    //JSX
    return(
        <div className={`flex justify-center gap-5 w-full px-3 py-10`}>
            <div className={`flex align-middle justify-center`}>
                <img 
                    src='/img/flecha-left-double.svg'
                    alt="Left double arrow"
                    className={`w-[30px] ${estadoFlecha(1)}`}
                    onClick={() => handleNavigation(1)}
                />
            </div>
            <div className={`flex align-middle justify-center`}>
                <img 
                    src='/img/flecha-left.svg'
                    alt="Left arrow"
                    className={`w-[35px] ${estadoFlecha(paginaActual - 1)}`}
                    onClick={() => handleNavigation(paginaActual - 1)}
                />
            </div>
            <div className={`flex align-middle justify-center`}>
                <p className={`flex align-middle justify-center px-4 py-2 text-center text-2xl font-gilmory font-bold rounded border-[2px] border-[#b908f6] border-solid`}>{paginaActual}</p>
            </div>
            <div className={`flex align-middle justify-center`}>
                <img 
                    src='/img/flecha-right.svg'
                    alt="Right arrow"
                    className={`w-[35px] ${estadoFlecha(paginaActual + 1)}`}
                    onClick={() => handleNavigation(paginaActual + 1)}
                />
            </div>
            <div className={`flex align-middle justify-center`}>
                <img 
                    src='/img/flecha-right-double.svg'
                    alt="Right double arrow"
                    className={`w-[30px] ${estadoFlecha(lastPage)}`}
                    onClick={() => handleNavigation(lastPage)}
                />
            </div>
        </div>
    )
}

