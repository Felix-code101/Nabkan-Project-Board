"use client";
import React from 'react';
import Link from 'next/link';
import { Layout, CheckCircle2 } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col lg:flex-row">
      {/* Left Side: Branding/Social Proof */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 p-20 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),transparent)]" />
        
        <Link href="/" className="inline-flex items-center gap-2 font-black text-3xl tracking-tighter italic relative z-10">
          <div className="bg-white p-2 rounded-xl text-blue-600"><Layout size={28} /></div>
          <span>Project Board</span>
        </Link>

        <div className="relative z-10">
          <h2 className="text-6xl font-black tracking-tighter italic mb-8 leading-tight">
            Unlock your <br /> team's potential.
          </h2>
          <ul className="space-y-4 text-blue-100 font-medium">
            <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-white" /> Real-time board synchronization</li>
            <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-white" /> Advanced Markdown editor</li>
            <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-white" /> Collaborative team management</li>
          </ul>
        </div>

        <p className="text-blue-200 text-sm font-bold uppercase tracking-widest relative z-10 italic">
          © 2026 Project Board Velocity
        </p>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 bg-[#020617] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-black tracking-tight italic">Get started for free.</h2>
            <p className="text-slate-400 mt-2 font-medium">Create your account and start building today.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">First Name</label>
                <input type="text" placeholder="Onyinye" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none mt-1" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Last Name</label>
                <input type="text" placeholder="E." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none mt-1" />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
              <input type="email" placeholder="name@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none mt-1" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Password</label>
              <input type="password" placeholder="Create a password" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-blue-500 outline-none mt-1" />
            </div>
            <button className="w-full bg-white text-black py-4 rounded-xl font-black italic tracking-tight hover:bg-slate-200 transition-all mt-4">
              Create Account
            </button>
          </form>

          <p className="text-center lg:text-left text-slate-500 text-xs mt-8 px-4">
            By signing up, you agree to our <span className="text-slate-300 underline underline-offset-4">Terms of Service</span> and <span className="text-slate-300 underline underline-offset-4">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}