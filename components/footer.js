const Footer = (props) => {
    return (  
        <footer className="w-full bg-gray-800">
            <div className="relative flex items-center justify-center py-8 mt-10 h-28">
                <img src="/ynov.png" className="h-full mx-2" />
                <img src="/48h.png" className="h-full mx-2" />
            </div>
            <div className="flex items-center justify-center">
                <span className="my-2 text-xs text-gray-300">Made with by Vincent GOUGEON</span>
            </div>
        </footer>
    );
}
 
export default Footer;