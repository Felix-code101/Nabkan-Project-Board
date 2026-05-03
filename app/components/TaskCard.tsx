"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Trash2 } from "lucide-react";

export function TaskCard({ task, onDelete }: any) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  if (isDragging) {
    return <div ref={setNodeRef} style={style} className="h-24 bg-blue-600/10 border-2 border-dashed border-blue-500/30 rounded-xl" />;
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="group bg-[#0f172a] p-4 rounded-xl border border-white/5 shadow-sm hover:border-blue-500/50 transition-all border-l-4 border-l-blue-600"
    >
      <div className="flex justify-between items-start mb-2">
        <div {...attributes} {...listeners} className="cursor-grab text-slate-500 hover:text-white">
          <GripVertical size={16} />
        </div>
        <button onClick={() => onDelete(task.id)} className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-red-500 transition-opacity">
          <Trash2 size={14} />
        </button>
      </div>
      <p className="text-sm font-medium leading-relaxed">{task.content}</p>
    </div>
  );
}