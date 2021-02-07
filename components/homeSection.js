import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import YouTube from "react-youtube";
import SocialNetwork from "./socialNetworks";

const HomeSection = (props) => {
    const [video, setVideo] = useState(false)
    return (
        <div id="home" className="flex items-center justify-center min-h-screen pt-12 text-white lg:py-5">
            <div className="grid grid-cols-1 px-5 max-width xl:px-0 md:grid-cols-2">
                <div className="col-span-1 pb-20">
                    <SocialNetwork />
                    <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-semibold md:text-5xl text-width">
                        Une nouvelle façon de<span className="text-green-200"> voyager</span>
                    </motion.h1>
                    <div className="mt-5 h-96">
                    <AnimatePresence exitBeforeEnter>
                    {!video ?
                        <motion.div key={1} className="flex flex-col" initial={{ opacity: 0, x:-50, height:0}} 
                        animate={{ opacity: 1, x: 0, height: "auto"}} exit={{ opacity: 0, x: 50, height:0}}
                        transition={{ type:'tween', duration: 0.2}}>
                            <p className="mt-2 text-width">Vivez une expérience hors du commun avec la capsule hybride innovante AeroCap !</p>
                            <p className="mt-2 text-width">En se déplaçant de manière aérienne grâce à l’hydrogène et à l’énergie solaire, AeroCap vous permettra de voyager en toute convivialité où vous le voulez dans toute la France métropolitaine.</p>
                            <div className="flex flex-wrap">
                                <a href="#find" className="flex items-center justify-center h-10 px-3 mt-5 mr-2 bg-green-500 border-2 border-blue-300 rounded-md hover:bg-blue-600 whitespace-nowrap w-min">
                                    Choisir un trajet
                                </a>
                                <a href="#product" className="flex items-center justify-center h-10 px-3 mt-5 mr-2 bg-blue-500 border-2 border-blue-300 rounded-md hover:bg-blue-600 whitespace-nowrap w-min">
                                    En savoir plus
                                </a>
                                <a onClick={() => setVideo(true)} className="flex items-center justify-center h-10 px-3 mt-5 bg-gray-800 border-2 border-gray-500 rounded-md hover:bg-gray-600 whitespace-nowrap w-min">
                                    Voir la vidéo
                                </a>
                            </div>


                            <div className="relative flex h-20 mt-10">
                                <img src="/ynov.png" className="h-full" />
                                <img src="/48h.png" className="h-full" />
                            </div>
                        </motion.div>:
                         <motion.div key={2} initial={{ opacity: 0, x:50, height:0}} 
                         animate={{ opacity: 1, x: 0, height: "auto"}} exit={{ opacity: 0, x: -50, height:0}}
                         transition={{ type:'tween', duration: 0.2}}>
                             <YouTube
                                videoId={'hioA3QDZ81g'}
                                className={"h-72 w-full"}
                                containerClassName={"h-72 bg-gray-700 rounded overflow-hidden shadow"}
                                />
                            <a onClick={() => setVideo(false)} className="flex items-center justify-center h-10 px-3 mt-5 bg-gray-800 border-2 border-gray-500 rounded-md hover:bg-gray-600 whitespace-nowrap w-min">
                                    Fermer
                            </a>
                        </motion.div>
                        }
                        </AnimatePresence>
                        </div>
                </div>
                <div className="flex justify-center col-span-1 pb-20">
                    <img src="/logo.png" className="h-48" />
                </div>
            </div>
        </div>
    );
}

export default HomeSection;
