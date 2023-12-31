import BarraBusqueda from "@/app/components/BarraBusqueda";
import BotonDePaginacion from "@/app/components/BotonDePaginacion";
import BreadCrumb from "@/app/components/Breadcrumb";
import ResultadoBusquedaPersonajes from "@/app/components/ResultadoBusquedaPersonajes";

const fetchPersonajes = (pagina:number) => {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`, { cache: 'no-store' })
        .then((res) => res.json());
}

export default async function PaginaResultadoPersonaje({ params }: any) {

    //NUMERO PAGINA
    const { numero } = params;

    //PERSONAJES
    const personajes:respuestaFetchPersonajes = await fetchPersonajes(numero);


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
                slugBase="/personajes"
                slugBusqueda="/personajes/pagina"
            />
        </main>
    )
}

