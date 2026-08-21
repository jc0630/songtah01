import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronRight, 
  Sliders, 
  Layers, 
  Settings, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  FileText, 
  Gauge, 
  Zap, 
  Play,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';
import { usePageMeta } from '../lib/usePageMeta';

// Image imports
import imgHero from '../assets/images/asiga_3d_printer_dental_1787211175160.jpg';
import imgApplications from '../assets/images/dental_3d_printed_applications_1787211189531.jpg';
import imgPostProcessing from '../assets/images/dental_uv_curing_station_1787211201876.jpg';
import imgBentoPrinter from '../assets/images/bento_3d_printer_1787197404068.jpg';
import imgCADCAM from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgMaterials from '../assets/images/dental_materials_1787196270407.jpg';
import imgLabProcess from '../assets/images/dental_technician_lab_1787196258952.jpg';
import imgTraining from '../assets/images/services_education_1787202865679.jpg';
import imgCta from '../assets/images/hero_wide_dental_1787197373982.jpg';

// 1. Applications and volume assessment data
const applicationCases = [
  {
    id: 'surgical-guide',
    category: '數位植牙',
    title: '數位植牙導板 (Surgical Guides)',
    volume: '高精度 / 單次 3-6 組',
    description: '具備極高尺寸安定性與抗變形度，搭配金屬導套精準引導植體方向與深度，通過生物相容性檢驗。',
    recommendedModel: 'ASIGA MAX UV / PRO 4K',
    accuracy: '±25 μm',
    printTime: '約 28-35 分鐘',
    tag: '臨床必備'
  },
  {
    id: 'ortho-models',
    category: '隱形矯正',
    title: '矯正齒列模型與研究模型 (Models)',
    volume: '批次大產量 / 單次 8-16 排',
    description: '專為熱成型透明牙套與診斷研究設計，表面光滑無紋路，耐高溫高壓不易脆裂。',
    recommendedModel: 'ASIGA PRO 4K',
    accuracy: '±35 μm',
    printTime: '約 45 分鐘（整盤）',
    tag: '大產量首選'
  },
  {
    id: 'temp-crowns',
    category: '假牙贋復',
    title: '長期臨時牙冠與微創貼片 (Crowns & Bridges)',
    volume: '精細美學 / 單次 10-30 顆',
    description: '具備接近天然牙的半透光澤與高抗折強度，二類醫材認證，適合全口即刻負載與長效臨時修復。',
    recommendedModel: 'ASIGA MAX UV / ULTRA',
    accuracy: '±20 μm',
    printTime: '約 18-25 分鐘',
    tag: '高抗折強度'
  },
  {
    id: 'splints-guards',
    category: '咬合治療',
    title: '咬合板與防磨牙護套 (Splints & Nightguards)',
    volume: '中產量 / 單次 4-8 組',
    description: '高透明度、具備適度韌性與人體溫度記憶回彈性，配戴舒適不易斷裂，無異味殘留。',
    recommendedModel: 'ASIGA MAX UV',
    accuracy: '±30 μm',
    printTime: '約 40 分鐘',
    tag: '人體工學舒適'
  }
];

// 2. ASIGA Models Data (Extensible Product Grid)
const asigaModels = [
  {
    id: 'asiga-max-uv',
    name: 'ASIGA MAX UV',
    category: '椅旁與中小型技工所',
    summary: '診間椅旁全能首選，具備 62μm 高精度醫療級光機與專利智慧剝離技術。',
    badge: '熱門暢銷',
    image: imgHero,
    link: '/products/3d-printers/asiga-max-uv',
  },
  {
    id: 'asiga-pro-4k',
    name: 'ASIGA PRO 4K',
    category: '高產能數位技工中心',
    summary: '4K 超大成型載台，專為批量齒模、活動假牙基底與高產能連續作業設計。',
    badge: '大產能旗艦',
    image: imgBentoPrinter,
    link: '/contact',
  },
  {
    id: 'asiga-ultra',
    name: 'ASIGA ULTRA',
    category: '新世代 4K 智能觸控',
    summary: '50μm 超微細畫素結合全彩觸控面板與 AI 支撐運算，專注極致微細贋復。',
    badge: '新世代智能',
    image: imgHero,
    link: '/contact',
  }
];

