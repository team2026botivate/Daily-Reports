import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Sidebar = ({ activeModule, setActiveModule, modules, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-surface-950/20 backdrop-blur-sm z-[45] lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={cn(
        "w-72 bg-white h-screen text-surface-600 flex flex-col fixed left-0 top-0 z-50 border-r border-surface-100 transition-transform duration-300 lg:translate-x-0 overflow-hidden shadow-soft",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="relative p-5 flex items-center justify-between border-b border-surface-50">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="p-2.5 bg-primary-50 rounded-xl border border-primary-100">
  <Icons.FileText size={24} className="text-primary-600" />
</div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-surface-950 tracking-tight leading-none">REPORT</h1>
 
            </div>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 text-surface-400 hover:text-surface-950"
          >
            <Icons.X size={20} />
          </button>
        </div>
        
        <nav className="relative flex-1 overflow-y-hidden py-8 px-4 space-y-1 custom-scrollbar">

          
          {modules.map((module) => {
            const Icon = Icons[module.icon] || Icons.Square;
            const isActive = activeModule === module.id;
            
            return (
              <button
                key={module.id}
                onClick={() => {
                  setActiveModule(module.id);
                  if (window.innerWidth < 1024) setIsOpen(false);
                }}
                className={cn(
                  "group w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-300 relative",
                  isActive 
                    ? "bg-primary-50 text-primary-600" 
                    : "hover:bg-surface-50 text-surface-500 hover:text-surface-900"
                )}
              >
                <div className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  isActive ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20" : "bg-surface-50 group-hover:bg-white border border-transparent group-hover:border-surface-100"
                )}>
                  <Icon size={18} />
                </div>
                <span className="text-sm font-semibold tracking-wide">{module.name}</span>
                
                {isActive && (
                  <>
                    <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-primary-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                    <div className="absolute left-0 w-1 h-8 bg-primary-600 rounded-r-full" />
                  </>
                )}
              </button>
            );
          })}
        </nav>
        
        <div className="relative p-6 mt-auto">
          <div className="p-4 rounded-2xl bg-surface-50 border border-surface-100">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-primary-400 p-[1px]">
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center text-sm font-bold text-primary-600">
                    AD
                  </div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-surface-950 truncate">Admin Account</p>
                <p className="text-xs text-surface-400 truncate">Super Admin</p>
              </div>
              <Icons.Settings size={16} className="text-surface-400 cursor-pointer hover:text-primary-600 hover:rotate-90 transition-all duration-500" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
