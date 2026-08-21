import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO_DATA } from '../data';
import { ArrowRight, Download, Settings, ShieldCheck } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';
import imgBanner from '../assets/images/dental_cad_cam_1787196229677.jpg';

export function ProductCategory() {
  const location = useLocation();
  const path = location.pathname;
  
  // Type assertion since we know we only route here for valid SEO paths, or fallback safely
  const seo = (SEO_DATA as any)[path] || { h1: "產品介紹", h2: ["產品特色"] };

  usePageMeta({
    title: `${seo.h1 || '牙科產品'}｜崧達企業`,
    description: '崧達企業代理國際頂尖牙科設備與材料品牌，提供 3D 列印機、CAD/CAM 系統、五軸齒雕機、氧化鋯瓷塊與各式原廠耗材。',
  });

  return (
    <div className="flex flex-col">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgBanner} 
            alt={seo.h1} 
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
              Dental Products
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {seo.h1}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              為專業牙科領域提供頂級的代理品牌設備與材料。從前端掃描設計到後端研磨列印，我們提供完整的工作流程解決方案。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area - Catalog Style Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Loop through H2s to create sections */}
          <div className="space-y-32">
            {seo.h2.map((h2: string, index: number) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                
                {/* Left Side: Large Vertical Image (Catalog Style) */}
                <div className="w-full lg:w-5/12 shrink-0">
                  <div className="bg-brand-bg rounded-3xl aspect-[3/4] relative overflow-hidden flex items-center justify-center p-8 border border-gray-100/50 shadow-sm">
                    {/* Placeholder for Product Image / Catalog Snippet */}
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto border-4 border-white/40 rounded-full flex items-center justify-center mb-4">
                        <span className="text-brand-primary/40">Image</span>
                      </div>
                      <p className="text-brand-primary/60 text-sm font-medium tracking-widest uppercase">
                        Product Visual
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Information & Features */}
                <div className="w-full lg:w-7/12 pt-4">
                  <h2 className="text-3xl font-bold text-brand-dark mb-6">{h2}</h2>
                  <div className="prose prose-lg text-gray-600 mb-10">
                    <p>
                      這是針對「{h2}」的專業說明區塊。在實際網站中，這裡會放上該產品類型的詳細規格、適用情境、代理品牌的優勢，以及如何融入現有的數位牙科製程中。
                    </p>
                    <p>
                      我們嚴格挑選符合國際標準的醫療器材，確保您的每一次診療或技工製作都能達到最高品質的成果。
                    </p>
                  </div>
                  
                  {/* Feature List */}
                  <ul className="space-y-6 mb-12">
                    <li className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 text-brand-primary">
                        <Settings className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-dark mb-1">精準的製程參數</h4>
                        <p className="text-gray-600 text-sm">提供原廠驗證的最佳化參數設定，減少試錯成本。</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 text-brand-primary">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-dark mb-1">原廠授權保固</h4>
                        <p className="text-gray-600 text-sm">完整的在地維修資源，確保設備穩定運行。</p>
                      </div>
                    </li>
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-brand-primary rounded-full hover:bg-brand-primary/90 transition-all shadow-sm"
                    >
                      索取詳細規格報價
                    </Link>
                    <Link
                      to="/support/downloads"
                      className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-brand-primary bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all"
                    >
                      下載產品型錄
                      <Download className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Cross-sell / Tech Support Banner */}
      <section className="bg-brand-dark py-20 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">不確定哪款設備最適合您的診所或技工所？</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            我們的應用工程師團隊提供免費的數位製程健檢，協助您評估產量、空間與預算，規劃最佳的導入藍圖。
          </p>
          <Link
            to="/services/clinic-digital-workflow"
            className="inline-flex items-center text-brand-accent font-medium hover:text-white transition-colors"
          >
            了解數位製程導入服務 <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
