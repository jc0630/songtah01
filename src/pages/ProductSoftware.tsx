import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Sliders, 
  Gauge, 
  CheckCircle2,
  Cpu,
  Cloud,
  Monitor,
  Workflow,
  Laptop,
  HardDrive,
  Users,
  Award,
  Zap,
  FolderSync,
  Glasses
} from 'lucide-react';
import { cn } from '../lib/utils';
import { usePageMeta } from '../lib/usePageMeta';

// Image imports
import imgHero from '../assets/images/dental_software_hero_1787282457647.jpg';
import imgZirkonzahn from '../assets/images/zirkonzahn_modifier_cad_1787282474092.jpg';
import imgDentbird from '../assets/images/dentbird_ai_crown_1787282486508.jpg';
import imgCompatibility from '../assets/images/software_compatibility_1787282500191.jpg';
import imgTraining from '../assets/images/clinic_training_workflow_1787208422334.jpg';
import imgCadCam from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgWorkshop from '../assets/images/course_workshop_hands_1787213559325.jpg';
import imgCta from '../assets/images/hero_wide_dental_1787197373982.jpg';

// 1. Software Selection Criteria Data (Section 1)
const selectionCriteria = [
  {
    icon: Layers,
    title: '臨床案件複雜度與自由度',
    desc: '單純單顆後牙冠與微創嵌體可藉由 AI 快速全自動出圖；若涉及前牙微笑線美學、全口無齒顎重建、植牙連體桿卡 (Bar) 或全口咬合重建，則需要如 Zirkonzahn 具備深度參數微調能力的專業 CAD 軟體。'
  },
  {
    icon: HardDrive,
    title: '硬體建置與維護成本考量',
    desc: '單機專業 CAD 需配置高階獨立顯示卡與運算工作站，但具備極高離線穩定度與大檔案處理效能；雲端 AI 軟體則透過瀏覽器隨開即用，無需投資昂貴硬體設備，降低初期建置門檻。'
  },
  {
    icon: Users,
    title: '人力資源與學習曲線配置',
    desc: '診所若缺乏專職數位牙技師，AI 自動化軟體能讓助理或醫師在 2 分鐘內完成標準冠設計；技工所若擁有資深技師，開放式高階 CAD 系統更能完全釋放技術師的解剖雕塑功力。'
  }
];

// 2. Zirkonzahn Modules Data (Section 2)
const zirkonzahnModules = [
  {
    name: 'Zirkonzahn.Modifier',
    role: '全口贗復與微笑美學設計',
    desc: '專為複雜大案打造。支援 3D 面部掃描整合、虛擬咬合器即時動態模擬、客製化植牙支台與全口植牙連體桿卡設計。'
  },
  {
    name: 'Zirkonzahn.Modellier',
    role: '高階解剖型 CAD 核心',
    desc: '提供超過百種天然齒形資料庫，精確計算最小壁厚、倒凹填補與鄰接面接觸壓力，支援多層次咬合雕刻。'
  },
  {
    name: 'Zirkonzahn.Nesting',
    role: '智慧 CAM 排版與切削計算',
    desc: '無縫對接多軸研磨機，最佳化氧化鋯盤、二矽酸鋰塊與 PMMA 空間利用率，自動計算最佳刀具路徑與連接體位置。'
  }
];

// 3. Dentbird AI Features (Section 3)
const dentbirdFeatures = [
  {
    step: 'STEP 01',
    title: 'AI 智慧邊緣線偵測 (Margin Line)',
    desc: '運用深度學習演算法，在數秒內精準抓取齦上與齦下預備邊緣線，即便邊緣不明顯亦能提供高信心度推薦路徑。'
  },
  {
    step: 'STEP 02',
    title: '自適應咬合與鄰接接觸點計算',
    desc: '依據對咬齒列與鄰牙形態，自動調整咬合間隙 (Occlusal Clearance) 與接觸緊密度，大幅縮短臨床調磨時間。'
  },
  {
    step: 'STEP 03',
    title: '跨平台免安裝・即開即用',
    desc: '純瀏覽器雲端運作，支援 Mac、Windows 及平板多裝置即時預覽，一鍵匯出標準開放式 STL / PLY 檔案。'
  }
];

