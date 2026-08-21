import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Settings,
  ShieldCheck,
  Zap,
  Gauge
} from 'lucide-react';
import { cn } from '../lib/utils';
import { usePageMeta } from '../lib/usePageMeta';

// Image imports
import imgHero from '../assets/images/clinic_cad_cam_hero_1787208403676.jpg';
import imgDryMilling from '../assets/images/dental_materials_1787196270407.jpg';
import imgWetMilling from '../assets/images/sit_highend_1787207333157.jpg';
import imgZirkonzahn from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgGenCore from '../assets/images/dental_technician_lab_1787196258952.jpg';
import imgZirconiaDisc from '../assets/images/help_param_zirconia_1787215388580.jpg';
import imgCeramicBlock from '../assets/images/sit_highend_1787207333157.jpg';
import imgMetalDisc from '../assets/images/hero_dental_equipment_1787196216501.jpg';
import imgPmmaDisc from '../assets/images/news_bg_materials_1787197419092.jpg';
import imgInstall from '../assets/images/help_param_zirconia_1787215388580.jpg';
import imgTraining from '../assets/images/clinic_training_workflow_1787208422334.jpg';
import imgLabProcess from '../assets/images/sit_training_1787207315661.jpg';
import imgCta from '../assets/images/services_hero_1787208422334.jpg';

// 1. 齒雕機怎麼選 (Processing Cases)
const processingCases = [
  {
    id: 'dry-milling',
    category: '乾式加工',
    title: '乾式加工 (Dry Milling)',
    tag: '氧化鋯與樹脂首選',
    description: '適用於氧化鋯 (Zirconia)、PMMA、蠟型 (Wax) 等軟質材料。無需冷卻切削液，具備極高的切削速度與精細度，加工後粉塵由專用集塵器迅速排除。',
    recommendedModel: 'Zirkonzahn 全系列 / 乾式五軸機',
    targetMaterials: '氧化鋯 (未燒結)、PMMA、蠟塊',
    advantage: '高速切削、無殘留液、直接燒結',
    image: imgDryMilling
  },
  {
    id: 'wet-milling',
    category: '濕式加工',
    title: '濕式加工 (Wet Milling)',
    tag: '硬質陶瓷與金屬必備',
    description: '針對玻璃陶瓷 (Glass Ceramic / e.max)、二矽酸鋰、鈦金屬及鈷鉻合金。加工全程由連續水冷系統降溫與潤滑，防止高硬度材料產生微裂紋並大幅保護刀具壽命。',
    recommendedModel: 'MAI 研磨機 / GenCore MillFix / M2',
    targetMaterials: '玻璃陶瓷、鈦合金、鈷鉻合金',
    advantage: '水冷防裂、高光潔度、刀具壽命長',
    image: imgWetMilling
  }
];

// 2. Zirkonzahn 機型陣列
const zirkonzahnModels = [
  {
    id: 'm1',
    name: 'Zirkonzahn M1',
    category: '輕量入門五軸',
    badge: '輕量入門',
    summary: '緊湊型機身設計，占地小且精度卓越。適合初次導入數位加工的牙醫診所或小型技工室，穩定切削軟性材料。',
    image: imgZirkonzahn,
    link: '/contact'
  },
  {
    id: 'm2',
    name: 'Zirkonzahn M2',
    category: '雙主軸旗艦',
    badge: '乾濕雙主軸',
    summary: '配備獨立的乾式與濕式雙主軸，無需手動清潔即可在氧化鋯與金屬/陶瓷間無縫自動切換，兼具極致彈性與產能。',
    image: imgZirkonzahn,
    link: '/contact'
  },
  {
    id: 'm4',
    name: 'Zirkonzahn M4',
    category: '多功能主流款',
    badge: '高性價比',
    summary: '高性價比經典機種，支援濕式與乾式加工套件，能應對日常絕大多數牙冠、長跨度牙橋與金屬牙架製作需求。',
    image: imgZirkonzahn,
    link: '/contact'
  },
  {
    id: 'm6',
    name: 'Zirkonzahn M6',
    category: '全自動化生產',
    badge: '自動換盤系統',
    summary: '內建自動換盤系統 (Blank Changer) 與多位刀庫，支援夜間無人值守連續切削生產，為大型數位技工所提供最高吞吐量。',
    image: imgZirkonzahn,
    link: '/contact'
  }
];

