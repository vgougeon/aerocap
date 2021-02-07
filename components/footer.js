import SocialNetwork from "./socialNetworks";

const Footer = (props) => {
    return (  
        <footer className="w-full bg-gray-800">
            <div className="flex flex-col items-center justify-center py-4">
                <span className="text-xs text-gray-300">service@aerocap.com</span>
                <span className="text-xs text-gray-300">22 Impasse Charles Fourier, 31200 Toulouse</span>
                <span className="text-xs text-gray-300">08 80 80 10 10</span>
            </div>
            <div className="flex justify-center">
                <SocialNetwork />
            </div>
            <div className="relative flex items-center justify-center h-20 pt-2 pb-5 mt-5">
                <img src="/ynov.png" className="h-full mx-2" />
                <img src="/48h.png" className="h-full mx-2" />
            </div>
            
        </footer>
    );
}
 
export default Footer;