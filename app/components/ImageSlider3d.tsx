'use client'

import React, { useState } from "react";
import { sliderImages } from "../appDetails";
import Image from "next/image";

export default function ImageSlider3d() {

    //STATES
    const [activeSlide, setActiveSlide] = useState<number>(0);
    setActiveSlide

    //METHODS
    const setImagePosition = (id:number) => {
        const numberOfImages = sliderImages.length;

        if(activeSlide === id) {
            return 'translate-x-0 translate-z-[800px] scale-[1.25] z-10'
        }

        if(activeSlide === 0) {
            if(id === numberOfImages - 1) {
                return 'translate-x-[-100%] translate-z-[400px] z-[1]'
            }

            if(id === 1) {
                return 'translate-x-[100%] translate-z-[400px] z-[1]'
            }

        } else if(activeSlide === numberOfImages - 1) {
            if(id === 0) {
                return 'translate-x-[100%] translate-z-[400px] z-[1]'
            }

            if(id === numberOfImages - 2) {
                return 'translate-x-[-100%] translate-z-[400px] z-[1]'
            } 

        } else {
            if(id === activeSlide - 1) {
                return 'translate-x-[-100%] translate-z-[400px] z-[1]'
            } else if (id === activeSlide + 1) {
                return 'translate-x-[+100%] translate-z-[400px] z-[1]'
            }
        }

        return 'translate-x-0 translate-z-[0px] z-[-14]'
    }

    const handleSlideChange = (id:number) => {
        const numberOfImages = sliderImages.length;
        
        if(id === activeSlide) {
            if(id === numberOfImages - 1) {
                setActiveSlide(0);
            } else {
                setActiveSlide(id + 1);
            }
        } else {
            setActiveSlide(id);
        }
    }

    //JSX
    return (
        <div className={`w-full flex justify-center overflow-hidden`}>
            <div className={`relative w-full h-[70vw] sm:h-[60vw] lg:h-[45vw]`}>
                {
                    sliderImages.map((image) => {
                        return (
                            <img
                                className={`absolute left-0 right-0 top-[50%] translate-y-[-50%] w-[60%] lg:w-[46%] m-auto rounded-[4px] transition-all ease-linear duration-700 cursor-pointer ${setImagePosition(image.id)}`}
                                key={image.id}
                                src={image.imagen}
                                alt="Rick & Morty"
                                onClick={() => handleSlideChange(image.id)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

