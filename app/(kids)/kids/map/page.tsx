import Link from "next/link";
//import { Calculator, Rocket,  BookA } from "lucide-react";
const SUBJECTS = [
    {id:"math", title:"Math", color:"bg-orange-500 border-orange-700", icon:"🍎", href:"/kids/math"},
    {id:"physics", title:"Physics", color:"bg-purple-500 border-purple-700",icon:"🚀", href:"/kids/physics"},
    {id:"arabic", title:"Arabic", color:"bg-lime-500 border-lime-700", icon:"📙", href:"kids/arabic"},
    {id:"english", title:"English", color:"bg-amber-400 border-amber-600", icon:"🔤", href:"/kids/english"}
]

export default function KidsMap(){
    return(
        <div className="w-full max-w-4xl flex flex-col gap-8 items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center tracking-wide">
                Pick Your Adventure!
            </h1>
            <div className="grid gride-cols-2 gap-6 w-full max-w-2xl px-4">
                {SUBJECTS.map(subject => (
                    <Link 
                      href={subject.href}
                      key={subject.id}
                      className={`flex flex-col items-center justify-center p-8 rounded-3xl text-white text-2xl font-bold shadow-xl border-b-8 active:border-b-0 active:mt-2 transition-all ${subject.color}`}
                    >
                        <span className="text-6xl mb-3">{subject.icon}</span>
                        <span>{subject.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

