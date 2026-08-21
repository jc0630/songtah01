import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowRight, Download, CheckCircle2 } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';

// 產品主圖與輪播圖
import imgProduct1 from '../assets/images/asiga_3d_printer_dental_1787211175160.jpg';
import imgProduct2 from '../assets/images/bento_3d_printer_1787197404068.jpg';
import imgProduct3 from '../assets/images/dental_uv_curing_station_1787211201876.jpg';
// 其他配圖
import imgApp from '../assets/images/dental_3d_printed_applications_1787211189531.jpg';
import imgCtaBg from '../assets/images/hero_wide_dental_1787197373982.jpg';

// 模擬相關產品資料 (作為未來產品的模板結構)
const relatedProducts = [
  {
    id: 'asiga-pro-4k',
    name: 'ASIGA PRO 4K',
    summary: '4K 超大成型載台，專為批量齒模、活動假牙基底與高產能連續作業設計。',
    image: imgProduct2,
    link: '/products/3d-printers'
  },
  {
    id: 'asiga-ultra',
    name: 'ASIGA Ultra',
    summary: '50μm 超微細畫素結合全彩觸控面板與 AI 支撐運算，專注極致微細贋復。',
    image: imgProduct1,
    link: '/products/3d-printers'
  },
  {
    id: 'uv-curing',
    name: 'ASIGA Flash',
    summary: '專業級 UV 二次固化箱，確保 3D 列印物件達到最佳的生物相容性與物理強度。',
    image: imgProduct3,
    link: '/products/3d-printers'
  }
];

