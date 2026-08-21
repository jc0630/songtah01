import { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Monitor, 
  Printer, 
  Cpu, 
  Zap, 
  Settings, 
  Check, 
  X, 
  ChevronRight,
  Workflow
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { usePageMeta } from '../lib/usePageMeta';

// Import images
import imgHero from '../assets/images/clinic_cad_cam_hero_1787208403676.jpg';
import imgClinic from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgTraining from '../assets/images/clinic_training_workflow_1787208422334.jpg';
import imgPrinter from '../assets/images/bento_3d_printer_1787197404068.jpg';
import imgMaterials from '../assets/images/dental_materials_1787196270407.jpg';
import imgCtaBg from '../assets/images/dental_technician_lab_1787196258952.jpg';

// 1. 適合導入的情況資料
const situations = [
  {
    num: "01",
    tag: "當日完成 Single-Visit",
    desc: "當診所有當天完成假牙、患者不便回診多次的需求",
    img: imgClinic
  },
  {
    num: "02",
    tag: "品質與時程掌控",
    desc: "希望對特定案件類型有更高的品質與時間掌控度",
    img: imgMaterials
  },
  {
    num: "03",
    tag: "數位導板與牙托",
    desc: "頻繁進行植牙導板、咬合板與診斷模型等臨床列印",
    img: imgPrinter
  },
  {
    num: "04",
    tag: "診所空間與團隊配置",
    desc: "診所空間充裕且團隊樂意學習數位化操作流程",
    img: imgTraining
  }
];

// 2. 診間設備與空間條件
const equipmentItems = [
  {
    id: "ios",
    title: "口內掃描器 (Intraoral Scanner)",
    subtitle: "數位印模核心設備",
    desc: "代替傳統膠狀印模材，數分鐘內精準獲取患者口腔高解析度三維數位檔案 (STL/PLY)，免除印模嘔吐感與變形風險。",
    specs: ["無粉掃描 / 高速運算", "AI 咬合與顏色識別", "檔案即時雲端對接 CAD"],
    icon: Monitor,
    img: imgClinic
  },
  {
    id: "cad",
    title: "診間 CAD 設計工作站",
    subtitle: "直覺式假牙設計軟體",
    desc: "專為診間設計的直覺化 CAD 軟體，具備 AI 自動邊緣辨識、擬真咬合比對與資料庫解剖形態生成，幾分鐘內完成單顆牙冠設計。",
    specs: ["AI 自動智慧邊緣線辨識", "開放式 STL 檔案格式", "醫師與助理皆可快速上手"],
    icon: Cpu,
    img: imgMaterials
  },
  {
    id: "milling",
    title: "診間研磨機 / 齒雕機",
    subtitle: "高品質陶瓷快速切削",
    desc: "濕式高速切削設備，專用切削玻璃陶瓷 (如 Rosetta SM)、長石瓷與 PMMA 臨時塊。平均 10~15 分鐘即可完成一顆高精密度牙冠。",
    specs: ["高精密度 4 軸 / 5 軸切削", "主軸自動換刀系統", "診間安靜極低震動設計"],
    icon: Zap,
    img: imgHero
  },
  {
    id: "printer",
    title: "診間 3D 列印機與後處理",
    subtitle: "手術導板與模型快速產出",
    desc: "醫療級 DLP/LCD 3D 列印設備，搭配二次光固化箱與清洗機，專用列印植牙手術導板、咬合板、臨時牙冠與診斷模型。",
    specs: ["通過 TFDA 醫療器材認證", "高精度 50μm 列印層厚", "快速聚光成型系統"],
    icon: Printer,
    img: imgPrinter
  },
  {
    id: "furnace",
    title: "快速結晶燒結爐與上色",
    subtitle: "瓷塊結晶與染色釉燒",
    desc: "體積輕巧且升溫迅速的診間燒結爐，用於玻璃陶瓷塊的快速結晶與瓷牙表面染色釉燒，賦予假牙極致自然之美學光澤。",
    specs: ["10-15 分鐘快速結晶程序", "智慧溫度精準控溫", "預設多種瓷塊最佳燒結曲線"],
    icon: FlameIcon,
    img: imgMaterials
  },
  {
    id: "space",
    title: "空間、電源與氣壓條件",
    subtitle: "基礎設施與動線規劃",
    desc: "診所只需規劃 1.5-2 坪乾淨通風之獨立檯面，配備穩定 220V/110V 電源、乾淨無油壓縮空氣源與集塵過濾設備即可安全運作。",
    specs: ["需 1.5 ~ 2 坪乾淨獨立空間", "穩定氣壓源與集塵設施", "符合診所感染管制標準"],
    icon: Settings,
    img: imgTraining
  }
];

function FlameIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

// 3. 診間列印能做什麼、不能做什麼比較
const canDoItems = [
  { title: "單顆 / 少數顆全瓷冠 (Single Crowns)", desc: "玻璃陶瓷 (Rosetta SM) 快速切削，當天完成試戴黏固。" },
  { title: "嵌體與蓋體 (Inlays & Onlays)", desc: "精細微創補綴，取代傳統大面積樹脂填補。" },
  { title: "診間急件與臨時假牙 (Provisional Crowns)", desc: "PMMA 切削或 3D 列印臨時牙，保護修磨過之牙齒。" },
  { title: "植牙手術導板 (Implant Surgical Guides)", desc: "3D 列印精準微創導板，輔助植牙手術定位。" },
  { title: "診斷模型與透明咬合板 (Models & Nightguards)", desc: "印製數位診斷模型與磨牙防護咬合板。" },
  { title: "美學蠟型與臘樣溝通 (Mock-up Wax-up)", desc: "即時列印美學試戴模，協助患者直觀理解治療成果。" }
];

const cannotDoItems = [
  { title: "複雜全口咬合重建 (Full Mouth Reconstruction)", desc: "涉及咬合高度與高度複雜平面重建，需交由專業牙技師深度處理。" },
  { title: "多單位長跨遠牙橋 (Long-span Bridges)", desc: "跨度較長之牙橋受切削與材料變形限制，建議技工所高階鋯塊處理。" },
  { title: "高難度前牙美學堆瓷貼片 (Layered Veneers)", desc: "極致自然的光澤與多層次堆瓷染色工藝，仍需專屬技師手工堆瓷。" },
  { title: "大量案件集中量產 (Mass Production)", desc: "診間設備產能以單次即時案件為主，大量案件應由技工所自動化產線生產。" },
  { title: "特殊植牙金屬支台齒與精密附著體", desc: "鈦支台齒切削與金屬燒結結構，需技工所五軸高階機台加工。" }
];

// 4. CAD/CAM 工作流程步驟
const workflowSteps = [
  {
    step: "01",
    title: "口內掃描 (Intraoral Scan)",
    time: "約 3 - 5 分鐘",
    desc: "醫師使用口內掃描器取得患者精確的三維數位模型，免除傳統印模不適感，檔案即時傳輸。"
  },
  {
    step: "02",
    title: "數位 CAD 設計 (Digital CAD Design)",
    time: "約 5 - 10 分鐘",
    desc: "軟體自動辨識邊緣線與比對咬合，迅速為患者客製化最佳形狀的假牙設計。"
  },
  {
    step: "03",
    title: "診間切削與列印 (Chairside Processing)",
    time: "約 12 - 20 分鐘",
    desc: "研磨機快速切削陶瓷牙冠，或 3D 列印機精準產出植牙手術導板與咬合板。"
  },
  {
    step: "04",
    title: "後處理與釉燒 (Post-processing & Glazing)",
    time: "約 10 - 15 分鐘",
    desc: "放入結晶爐進行快速燒結，並進行鄰接面拋光與個性化微染色釉燒，重現自然光澤。"
  },
  {
    step: "05",
    title: "當日戴入黏固 (Chairside Delivery)",
    time: "當次診程完成",
    desc: "於診間進行試戴、咬合確認與黏固，讓患者在一次就診內輕鬆完成美齒修復。"
  }
];

// 5. 導入步驟與教育訓練
const implementationSteps = [
  {
    step: "01",
    title: "診所環境與需求評估",
    desc: "專屬顧問到府實地勘查診所空間、電力氣壓配置與動線，評估最適切的導入規模。"
  },
  {
    step: "02",
    title: "設備選型與系統規劃",
    desc: "依據診所預算與臨床重點，精準配置口掃機、研磨機、3D列印機與 CAD 軟體。"
  },
  {
    step: "03",
    title: "原廠工程師到府裝機校正",
    desc: "崧達專業工程師進行現場設備安裝、網路軟體連線設定、集塵氣壓測試與精度校正。"
  },
  {
    step: "04",
    title: "醫療團隊標準操作教育訓練",
    desc: "舉辦紮實的理實結合訓練，手把手指導醫師與助理團隊掌握口掃、CAD 設計與加工技巧。"
  },
  {
    step: "05",
    title: "臨床試跑與即時技術支援",
    desc: "陪同診所進行初期實際臨床案件試跑，提供線上遠端問題排除與專屬技術顧問諮詢。"
  }
];

export function ClinicWorkflow() {
  const [activeTab, setActiveTab] = useState('can');
  const [activeEquip, setActiveEquip] = useState('ios');

  usePageMeta({
    title: '診間數位製程導入｜崧達企業',
    description: '協助牙醫診所建置椅旁數位牙科流程，從口內掃描、CAD 設計到即時切削與 3D 列印，打造高效流暢的診間數位化體驗。',
  });

  const selectedEquip = equipmentItems.find(e => e.id === activeEquip) || equipmentItems[0];

  return (
    <div className="flex flex-col bg-white">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="牙科診所數位製程導入：把技工製程搬進診間" 
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
              Chairside Digital Workflow
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              牙科診所數位製程導入：把技工製程搬進診間
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              協助診所評估空間、選機、配件材料、教練操作與後續維護，將最合適的製程移入診間執行，同時保留與技工所的合作彈性。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 牙科診所適合導入診間數位製程的情況 (Direct reference to DigitalAssessment section) */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:mb-20 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                牙科診所適合導入診間數位製程的情況
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                當診所有當天完成、患者不便回診多次的需求，或希望對特定案件類型有更高的品質掌控度時，可考慮將部分製程移入診間。並非所有案件都適合診間製作，建議先了解案件類型與空間條件是否符合。
              </p>
            </motion.div>
          </div>

          {/* 4 Image Showcase Cards Grid (Matching DigitalAssessment layout exactly) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {situations.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 flex flex-col"
              >
                {/* Image container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                  <img 
                    src={item.img} 
                    alt={item.desc}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                  {/* Top Badge & Number */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-bold tracking-wide border border-white/20">
                      {item.tag}
                    </span>
                    <span className="text-3xl font-black text-white/50">
                      {item.num}
                    </span>
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <p className="text-white text-lg md:text-xl font-bold leading-snug drop-shadow-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 診間需要哪些設備與空間條件 */}
      <section className="py-24 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              診間需要哪些設備與空間條件
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              導入診間數位製程需經過嚴謹的軟硬體選型與環境動線規劃。我們提供一站式的設備配置與場地評估服務，讓診所輕鬆升級數位診間。
            </p>
          </motion.div>

          {/* Interactive Equipment Explorer (Accordion Style) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Nav List (Accordion) */}
            <div className="lg:col-span-5 space-y-4">
              {equipmentItems.map((item) => {
                const IconComponent = item.icon;
                const isSelected = activeEquip === item.id;
                return (
                  <div 
                    key={item.id}
                    className={cn(
                      "group border rounded-xl transition-all duration-300 overflow-hidden bg-white",
                      isSelected ? "border-brand-primary shadow-md" : "border-gray-200 hover:border-brand-primary/40"
                    )}
                  >
                    <button
                      onClick={() => setActiveEquip(item.id)}
                      className="w-full text-left p-6 flex items-start gap-4"
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                        isSelected ? "bg-brand-primary text-white" : "bg-gray-100 text-gray-500 group-hover:bg-brand-primary/10 group-hover:text-brand-primary"
                      )}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1 pr-4">
                        <div className="flex flex-col">
                          <span className={cn(
                            "text-[10px] font-bold uppercase tracking-widest mb-1 transition-colors",
                            isSelected ? "text-brand-primary/70" : "text-gray-400"
                          )}>
                            {item.subtitle}
                          </span>
                          <h3 className={cn(
                            "text-lg font-bold transition-colors",
                            isSelected ? "text-brand-primary" : "text-gray-900"
                          )}>
                            {item.title}
                          </h3>
                        </div>
                        {isSelected && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="text-gray-600 text-sm mt-4 leading-relaxed"
                          >
                            {item.desc}
                          </motion.p>
                        )}
                      </div>
                      <ChevronRight className={cn(
                        "w-5 h-5 mt-2 transition-transform duration-300 shrink-0",
                        isSelected ? "rotate-90 text-brand-primary" : "text-gray-400"
                      )} />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Right Display Panel (Sticky) */}
            <div className="lg:col-span-7 lg:sticky lg:top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedEquip.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-2xl border border-gray-100 bg-white">
                    <img 
                      src={selectedEquip.img} 
                      alt={selectedEquip.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">
                      核心規格與技術要點
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                      {selectedEquip.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium leading-relaxed">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 診間列印能做什麼、不能做什麼 */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              診間列印能做什麼、不能做什麼
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              診間製程適合單顆或少數顆的修復體、暫時性修復與導板等應用;複雜的全口復履、多單位牙橋或需要精細美學調整的案件,仍建議交由專業牙體技術所處理,以確保完成度。
            </p>
          </motion.div>

          {/* Clean Segmented Control */}
          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 p-1.5 rounded-md inline-flex border border-gray-200">
              <button
                onClick={() => setActiveTab('can')}
                className={cn(
                  "px-6 py-2.5 rounded-sm text-sm font-bold transition-all duration-200 flex items-center gap-2",
                  activeTab === 'can'
                    ? "bg-brand-primary text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                <Check className="w-4 h-4" />
                <span>能做什麼（診間強項）</span>
              </button>

              <button
                onClick={() => setActiveTab('cannot')}
                className={cn(
                  "px-6 py-2.5 rounded-sm text-sm font-bold transition-all duration-200 flex items-center gap-2",
                  activeTab === 'cannot'
                    ? "bg-gray-900 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                <X className="w-4 h-4" />
                <span>不能做什麼（建議外送技工所）</span>
              </button>
            </div>
          </div>

          {/* Comparison Cards Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'can' ? (
              <motion.div
                key="can"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {canDoItems.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-7 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
                        <Check className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-brand-primary uppercase tracking-wider">
                      Chairside Ideal
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="cannot"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {cannotDoItems.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-7 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center mb-4">
                        <X className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Outsource To Dental Lab
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. 診間 CAD/CAM 的工作流程 */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgClinic} 
            alt="診間工作流程背景" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-24">
            <div className="text-xs font-bold text-white uppercase tracking-widest mb-3">
              Chairside Workflow
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              診間 CAD/CAM 的工作流程
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              從口內或模型掃描取得資料，由醫師或助理透過設計軟體完成復體設計，再交由診間內的加工設備完成研磨，流程與傳統外包相比可大幅縮短來回時間。
            </p>
          </div>

          {/* Minimalist Steps Benchmark Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 mb-12 relative">
            <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-px bg-white/20 z-0"></div>
            {workflowSteps.map((step, idx) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex-1 relative z-10"
              >
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-xl font-bold text-white mb-6 mx-auto lg:mx-0">
                  {step.step}
                </div>
                <div className="text-center lg:text-left">
                  {step.time && (
                    <span className="inline-block text-xs font-semibold text-white/70 mb-1.5">
                      {step.time}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 導入步驟與教育訓練 */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Onboarding & Training
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              導入步驟與教育訓練
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              導入前會先評估診所空間與電力配置，確認設備選型後安排安裝與操作教育訓練，協助醫師與助理團隊熟悉掃描、設計到加工的完整流程。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <img 
                src={imgTraining} 
                alt="教育訓練與導入" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>

            {/* Right Steps List */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {implementationSteps.map((step, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <div className="w-12 h-12 shrink-0 bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-lg rounded-xl transition-colors group-hover:bg-brand-primary group-hover:text-white">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors group-hover:text-brand-primary">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{step.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. 牙科診所與外送技工所的搭配方式 */}
      <section className="py-24 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              牙科診所與外送技工所的搭配方式
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              診間製程與技工所並非取代關係,而是依案件類型分工:適合診間即時完成的案件留在診所處理,複雜或量產案件仍然外送技工所,讓雙方各自發揮專長。
            </p>
          </motion.div>

          {/* Simple Side-by-side Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              <img 
                src={imgCtaBg} 
                alt="診所與技工所分工作業" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 space-y-6"
            >
              {/* Card 1: Clinic */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm font-bold">1</div>
                    診所端（診間數位製程）
                  </h3>
                  <span className="text-xs font-bold text-brand-primary bg-brand-primary/5 px-3 py-1 rounded-full uppercase tracking-wider">
                    極速反應
                  </span>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">單顆急件全瓷冠與嵌體當日交付</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">植牙手術導板與臨時假牙即時列印</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">大幅縮短患者等待時間，提高轉換率</span>
                  </li>
                </ul>
              </div>

              {/* Connection Indicator */}
              <div className="flex justify-center -my-3 relative z-10">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 shadow-sm text-gray-500">
                  <Workflow className="w-6 h-6" />
                </div>
              </div>

              {/* Card 2: Lab */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center text-sm font-bold">2</div>
                    技工所端（外送專業技工）
                  </h3>
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    精湛工藝
                  </span>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">複雜全口重建與多單位長跨遠牙橋</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">高難度前牙美學貼片與手工堆瓷</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">發揮資深技師專業工藝，確保完成度</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. 預約評估 CTA */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCtaBg} 
            alt="牙科診所數位轉型評估" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-primary/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
              Chairside Workflow Assessment
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              想評估診所是否適合導入診間製程？
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-normal">
              歡迎預約專屬顧問現場評估，我們將為您規劃最適切的設備選型與動線配置。
            </p>

            <div className="flex justify-center">
              <Link 
                to="/support/help-center" 
                className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-brand-primary bg-white rounded-sm hover:bg-brand-bg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                預約需求評估
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