// 3. Workflow Triad (Printer + Resin + Post Processing)
const triadSteps = [
  {
    step: 'PART 01',
    title: '高精度 3D 列印設備',
    subtitle: 'ASIGA 專業醫療級光機平台',
    desc: '採用 385nm 真正 UV 光波與專利 SAS 智慧剝離機制，徹底解決傳統樹脂列印層間拉伸形變，確保每層曝光能量一致。',
    points: ['385nm 純淨 UV 光源', 'SAS 智慧剝離技術', '次微米級 Z 軸穩定導軌'],
    image: imgHero,
    linkText: '查看 ASIGA MAX UV 詳情',
    linkUrl: '/products/3d-printers/asiga-max-uv'
  },
  {
    step: 'PART 02',
    title: '通過認證之牙科專用樹脂',
    subtitle: '二類醫療器材生物相容材料',
    desc: '崧達嚴選國際頂級牙科樹脂，涵蓋植牙導板、耐磨咬合板、超硬模型至自然漸層臨時牙冠，提供完整材料安全與檢驗報告。',
    points: ['二類醫材 Class IIa 認證', '高抗折與極低吸水率', '自然牙色與透光度調色'],
    image: imgMaterials,
    linkText: '瀏覽牙科材料',
    linkUrl: '/products/materials'
  },
  {
    step: 'PART 03',
    title: '自動化清洗與高能 UV 固化',
    subtitle: '確保生物相容性與最終機械強度',
    desc: '列印成品需透過雙槽超音波清洗去除殘留未固化單體，再進入氮氣/真空 UV 高能固化箱，使單體轉化率達 99.9% 以上。',
    points: ['自動定時超音波清洗', '360° 全方位高強度固化', '符合人體黏膜接觸安全標準'],
    image: imgPostProcessing,
    linkText: '了解後處理設備',
    linkUrl: '/products/consumables'
  }
];

// 4. Implementation Steps
const onboardingSteps = [
  {
    num: '01',
    title: '臨床需求評估與硬體選型',
    desc: '分析診所或技工所主要病例類型（導板、模型或牙冠）與每日產量，推薦最經濟高效的機種與載台尺寸。'
  },
  {
    num: '02',
    title: '工作環境與排氣清洗動線規劃',
    desc: '提供專屬工作桌空間配置建議，整合口掃接收、列印機、清洗槽與固化箱的安全作業動線。'
  },
  {
    num: '03',
    title: '原廠樹脂參數驗證與公差校正',
    desc: '崧達工程師現場載入原廠最佳化切片參數，進行實體標準件列印與擬合公差校正，確保裝戴精準。'
  },
  {
    num: '04',
    title: '團隊實機操作教育訓練與售後保障',
    desc: '提供醫師與助理/技工師完整切片軟體操作、料槽維護與故障排除培訓，享有在地原廠保固與備品支援。'
  }
];

// 5. FAQs
const faqs = [
  {
    q: 'ASIGA 3D 列印機是否支援第三方開放式牙科樹脂？',
    a: '是的。ASIGA 全系列機型皆採用真正的「100% 完全開放式材料系統」（Open Material System）。除了 ASIGA 原廠高品質樹脂外，系統已預載並驗證超過 500 種以上全球頂尖第三方牙科品牌樹脂（如 NextDent、DETAX、Dreve、BEGO、Pro3dure 等），您可以自由選用最適配的材料，不受單一品牌綁定。'
  },
  {
    q: '為什麼牙科專業 3D 列印機建議選擇 385nm UV 光源而非 405nm？',
    a: '385nm 波長的光能量更強且穿透力更深，能有效激發更多醫療級光敏引發劑。對於要求極高透明度的「隱形矯正模型、植牙導板」以及對生物相容性嚴格要求的「咬合板與臨時牙冠」，385nm 能達成更徹底的單體交聯固化，成品不易發黃脆化，抗拉強度與安全性大幅優於一般 405nm 機種。'
  },
  {
    q: '導入 3D 列印後，後處理清洗與光固化設備是必須的嗎？',
    a: '是的。3D 列印剛取下的「生胚（Green State）」表面仍殘留液態樹脂，必須經由專用異丙醇（IPA）或專用清洗液清洗，隨後進入專用光固化箱進行二次聚合。適當的後處理能使樹脂達到最大抗彎強度、消除黏膩感，並確保植入人體口腔時無游離單體釋出，符合醫療安全規範。'
  },
  {
    q: '崧達如何提供後續的切片軟體教學、參數更新與維修支援？',
    a: '崧達在台灣擁有專業的原廠認證應用工程師與技師團隊。安裝時提供全套實體上機訓練；日常使用中，我們提供雲端遠端排解、新樹脂參數包下載與實體到府維修服務。若設備需送修檢測，亦可提供代用備機支援，確保您的臨床與產線不中斷。'
  },
  {
    q: '診所椅旁（Chairside）與大型技工所分別推薦哪一款型號？',
    a: '若為牙醫診所椅旁應用，推薦體積精巧、具備 62μm 超高細緻度且換料極快的「ASIGA MAX UV」或新一代「ASIGA ULTRA」；若為每日需產出 30-100 件以上齒模、導板與活動假牙的大型數位技工所，則強烈推薦擁有 4K 大成型載台的「ASIGA PRO 4K」，可實現超高批次吞吐量。'
  }
];