export function ProductAsigaMaxUv() {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs'>('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const productImages = [imgProduct1, imgProduct2, imgProduct3];

  usePageMeta({
    title: 'ASIGA MAX UV 牙科 3D 列印機｜崧達企業',
    description: 'ASIGA MAX UV 牙科高精度 DLP 3D 列印機，搭載 SPS 智慧定位系統與 385nm UV 光源，是牙科診所與技工所精準製作的首選。',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#F4F7F5] py-4 border-b border-[#E8EEE9]">
        <div className="max-w-7xl mx-auto px-6 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-[#36563C] transition-colors">首頁</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/products" className="hover:text-[#36563C] transition-colors">產品總覽</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/products/3d-printers" className="hover:text-[#36563C] transition-colors">3D 列印設備</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900 font-medium">ASIGA MAX UV</span>
        </div>
      </div>

      {/* 1. Hero Section: Left Image Carousel, Right Info */}
      <section className="py-16 md:py-24 bg-[#F4F7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Product Image Carousel */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4 w-full"
            >
              {/* Main Image */}
              <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 group shadow-sm">
                <img 
                  src={productImages[currentImageIndex]} 
                  alt={`ASIGA MAX UV 展示圖 ${currentImageIndex + 1}`} 
                  className="w-full h-full object-cover transition-all duration-500" 
                />
                
                {/* Carousel Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-hidden focus:opacity-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-hidden focus:opacity-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
                {productImages.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentImageIndex(idx)} 
                    className={`relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-hidden ${
                      idx === currentImageIndex 
                        ? 'border-[#36563C] opacity-100 shadow-sm' 
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`縮圖 ${idx + 1}`} />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Product Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-block px-4 py-1.5 bg-[#36563C]/10 text-[#36563C] text-sm font-bold tracking-widest rounded-full mb-4 border border-[#36563C]/20">
                  DLP 3D PRINTER
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  ASIGA MAX UV
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  專為牙科與高精度醫療製造打造的頂級桌上型 DLP 3D 列印機。搭載獨家 SPS™ 智慧定位系統，確保每一次的列印皆能達到完美的精準度與穩定性。
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#36563C] mt-0.5 shrink-0 mr-3" />
                  <p className="text-gray-700 font-medium">385nm UV LED 固化光源，支援高透材料</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#36563C] mt-0.5 shrink-0 mr-3" />
                  <p className="text-gray-700 font-medium">62μm 像素解析度，精細還原邊緣細節</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#36563C] mt-0.5 shrink-0 mr-3" />
                  <p className="text-gray-700 font-medium">100% 開放材料系統，相容全球各品牌樹脂</p>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#36563C] text-white font-bold rounded-lg hover:bg-[#2b4430] transition-colors shadow-md hover:shadow-lg"
                >
                  預約諮詢評估
                </Link>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#36563C] font-bold rounded-lg border border-[#36563C] hover:bg-[#F4F7F5] transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  <Download className="w-5 h-5 mr-2" />
                  下載型錄
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Tabs Navigation */}
      <section className="bg-white sticky top-20 z-40 border-b border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-5 text-lg font-bold border-b-4 transition-colors ${
                activeTab === 'overview' 
                  ? 'border-[#36563C] text-[#36563C]' 
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              產品概述
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-5 text-lg font-bold border-b-4 transition-colors ${
                activeTab === 'specs' 
                  ? 'border-[#36563C] text-[#36563C]' 
                  : 'border-transparent text-gray-500 hover:text-gray-800'
              }`}
            >
              機型規格參考
            </button>
          </div>
        </div>
      </section>

      {/* 3. Tab Content */}
      <div className="py-20 md:py-28 bg-white min-h-[500px]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* --- OVERVIEW TAB --- */}
          {activeTab === 'overview' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-24"
            >
              {/* Introduction Text & Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">頂級精度與開放性的<br/><span className="text-[#36563C]">完美結合</span></h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    ASIGA MAX 採用先進的 DLP 技術，專為要求極高精準度的牙科實驗室與診所設計。其獨家的 SPS™ (Smart Positioning System) 智慧定位系統，能在每一層列印前確保成型平台達到精確的目標厚度，大幅提高列印成功率與邊緣密合度。
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    此外，全開放的材料系統讓使用者不再受限於單一原廠耗材，能自由選用市面上最適合的第三方樹脂，實現從模型、導板、臨時假牙到全口義齒等多樣化的臨床應用。
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                  <img src={imgApp} alt="牙科 3D 列印應用" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Feature Grid */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-10 border-l-4 border-[#36563C] pl-4">核心技術優勢</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-12">
                  
                  <div className="border-t-2 border-[#E8EEE9] pt-6 group hover:border-[#36563C] transition-colors">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#36563C] transition-colors mb-4">SPS 智慧定位系統</h4>
                    <p className="text-gray-600 leading-relaxed">逐層監控列印狀態，確保每一層厚度精準無誤，長期輸出品質穩定，有效減少列印失敗率。</p>
                  </div>
                  
                  <div className="border-t-2 border-[#E8EEE9] pt-6 group hover:border-[#36563C] transition-colors">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#36563C] transition-colors mb-4">開放材料系統</h4>
                    <p className="text-gray-600 leading-relaxed">100% 相容全球數百種第三方樹脂，讓實驗室能依臨床應用彈性選擇材料，不受限於單一體系。</p>
                  </div>
                  
                  <div className="border-t-2 border-[#E8EEE9] pt-6 group hover:border-[#36563C] transition-colors">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#36563C] transition-colors mb-4">高解析度 DLP 引擎</h4>
                    <p className="text-gray-600 leading-relaxed">搭載專屬 385nm UV LED 光源與 62μm 像素解析度，完美呈現牙冠邊緣細節與表面極致平滑度。</p>
                  </div>
                  
                  <div className="border-t-2 border-[#E8EEE9] pt-6 group hover:border-[#36563C] transition-colors">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#36563C] transition-colors mb-4">內部輻射計校準</h4>
                    <p className="text-gray-600 leading-relaxed">內建輻射計感測器，可自動偵測並校準光源強度，確保機器長年使用下的列印固化程度一致。</p>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* --- SPECS TAB --- */}
          {activeTab === 'specs' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-[#36563C] pl-4">ASIGA MAX UV 規格表</h3>
              
              <div className="border-t border-gray-300">
                <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200 hover:bg-[#F4F7F5] transition-colors px-4">
                  <div className="sm:w-1/3 font-bold text-gray-900 mb-2 sm:mb-0 text-lg">成型體積 (X, Y, Z)</div>
                  <div className="sm:w-2/3 text-gray-700 text-lg">119 × 67 × 76 mm</div>
                </div>
                <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200 hover:bg-[#F4F7F5] transition-colors px-4">
                  <div className="sm:w-1/3 font-bold text-gray-900 mb-2 sm:mb-0 text-lg">像素尺寸 (X, Y)</div>
                  <div className="sm:w-2/3 text-gray-700 text-lg">62 μm</div>
                </div>
                <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200 hover:bg-[#F4F7F5] transition-colors px-4">
                  <div className="sm:w-1/3 font-bold text-gray-900 mb-2 sm:mb-0 text-lg">光源波長</div>
                  <div className="sm:w-2/3 text-gray-700 text-lg">385 nm UV LED 高效固化光源</div>
                </div>
                <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200 hover:bg-[#F4F7F5] transition-colors px-4">
                  <div className="sm:w-1/3 font-bold text-gray-900 mb-2 sm:mb-0 text-lg">材料相容性</div>
                  <div className="sm:w-2/3 text-gray-700 text-lg">100% 開放材料，相容 ASIGA 原廠與超過 500 種第三方樹脂</div>
                </div>
                <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200 hover:bg-[#F4F7F5] transition-colors px-4">
                  <div className="sm:w-1/3 font-bold text-gray-900 mb-2 sm:mb-0 text-lg">操作軟體</div>
                  <div className="sm:w-2/3 text-gray-700 text-lg">ASIGA Composer (包含終身免費更新與技術支援)</div>
                </div>
                <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200 hover:bg-[#F4F7F5] transition-colors px-4">
                  <div className="sm:w-1/3 font-bold text-gray-900 mb-2 sm:mb-0 text-lg">支援檔案格式</div>
                  <div className="sm:w-2/3 text-gray-700 text-lg">STL, SLC, PLY, STM</div>
                </div>
                <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200 hover:bg-[#F4F7F5] transition-colors px-4">
                  <div className="sm:w-1/3 font-bold text-gray-900 mb-2 sm:mb-0 text-lg">機身重量</div>
                  <div className="sm:w-2/3 text-gray-700 text-lg">16.5 kg</div>
                </div>
                <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200 hover:bg-[#F4F7F5] transition-colors px-4">
                  <div className="sm:w-1/3 font-bold text-gray-900 mb-2 sm:mb-0 text-lg">機身尺寸</div>
                  <div className="sm:w-2/3 text-gray-700 text-lg">260 × 380 × 370 mm</div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6 px-4">
                * 以上為公開資料整理，實際型號與規格將由崧達企業業務人員提供確認為準。
              </p>
            </motion.div>
          )}

        </div>
      </div>

      {/* 4. Related Products Section */}
      <section className="py-20 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">查看更多系列產品</h2>
            <Link to="/products/3d-printers" className="hidden sm:inline-flex items-center text-[#36563C] font-bold hover:text-[#2b4430] transition-colors">
              回到 3D 列印設備列表
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map(product => (
              <Link 
                to={product.link} 
                key={product.id} 
                className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#36563C]/30 transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#36563C] transition-colors mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {product.summary}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-[#36563C]">
                    <span>了解更多</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA block (Full Bleed Background) */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Full Bleed Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCtaBg} 
            alt="專業諮詢" 
            className="w-full h-full object-cover object-center"
          />
          {/* Deep Green Multiply Gradient for readability and brand adherence */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#36563C]/95 via-[#36563C]/80 to-black/40 mix-blend-multiply"></div>
          {/* Solid transparent overlay for baseline contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Foreground Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">想找出最適合您產能的 ASIGA 機型？</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            無論是小型診所的初次數位化，或是大型技工所的產能擴張，我們的技術團隊都能為您提供最專業的設備評估與導入建議。
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#36563C] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl group"
          >
            預約專人諮詢評估
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
