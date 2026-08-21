import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronRight, 
} from 'lucide-react';
import { cn } from '../lib/utils';
import { usePageMeta } from '../lib/usePageMeta';

// Image imports
import imgHero from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgScanner1 from '../assets/images/hero_dental_equipment_1787196216501.jpg'; 
import imgScanner2 from '../assets/images/dental_lab_assessment_1787206080921.jpg';
import imgSoftware1 from '../assets/images/dental_technician_lab_1787196258952.jpg';
import imgSoftware2 from '../assets/images/sit_highend_1787207333157.jpg';
import imgSoftware3 from '../assets/images/sit_bottleneck_1787207296999.jpg';
import imgMillingLarge from '../assets/images/clinic_cad_cam_hero_1787208403676.jpg';
import imgMillingSmall1 from '../assets/images/dental_materials_1787196270407.jpg'; 
import imgMillingSmall2 from '../assets/images/help_param_zirconia_1787215388580.jpg';
import imgWorkflow1 from '../assets/images/clinic_training_workflow_1787208422334.jpg';
import imgWorkflow2 from '../assets/images/tech_support_process_1787213941345.jpg';
import imgCta from '../assets/images/sit_training_1787207315661.jpg';

// 1. Scanner Cases (Replaces applicationCases)
const scannerCases = [
  {
    id: 'intraoral-scanner',
    category: '數位印模',
    title: '口內掃描機 (Intraoral Scanners)',
    volume: '臨床端取模 / 單次全口',
    description: '取代傳統印模材，大幅提升患者舒適度與印模精準度。即時獲取高彩度 3D 數位模型，無縫傳輸至技工所。',
    recommendedModel: '高精度無粉掃描',
    accuracy: '精準捕捉邊緣',
    printTime: '約 2-5 分鐘',
    tag: '臨床必備',
    image: imgScanner1
  },
  {
    id: 'desktop-scanner',
    category: '技工掃描',
    title: '桌上型掃描機 (Desktop Scanners)',
    volume: '技工端數位化 / 多顆模型',
    description: '專為技工所設計的高階結構光掃描儀。提供穩定、快速且極致細膩的模型與咬合掃描，確保後續設計精準度。',
    recommendedModel: 'Zirkonzahn / CADStar',
    accuracy: '±10 μm',
    printTime: '約 12-20 秒（單顎）',
    tag: '技工核心',
    image: imgScanner2
  }
];

// 2. Software Models (Replaces asigaModels)
const softwareModels = [
  {
    id: 'zirkonzahn-software',
    name: 'Zirkonzahn Modellier',
    category: '頂級牙技設計',
    summary: '封閉/開放雙系統支援，具備強大且細膩的牙冠、牙橋與複雜植牙牙架設計模組。',
    badge: '高階客製',
    image: imgSoftware1,
    link: '/contact',
  },
  {
    id: 'exocad-software',
    name: 'exocad DentalCAD',
    category: '全球通用標準',
    summary: '極具彈性與廣泛相容性的開放式 CAD 軟體，擁有龐大植體庫與高度自動化設計流程。',
    badge: '最廣泛使用',
    image: imgSoftware2,
    link: '/contact',
  },
  {
    id: 'dentbird-ai',
    name: 'Dentbird AI',
    category: '雲端智能運算',
    summary: '免安裝的高效雲端解決方案。運用 AI 深度學習自動生成牙冠型態，大幅縮短設計時間。',
    badge: 'AI 智能',
    image: imgSoftware3,
    link: '/contact',
  }
];

// 3. Milling & Processing Steps (Replaces triadSteps)
const millingSteps = [
  {
    step: 'PART 01',
    title: '5 軸乾/濕式高階銑床',
    subtitle: '專業加工中心',
    desc: '全方位 5 軸連動加工，無論是超硬氧化鋯、玻璃陶瓷、PMMA 或金屬材質，皆能實現零死角的高精度切削與精細邊緣。',
    points: ['5 軸同動切削', '自動換刀系統', '高剛性機身減震'],
    image: imgMillingLarge,
    linkText: '查看加工機詳情',
    linkUrl: '/contact'
  },
  {
    step: 'PART 02',
    title: '椅旁快速研磨設備',
    subtitle: '單顆牙冠即刻修復',
    desc: '專為診間設計的小型 4 軸研磨機，針對玻璃陶瓷與複合樹脂塊進行高速濕式研磨，實現單次看診完成的 One-Day Dentistry。',
    points: ['高速濕式研磨', '體積精巧', '即刻修復'],
    image: imgMillingSmall1,
    linkText: '瀏覽椅旁設備',
    linkUrl: '/contact'
  },
  {
    step: 'PART 03',
    title: '高溫氧化鋯燒結爐',
    subtitle: '確保材料緻密與透度',
    desc: '提供精確溫控與穩定升降溫曲線的高階燒結爐。確保氧化鋯材料達到最佳機械強度與自然半透光學性質。',
    points: ['精確溫控程序', '均勻熱分佈', '快速燒結模式'],
    image: imgMillingSmall2,
    linkText: '了解燒結設備',
    linkUrl: '/contact'
  }
];

