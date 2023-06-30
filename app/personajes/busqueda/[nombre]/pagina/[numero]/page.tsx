import BarraBusqueda from "@/app/components/BarraBusqueda";
import BotonDePaginacion from "@/app/components/BotonDePaginacion";
import BreadCrumb from "@/app/components/Breadcrumb";
import ResultadoBusquedaPersonajes from "@/app/components/ResultadoBusquedaPersonajes";

const fetchPersonajes = (nombre:string, numero:number) => {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${numero}&name=${nombre}`, { cache: 'no-store' })
        .then((res) => res.json());
}

export default async function PaginaResultadoBusquedaPersonaje({ params }: any) {

    //NUMERO PAGINA
    const { nombre, numero } = params;

    //PERSONAJES
    const personajes:respuestaFetchPersonajes = await fetchPersonajes(nombre, numero);

    //JSX
    return (
        <main className={`mt-20 lg:mt-28`}>

            {/* BREADCRUMB */}
            <BreadCrumb />

            {/* BARRA BUSQUEDA */}
            <BarraBusqueda 
                slug="/personajes/busqueda"
                placeholder="Buscar personaje..."
            />

            {/* TERMINO DE BUSQUEDA */}
            <div className="w-full px-3 mb-3 sm:px-5 lg:max-w-[1140px] lg:mx-auto ">
                <p className="w-full font-gilmory text-xl">Resulados encontrados para <span className={`font-semibold`}>'{nombre.replaceAll('%20', ' ')}'</span></p>
            </div>

            {/* RESULTADO PERSONAJES */}
            <ResultadoBusquedaPersonajes
                personajes={personajes.results}
                totalResultados={personajes.info.count}
                paginaActual={+numero}
            />

            {/* BOTONES PAGINACION */}
            <BotonDePaginacion 
                paginaActual={+numero}
                lastPage={personajes.info.pages}
                slugBase={`/personajes/busqueda/${nombre}/pagina/1`}
                slugBusqueda={`/personajes/busqueda/${nombre}/pagina`}
            />
        </main>
    )
}

