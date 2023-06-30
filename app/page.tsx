import Image from 'next/image';
import Link from 'next/link';
import VideoIntro from './components/VideoIntro';
import GradientSeparator from './components/GradientSeparator';
import ImageSlider3d from './components/ImageSlider3d';
import { locaciones, temporadas, viajeros } from './appDetails';

export default function Home() {

  //JSX
  return (
    <main className={``}>
      {/* INITIAL SCREEN */}
      <header className={`w-full h-[100vh] relative`}>
        <div className={`absolute top-0 left-0 w-full h-full bg-black/40`}></div>
        <video 
          className={`w-full h-full object-cover`}
          autoPlay
          loop
          muted
        >
          <source src='/videos/rick-and-morty-gift.mp4' type="video/mp4"/>
          Tu navegador no soporta este video
        </video>
        <article className={`absolute bottom-3 lg:bottom-32 flex flex-col gap-3 w-full lg:w-auto`}>
          <h4 className={`w-full lg:max-w-[380px] py-1.5 text-center lg:text-end text-xl lg:text-2xl tracking-[0.4px] lg:pr-2 font-gilmory gradientBackground lg:mb-3`}>DIVERSION ASEGURADA</h4>
          <h3 className={`px-2 lg:px-0 lg:pl-[103px] text-center lg:text-start text-3xl tracking-[0.6px] font-gilmory font-semibold`}>Regresa a las realidades paralelas</h3>
          <p className={`px-2 lg:px-0 lg:pl-[103px] text-center lg:text-start text-xl font-gilmory font-normal`}>Nuevas aventuras y experimentos, nada parecido</p>
        </article>
      </header>



      {/* INTRODUCTION */}
      <div className={`w-full flex flex-col gap-12 pt-6 lg:pt-14 px-4 md:px-10 mt-8 justify-center content-center sectionBackground max-w-[1140px] lg:mx-auto lg:my-0`}>
        <h5 className={`sectionTitle`}>¡WUBBA LUBBA DUB DUB!</h5>
        <p className={`w-full text-xl leading-6 text-center font-gilmory font-normal md:px-12`}>
          ¿Dinosaurios? ¿Más clones? ¿Naves espaciales? ¿Drama familiar? Nadie sabe qué deparará a Rick and Morty en esta temporada. Igual alista las maletas, que esas realidades paralelas no se visitarán solas.
        </p>
        <VideoIntro />
      </div>
      <GradientSeparator />



      {/* VIAJEROS */}
      <div className={`md:px-10 max-w-[1140px] lg:mx-auto lg:my-0`}>
        <h5 className={`sectionTitle mt-3 mb-20`}>LOS VIAJEROS</h5>
        <ul className={`flex flex-nowrap pb-6 overflow-auto customScrollBar mb-28 md:justify-evenly`}>
          {
            viajeros.map((viajero) => {
              return (
                <li
                  className={`flex-[0_0_50%] md:flex-none px-4 md:px-0 `}
                  key={viajero.nombre}
                >
                  <Image
                    className={`w-full md:min-w-[220px]`}
                    src={viajero.imagen}
                    alt={`Perfil ${viajero.nombre}`}
                    width={150}
                    height={170}
                  />
                  <p className={`mt-4 text-center text-base font-medium font-gilmory tracking-[0.15em] text-[#61d718]`}>{viajero.nombre}</p>
                </li>
              )
            })
          }
        </ul>
        <GradientSeparator />
      </div>



      {/* TEMPORADAS */}
      <div className={`w-full p-4 lg:px-9 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] sm:mx-auto sm:my-0 `}>
        <h5 className={`sectionTitle mb-12`}>UNA RECORDADITA</h5>
        <ul className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-14`}>
          {
            temporadas.map((temporada) => {
              return (
                <li
                  key={temporada.numeroTemporada}
                >
                  <Link
                    className={`w-full`}
                    href={temporada.slug}
                  >
                    <Image 
                      className={`w-full`}
                      src={temporada.imagen}
                      alt={temporada.numeroTemporada}
                      width={345}
                      height={200}
                    />
                    <h6 className={`w-full mt-4 mb-2 text-start text-2xl font-gilmory font-semibold tracking-[0.42] text-[#9a35ef]`}>
                      {temporada.numeroTemporada}
                    </h6>
                    <p className={`w-full m-0 text-start font-gilmory font-normal text-base tracking-[0.45]`}>
                      {temporada.descripcion}
                    </p>
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <GradientSeparator />
      </div>



      {/* IMAGE SLIDER */}
      <div className={`w-full sectionBackground`}>
        <div className={`mb-12`}>
          <h5 className={`sectionTitle`}>FOTITOS DE TODAS LAS REALIDADES</h5>
          <ImageSlider3d />
        </div>
        <GradientSeparator />
      </div>

      {/* LOCACIONES */}
      <div className={`w-full px-4 pb-14 sectionBackground md:max-w-[720px] lg:max-w-[1140px] md:mx-auto md:my-0`}>
        <h5 className={`sectionTitle mt-3`}>MUCHOS LUGARES POR CONOCER</h5>
        <ul className={`w-full grid grid-cols-2 lg:grid-cols-4 gap-7 py-14`}>
          {
            locaciones.map((locacion) => {
              return (
                <li
                  key={locacion.id}
                  className={`w-full rounded-md overflow-hidden border-[1px] border-[#5b1ce6] border-solid locationBackground`}
                > 
                  <img 
                    src={locacion.imagen}
                    alt='Rick & Morty'
                    className={`object-cover`}
                  />
                </li>
              )
            })
          }
        </ul>
        <div className={`w-full flex justify-center`}>
          <Link 
              href='/locaciones'
              className={`px-[15px] py-[10px] text-center font-gilmory text-xl font-semibold transition-colors bg-[#b908f6] hover:bg-[#61d718] rounded-[12px]`}
          >
              Ver locaciones
          </Link>
        </div>
      </div>
    </main>
  )
}
