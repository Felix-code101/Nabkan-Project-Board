"use client";
import React, { useState } from 'react';
import { 
  DndContext, 
  closestCorners, 
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { Layout, Plus, Search, Settings, Bell, ChevronRight } from 'lucide-react';

// Adjusted path: moving up one level to find the components folder inside /app
import { Column } from "../components/Column";
import { TaskCard } from "../components/TaskCard";

export default function BoardPage() {
  const [columns, setColumns] = useState<any>({
    "Backlog": [
      { id: '1', content: 'Design Project Board Hero Section', priority: 'high' },
      { id: '2', content: 'Fix Turbopack Pathing Errors', priority: 'medium' }
    ],
    "To Do": [
      { id: '3', content: 'Implement Live Markdown Editor', priority: 'low' }
    ],
    "In Progress": [],
    "Done": []
  });

  const [activeId, setActiveId] = useState<string | null>(null);

  // Sensor configuration for smoother drag detection
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const findColumn = (id: string) => {
    if (id in columns) return id;
    return Object.keys(columns).find(key => columns[key].find((item: any) => item.id === id));
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeCol = findColumn(active.id as string);
    const overCol = findColumn(over.id as string);

    if (activeCol && overCol && activeCol === overCol) {
      const oldIndex = columns[activeCol].findIndex((i: any) => i.id === active.id);
      const newIndex = columns[activeCol].findIndex((i: any) => i.id === over.id);
      
      setColumns((prev: any) => ({
        ...prev,
        [activeCol]: arrayMove(prev[activeCol], oldIndex, newIndex)
      }));
    }
    setActiveId(null);
  };

  const activeTask = activeId ? Object.values(columns).flat().find((t: any) => t.id === activeId) : null;

  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans">
      {/* Sidebar Layout */}
      <aside className="w-64 border-r border-white/5 bg-[#020617] p-6 hidden lg:flex flex-col gap-8">
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter text-white italic">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white shadow-lg shadow-blue-600/20">
            <Layout size={20} />
          </div>
          <span>Project Board</span>
        </div>
        <nav className="flex flex-col gap-2">
          <div className="text-[10px] uppercase font-bold text-slate-500 mb-2 px-2 tracking-widest">Workspace</div>
          <div className="bg-blue-600/10 text-blue-400 flex items-center gap-3 px-3 py-2 rounded-lg text-sm italic font-bold">
            <Layout size={18} /> Board
          </div>
          <div className="text-slate-500 hover:text-white flex items-center gap-3 px-3 py-2 rounded-lg text-sm italic font-medium transition-colors cursor-pointer">
            <Settings size={18} /> Settings
          </div>
        </nav>
      </aside>

      {/* Main Container */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-white/5 bg-[#020617]/50 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
            <span>Project Board</span>
            <ChevronRight size={14} />
            <span className="text-white font-bold italic uppercase tracking-tight">Active Board</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
              <input 
                type="text" 
                placeholder="Search everything..." 
                className="bg-white/5 border border-white/10 rounded-full px-10 py-1.5 text-xs w-64 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
              />
            </div>
            <button className="p-2 text-slate-400 hover:text-white transition-colors"><Bell size={18} /></button>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-black text-xs text-white">ON</div>
          </div>
        </header>

        {/* Board Body */}
        <div className="flex-1 overflow-x-auto p-8 relative">
          {/* Subtle Glow Effect */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[100px] pointer-events-none rounded-full" />
          
          <DndContext 
            sensors={sensors}
            collisionDetection={closestCorners} 
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <div className="flex gap-6 items-start h-full">
              {Object.keys(columns).map((colId) => (
                <Column 
                  key={colId} 
                  id={colId} 
                  tasks={columns[colId]} 
                  onDeleteTask={(id: string) => {
                    setColumns((prev: any) => {
                      const updated = { ...prev };
                      updated[colId] = updated[colId].filter((t: any) => t.id !== id);
                      return updated;
                    });
                  }}
                />
              ))}
              <button className="min-w-[280px] h-12 border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center text-slate-500 hover:text-blue-500 hover:bg-white/5 hover:border-blue-500/50 transition-all text-xs font-black italic uppercase tracking-widest group">
                <Plus size={14} className="mr-2 group-hover:scale-125 transition-transform" /> Add Section
              </button>
            </div>

            <DragOverlay>
              {activeTask ? (
                <div className="scale-105 rotate-1 cursor-grabbing shadow-2xl shadow-blue-500/20 opacity-90">
                   <TaskCard task={activeTask} />
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>
      </main>
    </div>
  );
}