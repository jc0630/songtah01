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
  Flame,
  FileText,
  HelpCircle
} from 'lucide-react';
import { cn } from '../lib/utils';
import { usePageMeta } from '../lib/usePageMeta';

// Image imports
import imgHero from '../assets/images/hass_rosetta_hero_1787282123424.jpg';
import imgRosettaSm from '../assets/images/rosetta_sm_block_1787282139025.jpg';
import imgRosettaSp from '../assets/images/rosetta_sp_ingot_1787282150179.jpg';
import imgCases from '../assets/images/aesthetic_cases_1787282167803.jpg';
import imgFurnace from '../assets/images/furnace_process_1787282182746.jpg';
import imgMaterials from '../assets/images/dental_materials_1787196270407.jpg';
import imgLabProcess from '../assets/images/dental_technician_lab_1787196258952.jpg';
import imgCta from '../assets/images/hero_wide_dental_1787197373982.jpg';

// 1. Applications Data (Section 4: 適用案件)
const applicationCases = [
  {
    id: 'veneers',
    category: '前牙微創美學',
    title: '美學微創貼片 (Veneers)',
    description: '0.2 ~ 0.3mm 超薄羽狀邊緣切削與壓鑄抗崩裂性佳，高透光度完美融合天然齒質，打造自然微笑線。',
    recommendedMaterial: 'Rosetta SM / SP (HT 高透光)',
    strength: '440 ~ 460 MPa',
    edgeThickness: '超薄可達 0.2 mm',
    tag: '極致透亮'
  },
  {
    id: 'inlays-onlays',
    category: '後牙微創修復',
    title: '嵌體與高嵌體 (Inlays / Onlays)',
    description: '精準的邊界密合度與耐磨耗特性，最大程度保留天然齒質，並提供優異的抗咬合破壞韌性。',
    recommendedMaterial: 'Rosetta SM / SP (HT / LT)',
    strength: '440 ~ 460 MPa',
    edgeThickness: '邊界密合度 < 30 μm',
    tag: '保齒首選'
  },
  {
    id: 'crowns',
    category: '全口單冠修復',
    title: '前牙與後牙單冠 (Full Crowns)',
    description: '結晶後具備 440~460 MPa 彎曲強度，耐受日常咀嚼咬合力，具備天然牙釉質螢光度與色彩層次。',
    recommendedMaterial: 'Rosetta SM / SP (LT 低透 / HT)',
    strength: '440 ~ 460 MPa',
    edgeThickness: '支台齒遮色飽和',
    tag: '強度美學兼備'
  },
  {
    id: 'bridges',
    category: '前牙短牙橋',
    title: '前牙三單位牙橋 (Anterior 3-Unit Bridges)',
    description: '適用於前牙至第一小臼齒區域之三單位牙橋修復（連接體截面積需 ≥ 16 mm²），結構堅韌不易折裂。',
    recommendedMaterial: 'Rosetta SM (切削) / SP (壓鑄) (LT / MO)',
    strength: '440 ~ 460 MPa',
    edgeThickness: '連接體 ≥ 16 mm²',
    tag: '剛性支撐'
  }
];

// 2. SM Specs Data
const smSpecs = [
  { size: 'C12 (12×14×18mm)', usage: '前牙單冠、貼片、小嵌體' },
  { size: 'C14 (14×14×18mm)', usage: '標準單冠、大嵌體、高嵌體' },
  { size: 'C32 (14×14×32mm)', usage: '前牙 3 單位牙橋、多顆連續修復' },
  { size: 'C40 (14×14×40mm)', usage: '大跨距牙橋與多顆連冠加工' },
  { size: 'Round Disk (Ø98mm)', usage: '技工所批量切削圓盤' }
];

// 3. SP Specs Data
const spTranslucencies = [
  { 
    level: 'HT (High Translucency)', 
    name: '高透光度',
    description: '透光性最高，最能透出天然牙本色。', 
    cases: '美學微創貼片、Inlay、Onlay 嵌體、無變色基底牙'
  },
  { 
    level: 'LT (Low Translucency)', 
    name: '低透光度',
    description: '透光與遮色平衡，色彩飽和度佳。', 
    cases: '前牙與後牙單冠、輕度變色牙底遮蓋、前牙三單位牙橋'
  },
  { 
    level: 'MO (Medium Opacity)', 
    name: '中等不透明度',
    description: '具備良好遮色力，有效掩蓋深色底層。', 
    cases: '嚴重變色牙、金屬柱心遮色、核心支架 (Substructures)'
  }
];

