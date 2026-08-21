import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { usePageMeta } from '../lib/usePageMeta';

// Images
import imgMain from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgContent1 from '../assets/images/asiga_3d_printer_dental_1787211175160.jpg';
import imgContent2 from '../assets/images/clinic_training_workflow_1787208422334.jpg';
import imgBanner from '../assets/images/news_bg_materials_1787197419092.jpg';

export function ArticleDetail() {
  const location = useLocation();
  const isCaseStudy = location.pathname.includes('case-studies');

  usePageMeta({
    title: '牙科數位製程導入，從設備選擇到實際應用｜崧達企業',
    description: '深入探討牙科數位製程導入關鍵步驟，從口內掃描、CAD 設計、3D 列印到五軸齒雕機加工與材料選擇。',
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform: string) => {
    // Mock share functionality
    console.log(`Sharing to ${platform}`);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Banner (Shared Template Style) */}
      <section className="relative w-full h-[45vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgBanner} 
            alt="Article Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#36563C]/95 via-[#36563C]/80 to-black/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
              {isCaseStudy ? 'Customer Case Study' : 'Latest News'}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              牙科數位製程導入，從設備選擇到實際應用
            </h1>
            <div className="flex items-center gap-6 text-white/80 text-sm font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#36563C]"></span>
                {isCaseStudy ? '客戶案例' : '最新消息'}
              </span>
              <span>2024.03.15</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Area (WordPress Block Editor Style) */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Article Container */}
          <article className="prose prose-lg prose-slate max-w-none">
            
            {/* Featured Image */}
            <div className="mb-12 md:mb-16">
              <img 
                src={imgMain} 
                alt="牙科數位製程導入主圖" 
                className="w-full aspect-[16/9] object-cover rounded-2xl shadow-sm border border-gray-100"
              />
              <p className="mt-4 text-sm text-gray-500 text-center italic">
                圖：數位牙科工作流程的核心設備與整合應用示意圖
              </p>
            </div>

            {/* Paragraph Text */}
            <div className="mb-10 text-gray-700 leading-relaxed text-lg">
              隨著牙科技術的快速演進，數位化已不再是診所與技工所的「選項」，而是維持競爭力的「標準」。然而，在面對琳瑯滿目的設備選擇時，許多醫師與技術人員往往感到困惑：究竟該如何挑選最適合自己工作流程的方案？
            </div>

            {/* H2 Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-8 border-l-4 border-[#36563C] pl-6">
              設備選擇的關鍵：產能、精度與相容性
            </h2>

            <p className="mb-8 text-gray-700 leading-relaxed">
              在導入數位製程的第一步，設備的相容性往往是最容易被忽略的一環。一個封閉的系統雖然可能在初期提供簡便的操作體驗，但長遠來看，卻限制了材料選擇與後續擴充的彈性。
            </p>

            {/* WordPress-style Image Block */}
            <figure className="my-12">
              <img 
                src={imgContent1} 
                alt="ASIGA 3D 列印設備示範" 
                className="w-full rounded-2xl shadow-sm border border-gray-100"
              />
              <figcaption className="mt-4 text-sm text-gray-500 text-center italic font-normal">
                導入 Asiga 高精度 3D 列印系統，能顯著提升臨時牙冠與手術導板的製作效率。
              </figcaption>
            </figure>

            {/* H3 Title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-12 mb-6">
              從臨床到技工端的無縫銜接
            </h3>

            <p className="mb-8 text-gray-700 leading-relaxed">
              數位化的真正價值在於溝通效率的提升。透過口內掃描儀取得的數位印模，可以即時傳輸至設計軟體中，減少了傳統印模材料的變形風險與物流往返的時間。在實際應用中，我們建議醫師先從最常用的單顆牙冠或簡單的導板流程開始，逐步擴展至全口重建等複雜病例。
            </p>

            {/* WordPress-style Secondary Image Block */}
            <figure className="my-12">
              <img 
                src={imgContent2} 
                alt="教育訓練與實際應用情境" 
                className="w-full rounded-2xl shadow-sm border border-gray-100"
              />
              <figcaption className="mt-4 text-sm text-gray-500 text-center italic font-normal">
                崧達專業技術團隊提供一對一設備教育訓練，確保診所端能快速掌握操作要領。
              </figcaption>
            </figure>

            <p className="mb-10 text-gray-700 leading-relaxed">
              總結而言，成功的數位轉型並非一蹴可幾，而是需要透過「合適的設備」、「穩定的材料」以及「專業的技術支援」三位一體。崧達企業深耕產業多年，始終致力於協助客戶在數位浪潮中穩定前行。
            </p>

          </article>

          {/* 3. Article Footer (Share & Back) */}
          <div className="mt-20 pt-10 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              
              {/* Share Functions */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-500 flex items-center gap-2 mr-2">
                  <Share2 className="w-4 h-4" /> 分享文章：
                </span>
                <button 
                  onClick={() => handleShare('facebook')}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#36563C] hover:text-white transition-all duration-300"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#36563C] hover:text-white transition-all duration-300"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleShare('link')}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#36563C] hover:text-white transition-all duration-300"
                  aria-label="Copy Link"
                >
                  <LinkIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Back Link */}
              <Link 
                to={isCaseStudy ? '/case-studies' : '/news'} 
                className="inline-flex items-center text-sm font-bold text-[#36563C] hover:text-gray-900 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                返回{isCaseStudy ? '客戶案例' : '最新消息'}列表
              </Link>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
