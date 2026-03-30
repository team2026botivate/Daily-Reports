import React from 'react';
import { Calendar, MoreHorizontal, ChevronRight } from 'lucide-react';

const ReportTable = ({ data, tableId }) => {
  return (
    <div id={tableId} className="bg-white rounded-[2.5rem] border border-surface-100 overflow-hidden shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-surface-50">
              <th className="px-8 py-6 text-[11px] font-extrabold text-surface-400 uppercase tracking-[0.2em]">Task Stage</th>
              <th className="px-8 py-6 text-[11px] font-extrabold text-surface-400 uppercase tracking-[0.2em]">Task Description</th>
              <th className="px-8 py-6 text-[11px] font-extrabold text-surface-400 uppercase tracking-[0.2em]">Actual</th>
              <th className="px-8 py-6 text-[11px] font-extrabold text-surface-400 uppercase tracking-[0.2em]">Delay</th>
              <th className="px-8 py-6 text-[11px] font-extrabold text-surface-400 uppercase tracking-[0.2em]">Completion</th>
              <th className="px-8 py-6 text-[11px] font-extrabold text-surface-400 uppercase tracking-[0.2em]">Status</th>
              <th className="px-8 py-6 text-[11px] font-extrabold text-surface-400 uppercase tracking-[0.2em]">Timeline</th>
              <th className="px-8 py-6 text-[11px] font-extrabold text-surface-400 uppercase tracking-[0.2em]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-50">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-primary-50/30 transition-all duration-300 group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-surface-50 flex items-center justify-center text-primary-600 font-bold text-lg group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                      {item.projectName.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-surface-900 leading-none">{item.projectName}</p>
                      <p className="text-[11px] text-surface-400 font-semibold mt-1">ID: #PR-00{item.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <p className="text-sm text-surface-600 font-medium whitespace-pre-wrap">{item.taskDescription}</p>
                </td>
                <td className="px-8 py-6">
                  <p className="text-sm font-bold text-surface-900 leading-none">{item.actual || '-'}</p>
                </td>
                <td className="px-8 py-6">
                  <p className="text-sm font-bold text-surface-900 leading-none">{item.delay || '-'}</p>
                </td>
                <td className="px-8 py-6">
                  <div className="flex flex-col gap-2 min-w-[120px]">
                    <div className="flex justify-between items-center text-[10px] font-bold text-surface-500">
                      <span>PROGRESS</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-surface-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${
                          item.progress === 100 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-primary-500 shadow-[0_0_10px_rgba(45,91,255,0.5)]'
                        }`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider ${
                    item.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                    item.status === 'In Progress' ? 'bg-amber-50 text-amber-600' :
                    'bg-surface-100 text-surface-500'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      item.status === 'Completed' ? 'bg-emerald-500' :
                      item.status === 'In Progress' ? 'bg-amber-500' :
                      'bg-surface-400'
                    }`} />
                    {item.status}
                  </span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2 text-surface-500 font-bold text-[11px]">
                    <Calendar size={14} className="text-surface-300" />
                    {new Date(item.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-xl text-surface-400 hover:bg-white hover:text-primary-600 hover:shadow-sm border border-transparent hover:border-surface-100 transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                    <button className="p-2 rounded-xl text-surface-400 hover:bg-primary-500 hover:text-white shadow-lg hover:shadow-primary-500/30 transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 duration-300">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {data.length === 0 && (
        <div className="py-24 text-center">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-primary-100 rounded-full blur-xl opacity-50" />
            <div className="relative p-4 bg-white rounded-full border border-surface-100">
              <MoreHorizontal size={32} className="text-surface-300" />
            </div>
          </div>
          <p className="text-surface-900 font-bold text-xl">No Found</p>
          <p className="text-surface-400 text-sm mt-1">Try selecting a different module from sidebar</p>
        </div>
      )}
      
      <div className="px-8 py-6 bg-surface-50/50 border-t border-surface-50 flex items-center justify-between">
        <p className="text-[11px] font-bold text-surface-400 uppercase tracking-widest">Showing {data.length} total entries</p>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-lg border border-surface-200 bg-white text-[10px] font-bold text-surface-500 hover:bg-surface-50 transition-colors disabled:opacity-50" disabled>PREVIOUS</button>
          <button className="px-3 py-1.5 rounded-lg border border-surface-200 bg-white text-[10px] font-bold text-surface-500 hover:bg-surface-50 transition-colors disabled:opacity-50" disabled>NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default ReportTable;
