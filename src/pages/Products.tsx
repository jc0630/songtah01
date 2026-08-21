import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Settings, 
  Layers, 
  ChevronRight,
  ChevronDown,
  Monitor,
  Cpu
} from 'lucide-react';
import { cn } from '../lib/utils';
import { usePageMeta } from '../lib/usePageMeta';

// Import photographic assets
import imgHero from '../assets/images/hero_dental_equipment_1787196216501.jpg';
import imgProcess from '../assets/images/dental_technician_lab_1787196258952.jpg';
import imgMaterials from '../assets/images/dental_materials_1787196270407.jpg';
import img3DPrinter from '../assets/images/bento_3d_printer_1787197404068.jpg';
import imgCADCAM from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgTraining from '../assets/images/services_education_1787202865679.jpg';
import imgCta from '../assets/images/hero_wide_dental_1787197373982.jpg';
import imgOffice from '../assets/images/about_office_1787202180371.jpg';
import imgGlassCeramics from '../assets/images/hass_rosetta_hero_1787282123424.jpg';
import imgSoftware from '../assets/images/dental_software_hero_1787282457647.jpg';

const categories = [
  {
    id: "3d-printers",
    title: "牙科 3D 列印機",
    href: "/products/3d-printers",
    img: img3DPrinter,
    desc: "ASIGA 全系列醫療級精準 3D 列印方案，涵蓋導板、模型與臨時牙冠應用。",
    size: "large"
  },
  {
    id: "cad-cam",
    title: "牙科 CAD/CAM 系統",
    href: "/products/cad-cam",
    img: imgCADCAM,
    desc: "整合口內掃描、設計軟體與 Zirkonzahn 完整系統，實現高度自動化製程。",
    size: "medium"
  },
  {
    id: "milling",
    title: "牙科齒雕機（研磨機）",
    href: "/products/milling-machines",
    img: imgHero,
    desc: "具備多軸高速研磨能力的乾濕式切削設備，確保復體精密度與邊緣完整度。",
    size: "medium"
  },
  {
    id: "materials",
    title: "牙科材料",
    href: "/products/materials",
    img: imgMaterials,
    desc: "高品質氧化鋯、高強度瓷塊與通過認證的 3D 列印專用樹脂。",
    size: "large"
  },
  {
    id: "consumables",
    title: "牙科耗材",
    href: "/products/consumables",
    img: imgProcess,
    desc: "高品質研磨、拋光與臨床必備專業耗材，確保最終成品的細節美感。",
    size: "small"
  },
  {
    id: "glass",
    title: "玻璃陶瓷與美學貼片",
    href: "/products/glass-ceramics",
    img: imgGlassCeramics,
    desc: "兼具強度與光澤的微創貼片材料，重現自然牙的半透明質感。",
    size: "small"
  },
  {
    id: "software",
    title: "牙科數位軟體",
    href: "/products/software",
    img: imgSoftware,
    desc: "Zirkonzahn 旗艦 CAD 與 Dentbird 雲端 AI 牙冠設計，打造高效數位設計動線。",
    size: "medium"
  }
];

