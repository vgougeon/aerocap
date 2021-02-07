import { motion } from "framer-motion";

let persons = [
    { name: "Fadela", lastName: "El Miliani", job: "Chef de projet", team: "Chef de projet", r: -100, t: -50 },

    { name: "Nicolas", lastName: "Hermosilla", job:"Responsable technique", team:"Equipe technique", r: -120, t: -35},
    { name: "Nicolas", lastName: "Seillé", job:"Expert technique", team:"Equipe technique", r: -135, t: -65},
    { name: "Paul", lastName: "Berdier", job:"Expert technique", team:"Equipe technique", r: -100, t: -75},

    { name: "Théo", lastName: "Arnal", job:"Développeur", team:"Développeurs" , r: -170, t: -35},
    { name: "Raphael", lastName: "Arabeyre", job:"Développeur", team:"Développeurs", r: -110, t: -65},
    { name: "Thomas", lastName: "Alzonne", job:"Développeur", team:"Développeurs", r: -110, t: -65},

    { name: "Jade", lastName: "Fillet", job:"Responsable Création / Design", team:"Création/Design", r: -145, t: -85},
    
    { name: "Melina", lastName: "Mathieu", job:"Animation et Modélisation 3D", team:"Animation 3D", r: -110, t: -85},
    { name: "Théo", lastName: "CASANO", job:"Animation et Modélisation 3D", team:"Animation 3D", r: -110, t: -85},

    { name: "Emma", lastName: "Degas", job: "Montage vidéo", team:"Conception video & Animation", r: -110, t: -70},
    { name: "Mickael", lastName: "Bagdian", job: "Montage vidéo", team:"Conception video & Animation", r: -110, t: -55},
]
const team = Object.entries(persons.reduce((acc, i) => (acc[i.team] = acc[i.team] ? [...acc[i.team], i] : [i], acc), []))
console.log(team)
const Person = (props) => {
    return (  
        <div className="relative flex flex-col justify-center col-span-1 overflow-hidden bg-white border border-gray-300 rounded person py-7 hover:border-blue-500">
            <h3 className="mx-4 text-lg font-semibold leading-4 tracking-wide">{ props.name } 
            {" "}
            <span className="font-normal">{ props.lastName }</span>
            </h3>
            <span className="mx-4 text-sm leading-3">{ props.job }</span>
            <img className="absolute top-0 right-0 object-contain w-full h-64" 
            style={{ right: props.r, top: props.t }}
            src={`/avatars/${props.lastName.toUpperCase()} ${props.name}.png`} />
            {/* <hr className="mt-3 mb-5" /> */}
            
        </div>
    );
}

const TeamSection = (props) => {
    return (  
        <div id="team" className="flex flex-col items-center justify-center min-h-screen px-5 pb-12 bg-white xl:px-0 pt-52">
            <div className="grid grid-cols-2 mb-5 max-width">
                <div className="col-span-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute text-blue-400 transform -translate-x-40 -translate-y-40 w-96 h-96 opacity-10" 
                    viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.624 22.474l-1.624-.869-1.625.869.324-1.813-1.328-1.277 1.825-.252.804-1.658.804 1.658 1.825.252-1.329 1.277.324 1.813zm-7 0l-1.624-.869-1.625.869.325-1.813-1.329-1.277 1.825-.252.804-1.658.804 1.658 1.825.252-1.329 1.277.324 1.813zm-7 0l-1.624-.869-1.625.869.325-1.813-1.329-1.277 1.825-.252.804-1.658.804 1.658 1.825.252-1.329 1.277.324 1.813zm16.376-6.5h-22c-.552 0-1 .447-1 1v6c0 .553.448 1 1 1h22c.553 0 1-.447 1-1v-6c0-.553-.447-1-1-1zm-22.998-1h4.998c.008-1.214-.001-2.289 0-3.013.005-3.993 1.749-3.116 1.749-6.663 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.62 1.359-1.91 1.657-1.118.258-1.192 1.047-1.192 1.993l.002 3.221zm22.806-5.214c-1.29-.298-2.491-.558-1.91-1.657 1.77-3.342.47-5.129-1.399-5.129-1.265 0-2.248.817-2.248 2.324 0 3.324 1.719 2.704 1.749 6.676.008.972-.009 1.311 0 3h4.998l.002-3.221c0-.946-.074-1.735-1.192-1.993zm-4.811 5.214h-11.995l-.002-3.126c0-1.258.1-2.482 1.588-2.826 1.684-.389 3.344-.736 2.545-2.209-2.366-4.364-.674-6.839 1.866-6.839 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.569 1.589 2.829l-.002 3.123z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" 
                    fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>
                    <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1}}
                    className="text-5xl font-bold tracking-wide">Nos équipes</motion.h1>
                    <p className="mt-2">Découvrez nos différentes équipes et nos différents profils !</p>
                </div>
            </div>
            
                { team.map(([name, persons]) => 
                    <>
                        <h3 className="flex items-center w-full my-5 text-xl font-semibold max-width">
                            { name.includes('Chef') ?
                            <span className="px-1.5 py-0.5 mr-2 text-xs font-normal text-white bg-blue-600 rounded">CHEF</span>:
                            name.includes('technique') ?
                            <span className="px-1.5 py-0.5 mr-2 text-xs font-normal text-white bg-red-700 rounded">TECH</span>:
                            name.includes('Développeur') ?
                            <span className="px-1.5 py-0.5 mr-2 text-xs font-normal text-white bg-green-600 rounded">DEV</span>:
                            name.includes('Création') ?
                            <span className="px-1.5 py-0.5 mr-2 text-xs font-normal text-white bg-purple-500 rounded">CREA</span>:
                            name.includes('3D') ?
                            <span className="px-1.5 py-0.5 mr-2 text-xs font-normal text-white bg-gray-800 rounded">3D</span>:
                            name.includes('video') ?
                            <span className="px-1.5 py-0.5 mr-2 text-xs font-normal text-black bg-gray-200 rounded">VIDEO</span>:
                            <span className="px-1.5 py-0.5 mr-2 text-xs font-normal text-black bg-gray-200 rounded">TEAM</span>
                            }
                             { name }
                        </h3>
                        <div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 max-width">
                        { persons.map(person =>
                            <Person {...person} />
                        )}
                        </div> 
                    </>
                    
                )}
            
        </div>
    );
}

 
export default TeamSection;
