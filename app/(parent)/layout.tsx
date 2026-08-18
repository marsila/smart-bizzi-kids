export default function ParentLayout({children} : {children : React.ReactNode}){
    return(
        <div className=" relative min-h-screen  bg-sky-50 font-sans overflow-hidden">
            <header className="flex justify-between items-center bg-white p-4  border-b-sky-100 ">
                <div className="flex items-center justify-between gap-3 font-bold">
                    <div className="flex  justify-center items-center gap-1">
                        <div className="bg-orange-300 p-1 border-amber-600 rounded-md  shadow-lg border-b-2 ">SB</div>
                        <div>Smart<span className="text-orange-500">Bizzi</span></div>
                    </div>
                    <span className="text-gray-400">|</span>
                    <div className="text-blue-700 text-sm mr-3 bg-blue-50 p-1 rounded-2xl">Parent Portal</div>
                </div>
                <div className="flex justify-between items-center gap-2 text-sm font-semibold">
                    <div className="bg-blue-50 p-1 rounded-md border-blue-100 border-b-2">childName</div>
                    <span className="bg-blue-50 p-1 rounded-lg border-blue-100 border-2  text-gray-600">+</span>
                    <div className="bg-orange-300 p-1 border-b-2 border-amber-600 rounded-lg">Swich to Kids Mode</div>
                </div>
            </header>
            <main>{children}</main>
            
        </div>
    )
}