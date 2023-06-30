import BarraBusqueda from "../components/BarraBusqueda";
import BotonDePaginacion from "../components/BotonDePaginacion";
import GradientSeparator from "../components/GradientSeparator";
import ResultadoBusquedaLocaciones from "../components/ResultadoBusquedaLocaciones";

const fetchLocaciones = () => {
    return fetch("https://rickandmortyapi.com/api/location", { cache: 'no-store' })
        .then(res => res.json());
}

export default async function Locaciones() {

    //LOCACIONES
    const locaciones:respuestaFetchLocaciones = await fetchLocaciones();

    //JSX
    return (
        <main className={`mt-20`}>

            {/* TEXTO INTRODUCTORIO */}
            <div className={`w-full px-4 md:px-11 lg:px-[225px] pb-8 pt-8 sectionBackground lg:max-w-[1140px] lg:mx-auto lg:my-0`}>
                <h5 className={`sectionTitle mb-7`}>UBICACIONES INTERDIMENSIONALES DE RICK AND MORTY</h5>
                <p className={`w-full mb-3 text-center font-gilmory text-xl font-semibold`}>
                    ¡Prepárate para explorar los rincones más extravagantes y estrafalarios del multiverso! Desde planetas alienígenas hasta dimensiones al revés y todo lo que se te ocurra, aquí encontrarás un catálogo de lugares que desafiarán tu imaginación y te harán cuestionar la cordura.
                </p>
                <GradientSeparator />
            </div>

            {/* BARRA BUSQUEDA */}
            <BarraBusqueda 
                slug="/locaciones/busqueda"
                placeholder="Encontrar ubicacion..."
            />

            {/* RESULTADO LOCACIONES */}
            <ResultadoBusquedaLocaciones
                locaciones={locaciones.results}
                totalResultados={locaciones.info.count}
                paginaActual={1}
            />

            {/* BOTONES PAGINACION */}
            <BotonDePaginacion 
                paginaActual={1}
                lastPage={locaciones.info.pages}
                slugBase="/locaciones"
                slugBusqueda="/locaciones/pagina"
            />

        </main>
    )
}