export function Product3DPrinters() {
  const [selectedApp, setSelectedApp] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  usePageMeta({
    title: '牙科 3D 列印機｜崧達企業',
    description: '澳洲 ASIGA 醫療級牙科 3D 列印機總代理，高精度 DLP 列印技術、開放材料系統與 SPS 智慧定位，滿足齒列模型、咬合板、臨時假牙等多元臨床需求。',
  });

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="牙科 3D 列印機" 
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
              3D Printing Systems
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              牙科 3D 列印機
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              代理全球頂尖 ASIGA 醫療級 DLP 3D 列印系統。具備 385nm 純淨 UV 光源、專利智慧剝離技術與完全開放式材料庫，為診間與技工所提供最穩定、精準的高效數位成型方案。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 適用應用與產量評估 (Clean Image Grid Layout) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Application Assessment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              適用應用與產量評估
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              不同臨床需求對精確度、層厚、材料剛性與成型速度皆有嚴格規範。以下為常見牙科應用的設備配置建議，協助您快速評估。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {applicationCases.map((item, idx) => (
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
                    src={imgApplications} 
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
                    <span className="text-sm text-gray-500">推薦設備</span>
                    <span className="text-base font-bold text-gray-900">{item.recommendedModel}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-500">公差精度</span>
                    <span className="text-base font-bold text-gray-900">{item.accuracy}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-500">建議產能</span>
                    <span className="text-base font-bold text-gray-900">{item.volume}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ASIGA 設備型號總覽 (Multi-Product Thumbnail Grid) */}
      <section id="models" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
            <div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Equipment Lineup
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ASIGA 設備型號比較
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                全系列搭載 385nm UV 光機與開放式材料架構。快速瀏覽不同機型定位，依您的產能與臨床需求挑選最適設備。
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors border-b-2 border-brand-primary pb-1 group"
              >
                <span>索取完整型錄與報價</span>
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Product Thumbnail Grid (Extensible: 3 columns, naturally wraps as more models are added) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {asigaModels.map((model, idx) => (
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
                  {/* Thumbnail Image: Main Visual with Smooth Scale & Moderate Radius */}
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

                  {/* Below Image: Model Name → Short Info */}
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
                      <span>{model.id === 'asiga-max-uv' ? '瀏覽詳細規格與技術介紹' : '索取機型型錄與諮詢'}</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 搭配 3D 列印樹脂與後處理設備 (Ecosystem Multi-Image Showcase) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-18">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Digital Production Ecosystem
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                搭配 3D 列印樹脂與後處理設備
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                3D 列印並非單一設備即可完成。崧達整合「高精度列印機 ＋ 專用醫材樹脂 ＋ 自動化後處理」，打造具備極致精度與生物相容性的完整牙科產線。
              </p>
            </div>
          </div>

          {/* Asymmetric Product Composition Layout (Large Hero Printer + 2 Paired Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Primary Large Card: 3D Printer (8 Columns) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 group hover:border-brand-primary/40 transition-all duration-500 shadow-xs"
            >
              {/* Large Image Showcase */}
              <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/11] w-full overflow-hidden bg-gray-200 relative">
                <img 
                  src={triadSteps[0].image} 
                  alt={triadSteps[0].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[11px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-sm shadow-xs">
                  {triadSteps[0].step} · 核心成型設備
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1.5">
                    {triadSteps[0].subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                    {triadSteps[0].title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {triadSteps[0].desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">成型精度與產能核心</span>
                  <Link 
                    to={triadSteps[0].linkUrl}
                    className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                  >
                    <span>{triadSteps[0].linkText}</span>
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Secondary Stacked Column: Resin & Post-processing (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              
              {/* Material Resin Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-1 flex flex-col sm:flex-row lg:flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 group hover:border-brand-primary/40 transition-all duration-500 shadow-xs"
              >
                <div className="aspect-[16/9] sm:aspect-square sm:w-2/5 lg:w-full lg:aspect-[16/8] overflow-hidden bg-gray-200 relative shrink-0">
                  <img 
                    src={triadSteps[1].image} 
                    alt={triadSteps[1].title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-brand-primary/90 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm">
                    {triadSteps[1].step} · 生物相容材料
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">
                      {triadSteps[1].subtitle}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                      {triadSteps[1].title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {triadSteps[1].desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                    <span className="text-xs text-gray-500">醫療級 Class IIa 認證</span>
                    <Link 
                      to={triadSteps[1].linkUrl}
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                    >
                      <span>{triadSteps[1].linkText}</span>
                      <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Post-Processing Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 flex flex-col sm:flex-row lg:flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 group hover:border-brand-primary/40 transition-all duration-500 shadow-xs"
              >
                <div className="aspect-[16/9] sm:aspect-square sm:w-2/5 lg:w-full lg:aspect-[16/8] overflow-hidden bg-gray-200 relative shrink-0">
                  <img 
                    src={triadSteps[2].image} 
                    alt={triadSteps[2].title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-brand-primary/90 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm">
                    {triadSteps[2].step} · 固化與清洗
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">
                      {triadSteps[2].subtitle}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                      {triadSteps[2].title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {triadSteps[2].desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                    <span className="text-xs text-gray-500">強化機械強度與安定性</span>
                    <Link 
                      to={triadSteps[2].linkUrl}
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                    >
                      <span>{triadSteps[2].linkText}</span>
                      <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. 導入流程與參數驗證 (Clean Minimalist Steps) */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-24">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Standardized Deployment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              導入流程與參數驗證
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              從空間評估、參數調校到人員培訓，崧達提供標準化導入流程，確保設備進駐後迅速投入穩定生產。
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20 relative">
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-gray-300 z-0"></div>
            {onboardingSteps.map((step, idx) => (
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
              <img src={imgTraining} alt="工程師實機參數驗證" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-[16/9] overflow-hidden bg-gray-200 group rounded-xl">
              <img src={imgLabProcess} alt="技工室上線實操培訓" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. 常見問題 (FAQ Accordion) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              常見問題
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              彙整牙醫師與技師在導入 3D 列印機時最常詢問的材料相容性、光源選擇與售後技術支援。
            </p>
          </div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-start justify-between gap-4 group focus:outline-hidden"
                  >
                    <span className="text-base md:text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                      {faq.q}
                    </span>
                    <div className={cn(
                      "flex items-center justify-center shrink-0 transition-transform duration-300",
                      isOpen ? "text-brand-primary rotate-180" : "text-gray-400 group-hover:text-gray-600"
                    )}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-sm md:text-base text-gray-600 leading-relaxed font-normal">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA 區塊 */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCta} 
            alt="洽詢 3D 列印解決方案" 
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
              Tailored Consultation
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              規劃適合您診間或技工所的 3D 列印方案
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              不確定哪款機型最能滿足產量與精度需求？歡迎預約崧達專業應用顧問，我們將為您評估設備配置、提供試印樣品與完整投資效益分析。
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 text-sm md:text-base font-bold text-gray-900 bg-white hover:bg-gray-100 transition-colors shadow-sm group"
              >
                洽詢產品方案與報價
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
