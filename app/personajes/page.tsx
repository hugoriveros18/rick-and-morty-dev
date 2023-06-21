import { conversionGender, conversionStatus } from "../appDetails";
import BotonDePaginacion from "../components/BotonDePaginacion";
import GradientSeparator from "../components/GradientSeparator";

const fetchPersonajes = () => {
    return fetch("https://rickandmortyapi.com/api/character", { cache: 'no-store' })
        .then(res => res.json());
}

export default async function Personajes() {

    //PERSONAJES
    const personajes:respuestaFetchPersonajes = await fetchPersonajes();

    //JSX
    return (
        <main className={`mt-20`}>

            {/* TEXTO INTRODUCTORIO */}
            <div className={`w-full px-4 md:px-11 lg:px-[225px] pb-11 pt-8 sectionBackground lg:max-w-[1140px] lg:mx-auto lg:my-0`}>
                <h5 className={`sectionTitle mb-7`}>PERSONAJES DE TODO EL UNIVERSO</h5>
                <p className={`w-full mb-3 text-center font-gilmory text-xl font-semibold`}>
                    ¡Bienvenidos al caótico multiverso de Rick and Morty, donde la ciencia se mezcla con la locura! Prepárate para conocer a un elenco de personajes tan extravagantes como un Meeseeks desesperado por cumplir deseos, un Plumbus de usos desconocidos, y un señor de las galletas intergaláctico obsesionado con las golosinas.
                </p>
                <GradientSeparator />
            </div>

            {/* RESUMEN RESULTADO */}
            <div className={`w-full px-3 sm:px-5 lg:max-w-[1140px] lg:mx-auto lg:my-0`}>
                <div className={`w-full flex justify-between py-1 border-b border-solid border-b-[#9a35ef]`}>
                    <div className={`font-circular`}>Resultados {`(${personajes.info.count})`}</div>
                    <div>{`${personajes.results[0].id} - ${personajes.results[0].id + 19}`}</div>
                </div>
            </div>

            {/* PERSONAJES */}
            <div className={`w-full my-5 lg:my-16 px-3 sm:px-6 lg:px-8 lg:max-w-[1140px] lg:mx-auto`}>
                <ul className={`w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4`}>
                    {personajes.results.map((personaje) => {
                        return (
                            <li
                                key={personaje.id}
                                className={`w-full flex flex-col gap-2 p-2 rounded border-[3px] border-[#5b1ce6] border-solid overflow-hidden`}
                            >
                                <picture className={`flex align-middle w-full rounded border-[2px] border-[#b908f6] border-solid overflow-hidden`}>
                                    <img 
                                        alt="Rick & Morty - Personaje"
                                        src={personaje.image}
                                        className={`object-cover`}
                                    />
                                </picture>
                                <article className={`w-full`}>
                                    <div className={`flex flex-col gap-1 w-full px-1`}>
                                        <h4 className={`w-full m-0 mb-2 text-lg text-center text-[#5b1ce6] font-bold font-street`}>{personaje.name}</h4>
                                        <p className={`m-0 font-gilmory font-normal`}><span className={`text-[#61d718] font-medium`}>Estado: </span> {conversionStatus[personaje.status]}</p>
                                        <p className={`m-0 font-gilmory font-normal`}><span className={`text-[#61d718] font-medium`}>Especie: </span>{personaje.species}</p>
                                        <p className={`m-0 font-gilmory font-normal`}><span className={`text-[#61d718] font-medium`}>Genero: </span>{conversionGender[personaje.gender]}</p>
                                        <p className={`m-0 font-gilmory font-normal`}><span className={`text-[#61d718] font-medium`}>Ubicación: </span>{personaje.location.name}</p>
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <BotonDePaginacion 
                paginaActual={1}
                lastPage={personajes.info.pages}
            />

        </main>
    )
}

