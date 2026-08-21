import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO_DATA } from '../data';
import { usePageMeta } from '../lib/usePageMeta';

// Images
import imgBanner from '../assets/images/news_bg_materials_1787197419092.jpg';
import imgCTA from '../assets/images/help_hero_1787215351364.jpg';

// Mock news images
import imgNews1 from '../assets/images/dental_expo_booth_1787213575694.jpg';
import imgNews2 from '../assets/images/course_hero_banner_1787213546440.jpg';
import imgNews3 from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgNews4 from '../assets/images/dental_3d_printed_applications_1787211189531.jpg';
import imgNews5 from '../assets/images/clinic_training_workflow_1787208422334.jpg';
import imgNews6 from '../assets/images/tech_support_hero_1787213916459.jpg';

const pageSeo = SEO_DATA['/news'] || {
  h1: '最新消息',
  h2: ['最新動態', '展會與活動']
};

const MOCK_NEWS = [
  {
    id: 1,
    title: '崧達企業將參與 2024 台北國際牙材展，展示最新 3D 列印與切削設備',
    date: '2024.03.15',
    image: imgNews1,
    link: '/news/1'
  },
  {
    id: 2,
    title: '全新高透性多層次氧化鋯盤塊正式上市，提供卓越的美學與強度',
    date: '2024.02.28',
    image: imgNews2,
    link: '/news/2'
  },
  {
    id: 3,
    title: '數位牙科進階實作課程開放報名：從口掃到前牙美學修復',
    date: '2024.02.10',
    image: imgNews3,
    link: '/news/3'
  },
  {
    id: 4,
    title: '3D 列印臨時假牙樹脂獲得新版 TFDA 醫療器材許可證',
    date: '2024.01.25',
    image: imgNews4,
    link: '/news/4'
  },
  {
    id: 5,
    title: '南區教育訓練中心正式啟用，提供更即時的在地技術服務',
    date: '2024.01.12',
    image: imgNews5,
    link: '/news/5'
  },
  {
    id: 6,
    title: '設備軟體更新公告：CAD 系統年度大改版，提升排版與運算效率',
    date: '2023.12.20',
    image: imgNews6,
    link: '/news/6'
  }
];

export function News() {
  usePageMeta({
    title: '最新消息｜崧達企業',
    description: '掌握崧達企業最新產品發表、原廠技術更新、數位牙科專題報導與近期課程展會動態。',
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
              Latest News & Updates
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {pageSeo.h1}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              掌握崧達企業的最新動態、產品發表、展會資訊與教育訓練活動。隨時更新數位牙科領域的前沿技術與解決方案。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Article List Grid (WordPress-ready Template) */}
      <section className="py-24 md:py-32 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {MOCK_NEWS.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={news.link} className="flex flex-col h-full group">
                  {/* Article Image Preview */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-gray-100 border border-gray-100">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle dark gradient overlay on hover for premium feel */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                  </div>
                  
                  {/* Article Content */}
                  <div className="flex flex-col flex-1">
                    {/* Date */}
                    <div className="text-sm font-bold text-gray-400 mb-3 tracking-wider">
                      {news.date}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#36563C] transition-colors duration-300 line-clamp-3">
                      {news.title}
                    </h3>
                    
                    {/* Read More Button */}
                    <div className="mt-auto pt-2 flex items-center text-[#36563C] font-bold text-sm">
                      <span className="relative overflow-hidden">
                        閱讀更多
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
              Stay Connected
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              想了解更多產品資訊？
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              追蹤崧達企業的最新動態，或直接與我們的專業團隊聯繫，為您量身打造數位牙科解決方案。
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-[#36563C] bg-white rounded-sm hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                聯絡我們
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
