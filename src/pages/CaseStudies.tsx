import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO_DATA } from '../data';
import { usePageMeta } from '../lib/usePageMeta';

// Images
import imgBanner from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgCTA from '../assets/images/help_hero_1787215351364.jpg';

// Mock case images
import imgCase1 from '../assets/images/clinic_training_workflow_1787208422334.jpg';
import imgCase2 from '../assets/images/dental_expo_booth_1787213575694.jpg';
import imgCase3 from '../assets/images/dental_3d_printed_applications_1787211189531.jpg';
import imgCase4 from '../assets/images/tech_support_process_1787213941345.jpg';
import imgCase5 from '../assets/images/course_hero_banner_1787213546440.jpg';
import imgCase6 from '../assets/images/tech_support_warranty_1787213962097.jpg';

const pageSeo = SEO_DATA['/case-studies'] || {
  h1: '客戶案例與技轉成果',
  h2: ['客戶案例', '成功經驗分享']
};

const MOCK_CASES = [
  {
    id: 1,
    title: '台北大安區大型牙醫診所：導入數位化椅旁解決方案，實現「一日長牙」目標',
    date: '2024.04.10',
    image: imgCase1,
    link: '/case-studies/1',
    category: '診所數位化'
  },
  {
    id: 2,
    title: '中南部指標性牙體技術所：全面升級 3D 列印產線，產能與精準度雙重提升',
    date: '2024.03.22',
    image: imgCase2,
    link: '/case-studies/2',
    category: '技工所升級'
  },
  {
    id: 3,
    title: '林口知名植牙中心：無牙顎植牙導板應用實例，大幅縮短手術時間與提升安全性',
    date: '2024.02.15',
    image: imgCase3,
    link: '/case-studies/3',
    category: '植牙導板應用'
  },
  {
    id: 4,
    title: '新竹美學牙醫聯合診所：運用高透多層次氧化鋯，完美重現患者自信微笑曲線',
    date: '2024.01.30',
    image: imgCase4,
    link: '/case-studies/4',
    category: '前牙美學'
  },
  {
    id: 5,
    title: '台中精品牙醫：從傳統印模到全面口掃，縮短臨時假牙製作與患者等待時間',
    date: '2023.12.05',
    image: imgCase5,
    link: '/case-studies/5',
    category: '數位口掃'
  },
  {
    id: 6,
    title: '桃園專業齒顎矯正診所：結合 3D 列印技術，客製化隱形牙套流程優化',
    date: '2023.11.18',
    image: imgCase6,
    link: '/case-studies/6',
    category: '齒顎矯正'
  }
];

export function CaseStudies() {
  usePageMeta({
    title: '客戶案例｜崧達企業',
    description: '分享台灣牙醫診所與牙體技術所導入崧達數位牙科解決方案的實際案例與轉型成果。',
  });

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Banner */}
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
              Customer Success Stories
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {pageSeo.h1}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              見證崧達企業如何協助全台牙醫診所與牙體技術所完成數位轉型。透過實際案例，了解最新數位牙科設備與材料的應用成果。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Article List Grid (WordPress-ready Template) */}
      <section className="py-24 md:py-32 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {MOCK_CASES.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={item.link} className="flex flex-col h-full group">
                  {/* Article Image Preview */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-gray-100 border border-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle dark gradient overlay on hover for premium feel */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-[#36563C] rounded shadow-sm">
                      {item.category}
                    </div>
                  </div>
                  
                  {/* Article Content */}
                  <div className="flex flex-col flex-1">
                    {/* Date */}
                    <div className="text-sm font-bold text-gray-400 mb-3 tracking-wider">
                      {item.date}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#36563C] transition-colors duration-300 line-clamp-3">
                      {item.title}
                    </h3>
                    
                    {/* Read More Button */}
                    <div className="mt-auto pt-2 flex items-center text-[#36563C] font-bold text-sm">
                      <span className="relative overflow-hidden">
                        閱讀完整案例
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#36563C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination Placeholder (Common for WP lists) */}
          <div className="mt-20 flex justify-center border-t border-gray-200 pt-10">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 flex items-center justify-center rounded bg-[#36563C] text-white font-bold text-sm">1</span>
              <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 font-bold text-sm transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 font-bold text-sm transition-colors">3</button>
              <span className="px-2 text-gray-400">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCTA} 
            alt="聯絡我們" 
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
              Start Your Digital Transformation
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              準備好升級您的診所與技工所？
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              與崧達企業聯繫，我們的技術顧問團隊將為您提供專屬的數位化評估與解決方案。
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-[#36563C] bg-white rounded-sm hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                免費預約諮詢
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
