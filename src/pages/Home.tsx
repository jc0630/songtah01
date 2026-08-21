import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { usePageMeta } from '../lib/usePageMeta';

// Images
import imgHeroWide from '../assets/images/hero_wide_dental_1787197373982.jpg';
import imgEquip from '../assets/images/hero_dental_equipment_1787196216501.jpg';
import imgCadCam from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgTech from '../assets/images/dental_technician_lab_1787196258952.jpg';
import imgMaterials from '../assets/images/dental_materials_1787196270407.jpg';
import imgMaintenance from '../assets/images/service_maintenance_1787197564284.jpg';
import imgBento3D from '../assets/images/bento_3d_printer_1787197404068.jpg';
import imgNewsBg from '../assets/images/news_bg_materials_1787197419092.jpg';
import imgNews1 from '../assets/images/course_workshop_hands_1787213559325.jpg';
import imgNews2 from '../assets/images/dental_expo_booth_1787213575694.jpg';
import imgNews3 from '../assets/images/dental_software_hero_1787282457647.jpg';

export function Home() {
  const [activeServiceTab, setActiveServiceTab] = useState<'lab' | 'clinic'>('lab');

  usePageMeta({
    title: '崧達企業｜牙科設備、材料與數位牙科解決方案',
    description: '崧達企業深耕台灣牙科產業逾四十年，專注引進全球頂尖牙科 3D 列印機、CAD/CAM 系統、五軸齒雕機、氧化鋯瓷塊、玻璃陶瓷與高階耗材，為牙醫診所與牙技所提供從導入評估、教育訓練到在地維修的完整數位牙科解決方案。',
  });

  return (
    <div className="flex flex-col bg-white">
      
      {/* 區塊 1｜Hero 首屏 */}
      <section className="relative flex flex-col justify-center min-h-[85vh] pt-20 overflow-hidden">
        {/* Banner 滿版背景圖與遮罩 */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHeroWide} 
            alt="專業牙科數位設備" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32 md:py-40">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-6 tracking-tight max-w-4xl">
            崧達企業｜整合牙科設備、材料與技術，讓數位牙科製程穩定落地
          </h1>
          <p className="text-lg text-brand-bg/90 mb-10 leading-relaxed max-w-2xl">
            深耕台灣牙科產業逾四十年，專注引進全球頂尖數位牙科設備與高階耗材，為牙醫診所與牙技所提供從導入評估、教育訓練到在地維修的完整解決方案。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-brand-primary rounded-sm hover:bg-brand-primary/90 transition-colors shadow-sm"
            >
              探索設備與材料
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-transparent border-2 border-white/80 rounded-sm hover:bg-white/10 hover:border-white transition-colors"
            >
              洽詢服務
            </Link>
          </div>
        </div>
      </section>

      {/* 區塊 2｜四大服務 (參考附圖一平面排版) */}
      <section className="py-24 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            
            {/* Service 1 */}
            <div className="flex flex-col group">
              <div className="text-center mb-4">
                <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-1">Equipment</div>
                <h3 className="text-lg font-bold text-brand-primary">設備與材料供應</h3>
              </div>
              <div className="aspect-[4/5] w-full overflow-hidden mb-4 rounded-xl border border-gray-200/60">
                <img src={imgEquip} alt="設備與材料供應" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed text-center mb-4 flex-grow">
                代理頂級 3D 列印機、CAD/CAM 切削設備與氧化鋯等高階專業材料。
              </p>
              <Link to="/products" className="text-xs font-bold text-brand-primary uppercase tracking-wide flex items-center justify-center group-hover:text-brand-primary/80 transition-colors">
                Explore <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col group">
              <div className="text-center mb-4">
                <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-1">Education</div>
                <h3 className="text-lg font-bold text-brand-primary">數位技術教育訓練</h3>
              </div>
              <div className="aspect-[4/5] w-full overflow-hidden mb-4 rounded-xl border border-gray-200/60">
                <img src={imgCadCam} alt="數位技術教育訓練" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed text-center mb-4 flex-grow">
                提供設備原廠技術授權培訓、軟體操作指導，確保技術應用於現場。
              </p>
              <Link to="/courses-events" className="text-xs font-bold text-brand-primary uppercase tracking-wide flex items-center justify-center group-hover:text-brand-primary/80 transition-colors">
                Explore <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col group">
              <div className="text-center mb-4">
                <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-1">Experience</div>
                <h3 className="text-lg font-bold text-brand-primary">設備展示與體驗</h3>
              </div>
              <div className="aspect-[4/5] w-full overflow-hidden mb-4 rounded-xl border border-gray-200/60">
                <img src={imgTech} alt="設備展示與體驗" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed text-center mb-4 flex-grow">
                設立專業展示中心，提供設備現場試機與導入前的完整製程評估。
              </p>
              <Link to="/contact" className="text-xs font-bold text-brand-primary uppercase tracking-wide flex items-center justify-center group-hover:text-brand-primary/80 transition-colors">
                Explore <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col group">
              <div className="text-center mb-4">
                <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-1">Support</div>
                <h3 className="text-lg font-bold text-brand-primary">維修與技術支援</h3>
              </div>
              <div className="aspect-[4/5] w-full overflow-hidden mb-4 rounded-xl border border-gray-200/60">
                <img src={imgMaintenance} alt="維修與技術支援" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed text-center mb-4 flex-grow">
                原廠認證工程師團隊提供即時線上排障與在地到府維修服務。
              </p>
              <Link to="/support/help-center" className="text-xs font-bold text-brand-primary uppercase tracking-wide flex items-center justify-center group-hover:text-brand-primary/80 transition-colors">
                Explore <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 區塊 3｜品牌核心價值 */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight mb-6">
                崧達的數位製程價值，<br className="hidden md:block"/>來自每一個環節的協同
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                真正的數位轉型並非僅止於採購單一設備。我們深知牙科製程的複雜性，因此提供從設備建置、材料匹配、參數調校到人員培訓的「全環節整合服務」。我們的價值在於確保各系統間的無縫協作，降低您的試錯成本，讓數位技術發揮最大產能。
              </p>
              <ul className="space-y-4">
                {['硬體與軟體的無縫整合', '原廠驗證的最佳化材料參數', '銜接診所與技工所的工作流程'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm font-bold text-brand-primary">
                    <ShieldCheck className="w-5 h-5 text-brand-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 圓角數位牙材圖片 */}
            <div className="w-full lg:w-1/2">
              <img 
                src={imgMaterials} 
                alt="數位牙材" 
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm border border-gray-100" 
              />
            </div>
          </div>

          {/* 下方附加數位牙科圖片展示 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={imgBento3D} alt="3D 列印技術" className="w-full aspect-[16/9] object-cover rounded-xl shadow-sm border border-gray-100" />
            <img src={imgCadCam} alt="CAD 設計軟體" className="w-full aspect-[16/9] object-cover rounded-xl shadow-sm border border-gray-100" />
            <img src={imgEquip} alt="專業齒雕設備" className="w-full aspect-[16/9] object-cover rounded-xl shadow-sm border border-gray-100" />
          </div>
        </div>
      </section>

      {/* 區塊 4｜數位製程導入評估 (Tab版型) */}
      <section className="relative py-24 overflow-hidden border-y border-gray-100">
        {/* Full Bleed Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHeroWide} 
            alt="數位轉型評估背景" 
            className="w-full h-full object-cover object-center"
          />
          {/* 深綠色品牌遮罩，確保上方白字有極佳的對比度 */}
          <div className="absolute inset-0 bg-[#36563C]/95 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#36563C]/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">專業數位轉型評估</h2>
            <p className="text-white/90">無論是牙體技術所的產能升級，或是牙醫診所的數位化導入，我們為不同單位提供專屬的服務方案。</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex border-b border-white/20 mb-8">
              <button 
                onClick={() => setActiveServiceTab('lab')}
                className={cn(
                  "flex-1 py-4 text-center text-lg font-bold transition-colors border-b-2 outline-none",
                  activeServiceTab === 'lab' ? "border-white text-white" : "border-transparent text-white/50 hover:text-white"
                )}
              >
                牙科技工數位轉型評估
              </button>
              <button 
                onClick={() => setActiveServiceTab('clinic')}
                className={cn(
                  "flex-1 py-4 text-center text-lg font-bold transition-colors border-b-2 outline-none",
                  activeServiceTab === 'clinic' ? "border-white text-white" : "border-transparent text-white/50 hover:text-white"
                )}
              >
                診間數位製程導入
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white p-8 md:p-12 rounded-lg flex flex-col md:flex-row gap-8 items-center shadow-xl">
              {activeServiceTab === 'lab' && (
                <>
                  <div className="w-full md:w-1/2">
                    <img src={imgTech} alt="牙科技工數位轉型" className="w-full aspect-square object-cover rounded-lg border border-gray-100 shadow-sm" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-brand-primary mb-4">針對牙技所的客製化升級</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      分析您現有的產量與流程瓶頸，從 3D 列印到五軸切削，規劃最適切的設備組合。我們協助評估加工材質、排程自動化與後處理設備，確保轉型投資帶來最實質的產能提升。
                    </p>
                    <Link to="/services/lab-digital-transformation" className="inline-flex items-center text-sm font-bold text-brand-primary uppercase tracking-wide hover:text-brand-primary/80 transition-colors">
                      了解評估內容 <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </>
              )}
              {activeServiceTab === 'clinic' && (
                <>
                  <div className="w-full md:w-1/2">
                    <img src={imgCadCam} alt="診間數位製程導入" className="w-full aspect-square object-cover rounded-lg border border-gray-100 shadow-sm" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-brand-primary mb-4">把技工製程搬進診間</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      結合口內掃描與診間型研磨機，打造高效的單次就診（Single-visit）修復體驗。提供空間規劃建議、材料選擇指引與助理操作培訓，讓臨床數位化無縫接軌。
                    </p>
                    <Link to="/services/clinic-digital-workflow" className="inline-flex items-center text-sm font-bold text-brand-primary uppercase tracking-wide hover:text-brand-primary/80 transition-colors">
                      了解導入方案 <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 區塊 5｜牙科設備與材料產品 (Bento 排版) */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-4">牙科設備與材料產品</h2>
              <p className="text-gray-600">嚴選國際知名品牌，打造專業級數位牙科生產線。</p>
            </div>
            <Link to="/products" className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors border-b-2 border-brand-primary pb-1">
              查看產品總覽 <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[600px]">
            {/* 左側大圖 */}
            <Link to="/products/3d-printers" className="lg:col-span-8 relative group block overflow-hidden rounded-2xl h-[400px] lg:h-full">
              <img src={imgBento3D} alt="牙科 3D 列印機" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 pr-8">
                <div className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">Equipment</div>
                <h3 className="text-3xl font-bold text-white mb-2">高階牙科 3D 列印機</h3>
                <p className="text-brand-bg/90 text-sm max-w-md">適用於手術導板、臨時牙冠、咬合板等高精度數位輸出應用。</p>
              </div>
            </Link>

            {/* 右側兩張小圖堆疊 */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 grid-rows-1 lg:grid-rows-2 gap-4 h-[400px] lg:h-full">
              
              <Link to="/products/cad-cam" className="relative group block overflow-hidden rounded-2xl h-full min-h-[200px]">
                <img src={imgCadCam} alt="CAD/CAM 系統" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/10 to-transparent"></div>
                <div className="absolute bottom-6 left-6 pr-6">
                  <div className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-1">System</div>
                  <h3 className="text-xl font-bold text-white mb-1">CAD/CAM 系統</h3>
                  <p className="text-brand-bg/90 text-xs line-clamp-2">全口重建數位解決方案與軟體。</p>
                </div>
              </Link>
              
              <Link to="/products/materials" className="relative group block overflow-hidden rounded-2xl h-full min-h-[200px]">
                <img src={imgMaterials} alt="美學玻璃陶瓷" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/10 to-transparent"></div>
                <div className="absolute bottom-6 left-6 pr-6">
                  <div className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-1">Materials</div>
                  <h3 className="text-xl font-bold text-white mb-1">高透度美學材料</h3>
                  <p className="text-brand-bg/90 text-xs line-clamp-2">高品質氧化鋯與玻璃陶瓷。</p>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* 區塊 6｜品牌與在地服務 (圖片＋預覽) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-brand-primary">
              崧達長期在地服務，<br className="hidden md:block"/>讓國際技術真正接上日常工作
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              引進頂尖設備只是第一步。崧達具備四十年的深厚產業經驗，致力於將國際原廠規格轉化為在地可行的操作指引，確保技術融入您的日常工作流程。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col">
              <img src={imgMaintenance} alt="原廠授權的技術團隊" className="w-full aspect-video object-cover rounded-2xl mb-6 shadow-sm border border-gray-200/50" />
              <h3 className="text-xl font-bold text-brand-primary mb-3">原廠授權的專業技術團隊</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                工程師具備完善的原廠培訓與認證，為您提供第一線的專業排障、保養與維修服務，確保每一次切削與列印的穩定性。
              </p>
              <Link to="/about" className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors mt-auto">
                了解團隊 <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col">
              <img src={imgTech} alt="完整的在地零組件庫存" className="w-full aspect-video object-cover rounded-2xl mb-6 shadow-sm border border-gray-200/50" />
              <h3 className="text-xl font-bold text-brand-primary mb-3">完整的在地零組件與材料庫存</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                充足的在地耗材與零件備品，確保能快速回應維修需求，避免因待料而停工，讓您的數位生產線持續發揮最大產能。
              </p>
              <Link to="/support/help-center" className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors mt-auto">
                技術支援 <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 區塊 7｜課程與最新消息 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-3xl font-bold text-brand-primary">崧達近期課程與最新消息</h2>
            <Link to="/news" className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors">
              查看全部資訊 <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="bg-white border border-gray-200 rounded-xl hover:border-brand-primary hover:shadow-lg transition-all cursor-pointer group overflow-hidden flex flex-col">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img src={imgNews1} alt="課程縮圖" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="text-xs font-bold text-brand-primary mb-3">2026.10.15</div>
                <h3 className="text-lg font-bold text-brand-primary mb-4 leading-snug group-hover:text-brand-primary/80 transition-colors">
                  數位美學貼片：從 CAD 設計到結晶參數實作課程
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-6">
                  深入探討玻璃陶瓷材料特性，結合前牙美學設計軟體操作，帶領技師掌握高擬真貼片的關鍵參數。
                </p>
                <div className="mt-auto flex items-center text-xs font-bold text-brand-primary uppercase tracking-wider">
                  了解更多 <ChevronRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white border border-gray-200 rounded-xl hover:border-brand-primary hover:shadow-lg transition-all cursor-pointer group overflow-hidden flex flex-col">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img src={imgNews2} alt="展覽縮圖" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="text-xs font-bold text-brand-primary mb-3">2026.09.28</div>
                <h3 className="text-lg font-bold text-brand-primary mb-4 leading-snug group-hover:text-brand-primary/80 transition-colors">
                  台北國際牙材展：展出最新自動化研磨方案
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-6">
                  誠摯邀請蒞臨世貿一館，現場實機展示五軸聯動齒雕機的自動化製程，以及高透度氧化鋯的新應用。
                </p>
                <div className="mt-auto flex items-center text-xs font-bold text-brand-primary uppercase tracking-wider">
                  了解更多 <ChevronRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="bg-white border border-gray-200 rounded-xl hover:border-brand-primary hover:shadow-lg transition-all cursor-pointer group overflow-hidden flex flex-col">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img src={imgNews3} alt="軟體更新縮圖" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="text-xs font-bold text-brand-primary mb-3">2026.08.20</div>
                <h3 className="text-lg font-bold text-brand-primary mb-4 leading-snug group-hover:text-brand-primary/80 transition-colors">
                  系統升級公告：CAD/CAM 軟體 V3.2 更新說明
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-6">
                  本次升級提升口內掃描檔案自動拼接效率，並針對多單位牙橋切削路徑進行運算優化，建議用戶盡速更新。
                </p>
                <div className="mt-auto flex items-center text-xs font-bold text-brand-primary uppercase tracking-wider">
                  了解更多 <ChevronRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 區塊 8｜Contact CTA */}
      <section className="relative py-32 overflow-hidden">
        {/* 背景圖片與暗色遮罩 */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgNewsBg} 
            alt="背景素材" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-brand-primary/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">讓崧達從您的實際需求開始</h2>
          <p className="text-brand-bg/90 text-lg mb-10 max-w-2xl mx-auto">
            無論是設備導入評估、材料測試、數位製程規劃或是技術支援，我們的專業團隊都準備好為您提供協助。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-brand-primary bg-brand-bg rounded-sm hover:bg-white transition-colors shadow-sm"
            >
              聯絡崧達
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-white bg-transparent border-2 border-white/60 rounded-sm hover:bg-white/10 hover:border-white transition-colors"
            >
              洽詢產品與服務
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}

