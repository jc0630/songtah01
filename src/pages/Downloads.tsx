import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download as DownloadIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO_DATA } from '../data';
import { usePageMeta } from '../lib/usePageMeta';

// Images
import imgBanner from '../assets/images/tech_support_warranty_1787213962097.jpg';
import imgCTA from '../assets/images/help_hero_1787215351364.jpg';
import imgSide from '../assets/images/assessment_report_1787206101518.jpg';

const pageSeo = SEO_DATA['/support/downloads'] || {
  h1: '牙科產品型錄與技術文件下載',
  h2: ['產品型錄', '技術文件']
};

const DownloadItem = ({ index, title, info }: { index: string, title: string, info: string }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-gray-200 last:border-0 group transition-colors">
      <div className="flex items-start sm:items-center flex-1 mr-4 mb-4 sm:mb-0">
        <span className="text-lg md:text-xl font-bold mr-4 md:mr-6 shrink-0 text-gray-300 group-hover:text-[#36563C]/60 transition-colors duration-300">
          {index}
        </span>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#36563C] transition-colors duration-300">
          {title}
        </h3>
      </div>
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto pl-10 sm:pl-0">
        <span className="text-sm font-bold text-gray-500 mr-8 tracking-wider uppercase">{info}</span>
        <button 
          className="flex items-center justify-center px-5 py-2.5 bg-gray-50 hover:bg-[#36563C] text-gray-700 hover:text-white rounded text-sm font-bold transition-all duration-300 border border-gray-200 group-hover:border-[#36563C] shrink-0"
          onClick={() => alert(`開始下載：${title}`)}
        >
          <span className="mr-2">下載</span>
          <DownloadIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export function Downloads() {
  usePageMeta({
    title: '資源下載｜崧達企業',
    description: '提供各品牌牙科 3D 列印機、CAD/CAM 設備、齒雕機與牙科材料的原廠型錄、技術規格書與操作手冊下載。',
  });

  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgBanner} 
            alt={pageSeo.h1} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#36563C]/95 via-[#36563C]/80 to-black/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
              Resource Downloads
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {pageSeo.h1}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              提供完整的牙科產品型錄、材料技術資料、設備操作手冊及教育訓練教材，協助您隨時獲取最新的產品資訊與技術指引。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads Section with Image + List Layout */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: Sticky Image */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 hidden md:block">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-gray-100 border border-gray-100"
              >
                <img 
                  src={imgSide} 
                  alt="技術文件與型錄" 
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>

            {/* Right side: Numbered Download List */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">檔案下載區</h2>
                <p className="text-gray-600">點擊右側按鈕即可下載對應的技術文件或型錄檔案。</p>
              </motion.div>

              <div className="space-y-1 border-t border-gray-200">
                <DownloadItem 
                  index="01"
                  title="牙科產品型錄"
                  info="PDF (3.5 MB)"
                />
                <DownloadItem 
                  index="02"
                  title="材料技術資料"
                  info="PDF (2.1 MB)"
                />
                <DownloadItem 
                  index="03"
                  title="操作手冊"
                  info="PDF (5.8 MB)"
                />
                <DownloadItem 
                  index="04"
                  title="教育訓練教材"
                  info="ZIP (12.4 MB)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCTA} 
            alt="聯絡技術支援" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#36563C]/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
              Technical Assistance & Service
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              需要其他技術文件？
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              如果您需要特定型號的舊版手冊或更詳細的技術規範，請直接聯繫我們的技術支援團隊。
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-[#36563C] bg-white rounded-sm hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                聯絡技術支援
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
