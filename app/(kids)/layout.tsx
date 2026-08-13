import React from "react"
import Link from "next/link"
import {Home, Volume2} from "lucide-react"

export default function KidsLayout({children} : {children: React.ReactNode}){
    return(
        <div className="relative font-sans min-h-screen bg-sky-200 select-none overflow-hidden">
            <header className="fixed left-4 right-4 top-4 flex justify-between items-center z-50 pointer-events-none">
                <Link 
                    href="/kids/map"
                    className="bg-amber-300 border-b-4 border-amber-600 text-slate-700 rounded-2xl pointer-events-auto shadow-lg active:border-b-0 active:mt-1 transition-all flex justify-center items-center"
                    aria-label="Home"
                >
                    <Home className="w-15 h-12 stroke-3"/>
                </Link>
                <button
                    className="pointer-events-auto bg-white/80 backdrop-blur-sm border-slate-300 text-slate-800 p-3 rounded-2xl shadow-lg active:border-0 active:mt-1 transition-all "
                    aria-label="Toggle Audio"
                >
                    <Volume2 className="h-8 w-8 strke-[2.5]"/>
                </button>
            </header>
            <main className="min-h-screen pt-20 pb-6 px-4 flex flex-col justify-center items-center">
                {children}
            </main>
        </div>
    )
}