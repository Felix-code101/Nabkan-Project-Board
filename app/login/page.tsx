"use client";
import React from 'react';
import Link from 'next/link';
import { Layout, ArrowRight, Lock, User } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(37,99,235,0.05)_0%,_transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(37,99,235,0.05)_0%,_transparent_50%)]" />

      <div className="w-full max-w-[400px] relative z-10">
        {/* Branding */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 font-black text-3xl tracking-tighter italic mb-6 group">
            <div className="bg-blue-600 p-2 rounded-2xl shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
              <Layout size={28} />
            </div>
            <span>Project Board</span>
          </Link>
          <h2 className="text-2xl font-bold tracking-tight italic text-slate-200">Access Workspace</h2>
          <p className="text-slate-500 mt-2 text-sm font-medium italic uppercase tracking-widest">Velocity Management</p>
        </div>

        {/* Login Card */}
        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative">
          <div className="absolute inset-0 bg-blue-600/5 blur-2xl -z-10 rounded-full" />
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
                <User size={12} /> Email Address
              </label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:bg-white/10 transition-all placeholder:text-slate-700 font-medium" 
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                  <Lock size={12} /> Password
                </label>
                <button type="button" className="text-[10px] font-bold text-blue-500 hover:text-blue-400 italic">Forgot?</button>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:bg-white/10 transition-all placeholder:text-slate-700" 
              />
            </div>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-black italic tracking-tight flex items-center justify-center gap-2 hover:bg-slate-200 transition-all mt-8 group">
              Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            New to Project Board? <Link href="/signup" className="text-blue-500 font-bold hover:text-blue-400 transition-colors">Create account</Link>
          </p>
          <div className="h-px w-12 bg-white/10" />
          <Link href="/" className="text-xs font-black italic uppercase tracking-widest text-slate-600 hover:text-slate-400 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}