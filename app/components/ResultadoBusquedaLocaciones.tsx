export default function ResultadoBusquedaLocaciones({
    locaciones,
    totalResultados,
    paginaActual
}: ResultadoBusquedaLocacionesProps) {

    //JSX
    return (
        <>
            {/* RESUMEN RESULTADO */}
            <div className={`w-full px-3 sm:px-5 lg:max-w-[1140px] lg:mx-auto lg:my-0`}>
                <div className={`w-full flex justify-between py-1 border-b border-solid border-b-[#9a35ef]`}>
                    <div className={`font-circular `}>Resultados {`(${totalResultados})`}</div>
                    <div className={`font-circular `}>{`${((paginaActual - 1) * 20) + 1} - ${(((paginaActual - 1) * 20) + 1) + (locaciones.length - 1)}`}</div>
                </div>
            </div>

            {/* LOCACIONES */}
            <div className={`w-full my-5 lg:my-16 px-3 sm:px-6 lg:px-8 lg:max-w-[1140px] lg:mx-auto`}>
                <ul className={`w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4`}>
                    {locaciones.map((locacion) => {
                        return (
                            <li
                                key={locacion.id}
                                className={`w-full flex flex-col gap-2 p-2 rounded border-[3px] border-[#5b1ce6] border-solid overflow-hidden`}
                            >
                                <article className={`w-full`}>
                                    <div className={`flex flex-col gap-1 w-full px-1`}>
                                        <h4 className={`w-full m-0 mb-2 text-lg text-center text-[#5b1ce6] font-bold font-street`}>{locacion.name}</h4>
                                        <p className={`m-0 font-gilmory font-normal`}><span className={`text-[#61d718] font-medium`}>Tipo: </span> {locacion.type}</p>
                                        <p className={`m-0 font-gilmory font-normal`}><span className={`text-[#61d718] font-medium`}>Dimensión: </span>{locacion.dimension}</p>
                                        <p className={`m-0 font-gilmory font-normal`}><span className={`text-[#61d718] font-medium`}> Residentes: </span>{locacion.residents.length}</p>
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}