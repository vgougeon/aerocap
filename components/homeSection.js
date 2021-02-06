import { motion } from "framer-motion";

const HomeSection = (props) => {
    return (  
        <div id="home" className="flex items-center justify-center min-h-screen text-white">
            <div className="grid grid-cols-1 px-5 max-width xl:px-0 md:grid-cols-2">
                <div className="col-span-1 pb-20">
                    <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1}}
                    className="text-5xl font-semibold text-width">
                        Une nouvelle façon de<span className="text-green-200"> voyager</span>
                    </motion.h1>
                    <p className="mt-2 text-width">Ici, vous pourrez mettre une courte description d'au moins 3 lignes pour la typo tu vois ce que je veux dire</p>
                    <a href="#product" className="flex items-center justify-center h-10 px-3 mt-5 bg-blue-500 border-2 border-blue-300 rounded-md hover:bg-blue-600 whitespace-nowrap w-min">
                        En savoir plus
                    </a>
                    <div className="relative flex h-20 mt-10">
                        <img src="/ynov.png" className="h-full" />
                        <img src="/48h.png" className="h-full" />
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