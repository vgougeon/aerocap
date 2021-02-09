import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
const moment = require('moment')

const Select = (props) => {
    const [suggest, setSuggest] = useState([])
    const [cd, setCd] = useState(null)
    const onChange = async (e) => {
        setSuggest([])
        props.setValue(e.target.value)
        if (e.target.value.length > 1) {
            if (cd) clearTimeout(cd)
            setCd(setTimeout(async () => {
                const res = await axios.get('/api/suggest?place=' + e.target.value)
                setSuggest(res.data)
            }, 400))
        }
    }
    const select = (item) => {
        props.setValue(item)
        setSuggest([])
    }
    return (
        <div className="relative flex flex-col">
            <label htmlFor={props.name}>{props.name}</label>
            {typeof (props.value) === 'object' ?
                <div onClick={() => props.setValue("")}
                    className="flex items-center h-12 px-3 bg-white border-2 border-green-500 rounded cursor-pointer min-w-32">
                    <span className="font-semibold">{props.value.address?.locality}{","}</span>
                    <span className="ml-1 font-normal">{props.value.address?.countryRegion}</span>
                </div>
                : <input placeholder={"Choisir un lieu"} value={props.value} onChange={onChange}
                    type="text" className="h-12 px-3 bg-white border-2 border-gray-200 rounded min-w-32">
                </input>
            }

            <AnimatePresence>
                {(suggest.length > 0 || (suggest.length === 0 && typeof (props.value) === 'string' && props.value.length > 1)) &&
                    <motion.div key={1} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
                        className="absolute bottom-0 z-30 w-full overflow-y-scroll bg-white shadow h-80 top-full">
                        {suggest.map((item, i) =>
                            <div onClick={() => select(item)} className="flex items-center h-10 px-3 cursor-pointer hover:bg-gray-100" key={i}>
                                <span className="font-semibold">{item.address?.locality}{","}</span>
                                <span className="ml-1 font-normal">{item.address?.countryRegion}</span>
                            </div>
                        )}
                        {suggest.length === 0 &&
                            <div className="mx-auto mt-12 sk-chase">
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                            </div>
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}

const FindSection = (props) => {
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [status, setStatus] = useState(null)
    const [nb, setNb] = useState(1)
    useEffect(() => {
        if (typeof (start) === 'object' && typeof (end) === 'object') {
            axios.get(`/api/status?start=${start.address.locality}&end=${end.address.locality}`).then(res => {
                setStatus({ distance: res.data })
                console.log(res.data)
            })
        }
    }, [start, end])
    return (
        <div id="find" className="flex flex-col items-center justify-center min-h-screen px-5 pb-12 bg-white xl:px-0 pt-52">
            <div className="grid grid-cols-2 mb-5 max-width">
                <div className="col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute text-blue-500 transform -translate-x-40 -translate-y-40 w-96 h-96 opacity-10"
                        viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.533 14.322l-.061.678h4.304c.146-.643.224-1.313.224-2l-.004-.243.987-1.56.649-1.024c.24.902.368 1.85.368 2.827 0 6.071-4.929 11-11 11-2.642 0-5.067-.933-6.964-2.487.617-.314 1.152-.765 1.564-1.314.891.669 1.91 1.178 3.013 1.481l-.084-.16c-.544-1.045-.994-2.138-1.336-3.265l-.061-.208 1.847-.819c.081.299.171.596.27.891.353 1.058.815 2.079 1.365 3.049.124.219.253.434.386.647.246-.399.48-.804.696-1.219.487-.935.89-1.912 1.196-2.921.068-.223.131-.448.189-.675h-3.587l6.039-2.678zm3.53 2.678h-3.926c-.133.592-.297 1.177-.489 1.753-.338 1.009-.762 1.988-1.262 2.927 2.489-.684 4.548-2.411 5.677-4.68zm-.814-7.711c-1.521-2.411-2.583-4.232-2.583-5.805 0-1.924 1.743-3.484 3.667-3.484 1.925 0 3.667 1.56 3.667 3.484s-1.59 4.221-3.667 7.516l-.002-.003-14.332 6.355.001.074c0 1.656-1.345 3-3 3-1.656 0-3-1.344-3-3s1.344-3 3-3c.914 0 1.733.41 2.283 1.055l13.966-6.192zm-16.026 1.711c-.142.623-.218 1.271-.223 1.936v.064c-.715 0-1.391.167-1.991.464l-.009-.464c0-6.071 4.929-11 11-11 1.139 0 2.238.174 3.272.496-.042.195-.072.394-.089.593-.044.517.001 1.029.105 1.532-.304-.12-.616-.223-.935-.31l.183.359c.578 1.157 1.048 2.37 1.39 3.618l.186.75-4.396 1.962h-2.155c-.044.332-.078.666-.101 1l-2.037.903c.007-.636.048-1.271.122-1.903h-4.322zm6.423-6.689c-2.503.678-4.576 2.41-5.71 4.689h3.958c.094-.408.202-.812.324-1.213.364-1.201.847-2.364 1.428-3.476zm2.353-.104c-.265.443-.516.894-.746 1.356-.52 1.041-.943 2.13-1.25 3.253l-.05.184h4.093c-.069-.262-.144-.523-.225-.781-.351-1.121-.817-2.205-1.377-3.237-.142-.262-.291-.52-.445-.775zm8.334.835c-.759 0-1.375-.616-1.375-1.375 0-.76.616-1.375 1.375-1.375s1.375.615 1.375 1.375c0 .759-.616 1.375-1.375 1.375z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500"
                        fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.787 7.531c-5.107 2.785-12.72 9.177-15.787 15.469h2.939c.819-2.021 2.522-4.536 3.851-5.902 8.386 3.747 17.21-2.775 17.21-11.343 0-1.535-.302-3.136-.92-4.755-2.347 3.119-5.647 1.052-10.851 1.625-7.657.844-11.162 6.797-8.764 11.54 3.506-3.415 9.523-6.38 12.322-6.634z" /></svg>
                    <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold tracking-wide md:text-5xl">Commander votre trajet</motion.h1>
                    <p className="mt-2">Déplacez vous sans stress avec Aerocap</p>
                </div>
                <div className="justify-end hidden col-span-1 md:flex">
                    <img src="/capsule.png" className="h-36" />
                </div>
            </div>
            <div className="z-10 w-full h-auto bg-white border border-gray-200 rounded shadow max-width">
                <h2 className="m-4 text-lg font-semibold">Définir un trajet</h2>
                <div className="grid grid-cols-1 gap-4 m-4 md:grid-cols-2">
                    <Select name="Point de départ" value={start} setValue={setStart} />
                    <Select name="Destination" value={end} setValue={setEnd} />
                </div>
                {status && <>
                    <hr />
                    <input type="number" placeholder="Nombre de personne" max="6" min="1" value={ nb } 
                    onChange={(e) => { setNb(e.target.value) }}
                    className="h-12 px-3 m-3 bg-white border-2 border-gray-200 rounded min-w-32"></input>
                    { status.distance /1000 < 800 ?
                    <div className="w-full p-4 bg-white">
                        <h2 className="text-lg font-semibold">Votre trajet <span className="text-green-500">est disponible !</span></h2>
                        <span className="">Distance :  <b className="text-xl">{(status.distance / 1000).toFixed(2)}km</b></span><br />
                        <span className="">Prix : <b className="text-xl">{ (6 + 0.98*((status.distance/1000)) / nb).toFixed(2) }€</b></span><br />
                        <span className="">Durée : <b className="text-xl">{ moment.utc(moment.duration(status.distance/1000/3.5, 'minutes').as('milliseconds')).format('HH:mm:ss')}</b></span>
                        <a className="flex items-center justify-center h-10 px-3 mt-5 mr-2 text-white bg-blue-500 border-2 border-blue-300 rounded-md hover:bg-blue-600 whitespace-nowrap w-min">
                            C'est parti !
                        </a>
                    </div>
                    :<div className="w-full p-4 bg-white">
                        <h2 className="text-lg font-semibold">Votre trajet <span className="text-red-600">est non disponible !</span></h2>
                        <span className="">Distance :  <b className="text-xl text-red-600">{(status.distance / 1000).toFixed(2)}km</b></span><br />
                    </div>
                    }
                    </>
                }
            </div>
        </div>
    );
}

export default FindSection;