// 4. Shade & Translucency Table Matrix
const shadeMatrix = [
  {
    category: '透光度分級',
    sm: 'HT (高透光) · LT (低透光) · MO (中等不透明)',
    sp: 'HT (高透光) · LT (低透光) · MO (中等不透明)',
    note: '提供三種透光度以因應各類臨床遮色與透光需求'
  },
  {
    category: '色階數量',
    sm: '19 色階（A1-D4 + 漂白 W1-W4）',
    sp: '19 色階（A1-D4 + 漂白 W1-W4）',
    note: '完全對應國際主流 VITA Classical 比色標準與美白齒色'
  },
  {
    category: '適用案件',
    sm: '貼片、嵌體、單冠、前牙三單位牙橋',
    sp: '貼片、嵌體、單冠、前牙三單位牙橋',
    note: 'SM 另有 C32/C40 塊材及圓盤，便於大跨度加工'
  },
  {
    category: '彎曲強度',
    sm: '440 MPa (結晶後 biaxial flexural strength)',
    sp: '460 MPa (結晶後 biaxial flexural strength)',
    note: '高結晶強度提供長期臨床咬合穩定度與邊緣耐久性'
  },
  {
    category: '加工設備相容',
    sm: '各式椅旁與技工所 CAD/CAM 研磨機',
    sp: '各式牙科專用壓鑄爐（如 DEKEMA、Ivoclar 等）',
    note: '標準針柄與標準鑄塊規格，相容市面主流設備'
  }
];

// 5. Parameter Tabs Data (Section 6)
const parameterDetails = {
  sm: {
    title: 'Rosetta SM 切削與結晶條件',
    subtitle: '二矽酸鋰相變結晶曲線（約 840°C ~ 850°C）',
    desc: 'Rosetta SM 在預結晶狀態下具備適度硬度，切削順暢且大幅減少刀具損耗與邊緣崩裂。切削完成後置於瓷牙爐中進行相變結晶，即可轉化為高強度且具天然齒色的二矽酸鋰晶體。',
    steps: [
      { label: '起始溫度 (Standby Temp)', value: '400 ~ 450 °C' },
      { label: '乾燥與預熱時間 (Drying Time)', value: '3 ~ 5 分鐘' },
      { label: '升溫速率 (Heating Rate)', value: '45 ~ 55 °C / min' },
      { label: '最高結晶溫度 (Final Temp)', value: '840 ~ 850 °C' },
      { label: '高溫持溫時間 (Holding Time)', value: '10 ~ 15 分鐘' },
      { label: '冷卻釋放 (Cooling)', value: '降至 500 °C 緩慢冷卻' }
    ],
    tips: [
      '切削時請確保研磨液流量充足且過濾乾淨，避免切削碎屑滯留磨損刀具。',
      '可在結晶燒結時同步進行上釉 (Glaze) 與染色 (Stain)，一次燒結完成。',
      '請定期校準瓷牙爐溫度，確保結晶完全以達 440 MPa 標稱強度。'
    ]
  },
  sp: {
    title: 'Rosetta SP 壓鑄參數與溫控條件',
    subtitle: '壓鑄爐溫曲線（如 DEKEMA press-i-dent）',
    desc: 'Rosetta SP 壓鑄前須依照原廠建議的結晶曲線設定壓鑄爐溫度與持溫時間。具備極薄反應層特性，脫模乾淨並與多數牙科包埋材高度相容。',
    steps: [
      { label: '起始溫度 (Standby Temp)', value: '700 °C' },
      { label: '升溫速率 (Heating Rate)', value: '60 °C / min' },
      { label: '最高壓鑄溫度 (Press Temp)', value: '915 ~ 925 °C' },
      { label: '持溫均熱時間 (Holding Time)', value: '15 ~ 20 分鐘' },
      { label: '壓鑄壓力 (Pressing Pressure)', value: '4.5 ~ 5.0 bar' },
      { label: '包埋圈冷卻 (Cooling Rate)', value: '室溫自然冷卻，不可急冷' }
    ],
    tips: [
      '若成品表面出現細微氣泡痕跡，通常代表最高溫度過高，建議調降 5 至 10 °C。',
      '配合 50 μm 氧化鋁以 2 bar 壓力噴砂，即可輕鬆去除表面超薄反應層。',
      '與各大品牌二矽酸鋰專用包埋材（如 AmberVest、GC 等）皆相容良好。'
    ]
  }
};

