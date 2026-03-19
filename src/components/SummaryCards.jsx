import React from 'react';
import { CheckCircle2, Timer, AlertCircle, ArrowUpRight } from 'lucide-react';

const SummaryCards = ({ data }) => {
  const completed = data.filter(t => t.status === 'Completed').length;
  const inProgress = data.filter(t => t.status === 'In Progress').length;
  const notStarted = data.filter(t => t.status === 'Not Started').length;

  const cards = [
    { 
      title: 'Completed', 
      count: completed, 
      icon: CheckCircle2, 
      color: 'text-emerald-500', 
      bg: 'bg-emerald-500/5', 
      accent: 'bg-emerald-500',
      description: 'Tasks successfully finished'
    },
    { 
      title: 'In Progress', 
      count: inProgress, 
      icon: Timer, 
      color: 'text-primary-500', 
      bg: 'bg-primary-500/5', 
      accent: 'bg-primary-500',
      description: 'Tasks currently active'
    },
    { 
      title: 'Not Started', 
      count: notStarted, 
      icon: AlertCircle, 
      color: 'text-indigo-400', 
      bg: 'bg-indigo-500/5', 
      accent: 'bg-indigo-500',
      description: 'Tasks in the pipeline'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {cards.map((card, idx) => (
        <div 
          key={idx} 
          className="group relative p-6 rounded-[2rem] bg-white border border-surface-100 shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-1 overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className={`absolute -right-4 -bottom-4 w-24 h-24 ${card.bg} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
          
          <div className="relative flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className={`p-3.5 rounded-2xl ${card.bg} ${card.color}`}>
                <card.icon size={26} strokeWidth={2.5} />
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-surface-50 text-[10px] font-bold text-surface-500 group-hover:bg-white transition-colors">
                VIEW ALL
                <ArrowUpRight size={12} />
              </div>
            </div>
            
            <div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-extrabold text-surface-900 tracking-tight">
                  {card.count < 10 ? `0${card.count}` : card.count}
                </h3>
                <span className="text-sm font-bold text-surface-400 uppercase tracking-widest">{card.title}</span>
              </div>
              <p className="text-sm text-surface-500 mt-1 font-medium italic opacity-80">{card.description}</p>
            </div>
            
            {/* Progress line at bottom */}
            <div className="w-full h-1.5 bg-surface-50 rounded-full mt-2 overflow-hidden">
              <div 
                className={`h-full ${card.accent} rounded-full transition-all duration-1000 delay-300 w-1/3 group-hover:w-full`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
