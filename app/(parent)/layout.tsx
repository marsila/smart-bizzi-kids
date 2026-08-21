import Link from "next/link"
import {Plus} from "lucide-react"
import portalData from "@/data/portalData.json"

export default function ParentLayout({children} : {children : React.ReactNode}){
    const {child} = portalData
    return(
        <div className=" min-h-screen  bg-slate-50 text-slate-900 overflow-hidden pb-15">
            <header className=" bg-white border-b-slate-200 sticky top-0 z-30 ">
                <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 ">
                    <div className="flex items-center justify-between gap-3 font-bold">
                        <div className="flex items-center gap-3">
                            <Link href='/' className="flex items-center gap-2">
                                <div className="flex items-center  justify-center bg-amber-400 w-10 h-10  border-amber-600 rounded-xl  shadow-lg border-b-2 text-xl text-slate-900 font-black">SB</div>
                                <div className="font-extrabold text-lg hidden sm:inline ">Smart<span className="text-amber-500">Bizzi</span></div>
                            </Link>
                            
                        </div>
                        <span className="text-slate-300 font-light text-xl">|</span>
                        <div className="text-indigo-700 text-xs font-extrabold px-3 py-1 bg-indigo-50  rounded-2xl border-indgo-100 border">
                            Parent Portal
                        </div>
                    </div>
                    <div className="flex  items-center gap-3">
                        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border-slate-200 border hover:bg-slate-200/80 transition-colors cursor-pointer">
                            <span className="text-xl">{child.avatar}</span>
                            <div className="text-left">
                                <div className="text-xs font-bold text-slate-900 leading-none">
                                    {child.name}
                                </div>
                                <div className="text-slate-500 text-[10px] font-semibold">
                                    Age {child.age}
                                </div>
                            </div>
                        </div>
                        <button 
                            className="bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 p-1 rounded-lg border-slate-200 border transition-colors cursor-pointer"
                            title="Add sibiling Profile"
                            aria-label="Add sibiling profile"
                        >
                            <Plus className="w-5 h-5"/>
                        </button>
                        <Link 
                            href='/' 
                            className="hidden md:flex items-center bg-amber-400  hover:bg-amber-300 px-4 py-2 font-bold text-slate-900 border-b-2 border-amber-600 rounded-xl activ:border-b-0 active:mt-0.5 text-xs transition-all shadow-sm"
                        >
                            Swich to Kids Mode
                        </Link>
                    </div>
                </div>                
            </header>
            <main >
                {children}
            </main>
            
        </div>
    )
}