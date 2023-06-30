import BarraBusqueda from "@/app/components/BarraBusqueda";
import BotonDePaginacion from "@/app/components/BotonDePaginacion";
import BreadCrumb from "@/app/components/Breadcrumb";
import ResultadoBusquedaLocaciones from "@/app/components/ResultadoBusquedaLocaciones";

const fetchLocaciones = (pagina:number) => {
    return fetch(`https://rickandmortyapi.com/api/location?page=${pagina}`, { cache: 'no-store' })
        .then((res) => res.json());
}

export default async function PaginaResultadoLocacion({ params }: any) {

    //NUMERO PAGINA
    const { numero } = params;

    //PERSONAJES
    const locaciones:respuestaFetchLocaciones = await fetchLocaciones(numero);


    //JSX
    return (
        <main className={`mt-20 lg:mt-28`}>

            {/* BREADCRUMB */}
            <BreadCrumb />

            {/* BARRA BUSQUEDA */}
            <BarraBusqueda 
                slug="/locaciones/busqueda"
                placeholder="Encontrar ubicacion..."
            />

            {/* RESULTADO LOCACIONES */}
            <ResultadoBusquedaLocaciones
                locaciones={locaciones.results}
                totalResultados={locaciones.info.count}
                paginaActual={+numero}
            />

            {/* BOTONES PAGINACION */}
            <BotonDePaginacion 
                paginaActual={+numero}
                lastPage={locaciones.info.pages}
                slugBase="/locaciones"
                slugBusqueda="/locaciones/pagina"
            />
        </main>
    )
}