// 3. GenCore & MAI 機型陣列
const otherModels = [
  {
    id: 'gencore',
    name: 'GenCore MillFix',
    category: '高剛性重切削中心',
    badge: '金屬與高剛性',
    summary: '採用工業級高剛性鑄鐵機身與精密滾珠螺桿，專為切削高硬度鈷鉻合金、鈦金屬與氧化鋯設計，確保長年切削穩定性與超低刀耗。',
    image: imgGenCore,
    link: '/contact'
  },
  {
    id: 'mai',
    name: 'MAI 五軸研磨機',
    category: '桌上型快速椅旁機',
    badge: '診間椅旁首選',
    summary: '為數位化診所與椅旁修復量身打造。體積精巧、具備五軸同動研磨能力，支援玻璃陶瓷單次就診（One-Day Dentistry）即刻研磨完成。',
    image: imgGenCore,
    link: '/contact'
  }
];

// 4. 可加工材料對照 (Material Compatibility Data)
const materialCards = [
  {
    id: 'zirconia',
    category: '高強度全瓷',
    name: '氧化鋯 (Zirconia)',
    type: '乾式加工 (Dry Milling)',
    filterType: 'dry',
    description: '加工時材料處於未燒結（生胚粉塊）狀態，具備良好的切削流暢度。車削完成後需放入高溫燒結爐（約 1500°C）進行緻密化結晶，達到最終 1200+ MPa 高強度。',
    suitableEquipment: 'Zirkonzahn 全系列 / 乾式五軸機',
    applications: '後牙單冠、解剖全鋯冠、長跨度牙橋、植牙牙架',
    peripherals: '高負壓集塵機、高溫氧化鋯燒結爐',
    image: imgZirconiaDisc
  },
  {
    id: 'glass-ceramic',
    category: '高透美學全瓷',
    name: '玻璃陶瓷 (Glass Ceramic / e.max)',
    type: '濕式研磨 (Wet Milling)',
    filterType: 'wet',
    description: '二矽酸鋰或長石質瓷塊硬度高且質脆，加工過程必須透過連續循環水冷系統進行降溫與潤滑，以防止邊緣微裂與崩角，確保修復體邊緣極致密合。',
    suitableEquipment: 'MAI 五軸研磨機 / 椅旁研磨機 / M2 濕式軸',
    applications: '前牙超薄美學貼片、嵌體 (Inlay/Onlay)、前牙全瓷冠',
    peripherals: '循環水冷過濾系統、專用金剛砂磨頭、瓷牙結晶爐',
    image: imgCeramicBlock
  },
  {
    id: 'titanium-cocr',
    category: '醫療級金屬',
    name: '鈦金屬與鈷鉻合金 (Titanium / Co-Cr)',
    type: '濕式重切削 (Wet Milling)',
    filterType: 'wet',
    description: '金屬材料加工阻力極大且會產生高熱，必須使用具備高扭力主軸與鑄鐵抗震機身的設備，並配合專用切削油水冷卻，以維持尺寸精度並延長刀具壽命。',
    suitableEquipment: 'GenCore MillFix 高剛性五軸機 / 旗艦重切削機',
    applications: '客製化植牙基台 (Custom Abutment)、活動假牙金屬支架',
    peripherals: '專用切削液循環過濾機、高負載冷卻機',
    image: imgMetalDisc
  },
  {
    id: 'pmma-wax',
    category: '臨時與過渡材料',
    name: 'PMMA 與樹脂蠟塊 (PMMA / Wax)',
    type: '乾式高速加工 (Dry Milling)',
    filterType: 'dry',
    description: '材料硬度適中且切削阻力低，刀具磨損小，可實現超高速切削。主要用於長期臨時牙冠驗證咬合關係，或用於傳統失蠟法鑄造金屬支架的精密蠟型。',
    suitableEquipment: '各款五軸齒雕機 (Zirkonzahn / GenCore / MAI)',
    applications: '長期臨時假牙、全口試戴評估、失蠟鑄造蠟型',
    peripherals: '標準集塵設備、專用塑膠/蠟刀',
    image: imgPmmaDisc
  }
];

