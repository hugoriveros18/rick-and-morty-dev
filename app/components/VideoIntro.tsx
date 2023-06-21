'use client'

import React, { useRef, useState } from 'react';

export default function VideoIntro() {

    //REFERENCES
    const videoRef = useRef<any>(null);

    //STATES
    const [showImage, setShowImage] = useState<boolean>(true);

    //METHODS
    const playVideo = () => {
        setShowImage(false);
        videoRef.current.play();
    }

    //JSX
    return (
        <div className={`w-full mt-4 p-[1.5px] borderGradient`}>

            <div className={`relative w-full`}>
                {showImage &&
                    <>
                        <img
                            className={`absolute top-0 left-0 z-10 opacity-75 cursor-pointer`}
                            src="/img/video-intro-background.jpg"
                            alt="Rick and Morty Resume"
                            onClick={playVideo}
                        />
                        <img
                            className={`absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[100px] z-10 cursor-pointer`}
                            src="/img/play-video-icon.svg"
                            alt="Play Button"
                            onClick={playVideo}
                        />
                    </>
                }
                
                <video
                    ref={videoRef}
                    controls={!showImage}
                >
                    <source src='/videos/rick-and-morty-resume-video.mp4' type="video/mp4" />
                    Tu navegador no soporta este video
                </video>
            </div>
        </div>
    )
}