// 6. FAQs (Section 7)
const faqs = [
  {
    q: 'Rosetta SM 與 SP 該怎麼選？',
    a: '若診間或技工所有銑削設備，SM 切削瓷塊可直接對應現有 CAD/CAM 流程；若採壓鑄工藝，則選用 SP 鑄塊。兩者結晶後強度皆達 440~460 MPa，兼具極佳的美學透光性與邊緣密合度。'
  },
  {
    q: 'Rosetta 與其他二矽酸鋰材料的差異是什麼？',
    a: 'Rosetta 採 HASS 自主微晶結構技術，強度與同類二矽酸鋰材料相當，並提供切削與壓鑄兩種型態的完整產品線。其微晶分佈細緻均勻，在切削時邊緣不易崩角（Chipping），壓鑄後反應層極薄，大幅簡化後續清理調磨工時。'
  },
  {
    q: 'Rosetta SM 切削後是否需要結晶？',
    a: '是的。Rosetta SM 在預結晶狀態（紫藍灰色）下進行切削加工，保護銑刀壽命且邊緣不易崩裂；切削完成後置於瓷牙爐中以 840~850°C 結晶燒結約 10~15 分鐘，即轉化為天然齒色並達到 440 MPa 的最終機械強度。'
  },
  {
    q: 'Rosetta SP 壓鑄後的反應層容易清理嗎？',
    a: '非常容易。Rosetta SP 具備專利低反應性晶相配方，壓鑄後表面反應層極薄，使用 50μm 氧化鋁噴砂或常規酸洗即可乾淨脫模，能完美保留微創貼片與嵌體的極細羽狀邊緣。'
  },
  {
    q: '臨床黏著時建議使用何種前處理步驟？',
    a: '建議使用 4.5%~9% 氫氟酸 (HF) 凝膠對修復體內冠進行酸蝕處理約 20 秒，接著使用大量清水沖洗並超音波清潔乾燥，隨後均勻塗布矽烷偶聯劑 (Silane) 靜置 1 分鐘，即可搭配雙重固化樹脂黏著劑進行臨床黏著。'
  }
];