// 4. Workflow Steps (Replaces onboardingSteps)
const workflowSteps = [
  {
    num: '01',
    title: '資料掃描',
    desc: '透過口內掃描機直接獲取數位印模，或傳統印模後經由桌上型掃描機轉換為高精度的 3D 數位模型檔案。'
  },
  {
    num: '02',
    title: 'CAD 設計',
    desc: '利用專業牙科設計軟體，依據對咬關係與美學需求，設計出最佳的贋復體型態。'
  },
  {
    num: '03',
    title: 'CAM 加工',
    desc: '將設計檔匯入 CAM 軟體計算切削路徑，交由高階銑床精準車削氧化鋯、玻璃陶瓷或蠟塊。'
  },
  {
    num: '04',
    title: '後處理與燒結',
    desc: '將銑床加工完成的生胚進行細修，放入高溫燒結爐完成結晶緻密化，最後進行染色與拋光。'
  }
];

export function ProductCadCam() {
  usePageMeta({
    title: '牙科 CAD/CAM 系統｜崧達企業',
    description: '代理義大利 Zirkonzahn 旗艦 CAD/CAM 數位牙科系統，整合超高精度掃描機、五軸銑削機與專用設計軟體，實現全口贗復高品質產出。',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="牙科 CAD/CAM 系統" 
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
              CAD/CAM Integrated Systems
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              牙科 CAD/CAM 系統
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              代理全球頂尖牙科 CAD/CAM 系統。從高精度掃描、智能設計軟體到精密加工設備，為診間與技工所提供無縫接軌的高效數位修復解決方案。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 掃描設備：口內掃描機與桌上型設備 (Clean Image Grid Layout) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Scanning Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              掃描設備：口內掃描機與桌上型設備
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              數位牙科的第一步，透過高精度結構光與無粉掃描技術，為後續的設計與加工奠定最精準的數位模型基礎。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {scannerCases.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.2 }}
                className="flex flex-col"
              >
                {/* Large Featured Image */}
                <div className="aspect-[16/9] w-full mb-8 overflow-hidden bg-gray-200 relative rounded-xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-brand-primary text-white text-[11px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-sm">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-3">
                  {item.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Clean Specs list */}
                <div className="flex flex-col gap-3 pt-6 border-t border-gray-200 mt-auto">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-500">推薦方案</span>
                    <span className="text-base font-bold text-gray-900">{item.recommendedModel}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-500">掃描特性</span>
                    <span className="text-base font-bold text-gray-900">{item.accuracy}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-500">建議應用</span>
                    <span className="text-base font-bold text-gray-900">{item.volume}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 設計軟體 (Multi-Product Thumbnail Grid) */}
      <section id="models" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
            <div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Design Software
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                設計軟體
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                結合最新 AI 運算與頂尖牙技邏輯的 CAD 設計模組，滿足從基礎牙冠到複雜全口贋復的全方位設計需求。
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors border-b-2 border-brand-primary pb-1 group"
              >
                <span>索取完整模組報價</span>
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Product Thumbnail Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {softwareModels.map((model, idx) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Link
                  to={model.link || "/contact"}
                  className="group flex flex-col h-full bg-white rounded-xl p-5 border border-gray-200/90 shadow-xs hover:border-brand-primary/50 hover:shadow-md transition-all duration-300 focus:outline-hidden"
                >
                  {/* Thumbnail Image */}
                  <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-lg relative border border-gray-100 shadow-inner">
                    <img 
                      src={model.image} 
                      alt={model.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {model.badge && (
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 bg-brand-primary text-white text-[11px] font-bold tracking-wider uppercase rounded-sm shadow-xs">
                          {model.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col flex-1 pt-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1.5">
                      {model.category}
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                        {model.name}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-brand-primary flex items-center justify-center transition-colors shrink-0">
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-0.5" />
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-5">
                      {model.summary}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-primary">
                      <span>諮詢軟體模組方案</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 加工與研磨設備 (Ecosystem Multi-Image Showcase) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-18">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Milling & Processing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                加工與研磨設備
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                高階 5 軸與 4 軸加工中心，搭配專屬高溫燒結爐，確保氧化鋯與各式牙科材料皆能達到極致的切削精度與表面平滑度。
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-primary/80 bg-brand-primary/5 px-4 py-2 rounded-full border border-brand-primary/10">
                工業級加工精度
              </span>
            </div>
          </div>

          {/* Asymmetric Product Composition Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Primary Large Card: Milling (8 Columns) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 group hover:border-brand-primary/40 transition-all duration-500 shadow-xs"
            >
              <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/11] w-full overflow-hidden bg-gray-200 relative">
                <img 
                  src={millingSteps[0].image} 
                  alt={millingSteps[0].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[11px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-sm shadow-xs">
                  {millingSteps[0].step} · 加工主體
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1.5">
                    {millingSteps[0].subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                    {millingSteps[0].title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {millingSteps[0].desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">切削精度與產能核心</span>
                  <Link 
                    to={millingSteps[0].linkUrl}
                    className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                  >
                    <span>{millingSteps[0].linkText}</span>
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Secondary Stacked Column (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-1 flex flex-col sm:flex-row lg:flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 group hover:border-brand-primary/40 transition-all duration-500 shadow-xs"
              >
                <div className="aspect-[16/9] sm:aspect-square sm:w-2/5 lg:w-full lg:aspect-[16/8] overflow-hidden bg-gray-200 relative shrink-0">
                  <img 
                    src={millingSteps[1].image} 
                    alt={millingSteps[1].title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-brand-primary/90 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm">
                    {millingSteps[1].step} · 診間設備
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">
                      {millingSteps[1].subtitle}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                      {millingSteps[1].title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {millingSteps[1].desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                    <span className="text-xs text-gray-500">高速濕式研磨</span>
                    <Link 
                      to={millingSteps[1].linkUrl}
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                    >
                      <span>{millingSteps[1].linkText}</span>
                      <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 flex flex-col sm:flex-row lg:flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 group hover:border-brand-primary/40 transition-all duration-500 shadow-xs"
              >
                <div className="aspect-[16/9] sm:aspect-square sm:w-2/5 lg:w-full lg:aspect-[16/8] overflow-hidden bg-gray-200 relative shrink-0">
                  <img 
                    src={millingSteps[2].image} 
                    alt={millingSteps[2].title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-brand-primary/90 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm">
                    {millingSteps[2].step} · 後處理
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">
                      {millingSteps[2].subtitle}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                      {millingSteps[2].title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {millingSteps[2].desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                    <span className="text-xs text-gray-500">穩定升降溫曲線</span>
                    <Link 
                      to={millingSteps[2].linkUrl}
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                    >
                      <span>{millingSteps[2].linkText}</span>
                      <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. 完整數位工作流程 (Clean Minimalist Steps) */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-24">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Digital Workflow
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              完整數位工作流程
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              從取得數位印模到最終成品，我們提供無縫接軌的完整生態系，確保每個環節皆能高效率、零誤差地傳遞資料。
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20 relative">
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-gray-300 z-0"></div>
            {workflowSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex-1 relative z-10"
              >
                <div className="w-14 h-14 bg-gray-50 border border-brand-primary/20 flex items-center justify-center text-xl font-bold text-brand-primary mb-6 mx-auto lg:mx-0">
                   {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center lg:text-left">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal text-center lg:text-left">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Large Photos Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <div className="aspect-[16/9] overflow-hidden bg-gray-200 group rounded-xl">
              <img src={imgWorkflow1} alt="診所端數位流程" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-[16/9] overflow-hidden bg-gray-200 group rounded-xl">
              <img src={imgWorkflow2} alt="技工端加工作業" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. 導入評估與教育訓練 (CTA 區塊) */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCta} 
            alt="導入評估與教育訓練" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-primary/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-xs font-bold text-white/70 uppercase tracking-widest mb-3">
              Consultation & Training
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              導入評估與教育訓練
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              崧達提供現況評估，協助規劃最適合您的硬體配置，並安排完整實機操作培訓。確保您的團隊能自信且順利地將數位流程落實於日常產線中。
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 text-sm md:text-base font-bold text-gray-900 bg-white hover:bg-gray-100 transition-colors shadow-sm group"
              >
                預約專屬諮詢
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-colors"
              >
                回到產品總覽
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
