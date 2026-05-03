"use client";
import React, { useState } from 'react';
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { TaskCard } from "./TaskCard";
import { Plus, X, Command } from "lucide-react";

export function Column({ id, tasks, onDeleteTask, onAddTask }: any) {
  const [isAdding, setIsAdding] = useState(false);
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    // Passing the content back to the parent (Board) state
    onAddTask(id, content);
    
    // Reset state
    setContent("");
    setIsAdding(false);
  };

  return (
    <div className="flex flex-col w-80 bg-white/[0.02] border border-white/5 rounded-2xl p-4 min-h-[500px] group/column hover:bg-white/[0.04] transition-all duration-300">
      
      {/* Column Header */}
      <div className="flex justify-between items-center mb-6 px-2">
        <div className="flex items-center gap-2">
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] italic text-slate-500">
            {id}
          </h2>
          <span className="text-[10px] font-bold bg-white/5 px-2 py-0.5 rounded-full text-slate-500 border border-white/5">
            {tasks.length}
          </span>
        </div>
        <button className="text-slate-600 hover:text-white transition-colors">
          <Plus size={14} />
        </button>
      </div>

      {/* Task List Container */}
      <SortableContext items={tasks.map((t: any) => t.id)} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-3 mb-4">
          {tasks.map((task: any) => (
            <TaskCard key={task.id} task={task} onDelete={onDeleteTask} />
          ))}
          
          {/* Visual cue when column is empty */}
          {tasks.length === 0 && !isAdding && (
            <div className="h-24 border-2 border-dashed border-white/[0.03] rounded-xl flex items-center justify-center">
               <p className="text-[10px] uppercase tracking-widest text-slate-700 font-bold italic">Empty Stage</p>
            </div>
          )}
        </div>
      </SortableContext>

      {/* Inline Add Task Logic */}
      {isAdding ? (
        <form 
          onSubmit={handleSubmit} 
          className="bg-[#0f172a] p-4 rounded-xl border border-blue-500/30 shadow-2xl animate-in fade-in zoom-in duration-200"
        >
          <div className="flex items-center gap-2 mb-2 text-blue-500 opacity-50">
            <Command size={12} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">New Task</span>
          </div>
          <textarea
            autoFocus
            className="w-full bg-transparent text-sm outline-none resize-none text-white placeholder:text-slate-700 leading-relaxed"
            placeholder="Type your task here..."
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
              if (e.key === "Escape") setIsAdding(false);
            }}
          />
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
            <p className="text-[10px] text-slate-600 font-medium">Press Enter to save</p>
            <div className="flex gap-2">
              <button 
                type="button" 
                onClick={() => setIsAdding(false)} 
                className="p-1.5 text-slate-500 hover:text-white transition-colors"
              >
                <X size={14}/>
              </button>
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-4 py-1 rounded-lg text-[11px] font-black italic uppercase hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      ) : (
        <button 
          onClick={() => setIsAdding(true)}
          className="flex items-center justify-center gap-2 text-slate-600 hover:text-blue-400 hover:bg-blue-500/5 py-3 rounded-xl border border-dashed border-transparent hover:border-blue-500/20 text-[11px] font-black italic uppercase tracking-[0.1em] transition-all"
        >
          <Plus size={14} /> Add Task
        </button>
      )}
    </div>
  );
}