// 4. Comparison Table Matrix (Section 4: 單機安裝 vs. 雲端服務)
const comparisonMatrix = [
  {
    category: '運算架構與運行環境',
    desktop: '地端本機運算（需配置獨立 GPU 工作站）',
    cloud: '雲端伺服器分散式運算（純網頁瀏覽器即可）',
    highlight: '運算負載'
  },
  {
    category: '硬體需求與初始投資',
    desktop: '需高階 CPU、32GB+ RAM 與專業級顯示卡',
    cloud: '一般商用筆電、Mac 或平板電腦均可流暢使用',
    highlight: '硬體門檻'
  },
  {
    category: '授權模式與計費方式',
    desktop: '軟體永久買斷制／模組選購／年度升級維護',
    cloud: '靈活訂閱制（月租／年約）或案件計次扣點 (Pay-per-case)',
    highlight: '預算彈性'
  },
  {
    category: '適用案件範圍',
    desktop: '單冠、貼片至超複雜全口重建、植牙連體桿卡、咬合板',
    cloud: '標準後牙單冠、嵌體、高嵌體、簡單前牙臨時冠',
    highlight: '設計維度'
  },
  {
    category: '網路依賴度',
    desktop: '完全支援離線作業，資料留存在地端高安全性',
    cloud: '需穩定網際網路連線，資料自動雲端備份同步',
    highlight: '連線需求'
  },
  {
    category: '軟體更新與維護',
    desktop: '由工程師定期進行版本升級與模組庫更新',
    cloud: '後端自動無感升級，隨時享受最新 AI 演算法',
    highlight: '維護便利'
  }
];

// 5. Compatibility Workflow Steps (Section 5)
const compatibilitySteps = [
  {
    num: '01',
    phase: '上游口掃輸入 (Input)',
    title: '無縫相容市售主流口內與技工掃描機',
    desc: '全面支援標準開放格式（STL、PLY 彩色檔、OBJ 網格），無論診所使用 3Shape TRIOS、Medit、iTero、Shining 3D 還是 Sirona 匯出檔案，皆可秒速載入。',
    badge: '100% 開放格式'
  },
  {
    num: '02',
    phase: 'CAD 設計處理 (Design)',
    title: '智慧對齊、咬合設定與解剖建模',
    desc: '在 Zirkonzahn 專業工作站或 Dentbird AI 平台中完成軸向校正、邊界線描繪、咬合接觸面計算與解剖齒形雕塑，確認無干涉與足夠壁厚。',
    badge: '高精確度運算'
  },
  {
    num: '03',
    phase: '下游加工輸出 (Output)',
    title: '直接連動各品牌牙科銑削機與 3D 列印機',
    desc: '設計完成之一鍵匯出無加密 STL 檔，直接傳輸至 Roland、ARUM、VHF 等 4/5 軸研磨機，或 ASIGA、Formlabs 牙科 3D 列印機進行製作。',
    badge: '跨品牌零阻礙'
  }
];

// 6. Onboarding & Training Plan (Section 6)
const onboardingPillars = [
  {
    title: '正版授權配置與環境調校',
    desc: '協助取得官方正版授權帳號與硬體加密鎖，並派遣技術工程師到院/到所完成工作站系統效能最佳化設定。',
    points: ['原廠合法授權與保固', '工作站顯卡與記憶體調優', '色彩校正與顯色設定']
  },
  {
    title: '客製化一對一實機教育訓練',
    desc: '由具備牙體技術師執照之專職應用顧問授課，從基礎工具操作、參數微調到臨床極端案例排解，手把手教學。',
    points: ['單顆牙冠快速實作流程', '全口重建與咬合器設定', '前牙美學微笑線設計技法']
  },
  {
    title: '持續性線上與到場技術支援',
    desc: '提供專屬線上諮詢群組、遠端即時案件連線診斷，並定期舉辦進階軟體技術研討會與新功能培訓課程。',
    points: ['遠端連線案件疑難排解', '材料切削刀具參數更新', '定期進階技術研討會']
  }
];

