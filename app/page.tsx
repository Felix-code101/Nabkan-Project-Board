"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Layout, Play, Shield, History, Bell, 
  Edit3, Filter, List, ArrowRight, ChevronRight 
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-8 max-w-7xl mx-auto">
  <div className="flex items-center gap-2 font-black text-2xl tracking-tighter italic">
    <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-600/20"><Layout size={24} /></div>
    <span>NABKAN Project Board</span>
  </div>
  
  <div className="flex items-center gap-6">
    <Link href="/login" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
      Log In
    </Link>
    <Link href="/signup" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-black hover:scale-105 transition-all shadow-xl shadow-white/10">
      Sign Up Now
    </Link>
  </div>
</nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-32 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-blue-400 mb-10 hover:bg-white/10 transition-colors cursor-pointer">
          <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">New</span>
          <span className="flex items-center gap-1 italic">Unlock your team's potential <ChevronRight size={14}/></span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent leading-[0.9]">
          An all-in-one workspace <br /> that handles your <span className="italic">work.</span>
        </h1>
        
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Organize your team and keep track of your work with a single tool. 
          The intelligent workspace for high-performance teams.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/board" className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/30 group">
            Get Started Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all italic">
            <Play size={18} fill="white" /> Request a demo
          </button>
        </div>
        <p className="mt-10 text-slate-500 text-sm font-bold uppercase tracking-[0.2em] italic">Make you and your team more productive.</p>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-32 px-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Layout />, title: "Boards", desc: "Empower teams to self-manage and visualize workflows in boards." },
            { icon: <Shield />, title: "Team Management", desc: "Provide access to your project or revoke them when necessary." },
            { icon: <History />, title: "History", desc: "Track history of entire project or individual task." },
            { icon: <Bell />, title: "Instant Notify", desc: "Get Notifications when anyone creates or deletes a task." },
            { icon: <Edit3 />, title: "Live Markdown", desc: "Seamless experience as both a reader and a writer." },
            { icon: <Filter />, title: "Filters", desc: "Advanced filtering options available for all tasks." }
          ].map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all">
              <div className="text-blue-500 mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3 italic">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-600/20 blur-[100px] rounded-full" />
        <h2 className="text-5xl md:text-6xl font-black mb-8 italic tracking-tighter">Get started with Project Board today.</h2>
        <Link href="/board" className="bg-white text-black px-12 py-5 rounded-full text-xl font-black hover:scale-105 transition-all inline-block shadow-2xl">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
}