const workflowCombinations = [
  {
    id: "scan-cad",
    title: "數位取模與 CAD 設計體系",
    shortDesc: "口內掃描器 ＋ 牙科專用 CAD 軟體 ＋ 面部掃描整合",
    description: "擺脫傳統印模變形與石膏灌模誤差，透過高精度口內掃描器即時獲取數位模型，直接串連 CAD 軟體進行牙冠、貼片與全口重建設計，大幅縮短臨床與技工溝通時間。",
    combination: [
      { type: "核心設備", value: "口內掃描機、開放式面部掃描儀" },
      { type: "專用軟體", value: "Zirkonzahn / Exocad 牙科設計模組" },
      { type: "效益表現", value: "即時 3D 取模、雲端無縫傳輸檔案" }
    ],
    linkText: "了解 CAD/CAM 系統",
    linkUrl: "/products/cad-cam",
    image: imgCADCAM,
    imageAlt: "牙科 CAD/CAM 掃描與設計流程"
  },
  {
    id: "3d-print-curing",
    title: "光固化 3D 列印與後處理洗固",
    shortDesc: "醫療級 3D 列印機 ＋ 專用認證樹脂 ＋ 固化清洗機",
    description: "以 ASIGA 高精度 DLP/LCD 技術為核心，搭配通過二類醫療器材認證之專用樹脂，列印後透過自動化清洗與精準波長光固化機處理，確保手術導板與臨時假牙的精準貼合度與生物相容性。",
    combination: [
      { type: "核心設備", value: "ASIGA PRO 4K / MAX UV 3D 列印機" },
      { type: "材料配置", value: "植牙導板樹脂、臨時牙冠樹脂、模型樹脂" },
      { type: "後處理工具", value: "氮氣/UV 光固化機、超音波精密清洗槽" }
    ],
    linkText: "了解 3D 列印方案",
    linkUrl: "/products/3d-printers",
    image: img3DPrinter,
    imageAlt: "ASIGA 3D 列印機與後處理設備"
  },
  {
    id: "milling-sintering",
    title: "五軸齒雕研磨與氧化鋯切削",
    shortDesc: "高剛性五軸齒雕機 ＋ 多層次高透鋯塊 ＋ 快速結晶爐",
    description: "採用高轉速、高剛性五軸乾濕兩用研磨機，精準切削多層次漸層氧化鋯與二矽酸鋰瓷塊，配合程式化溫控燒結爐，在維持高抗折強度的同時呈現極佳的透光層次感。",
    combination: [
      { type: "核心設備", value: "五軸乾濕兩用研磨機、高速齒雕機" },
      { type: "材料配置", value: "多層次漸層高透氧化鋯、微創玻璃陶瓷" },
      { type: "後處理設備", value: "真空陶瓷燒結爐、快速結晶爐" }
    ],
    linkText: "了解齒雕研磨設備",
    linkUrl: "/products/milling-machines",
    image: imgHero,
    imageAlt: "五軸齒雕機與切削加工"
  },
  {
    id: "finishing-materials",
    title: "微美學染色上釉與手工精修耗材",
    shortDesc: "專用染色上釉膏 ＋ 精密鑽石研磨輪 ＋ 拋光膏",
    description: "贋復體切削與燒結完成後，透過牙科微美學染色膏與高光澤上釉材料進行細部特徵彩繪，搭配專業級拋光研磨耗材，重現自然齒質的螢光效應與微結構紋理。",
    combination: [
      { type: "美學材料", value: "微美學染色膏、螢光上釉液" },
      { type: "後處理耗材", value: "金剛石修整磨頭、矽膠拋光輪、高光拋光膏" },
      { type: "最終成品", value: "天然透光度高階全瓷冠、美學超薄貼片" }
    ],
    linkText: "了解材料與耗材",
    linkUrl: "/products/materials",
    image: imgMaterials,
    imageAlt: "微美學材料與精修耗材"
  }
];

const workflows = [
  { 
    step: "01",
    tag: "印模與設計",
    title: "改善印模與設計痛點", 
    desc: "免除傳統膠狀印模不適與變形風險，引進口內掃描與直覺式 CAD 軟體，大幅縮短溝通週期。", 
    img: imgCADCAM,
    link: "/products/cad-cam"
  },
  { 
    step: "02",
    tag: "產能與切削",
    title: "提升診間與技工產能", 
    desc: "升級多軸高速乾濕研磨切削設備與 3D 列印機，擺脫委外排單瓶頸，實現快速交件。", 
    img: imgHero,
    link: "/products/milling-machines"
  },
  { 
    step: "03",
    tag: "美學與材料",
    title: "拓展高階贋復材料應用", 
    desc: "引進多層次高透氧化鋯與微創玻璃陶瓷，提供兼具生物相容性、高抗折強度與自然透光感的復體。", 
    img: imgMaterials,
    link: "/products/materials"
  }
];

