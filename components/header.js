import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState } from 'react'
const Header = (props) => {
    const [tr, setTr] = useState(true)
    useScrollPosition(({ prevPos, currPos }) => {
        let height = 700;
        if(typeof window !== 'undefined') {
            height = window.innerHeight
        }
        if(currPos.y > -height && !tr) setTr(true)
        else if(currPos.y <= -height && tr) setTr(false)
    }, [tr])
    const transparent = "border-transparent border-b-2 border-gray-200 opacity-0"
    const normal = "border-b-2 border-gray-200 opacity-100 z-10"
    return (
        <div className={ "bg-white fixed w-full h-16 transition-all duration-700 flex justify-center " + (tr ? transparent : normal)}>
            <div className="flex items-center max-width">
                <div className="flex flex-col">
                    <h2 className="my-0 text-lg font-semibold leading-5 tracking-wide text-blue-500 uppercase">Aerocap</h2>
                    <span className="text-xs leading-3 text-gray-500">La capsule volante</span>
                </div>
            </div>
        </div>
    );
}

export default Header;