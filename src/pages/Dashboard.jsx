import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Sidebar from '../components/Sidebar';
import SummaryCards from '../components/SummaryCards';
import ReportTable from '../components/ReportTable';
import { modules, dummyReports } from '../data/dummyData';
import { generatePDF } from '../utils/pdfGenerator';
import AllModulesPDF from '../utils/AllModulesPDF';
import logo from '../assets/logo.png';
import { FileDown, Search, Filter, Plus, Bell, Menu, Hash, FileText } from 'lucide-react';

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState(modules[0].id);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentReports = dummyReports[activeModule] || [];
  const activeModuleObj = modules.find(m => m.id === activeModule);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [activeModule]);

  const handleExportBatch = () => {
    generatePDF('report-section', `${activeModule}-work-report.pdf`);
  };

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="flex bg-surface-50 min-h-screen text-surface-900 overflow-x-hidden font-sans">
      {/* Background Decorative Blurs */}
      <div className="fixed -top-40 -right-40 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed top-1/2 -left-40 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />

      <Sidebar
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        modules={modules}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 lg:ml-72 min-h-screen flex flex-col transition-all duration-300">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-surface-100/50 px-6 lg:px-10 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2.5 bg-white rounded-xl shadow-soft border border-surface-100 text-surface-600 active:scale-95 transition-transform"
            >
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex items-center gap-3">
              <div className="p-2 bg-primary-50 rounded-xl border border-primary-100">
                <Hash size={18} className="text-primary-600" />
              </div>
              <div className="h-4 w-[1px] bg-surface-200 mx-1" />
              <span className="text-[10px] sm:text-xs font-bold text-surface-400 uppercase tracking-[0.2em]">{today}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="relative group hidden md:block">
              <input
                type="text"
                placeholder="Global search..."
                className="pl-11 pr-4 py-2.5 rounded-2xl bg-surface-50 border border-surface-100 focus:outline-none focus:ring-4 focus:ring-primary-500/5 focus:border-primary-500/50 transition-all text-sm w-48 lg:w-64 group-hover:w-72"
              />
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-300" />
            </div>

            <button className="relative p-2.5 rounded-2xl bg-white border border-surface-100 shadow-soft text-surface-500 hover:text-primary-500 hover:scale-105 active:scale-95 transition-all">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary-500 rounded-full border-2 border-white shadow-[0_0_8px_rgba(45,91,255,0.6)]" />
            </button>

            {/* Consolidated PDF Downloader */}
            <PDFDownloadLink
              document={<AllModulesPDF modules={modules} allData={dummyReports} logoPath={logo} />}
              fileName="Full-Enterprise-Report.pdf"
              className="hidden sm:flex bg-primary-600 text-white px-5 py-2.5 rounded-2xl font-bold items-center gap-2 hover:bg-primary-700 transition-all shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] active:scale-95"
            >
              {({ loading }) => (
                <>
                  {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <FileText size={18} />}
                  <span>{loading ? 'Preparing...' : 'Generate PDF'}</span>
                </>
              )}
            </PDFDownloadLink>

            <button className="hidden lg:flex bg-primary-600 text-white p-2.5 rounded-2xl font-bold items-center justify-center hover:bg-primary-700 transition-all shadow-lg active:scale-95 shadow-primary-600/20">
              <Plus size={20} />
            </button>
          </div>
        </header>

        <div className="p-6 lg:p-10 flex-1 relative">
          {/* Module Heading */}
          <div className="mb-10 animate-fade-in animate-slide-in-bottom">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 text-[10px] font-black uppercase tracking-widest leading-none border border-primary-500/10">
                Module: {activeModuleObj?.id.replace(/-/g, ' ')}
              </span>
              <div className="h-[1px] flex-1 bg-surface-100/50" />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-surface-950 tracking-tight leading-tight">
                  {activeModuleObj?.name} <span className="text-primary-500/30"></span>
                </h2>
                <p className="text-surface-500 font-medium mt-3 text-lg flex items-center gap-3 flex-wrap">
                  Monitoring live operations and work reports for the current cycle
                  <span className="hidden sm:inline-block w-8 h-[1px] bg-surface-200" />
                </p>
              </div>
            </div>
          </div>

          {/* Report Section for PDF Export */}
          <div id="report-section" className="space-y-10">
            <SummaryCards data={currentReports} />

            <div className={`space-y-6 transition-all duration-700 ${isLoading ? 'opacity-0 translate-y-8 blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}>
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-extrabold text-surface-900 tracking-tight">Real-time Reports</h3>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-primary-600 text-white text-[10px] font-black uppercase tracking-wider shadow-lg shadow-primary-600/20">
                    <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    Live: {currentReports.length}
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-4">
                  <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-500 hover:text-primary-600 transition-colors border-b-2 border-primary-500 pb-1">Current</button>
                  <button className="text-[10px] font-black uppercase tracking-[0.2em] text-surface-400 hover:text-surface-600 transition-colors pb-1 border-b-2 border-transparent">Archived</button>
                </div>
              </div>

              <ReportTable data={currentReports} tableId="table-data" />
            </div>
          </div>
        </div>

        <footer className="px-10 py-10 text-center bg-white border-t border-surface-100 mt-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 opacity-50">
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <div className="w-2 h-2 rounded-full bg-accent-500" />
              <div className="w-2 h-2 rounded-full bg-surface-300" />
            </div>
            <p className="text-[10px] font-bold text-surface-400 uppercase tracking-[0.4em]">
              Powered by Botivate
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard; 