export function ProductGlassCeramics() {
  const [activeParamTab, setActiveParamTab] = useState<'sm' | 'sp'>('sm');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  usePageMeta({
    title: '玻璃陶瓷與美學修復材料｜崧達企業',
    description: '代理韓國 HASS Rosetta 系列玻璃陶瓷（二矽酸鋰），提供 Rosetta SM 切削瓷塊與 Rosetta SP 壓鑄鑄塊，打造高強度與超透美學修復體。',
  });

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="玻璃陶瓷與美學貼片材料｜HASS Rosetta" 
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
              Glass Ceramics & Aesthetic Veneers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              玻璃陶瓷與美學貼片材料｜HASS Rosetta
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              韓國 HASS Rosetta 二矽酸鋰玻璃陶瓷，提供切削瓷塊與壓鑄鑄塊兩種型態，適用貼片、嵌體與單冠等美學修復案件。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 美學貼片該選什麼材料 (Section 1) */}
      <section id="selection" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Material Selection Guide
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              美學貼片該選什麼材料
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Rosetta 是韓國 HASS 開發的二矽酸鋰玻璃陶瓷系列，依成形方式分為切削用的 Rosetta SM 與壓鑄用的 Rosetta SP，兩者皆通過微晶結構技術強化邊緣穩定性，降低切削或壓鑄過程中崩裂的風險，並提供接近天然齒質的美學效果。
            </p>
          </div>

          {/* Featured Visual + 3 Pillars */}
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
                  alt="HASS Rosetta 二矽酸鋰玻璃陶瓷" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[11px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-sm shadow-xs">
                  HASS 專利微晶技術
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 p-6 md:p-7 rounded-xl border border-gray-200/80"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">微晶結構技術，強化邊緣抗崩裂</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      均勻緻密的晶相排列結構，大幅減少切削與壓鑄時極薄邊界（Chipping）破損風險，確保貼片與嵌體邊緣密合度維持在微米級水準。
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-gray-50 p-6 md:p-7 rounded-xl border border-gray-200/80"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 mt-1">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">極致天然透光度與仿生乳光螢光</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      折射率精準對應真牙牙釉質與象牙質，提供 HT、LT、MO 多種透光度與完整 19 色階，完美融合鄰牙微笑線，無死白塑料感。
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-gray-50 p-6 md:p-7 rounded-xl border border-gray-200/80"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 mt-1">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">切削（SM）與壓鑄（SP）完整雙製程涵蓋</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      不論是椅旁即刻修復的 CAD/CAM 銑削機，或是技工所高精密蠟型壓鑄爐，皆有標準尺寸瓷塊與鑄塊完整適配，銜接現有工作流程。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Showcase Dual: Rosetta SM & Rosetta SP (Sections 2 & 3) */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
            <div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Product Lineup
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                二矽酸鋰玻璃陶瓷全系列
              </div>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                依成型製程分為切削瓷塊與壓鑄鑄塊，皆具備 440~460 MPa 標竿強度與穩定化微晶結構。
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors border-b-2 border-brand-primary pb-1 group"
              >
                <span>索取詳細型錄與現貨庫存表</span>
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            
            {/* Section 2 Card: Rosetta SM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xs hover:border-brand-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-xl relative border border-gray-100 mb-6">
                <img 
                  src={imgRosettaSm} 
                  alt="Rosetta SM：CAD/CAM 切削瓷塊" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 bg-brand-primary text-white text-[11px] font-bold tracking-wider uppercase rounded-sm shadow-xs">
                    CAD/CAM 切削瓷塊
                  </span>
                </div>
                <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-sm text-xs font-bold text-gray-900 border border-gray-200/80 shadow-xs">
                  彎曲強度 440 MPa
                </div>
              </div>

              <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">
                CAD/CAM Milling Blocks
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Rosetta SM：CAD/CAM 切削瓷塊（440 MPa）
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                結晶後彎曲強度達 440 MPa。提供 C12 / C14 / C32 / C40 四種標準尺寸，並有圓盤 (disk) 型態可選。適合乾濕式銑削加工，預結晶態硬度適中不易崩邊，結晶後呈現極致透亮美感。
              </p>

              {/* Quick Specs List */}
              <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">機械強度</span>
                  <span className="font-bold text-gray-900">440 MPa (結晶後)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">提供尺寸</span>
                  <span className="font-bold text-gray-900">C12 / C14 / C32 / C40 / 圓盤 (Ø98)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">透光度</span>
                  <span className="font-bold text-gray-900">HT / LT / MO 三種</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">適用設備</span>
                  <span className="font-bold text-gray-900">各大品牌牙科 CAD/CAM 切削機</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">椅旁即刻修復與技工加工首選</span>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group"
                >
                  <span>索取 SM 規格報價</span>
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Section 3 Card: Rosetta SP */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xs hover:border-brand-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-xl relative border border-gray-100 mb-6">
                <img 
                  src={imgRosettaSp} 
                  alt="Rosetta SP：壓鑄鑄塊" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 bg-brand-primary text-white text-[11px] font-bold tracking-wider uppercase rounded-sm shadow-xs">
                    壓鑄專用鑄塊
                  </span>
                </div>
                <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-sm text-xs font-bold text-gray-900 border border-gray-200/80 shadow-xs">
                  彎曲強度 460 MPa
                </div>
              </div>

              <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">
                Dental Press Ingots
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Rosetta SP：壓鑄鑄塊（460 MPa・HT／LT／MO・19 色階）
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                結晶後彎曲強度達 460 MPa。反應層薄、脫模乾淨，與多數包埋材相容性佳，呈現自然透光的美學效果。全系列提供 HT（高透）、LT（低透）、MO（中等不透明）三種透光度與完整 19 色階。
              </p>

              {/* Quick Specs List */}
              <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">機械強度</span>
                  <span className="font-bold text-gray-900">460 MPa (結晶後)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">色階涵蓋</span>
                  <span className="font-bold text-gray-900">19 色階 (A1-D4 + W1-W4 漂白色)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">透光度</span>
                  <span className="font-bold text-gray-900">HT / LT / MO 完整三級</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">表面反應層</span>
                  <span className="font-bold text-gray-900">極薄反應層，脫模快速乾淨</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">傳統或數位蠟型壓鑄技工首選</span>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group"
                >
                  <span>索取 SP 鑄塊色階表</span>
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. 適用案件：貼片、嵌體、單冠與前牙三單位牙橋 (Section 4) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Clinical Applications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              適用案件：貼片、嵌體、單冠與前牙三單位牙橋
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Rosetta 系列具備優異的微晶結構與機械強度，針對前牙美學與後牙咬合修復皆能提供精確對應的材料選擇。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {applicationCases.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col bg-gray-50 rounded-xl p-6 border border-gray-200/80 hover:border-brand-primary/40 hover:shadow-xs transition-all duration-300"
              >
                {/* Visual Thumbnail */}
                <div className="aspect-[16/10] w-full mb-5 overflow-hidden bg-gray-200 relative rounded-lg border border-gray-200/60">
                  <img 
                    src={imgCases} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-brand-primary text-white text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm">
                    {item.tag}
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1.5">
                  {item.category}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                <div className="flex flex-col gap-2 pt-4 border-t border-gray-200/80 mt-auto text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-500">推薦材料</span>
                    <span className="font-bold text-gray-900 text-right">{item.recommendedMaterial}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-500">標稱強度</span>
                    <span className="font-bold text-gray-900">{item.strength}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-500">規格特點</span>
                    <span className="font-bold text-brand-primary">{item.edgeThickness}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 色階與透光度怎麼選 (Section 5) */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Shade & Translucency Selection
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              色階與透光度怎麼選
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              根據患者支台齒底色、修復體厚度與透光需求，選擇最適配的透光等級與色階。
            </p>
          </div>

          {/* 3-Col Translucency Guide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {spTranslucencies.map((t, idx) => (
              <motion.div
                key={t.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-xs flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-sm uppercase tracking-wider">
                    {t.level.split(' ')[0]}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">透光度分級</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                  {t.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="text-xs font-bold text-brand-primary mb-1">推薦適用案件</div>
                  <div className="text-xs text-gray-700 leading-relaxed">{t.cases}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comparison Matrix Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
            <div className="px-6 py-4 bg-gray-100/70 border-b border-gray-200 flex items-center justify-between">
              <span className="text-sm font-bold text-gray-900">Rosetta SM / SP 規格與選用對照表</span>
              <span className="text-xs text-gray-500 font-medium">原廠標準數據</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <th className="py-3.5 px-6 font-bold text-gray-900 w-1/4">比較項目</th>
                    <th className="py-3.5 px-6 font-bold text-brand-primary w-1/3">Rosetta SM (切削瓷塊)</th>
                    <th className="py-3.5 px-6 font-bold text-brand-primary w-1/3">Rosetta SP (壓鑄鑄塊)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {shadeMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-800 align-top">
                        {row.category}
                        <div className="text-[11px] text-gray-400 font-normal mt-0.5">{row.note}</div>
                      </td>
                      <td className="py-4 px-6 text-gray-700 align-top">
                        {row.sm}
                      </td>
                      <td className="py-4 px-6 text-gray-700 align-top">
                        {row.sp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 leading-relaxed">
              * 以上為原廠公開資料整理，實際供貨色階與尺寸將由崧達企業提供後校對確認。
            </div>
          </div>
        </div>
      </section>

      {/* 6. 切削／壓鑄參數與結晶條件 (Section 6) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Processing & Sintering Protocols
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              切削／壓鑄參數與結晶條件
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Rosetta SP 壓鑄前須依照原廠建議的結晶曲線設定壓鑄爐（如 DEKEMA press-i-dent）溫度與持溫時間；若成品表面出現細微氣泡痕跡，通常代表最高溫度需調降 5 至 10 °C。Rosetta SM 則依銑削機建議參數加工後，再進行燒結結晶處理。
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveParamTab('sm')}
              className={cn(
                "py-3.5 px-6 font-bold text-sm sm:text-base border-b-2 transition-all cursor-pointer flex items-center gap-2",
                activeParamTab === 'sm' 
                  ? "border-brand-primary text-brand-primary bg-brand-primary/5" 
                  : "border-transparent text-gray-500 hover:text-gray-900"
              )}
            >
              <Cpu className="w-4 h-4" />
              <span>Rosetta SM（切削與結晶參數）</span>
            </button>
            <button
              onClick={() => setActiveParamTab('sp')}
              className={cn(
                "py-3.5 px-6 font-bold text-sm sm:text-base border-b-2 transition-all cursor-pointer flex items-center gap-2",
                activeParamTab === 'sp' 
                  ? "border-brand-primary text-brand-primary bg-brand-primary/5" 
                  : "border-transparent text-gray-500 hover:text-gray-900"
              )}
            >
              <Flame className="w-4 h-4" />
              <span>Rosetta SP（壓鑄與爐溫設定）</span>
            </button>
          </div>

          {/* Tab Content Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Specs Protocol Box */}
            <motion.div 
              key={activeParamTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">
                {parameterDetails[activeParamTab].subtitle}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {parameterDetails[activeParamTab].title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                {parameterDetails[activeParamTab].desc}
              </p>

              {/* Protocol Table */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
                <div className="divide-y divide-gray-100">
                  {parameterDetails[activeParamTab].steps.map((s, idx) => (
                    <div key={idx} className="flex justify-between items-center px-5 py-3 text-sm">
                      <span className="text-gray-600 font-medium">{s.label}</span>
                      <span className="font-bold text-gray-900">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-5">
                <div className="flex items-center gap-2 text-brand-primary text-sm font-bold mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>工程師操作注意事項與關鍵技巧</span>
                </div>
                <ul className="space-y-2">
                  {parameterDetails[activeParamTab].tips.map((tip, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0"></span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Lab Setup & Support Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-xl relative border border-gray-200">
                <img 
                  src={imgFurnace} 
                  alt="壓鑄與結晶燒結設備" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-sm text-xs font-bold text-gray-900 border border-gray-200/80">
                  原廠精準溫度校準支援
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="text-base font-bold text-gray-900 mb-2">崧達在地技術支援服務</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  崧達配備合格牙體技術應用顧問，可協助診所或技工所進行瓷牙爐溫度補償設定、壓鑄曲線校準與切削刀具參數導入。
                </p>
                <Link 
                  to="/technical-support"
                  className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group"
                >
                  <span>了解技術支援方案</span>
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. 常見問題 (Section 7: FAQ Accordion) */}
      <section className="py-24 md:py-32 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              常見問題
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              彙整醫師與牙體技術師在使用 HASS Rosetta 玻璃陶瓷材料時最常詢問的選材、切削、壓鑄與結晶問題。
            </p>
          </div>

          <div className="divide-y divide-gray-200 border-y border-gray-200 bg-white rounded-xl p-6 sm:p-8 shadow-xs">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-6 first:pt-2 last:pb-2">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-start justify-between gap-4 group focus:outline-hidden cursor-pointer"
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
            alt="洽詢 HASS Rosetta 玻璃陶瓷材料" 
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
              Ready for Aesthetic Restorations
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              想了解適合你案件的 Rosetta 材料？
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              不論您是需要椅旁切削瓷塊 Rosetta SM，或是技工壓鑄鑄塊 Rosetta SP，崧達提供在地現貨庫存、色階試用包與專業技術指導。
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 text-sm md:text-base font-bold text-gray-900 bg-white hover:bg-gray-100 transition-colors shadow-sm group"
              >
                預約需求評估
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
