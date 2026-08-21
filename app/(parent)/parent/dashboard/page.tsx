import {
  Flame,
  Star,
  Clock,
  Award,
  BookOpen,
  ShieldAlert,
  Sparkles,
  BarChart2,
} from "lucide-react";
import portalData from "@/data/portalData.json";

export default function ParentDshboard() {
  const { child, subjectsProgress, recentActivity } = portalData;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col justify-between sm:flex-row sm:items-center gap-4 ">
        <div>
          <h1 className="font-black text-slate-900 sm:text-3xl text-2xl">
            Welcome back, Parent! 👋
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Here is How{" "}
            <strong className=" text-slate-800">{child.name} </strong>
            is performing across all 4 subjects today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-green-800 bg-green-50 pr-2 pl-2 rounded-xl border-green-200 border px-3 py-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Active Learning Plan
          </span>
        </div>
      </div>
      {/* grid of cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* 1. total stars */}
        <div className="flex items-center bg-white gap-4  border-slate-200 rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl justify-center">
            <Star className="fill-amber-500 text-amber-500  w-6 h-6" />
          </div>
          <div>
            <div className="font-black text-2xl">{child.stars}</div>
            <div className="text-xs font-semibold text-slate-500">
              Total stars Earned
            </div>
          </div>
        </div>
        {/* 2. days streak */}
        <div className="flex items-center bg-white gap-4  border-slate-200 rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl justify-center">
            <Flame className="fill-orange-500 text-orange-500  w-6 h-6" />
          </div>
          <div>
            <div className="font-black text-2xl">{child.streak}</div>
            <div className="text-xs font-semibold text-slate-500">
              Active Daily Streak
            </div>
          </div>
        </div>
        {/* 3. screen time today */}
        <div className="flex items-center bg-white gap-4  border-slate-200 rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl justify-center">
            <Clock className="fill-sky-100 text-sky-600  w-6 h-6" />
          </div>
          <div>
            <div className="font-black text-2xl">{child.timeTodayMinutes}</div>
            <div className="text-xs font-semibold text-slate-500">
              Screen Time Today
            </div>
          </div>
        </div>
        {/* 4. Kindergarten Readiness */}
        <div className="flex items-center bg-white gap-4  border-slate-200 rounded-2xl border p-5 shadow-sm">
          <div className="flex items-center w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl justify-center">
            <Award className=" text-purple-500  w-6 h-6" />
          </div>
          <div>
            <div className="font-black text-2xl">72%</div>
            <div className="text-xs font-semibold text-slate-500">
              Kindergarten Readiness
            </div>
          </div>
        </div>
      </div>
      {/* main grid : subjects and sidebar */}
      <div className="grid lg:grid-cols-12 gap-8">
        {/* left side, subjects prgress grid 4 cards*/}
        <div className="grid lg:col-span-8 space-y-6">
          {/* card 1: math */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              Subjects Mastery
            </h2>
            <span className="text-sm text-slate-400 font-bold">
              Updated Real-time
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {subjectsProgress.map((sub) => (
              <div
                key={sub.id}
                className={` bg-white border ${sub.borderColor} rounded-2xl p-6 shadow-sm space-y-4 hover:shadow-md transition-shadow `}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{sub.icon}</span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {sub.title}
                      </h3>
                      <span className="font-medium text-xs text-slate-500">
                        {sub.starsEarned} Stars Collected
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-xs ${sub.lightBg} ${sub.textColor} rounded-full font-black px-2 py-1`}
                  >
                    {sub.progress}%
                  </span>
                </div>
                {/* progress bar */}
                <div className="space-y-1.5">
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${sub.color} rounded-full transition-all duration-500`}
                      style={{ width: `${sub.progress}%` }}
                    />
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 flex justify-between">
                    <span>Topic: {sub.currentTopic}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* screen time limit */}
          <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center gap-4 rounded-2xl border border-slate-200 shadow-sm bg-white p-6">
            <div className="flex justify-center gap-4 ">
              <div className="flex items-center justify-center bg-indigo-50 text-indigo-600 w-12 h-12 rounded-2xl shrink-0">
                <ShieldAlert className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Daily Screen Time Limit
                </h3>
                <p className="text-slate-500 font-medium">
                  Automatically locks the Kids Portal once the target limit is
                  reached.
                </p>
              </div>
            </div>
            <div className="flex justify-center border border-slate-200 bg-slate-100 p-1 rounded-2xl ">
              {["15m", "30m", "45m", "60m"].map((time, index) => (
                <button
                  className={`px-3 py-1.5 text-sm font-bold rounded-xl transition-all cursor-pointer
                            ${
                              index === 1
                                ? "bg-white text-slate-900 shadow-sm"
                                : "text-slate-500 hover:text-slate-900"
                            }`}
                  key={time}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* right sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 border border-slate-200 rounded-3xl bg-white shadow-sm  space-y-4">
            <h3 className="font-bold text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Recent Achievements
            </h3>
            <div className="space-y-3">
              {recentActivity.map((act) => (
                <div
                  key={act.id}
                  className="bg-slate-50 border border-slate-100 rounded-2xl gap-4 p-3 flex items-start justify-between text-xs"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex justify-center items-center">
                      {act.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {act.action}
                      </p>
                      <span className="text-[10px] text-slate-500 mt-0.5">{act.time}</span>
                    </div>
                  </div>
                  <div className="text-amber-600 font-black shrink-0">
                    {act.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 p-6 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl text-white shadow-sm">
            <h3 className="text-[10px] inline-flex gap-2 items-center text-base border px-2 py-1 bg-indigo-900 border-indigo-700 rounded-full ">
                <BarChart2 className="h-3 w-3 text-slate-400"/>
                Supervisor Insight 
            </h3>
            <h2 className="font-bold text-base">
                Encourge Arabic Phonics Today
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
                {child.name} mastered {subjectsProgress[1].progress}% of letter sounds! Ask him to name objects in your home that start with the letter <strong>"Baa" (ب)</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
