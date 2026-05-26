  function Footer() {
    return (
        <>
        <footer className="bg-primary-100 py-10 flex flex-col items-center justify-center w-full">

                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
                    <div className="bg-white shadow rounded-md p-4 flex flex-col items-center min-w-[200px]">
                        <div className="h-16 w-16 bg-primary-200 rounded-full mb-2 flex items-center justify-center font-bold text-primary-700 text-xl">
                            AR
                        </div>
                        <span className="font-medium text-primary-800">Ana Rodríguez</span>
                        <span className="text-xs text-primary-600">CEO</span>
                        <a href="mailto:ana@cristalstore.com" className="text-xs text-primary-500 hover:underline">
                            ana@cristalstore.com
                        </a>
                    </div>
                    <div className="bg-white shadow rounded-md p-4 flex flex-col items-center min-w-[200px]">
                        <div className="h-16 w-16 bg-primary-200 rounded-full mb-2 flex items-center justify-center font-bold text-primary-700 text-xl">
                            LM
                        </div>
                        <span className="font-medium text-primary-800">Luis Martínez</span>
                        <span className="text-xs text-primary-600">Ventas</span>
                        <a href="mailto:luis@cristalstore.com" className="text-xs text-primary-500 hover:underline">
                            luis@cristalstore.com
                        </a>
                    </div>
                    <div className="bg-white shadow rounded-md p-4 flex flex-col items-center min-w-[200px]">
                        <div className="h-16 w-16 bg-primary-200 rounded-full mb-2 flex items-center justify-center font-bold text-primary-700 text-xl">
                            MR
                        </div>
                        <span className="font-medium text-primary-800">María Ruiz</span>
                        <span className="text-xs text-primary-600">Atención al Cliente</span>
                        <a href="mailto:maria@cristalstore.com" className="text-xs text-primary-500 hover:underline">
                            maria@cristalstore.com
                        </a>
                    </div>
                </div>
                <p className="text-xs text-primary-500 text-center">
                    © {new Date().getFullYear()} Cristal store. All rights reserved. 
                </p>
                <p className="text-primary-500 text-xs">Av. 9 de Julio 1234, Buenos Aires, Argentina</p>
                <p className="text-primary-500 text-xs">contacto@cristalstore.com | +549115791243</p>
        </footer>
        </>

    );
}
export default Footer;