// 5. 安裝條件與周邊配置
const installationPeripherals = [
  {
    tag: 'Environment & Power',
    title: '安裝環境與穩壓需求',
    subtitle: '高精度加工基礎',
    desc: '五軸齒雕機對電壓穩定度與環境震動極為敏感。崧達工程師將於裝機前進行現場實地評估，確保 220V 穩壓配電線路、乾燥無油氣源與承重抗震工作檯完全符合原廠規範。',
    image: imgInstall,
    linkUrl: '/contact',
    linkText: '預約環境評估'
  },
  {
    tag: 'Dust Collection',
    title: '工業級負壓集塵系統',
    subtitle: '保護主軸與環境',
    desc: '乾式加工會產生大量氧化鋯與 PMMA 細微粉塵，需配備與齒雕機訊號連動的專用高負壓集塵器，迅速吸除切屑，保護主軸軸承並維持技工室清新空氣。',
    image: imgInstall,
    linkUrl: '/contact',
    linkText: '查看集塵設備'
  },
  {
    tag: 'Cooling System',
    title: '循環水冷與碎屑過濾系統',
    subtitle: '濕式研磨必備配件',
    desc: '濕式切削專用配置。內建多道多層精密濾網，高效分離切削液中的陶瓷粉末與金屬細屑，確保冷卻水路通暢無阻，大幅延長主軸與車針壽命。',
    image: imgInstall,
    linkUrl: '/contact',
    linkText: '查看冷卻配件'
  }
];

// 6. 導入流程與教育訓練
const onboardingSteps = [
  { 
    num: '01', 
    title: '需求與產能評估', 
    desc: '分析診所或技工所的主要案件類型（氧化鋯、玻璃陶瓷、金屬）與每日產量目標，推薦最適配的機型、軸數與乾/濕式配置。' 
  },
  { 
    num: '02', 
    title: '空間與氣電管線規劃', 
    desc: '工程團隊實地勘查，提供專用 220V 穩壓電源、冷凍乾燥空壓機氣源、集塵排氣與水冷管線的標準施工圖面建議。' 
  },
  { 
    num: '03', 
    title: '設備進駐與原廠校正', 
    desc: '原廠認證工程師到府安裝，執行五軸水平校正、主軸偏擺精度測試與 CAM 軟體通訊連線，確保達到原廠出廠極致精度。' 
  },
  { 
    num: '04', 
    title: 'CAM 軟體與實機培訓', 
    desc: '提供完整排版切削軟體操作教學、材料刀具參數調校、保養維護與故障排除培訓，享有在地原廠保固與備品支援。' 
  }
];