export function ProductSoftware() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'recommendation'>('comparison');

  usePageMeta({
    title: '牙科 CAD/CAM 軟體系統｜崧達企業',
    description: '提供 Zirkonzahn 原廠齒科設計軟體與 Dentbird 雲端 AI 自動牙冠設計系統，無縫串聯各品牌口掃與加工設備，提升設計效率。',
  });

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="牙科設計軟體｜Zirkonzahn 與 Dentbird" 
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
              CAD Software & AI Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              牙科設計軟體｜Zirkonzahn 與 Dentbird
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              整合歐美頂尖獨立 CAD 系統 Zirkonzahn 與全球領先 Dentbird 雲端 AI 牙冠設計，提供從單顆快速修復到複雜全口重建的完整數位設計工作流。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 牙科設計軟體怎麼選 (Section 1) */}
      <section id="selection" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              CAD Software Selection
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              牙科設計軟體怎麼選
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              選擇適合的牙科 CAD 軟體是建立高效數位工作流的關鍵。診所與技工所應從日常案件複雜度、硬體配置預算及人員學習曲線三個維度進行評估。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-xl relative border border-gray-200/80 shadow-xs">
                <img 
                  src={imgHero} 
                  alt="牙科設計軟體評估與工作流" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[11px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-sm shadow-xs">
                  全流程數位設計
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              {selectionCriteria.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-gray-50 p-6 md:p-7 rounded-xl border border-gray-200/80"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 mt-1">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Zirkonzahn 軟體系統（含 Modifier 全口贗復設計） (Section 2) */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
            <div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                High-End Professional CAD
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Zirkonzahn 軟體系統（含 Modifier 全口贗復設計）
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                專為牙技所與高階贗復中心設計的旗艦級獨立 CAD 系統，具備無與倫比的解剖自定義能力與全口咬合重建架構。
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors border-b-2 border-brand-primary pb-1 group"
              >
                <span>申請 Zirkonzahn 軟體展示與報價</span>
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Visual Screen Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xs"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-xl relative border border-gray-100 mb-6">
                <img 
                  src={imgZirkonzahn} 
                  alt="Zirkonzahn Modifier 全口贗復設計" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 bg-brand-primary text-white text-[11px] font-bold tracking-wider uppercase rounded-sm shadow-xs">
                    旗艦級全口贗復
                  </span>
                </div>
                <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-sm text-xs font-bold text-gray-900 border border-gray-200/80 shadow-xs">
                  開放式 STL / PLY 相容
                </div>
              </div>

              <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">
                Core Philosophy
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                頂級美學與複雜大案的無上限發揮空間
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                Zirkonzahn 擁有超過 20 年的頂尖贗復工藝沉澱，結合 Face Hunter 3D 面部掃描、數位咬合器與 Modifier 全口設計模組，讓技師在虛擬環境中完美重建微笑曲線與髁導咬合軌跡。
              </p>

              <div className="space-y-2.5 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">部署方式</span>
                  <span className="font-bold text-gray-900">單機高效能工作站（離線加密鎖）</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">核心模組</span>
                  <span className="font-bold text-gray-900">Modellier + Modifier + Nesting</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">適用對象</span>
                  <span className="font-bold text-gray-900">中大型牙技所、全口重建專科診所</span>
                </div>
              </div>
            </motion.div>

            {/* Modules Breakdown */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {zirkonzahnModules.map((mod, idx) => (
                <motion.div
                  key={mod.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2.5 py-1 bg-brand-primary/10 text-brand-primary rounded-sm uppercase tracking-wider">
                      {mod.role}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">專業模組</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{mod.name}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {mod.desc}
                  </p>
                </motion.div>
              ))}

              <div className="p-5 bg-brand-primary/5 rounded-xl border border-brand-primary/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                  <strong className="text-brand-primary font-bold">崧達官方授權與在地支援：</strong>
                  提供正版軟體模組授權、系統安裝建置與資深牙體技術師到所技術輔導，確保系統導入即刻發揮最高產能。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dentbird 雲端 AI 設計（Dentbird Crown 自動牙冠設計） (Section 3) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
            <div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Cloud-Native AI Dentistry
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Dentbird 雲端 AI 設計（Dentbird Crown 自動牙冠設計）
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                全球領先的雲端 AI 牙科 CAD 平台。幾秒內即可自動完成邊緣線標定與解剖牙冠生成，極大化椅旁即刻修復效率。
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors border-b-2 border-brand-primary pb-1 group"
              >
                <span>開通 Dentbird 試用帳號</span>
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: 3 Steps Workflow */}
            <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1">
              {dentbirdFeatures.map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-gray-50 p-6 sm:p-7 rounded-xl border border-gray-200/80"
                >
                  <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-1.5">
                    {feat.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}

              <div className="p-5 bg-brand-primary/5 rounded-xl border border-brand-primary/20 flex items-start gap-3">
                <Zap className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                  <strong className="text-brand-primary font-bold">椅旁修復極速體驗：</strong>
                  口掃完成後上傳檔案，AI 於 1~2 分鐘內生成精準 STL，立即傳送至齒雕機或 3D 列印機，實現真正的一日即刻修復。
                </p>
              </div>
            </div>

            {/* Right: Dentbird Screen Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 order-1 lg:order-2"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-xl relative border border-gray-200/80 mb-6">
                <img 
                  src={imgDentbird} 
                  alt="Dentbird Crown 雲端 AI 牙冠自動設計" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 bg-brand-primary text-white text-[11px] font-bold tracking-wider uppercase rounded-sm shadow-xs">
                    雲端 AI 運算
                  </span>
                </div>
                <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-sm text-xs font-bold text-gray-900 border border-gray-200/80 shadow-xs">
                  平均設計時間 &lt; 2 分鐘
                </div>
              </div>

              <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">
                Cloud Architecture
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                免安裝、零硬體門檻的智慧 CAD
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                Dentbird Crown 徹底革新了牙科設計的門檻。不論診所使用 Mac 筆電、Windows 桌機或是 iPad，只要開啟瀏覽器登入帳號即可開始設計，且始終維持在最新的 AI 演算法版本。
              </p>

              <div className="space-y-2.5 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">系統平台</span>
                  <span className="font-bold text-gray-900">Chrome / Edge 瀏覽器（Web-Based）</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">支援適應症</span>
                  <span className="font-bold text-gray-900">單冠 (Crown)、嵌體 (Inlay/Onlay)、臨時冠</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">適用對象</span>
                  <span className="font-bold text-gray-900">牙科診所椅旁、需快速消化單冠的技工所</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. 單機安裝與雲端服務的差別 (Section 4) */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Deployment Comparison
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              單機安裝與雲端服務的差別
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              單機專業 CAD（如 Zirkonzahn）與雲端 AI CAD（如 Dentbird）並非相互取代，而是針對不同臨床情境與產能需求的最佳搭檔。
            </p>
          </div>

          {/* Side by Side Dual Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-xs flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">單機專業 CAD（Zirkonzahn）</h3>
                  <p className="text-xs text-gray-500 font-medium">適合追求極致客製化與複雜大案</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                地端高效能工作站運作，具備最強大的咬合微調、植牙桿卡、貼片微笑線與多單位牙橋設計能力，不受網路頻寬限制，適合資深技師與全方位技工所。
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-primary">
                <span>極致自由度・全適應症支援</span>
                <span>永久授權／專業維護</span>
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-xs flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">雲端 AI CAD（Dentbird）</h3>
                  <p className="text-xs text-gray-500 font-medium">適合椅旁即刻修復與高週轉單冠</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                免安裝軟體、免投資高階顯卡，網頁登入即開即用。AI 自動抓邊緣與咬合，將 80% 的日常單冠設計流程全自動化，大幅降低臨床時間成本。
              </p>
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-primary">
                <span>零硬體負擔・秒級出圖</span>
                <span>彈性訂閱／計次扣點</span>
              </div>
            </div>
          </div>

          {/* Comparison Matrix Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
            <div className="px-6 py-4 bg-gray-100/70 border-b border-gray-200 flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900">單機專業安裝 vs. 雲端 AI 服務詳細規格對照</span>
              <span className="text-xs text-gray-500 font-medium">崧達數位整合指南</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <th className="py-3.5 px-6 font-bold text-gray-900 w-1/4">評估項目</th>
                    <th className="py-3.5 px-6 font-bold text-brand-primary w-1/3">單機安裝（Zirkonzahn）</th>
                    <th className="py-3.5 px-6 font-bold text-brand-primary w-1/3">雲端服務（Dentbird）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-800 align-top">
                        {row.category}
                        <div className="text-[11px] text-gray-400 font-normal mt-0.5">{row.highlight}</div>
                      </td>
                      <td className="py-4 px-6 text-gray-700 align-top">
                        {row.desktop}
                      </td>
                      <td className="py-4 px-6 text-gray-700 align-top">
                        {row.cloud}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 leading-relaxed">
              * 建議診所或技工所可根據日常案例比例進行混合配置（Hybrid Workflow），以雲端 AI 快速消化常規單冠，再由單機 CAD 處理高階美學與全口大案。
            </div>
          </div>
        </div>
      </section>

      {/* 6. 與現有掃描機、加工機的相容性 (Section 5) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Open Architecture & Compatibility
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              與現有掃描機、加工機的相容性
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              堅持 100% 開放式架構（Open Architecture）。不綁定特定品牌硬體，無縫串聯上游各廠牌口內掃描機與下游研磨機、3D 列印機。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
            {/* 3 Step Workflow Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {compatibilitySteps.map((item, idx) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-gray-50 p-6 md:p-7 rounded-xl border border-gray-200/80"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-brand-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {item.num}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-brand-primary uppercase tracking-wider">
                          {item.phase}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 bg-gray-200/70 text-gray-700 font-semibold rounded-xs">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Workflow Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-xl relative border border-gray-200/80 shadow-xs">
                <img 
                  src={imgCompatibility} 
                  alt="掃描機、CAD 軟體與加工機相容流程" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-lg border border-gray-200/80 shadow-xs">
                  <div className="text-xs font-bold text-brand-primary mb-1">通用檔案相容性認證</div>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    完整支援 STL / PLY / OBJ / NC 檔格式傳輸，保障您既有設備投資零浪費。
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. 導入、授權與教育訓練 (Section 6) */}
      <section className="py-24 md:py-32 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Implementation & Training Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              導入、授權與教育訓練
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              買軟體不只是取得序號，更是工作流程的全面升級。崧達配備具備牙體技術師背景的專屬應用顧問，提供從環境建置、實機教學到長期臨床排解的一站式服務。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {onboardingPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-7 rounded-2xl border border-gray-200 shadow-xs flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                  {pillar.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="text-xs font-bold text-brand-primary mb-2">服務包含內容</div>
                  <ul className="space-y-2">
                    {pillar.points.map((p, i) => (
                      <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Training Banner Card */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden bg-gray-100">
              <img 
                src={imgTraining} 
                alt="牙科數位軟體教育訓練實況" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-8 sm:p-10">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">
                Hands-On Workshop
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                客製化診所／技工所數位轉型實戰工作坊
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                無論是全口重建 CAD 進階雕刻班，或是診間一日美學 AI 快速出圖培訓，崧達定期開設專屬小班實作課程，歡迎預約專屬培訓方案。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/services/digital-training"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-brand-primary hover:bg-brand-primary/90 rounded-sm transition-colors"
                >
                  探索數位教育培訓課程
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-sm transition-colors"
                >
                  預約專人到所技術評估
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA 區塊 */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCta} 
            alt="洽詢牙科數位設計軟體方案" 
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
              Elevate Your Digital Dentistry
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              想了解最適合您院所的數位設計軟體？
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              不論您想導入 Zirkonzahn 旗艦級 CAD 模組，或開通 Dentbird 雲端 AI 牙冠設計，崧達提供專業展示、試用帳號開通與完整技術支援。
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 text-sm md:text-base font-bold text-gray-900 bg-white hover:bg-gray-100 transition-colors shadow-sm group"
              >
                預約軟體評估與試用
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