export function Products() {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);

  usePageMeta({
    title: '牙科產品｜崧達企業',
    description: '崧達代理國際頂級牙科設備與材料，包含 3D 列印機、CAD/CAM 系統、五軸齒雕機、氧化鋯材料、玻璃陶瓷、耗材與設計軟體。',
  });

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="牙科產品：數位設備與材料" 
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
              Digital Equipment & Materials
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              牙科產品：數位設備與材料
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              崧達嚴選國際頂尖設備與材料品牌，從掃描、設計到切削列印與後處理，為您建置最穩定可靠的數位牙科工作流程。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 產品只是其中一環，導入流程才決定結果 (Clean, Spacious Editorial Layout) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left: Clean Single Image Focus */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <img 
                  src={imgProcess} 
                  alt="數位牙科技工室製程整體規劃" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </motion.div>

            {/* Right: Spacious Text Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-4">
                Integration Philosophy
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                產品只是其中一環，<br className="hidden md:block" />
                <span className="text-brand-primary">導入流程才決定結果</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
                單純採購先進設備並不代表數位化成功。崧達從整體數位牙科流程的角度出發，評估您的臨床案件類型、團隊操作習慣與空間條件，為您量身配置最合適的產品組合。
              </p>

              <div className="space-y-8 max-w-2xl">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0 font-bold">
                    01
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">臨床需求與空間動線評估</h3>
                    <p className="text-gray-600 leading-relaxed">
                      釐清主要贋復類型（嵌體、單冠或全口重建），精準配置適合的設備規模與工作動線。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0 font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">開放式軟硬體相容整合</h3>
                    <p className="text-gray-600 leading-relaxed">
                      無縫串接口掃機、CAD 設計軟體、切削研磨機與 3D 列印機，避免封閉系統限制。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0 font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">實機訓練與持續技術支援</h3>
                    <p className="text-gray-600 leading-relaxed">
                      提供完整的操作培訓與日常維護指導，確保投資能迅速轉換為穩定產能。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. 用工作流程組合設備、材料與後處理 (Interactive Accordion with Synced Image) */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Workflow Architecture
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              用工作流程組合設備、材料與後處理
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              產品並非孤立存在。點選下方不同流程階段，了解數位牙科在設備、材料與後處理之間的緊密搭配。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Synced Interactive Image Preview */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-900 border border-gray-200/80 shadow-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeWorkflowIndex}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img 
                      src={workflowCombinations[activeWorkflowIndex].image} 
                      alt={workflowCombinations[activeWorkflowIndex].imageAlt}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Caption Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-3 py-1 rounded bg-brand-primary text-white text-[11px] font-bold tracking-wider uppercase mb-2">
                        Workflow Stage 0{activeWorkflowIndex + 1}
                      </span>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {workflowCombinations[activeWorkflowIndex].title}
                      </h4>
                      <p className="text-xs md:text-sm text-white/80 line-clamp-1 font-normal">
                        {workflowCombinations[activeWorkflowIndex].shortDesc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Accordion Items */}
            <div className="lg:col-span-6 flex flex-col divide-y divide-gray-200">
              {workflowCombinations.map((item, idx) => {
                const isActive = activeWorkflowIndex === idx;

                return (
                  <div 
                    key={item.id}
                    className="py-6 first:pt-0 last:pb-0 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveWorkflowIndex(idx)}
                      className="w-full text-left flex items-start justify-between gap-4 group focus:outline-hidden"
                    >
                      <div className="flex items-start gap-4">
                        <span className={cn(
                          "text-base font-bold transition-colors pt-0.5",
                          isActive ? "text-brand-primary" : "text-gray-400 group-hover:text-gray-600"
                        )}>
                          0{idx + 1}
                        </span>
                        <div>
                          <h3 className={cn(
                            "text-xl md:text-2xl font-bold transition-colors",
                            isActive ? "text-brand-primary" : "text-gray-800 group-hover:text-brand-primary"
                          )}>
                            {item.title}
                          </h3>
                          {!isActive && (
                            <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                              {item.shortDesc}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                        isActive ? "bg-brand-primary/10 text-brand-primary rotate-180" : "text-gray-400 group-hover:text-gray-700 bg-gray-100"
                      )}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 pl-8 md:pl-9">
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5 font-normal">
                              {item.description}
                            </p>

                            {/* Structured Key Configuration */}
                            <div className="bg-white rounded-xl border border-gray-200/80 p-4 mb-5 space-y-2.5 shadow-xs">
                              {item.combination.map((detail, dIdx) => (
                                <div key={dIdx} className="flex items-baseline text-xs md:text-sm">
                                  <span className="w-20 md:w-24 font-bold text-gray-900 flex-shrink-0">
                                    {detail.type}：
                                  </span>
                                  <span className="text-gray-600">
                                    {detail.value}
                                  </span>
                                </div>
                              ))}
                            </div>

                            <Link
                              to={item.linkUrl}
                              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                            >
                              <span>{item.linkText}</span>
                              <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 你現在想改善哪一段流程？ (Scenario Navigation Cards) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 md:mb-18 max-w-3xl">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Workflow Diagnostics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              你現在想改善哪一段流程？
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              根據您目前面臨的臨床或技工瓶頸，快速導覽至最能解決問題的產品分類。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflows.map((item) => (
              <Link 
                key={item.step}
                to={item.link}
                className="group flex flex-col bg-gray-50/50 hover:bg-gray-50 border border-gray-200/80 rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-primary/40 hover:shadow-md"
              >
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded bg-black/60 text-white text-[10px] font-bold tracking-widest uppercase">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowRight className="w-4 h-4 text-brand-primary -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-xs font-bold text-brand-primary flex items-center gap-1.5">
                    <span>查看對應方案</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 牙科產品方案規劃常見品項 (Main Varied Product Grid - PRESERVED & POLISHED) */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 md:mb-18">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Product Catalog
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              牙科產品方案規劃常見品項
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
              精選牙科數位製程中的關鍵品項，從核心設備到精品材料，為您建構專業型錄式的瀏覽體驗。
            </p>
          </div>

          {/* Varied Image Layout for Categories */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {/* Row 1: Large (7 cols) + Medium (5 cols) */}
            <div className="md:col-span-7">
              <CategoryCard item={categories[0]} />
            </div>
            <div className="md:col-span-5">
              <CategoryCard item={categories[1]} />
            </div>

            {/* Row 2: Medium (5 cols) + Large (7 cols) */}
            <div className="md:col-span-5">
              <CategoryCard item={categories[2]} />
            </div>
            <div className="md:col-span-7">
              <CategoryCard item={categories[3]} />
            </div>

            {/* Row 3: Small + Small + Medium (4 cols each) */}
            <div className="md:col-span-4">
              <CategoryCard item={categories[4]} />
            </div>
            <div className="md:col-span-4">
              <CategoryCard item={categories[5]} />
            </div>
            <div className="md:col-span-4">
              <CategoryCard item={categories[6]} />
            </div>
          </div>
        </div>
      </section>

      {/* 6. 先選設備或材料類型，再看系列與規格 (Structured Dual Index Directory) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Navigation Guide
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              先選設備或材料類型，再看系列與規格
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              清晰的雙向導覽入口，協助醫師與技工師依據品類快速找到具體型號與規格。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Category A: Digital Equipment */}
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs hover:border-brand-primary/40 transition-colors">
              <div className="h-44 relative overflow-hidden">
                <img 
                  src={imgHero} 
                  alt="數位設備系列" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-bold text-white/70 uppercase tracking-wider block mb-1">
                      Hardware Category
                    </span>
                    <h3 className="text-2xl font-bold text-white">數位設備體系</h3>
                  </div>
                  <span className="text-xs px-3 py-1 rounded bg-white/20 text-white font-medium">
                    3 大核心系列
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 divide-y divide-gray-100">
                <Link 
                  to="/products/3d-printers" 
                  className="py-4 first:pt-0 flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-base">
                      3D 列印機全系列
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">ASIGA PRO 4K / MAX UV 精準齒科列印</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                </Link>

                <Link 
                  to="/products/cad-cam" 
                  className="py-4 flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-base">
                      Zirkonzahn CAD/CAM 系統
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">口掃、面掃、設計軟體與全自動化製程整合</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                </Link>

                <Link 
                  to="/products/milling-machines" 
                  className="py-4 last:pb-0 flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-base">
                      齒雕研磨與切削機
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">乾式 / 濕式五軸高剛性切削研磨設備</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>

            {/* Category B: Dental Materials */}
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-xs hover:border-brand-primary/40 transition-colors">
              <div className="h-44 relative overflow-hidden">
                <img 
                  src={imgMaterials} 
                  alt="牙科材料系列" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-bold text-white/70 uppercase tracking-wider block mb-1">
                      Material Category
                    </span>
                    <h3 className="text-2xl font-bold text-white">牙科材料體系</h3>
                  </div>
                  <span className="text-xs px-3 py-1 rounded bg-white/20 text-white font-medium">
                    3 大精選系列
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 divide-y divide-gray-100">
                <Link 
                  to="/products/materials" 
                  className="py-4 first:pt-0 flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-base">
                      高透氧化鋯材料系列
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">兼具高抗折強度與自然漸層透光度之鋯塊</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                </Link>

                <Link 
                  to="/products/glass-ceramics" 
                  className="py-4 flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-base">
                      玻璃陶瓷與微創貼片
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">二矽酸鋰瓷塊，呈現前牙極致美學細節</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                </Link>

                <Link 
                  to="/products/materials" 
                  className="py-4 last:pb-0 flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-base">
                      醫療級 3D 列印專用樹脂
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">通過二類醫療器材認證之導板與臨時假牙材料</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 需要一套能真正落地的方案？ (Full-Width Brand CTA) */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCta} 
            alt="洽詢產品方案" 
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
              Consultation & Support
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              需要一套能真正落地的方案？
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              如果您不確定設備、材料或產品搭配方式，歡迎直接與我們聯繫，崧達專業團隊將為您規劃最適合的產品組合。
            </p>

            <div className="flex justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 text-sm md:text-base font-bold text-brand-primary bg-white rounded-sm hover:bg-brand-bg transition-colors shadow-sm group"
              >
                洽詢產品方案
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ item }: { item: any }) {
  const isLarge = item.size === "large";
  const isMedium = item.size === "medium";

  return (
    <Link 
      to={item.href}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-gray-100 flex flex-col h-full",
        isLarge ? "min-h-[380px] md:min-h-[460px]" : isMedium ? "min-h-[320px] md:min-h-[360px]" : "min-h-[280px] md:min-h-[320px]"
      )}
    >
      <img 
        src={item.img} 
        alt={item.title} 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
      
      <div className="relative mt-auto p-6 md:p-8 z-10">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-white/80 text-sm leading-relaxed max-w-sm line-clamp-2 mb-4">
          {item.desc}
        </p>
        <div className="flex items-center gap-2 text-white text-[11px] font-bold uppercase tracking-widest opacity-90 group-hover:opacity-100 transition-opacity">
          <span>查看產品系列</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