export function ProductMillingMachines() {
  const [materialFilter, setMaterialFilter] = useState<'dry' | 'wet'>('dry');

  usePageMeta({
    title: '牙科齒雕機與五軸研磨設備｜崧達企業',
    description: '引進 Zirkonzahn、GenCore MillFix 與 MAI 等頂級乾濕式五軸齒雕機，適用氧化鋯、玻璃陶瓷、鈦金屬與 PMMA 等全系列牙科材料加工。',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredMaterials = materialCards.filter(
    item => item.filterType === materialFilter
  );

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="牙科齒雕機與五軸研磨設備" 
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
              5-Axis Milling & Chairside Grinding
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              牙科齒雕機與五軸研磨設備
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              代理全球頂尖 Zirkonzahn、GenCore MillFix 與 MAI 專業五軸加工系統。提供高剛性乾式與濕式研磨方案，滿足氧化鋯、玻璃陶瓷至高硬度金屬的全方位數位修復需求。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 齒雕機怎麼選：軸數、乾濕式與可加工材料 (Clean 2-Column Grid Layout) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Selection Guide
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              齒雕機怎麼選：軸數、乾濕式與可加工材料
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              不同修復適應症與牙科材料對加工方式有著明確區分。乾式切削專注於未燒結氧化鋯的高速產能，濕式研磨則為高脆性玻璃陶瓷與高硬度金屬提供關鍵的水冷防護。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {processingCases.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.2 }}
                className="flex flex-col"
              >
                {/* Large Featured Image */}
                <div className="aspect-[16/9] w-full mb-8 overflow-hidden bg-gray-200 relative rounded-2xl border border-gray-100 shadow-xs">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-brand-primary text-white text-[11px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-md shadow-xs">
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
                    <span className="text-sm text-gray-500 font-medium">推薦設備</span>
                    <span className="text-base font-bold text-gray-900">{item.recommendedModel}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-500 font-medium">適用材料</span>
                    <span className="text-base font-bold text-gray-900">{item.targetMaterials}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-500 font-medium">加工優勢</span>
                    <span className="text-base font-bold text-brand-primary">{item.advantage}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Zirkonzahn M1／M2／M4／M6 機型比較 (Product Thumbnail Grid) */}
      <section id="models" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
            <div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Zirkonzahn Lineup
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Zirkonzahn M1／M2／M4／M6 機型比較
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                源自義大利阿爾卑斯山的頂級工藝。涵蓋入門五軸、乾濕雙主軸至全自動換盤生產中心，為不同規模的技工所量身打造。
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors border-b-2 border-brand-primary pb-1 group"
              >
                <span>索取完整規格與報價</span>
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Product Thumbnail Grid (4 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {zirkonzahnModels.map((model, idx) => (
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
                  <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-lg relative border border-gray-100 shadow-inner flex items-center justify-center p-4">
                    <img 
                      src={model.image} 
                      alt={model.name} 
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {model.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-brand-primary text-white text-[10px] font-bold tracking-wider uppercase rounded-md shadow-xs">
                          {model.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 pt-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1.5">
                      {model.category}
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                        {model.name}
                      </h3>
                      <div className="w-7 h-7 rounded-full bg-gray-100 group-hover:bg-brand-primary flex items-center justify-center transition-colors shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-0.5" />
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-5">
                      {model.summary}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-primary">
                      <span>索取機型型錄與諮詢</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GenCore MillFix 與 MAI 機型 (2-Column Large Card Grid) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
            <div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Heavy-Duty & Chairside
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                GenCore MillFix 與 MAI 機型
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                專為高硬度金屬切削與診所椅旁快速研磨量身打造，提供穩定高剛性與靈活空間配置的極致平衡。
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors border-b-2 border-brand-primary pb-1 group"
              >
                <span>洽詢設備配置建議</span>
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {otherModels.map((model, idx) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <div className="group flex flex-col h-full bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:border-brand-primary/50 hover:shadow-md transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[16/9] w-full overflow-hidden bg-gray-200 rounded-xl relative border border-gray-100 shadow-inner mb-6">
                    <img 
                      src={model.image} 
                      alt={model.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 bg-brand-primary text-white text-[11px] font-bold tracking-wider uppercase rounded-md shadow-xs">
                        {model.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1.5">
                      {model.category}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                      {model.name}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 font-normal">
                      {model.summary}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-200/80 flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium">支援原廠技術支援與到府安裝</span>
                      <Link 
                        to={model.link}
                        className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                      >
                        <span>了解機型詳情</span>
                        <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 可加工材料對照 (Standard Product Showcase & Material Compatibility Grid) */}
      <section id="materials" className="py-24 md:py-32 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Material Compatibility
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                可加工材料對照
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                不同牙科材料的物理硬度與光學特性差異甚大。透過清晰對照表，快速掌握每種材料適用的加工模式、推薦機種與必備周邊。
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="inline-flex p-1 bg-gray-200/70 rounded-xl self-start md:self-auto border border-gray-200">
              <button
                onClick={() => setMaterialFilter('dry')}
                className={cn(
                  "px-5 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all",
                  materialFilter === 'dry'
                    ? "bg-white text-brand-primary shadow-xs"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                乾式加工材料 (Dry Milling)
              </button>
              <button
                onClick={() => setMaterialFilter('wet')}
                className={cn(
                  "px-5 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all",
                  materialFilter === 'wet'
                    ? "bg-white text-brand-primary shadow-xs"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                濕式研磨材料 (Wet Milling)
              </button>
            </div>
          </div>

          {/* Material Cards Grid (2x2 Grid using clean 3D Printers page styling) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredMaterials.map((mat, idx) => (
              <motion.div
                key={mat.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-xs hover:border-brand-primary/40 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Header info with Tag & Title */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">
                      {mat.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {mat.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 font-normal">
                  {mat.description}
                </p>

                {/* Structured Specs Block (Clean & Easy to Compare) */}
                <div className="mt-auto bg-gray-50/80 rounded-xl p-5 border border-gray-100 space-y-3.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 text-sm">
                    <span className="text-gray-500 font-medium shrink-0">建議切削設備</span>
                    <span className="font-bold text-gray-900 sm:text-right">{mat.suitableEquipment}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 text-sm border-t border-gray-200/60 pt-3">
                    <span className="text-gray-500 font-medium shrink-0">典型臨床適應症</span>
                    <span className="font-bold text-gray-900 sm:text-right">{mat.applications}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 text-sm border-t border-gray-200/60 pt-3">
                    <span className="text-gray-500 font-medium shrink-0">關鍵周邊配套</span>
                    <span className="font-bold text-brand-primary sm:text-right">{mat.peripherals}</span>
                  </div>
                </div>

                {/* Action Link */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">崧達在庫原廠材料供應</span>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                  >
                    <span>索取材料樣品與切削參數</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 安裝條件與周邊配置 (Asymmetric 1-Large + 2-Stacked Card Layout) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-18">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Installation & Infrastructure
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                安裝條件與周邊配置（集塵、冷卻、空壓）
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                精密齒雕機並非單機即可運行。崧達為您規劃包含「穩壓配電 ＋ 工業集塵 ＋ 循環水冷 ＋ 氣源過濾」在內的完整周邊配套，確保加工品質與設備壽命。
              </p>
            </div>
          </div>

          {/* Asymmetric Product Composition Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Primary Large Card: Environment & Infrastructure (7 Columns) */}
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
                  src={installationPeripherals[0].image} 
                  alt={installationPeripherals[0].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[11px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-md shadow-xs">
                  PART 01 · 基礎設施規劃
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1.5">
                    {installationPeripherals[0].subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                    {installationPeripherals[0].title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {installationPeripherals[0].desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">確保齒雕機發揮最高切削精度</span>
                  <Link 
                    to={installationPeripherals[0].linkUrl}
                    className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                  >
                    <span>{installationPeripherals[0].linkText}</span>
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Secondary Stacked Column: Dust & Cooling Peripherals (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              
              {/* Item 2: Dust Collection */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-1 flex flex-col sm:flex-row lg:flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 group hover:border-brand-primary/40 transition-all duration-500 shadow-xs"
              >
                <div className="aspect-[16/9] sm:aspect-square sm:w-2/5 lg:w-full lg:aspect-[16/8] overflow-hidden bg-gray-200 relative shrink-0">
                  <img 
                    src={installationPeripherals[1].image} 
                    alt={installationPeripherals[1].title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-brand-primary/90 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-md shadow-xs">
                    PART 02 · 乾式排塵
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">
                      {installationPeripherals[1].subtitle}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                      {installationPeripherals[1].title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {installationPeripherals[1].desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                    <span className="text-xs text-gray-500">維持技工室空氣潔淨</span>
                    <Link 
                      to={installationPeripherals[1].linkUrl}
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                    >
                      <span>{installationPeripherals[1].linkText}</span>
                      <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Item 3: Cooling System */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 flex flex-col sm:flex-row lg:flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 group hover:border-brand-primary/40 transition-all duration-500 shadow-xs"
              >
                <div className="aspect-[16/9] sm:aspect-square sm:w-2/5 lg:w-full lg:aspect-[16/8] overflow-hidden bg-gray-200 relative shrink-0">
                  <img 
                    src={installationPeripherals[2].image} 
                    alt={installationPeripherals[2].title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-brand-primary/90 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-md shadow-xs">
                    PART 03 · 濕式冷卻
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">
                      {installationPeripherals[2].subtitle}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                      {installationPeripherals[2].title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {installationPeripherals[2].desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                    <span className="text-xs text-gray-500">延長主軸與刀具壽命</span>
                    <Link 
                      to={installationPeripherals[2].linkUrl}
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                    >
                      <span>{installationPeripherals[2].linkText}</span>
                      <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. 導入流程、教育訓練與保養 (Clean Minimalist Steps + Photo Gallery) */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-24">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Standardized Deployment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              導入流程、教育訓練與保養
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              從需求分析、空間規劃、參數驗證到上機培訓，崧達專業應用工程團隊提供完整標準作業流程，確保設備進駐後迅速投入穩定生產。
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

          {/* Large Photos Gallery with Rounded Corners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="aspect-[16/9] overflow-hidden bg-gray-200 group rounded-2xl border border-gray-200/80 shadow-xs">
              <img 
                src={imgTraining} 
                alt="工程師現場參數驗證與校正" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="aspect-[16/9] overflow-hidden bg-gray-200 group rounded-2xl border border-gray-200/80 shadow-xs">
              <img 
                src={imgLabProcess} 
                alt="技工所與診間實機操作培訓" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA 區塊 */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="洽詢齒雕機與研磨設備" 
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
              規劃適合您診間或技工所的數位加工方案
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              不確定哪款機型最能滿足產量與加工材料需求？歡迎預約崧達專業應用顧問，我們將為您評估設備配置、安排實機測試與完整投資效益分析。
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm md:text-base font-bold text-brand-primary bg-white hover:bg-brand-bg rounded-lg transition-colors shadow-sm group"
              >
                洽詢產品方案與報價
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm md:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg transition-colors"
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
