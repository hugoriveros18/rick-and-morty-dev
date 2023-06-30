import BarraBusqueda from "@/app/components/BarraBusqueda";
import BotonDePaginacion from "@/app/components/BotonDePaginacion";
import BreadCrumb from "@/app/components/Breadcrumb";
import ResultadoBusquedaLocaciones from "@/app/components/ResultadoBusquedaLocaciones";
import ResultadoBusquedaPersonajes from "@/app/components/ResultadoBusquedaPersonajes";

const fetchLocaciones = (nombre:string, numero:number) => {
    return fetch(`https://rickandmortyapi.com/api/location/?page=${numero}&name=${nombre}`, { cache: 'no-store' })
        .then((res) => res.json());
}

export default async function PaginaResultadoBusquedaPersonaje({ params }: any) {

    //NUMERO PAGINA
    const { nombre, numero } = params;

    //PERSONAJES
    const locaciones:respuestaFetchLocaciones = await fetchLocaciones(nombre, numero);

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

            {/* TERMINO DE BUSQUEDA */}
            <div className="w-full px-3 mb-3 sm:px-5 lg:max-w-[1140px] lg:mx-auto ">
                <p className="w-full font-gilmory text-xl">Resulados encontrados para <span className={`font-semibold`}>'{nombre.replaceAll('%20', ' ')}'</span></p>
            </div>

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
                slugBase={`/locaciones/busqueda/${nombre}/pagina/1`}
                slugBusqueda={`/locaciones/busqueda/${nombre}/pagina`}
            />
        </main>
    )
}

