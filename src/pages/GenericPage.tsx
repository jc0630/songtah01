import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO_DATA } from '../data';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';
import imgBanner from '../assets/images/services_hero_1787202841607.jpg';

export function GenericPage() {
  const location = useLocation();
  const path = location.pathname;
  
  // Type assertion since we route here for any path not explicitly handled
  const seo = (SEO_DATA as any)[path] || { h1: "網頁建置中", h2: ["內容準備中"] };

  usePageMeta({
    title: `${seo.h1 || '資訊頁面'}｜崧達企業`,
    description: '崧達企業深耕台灣牙科產業逾四十年，提供牙科 3D 列印機、CAD/CAM 系統、齒雕機、牙科材料、耗材與技術支援等完整數位牙科解決方案。',
  });

  return (
    <div className="flex flex-col flex-grow">
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
              SongDa Dental
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {seo.h1}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              提供專業的牙科技術服務、課程與技術支援，協助您無痛接軌數位製程。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Areas based on H2s */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="space-y-16">
              {seo.h2.map((h2: string, index: number) => (
                <div key={index} className="scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6 pb-4 border-b border-gray-100 flex items-center gap-4">
                    <span className="w-1.5 h-8 bg-brand-secondary rounded-full inline-block"></span>
                    {h2}
                  </h2>
                  <div className="prose prose-lg text-gray-600">
                    <p>
                      此區塊為「{h2}」的詳細內容。我們堅持提供高品質、高可靠度的 B2B 專業服務，從初期的需求評估、設備選型，到後期的教育訓練與保固維修，每一步都為您設想周到。
                    </p>
                    <p>
                      如果您對此主題有進一步的問題，歡迎直接聯絡我們的服務專員，我們將提供專屬的諮詢服務。
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="mt-8 bg-gray-50 rounded-3xl p-8 flex items-center justify-between">
                    <div>
                      <h4 className="text-brand-dark font-bold mb-2">需要進一步協助？</h4>
                      <p className="text-gray-500 text-sm">我們的專業團隊隨時為您解答</p>
                    </div>
                    <Link to="/contact" className="p-3 bg-white text-brand-primary rounded-full shadow-sm hover:shadow-md transition-shadow">
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
