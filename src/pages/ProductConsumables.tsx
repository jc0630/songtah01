import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Package, 
  Sparkles, 
  Wind, 
  Sliders, 
  CheckCircle2, 
  Layers,
  Truck,
  PhoneCall
} from 'lucide-react';
import { cn } from '../lib/utils';
import { usePageMeta } from '../lib/usePageMeta';

// Image imports
import imgHero from '../assets/images/consumables_hero_1787280697212.jpg';
import imgGrinding from '../assets/images/grinding_polishing_tools_1787280710977.jpg';
import imgKomax from '../assets/images/komax_dust_collector_1787280722493.jpg';
import imgRotary from '../assets/images/rotary_burs_tools_1787280732845.jpg';
import imgSplint from '../assets/images/dental_occlusal_splint_1787281560510.jpg';
import imgWarehouse from '../assets/images/delivery_warehouse_1787280745950.jpg';
import imgLabProcess from '../assets/images/dental_technician_lab_1787196258952.jpg';
import imgCta from '../assets/images/hero_wide_dental_1787197373982.jpg';

// 1. Grinding & Polishing Data (Section 1: 研磨與拋光耗材 - 2-col featured cards)
const grindingProducts = [
  {
    id: 'zirconia-grinders',
    category: '粗修與成型研磨',
    title: '氧化鋯與全瓷專用鑽石研磨頭',
    tag: '耐磨高切削',
    description: '採用高純度微晶金剛石均勻燒結而成，切削效率高且產熱極低。特別針對氧化鋯生胚與已燒結全瓷冠設計，能快速修整邊緣與形態，有效避免微細裂紋發生。',
    specs: [
      { label: '適用材料', value: '氧化鋯 (Zirconia)、二矽酸鋰玻璃陶瓷、金屬合金' },
      { label: '粒度分級', value: '粗目（成型修整）／中目（精細輪廓修磨）' },
      { label: '核心優勢', value: '低產熱不致熱應力、旋轉同心度高、壽命延長 40%' }
    ]
  },
  {
    id: 'silicone-polishers',
    category: '細緻拋光與鏡面光澤',
    title: '兩階段矽膠拋光輪與金剛石膏',
    tag: '極致光澤',
    description: '高彈性矽膠基質結合天然金剛石微粒，提供平滑與高光兩階段拋光系統。無需上釉即可快速達到天然牙釉質般的自然光澤與低菌附著表面。',
    specs: [
      { label: '適用材料', value: '全瓷冠、壓鑄陶瓷、複合樹脂、PMMA 臨時牙' },
      { label: '系統配置', value: '一階平滑修飾（粉紅）＋ 二階高光鏡面（灰白）' },
      { label: '核心優勢', value: '彈性適應咬合面窩溝、不傷修復體邊緣、操作時間縮短' }
    ]
  }
];

// 2. Dust Extraction (Section 2: 集塵與過濾（KO-MAX） - Asymmetric showcase)
const komaxFeatures = [
  {
    step: 'CORE UNIT',
    title: 'KO-MAX 牙科專用高靜音集塵主機',
    subtitle: '強勁負壓吸力・無碳刷變頻馬達',
    desc: '專為牙科乾式切削機與技工工作台量身打造。配備高效能無刷馬達，提供穩定充沛的負壓吸力，同時將運轉噪音控制於 55dB 以下，創造安靜舒適的工作環境。',
    points: ['無刷馬達長效運轉', '數位風量多段調整', '自動聯動 CAD/CAM 切削機'],
    image: imgKomax,
    linkText: '了解 KO-MAX 主機規格',
    linkUrl: '/contact'
  },
  {
    step: 'FILTRATION',
    title: '醫療級 HEPA 多層過濾濾芯',
    subtitle: '攔截 99.97% 微細粉塵',
    desc: '內建初效前置濾袋與高效 HEPA 濾筒，能徹底捕捉氧化鋯切削粉塵與研磨顆粒，杜絕粉塵外洩與二次污染。',
    points: ['99.97% 捕集效率 (0.3μm)', '易拆卸快換設計', '濾網阻力與飽和警示'],
    image: imgGrinding,
    linkText: '查看濾芯耗材',
    linkUrl: '/contact'
  },
  {
    step: 'ACCESSORIES',
    title: '抗靜電集塵管與轉接配件',
    subtitle: '全機種無縫轉接',
    desc: '提供各式口徑耐磨抗靜電集塵軟管、密封轉接頭與氣動閥門，支援各大廠牌 CAD/CAM 齒雕機與桌上型吸塵罩。',
    points: ['耐磨抗折抗靜電材質', '密閉防漏風轉接頭', '多機切換氣閥系統'],
    image: imgRotary,
    linkText: '瀏覽管路配件',
    linkUrl: '/contact'
  }
];

// 3. Machining Accessories & Burs (Section 3: 加工配件與旋轉器械 - 4-col grid)
const rotaryInstruments = [
  {
    id: 'diamond-burs',
    name: 'CAD/CAM 奈米鑽石鍍膜銑刀',
    category: '切削銑刀系列',
    summary: '採用極致硬度 CVD 奈米金剛石鍍膜，專為氧化鋯、PMMA 與蠟塊切削開發。極佳耐磨損性能，大幅降低單顆加工刀具成本。',
    badge: 'CVD 鑽石鍍膜',
    image: imgRotary,
    specs: '直徑：0.6mm / 1.0mm / 2.0mm',
    compatibility: 'Zirkonzahn, Roland, VHF, GenCore'
  },
  {
    id: 'occlusal-splint',
    name: '咬合板',
    category: '熱壓成型與切削耗材',
    summary: '高透明度醫療級咬合板專用熱壓成型片與切削樹脂盤。具備優良抗衝擊韌性、耐磨耗性與生物相容性，專用於夜間磨牙保護套、齒顎維持器與關節穩定咬合板製作。',
    badge: '高透醫療級',
    image: imgSplint,
    specs: '規格：厚度 1.0 / 1.5 / 2.0mm 片材 / 98mm 切削盤',
    compatibility: '各式正負壓成型機、壓模機及乾濕式切削機'
  },
  {
    id: 'spindle-collets',
    name: '高精密主軸筒夾與校準治具',
    category: '主軸配件與治具',
    summary: '德國/日本原廠等級極細偏擺筒夾，確保旋轉精度 < 0.003mm。有效保護主軸培林，避免刀具偏擺造成修復體邊緣微裂。',
    badge: '偏擺 < 0.003mm',
    image: imgHero,
    specs: '規格：Φ3.0mm / Φ4.0mm / Φ6.0mm',
    compatibility: 'Jäger, Sycotec, Alfred Jäger 各型主軸'
  },
  {
    id: 'carbide-cutters',
    name: '技工專用鎢鋼旋轉修整刀',
    category: '旋轉器械系列',
    summary: '精選超細微粒碳化鎢鋼材質，精密刃口幾何設計。切削平順俐落不咬刀，專門用於 PMMA 臨時牙、金屬支架與石膏模型修整。',
    badge: '超細鎢鋼刃口',
    image: imgGrinding,
    specs: '柄徑：2.35mm HP 標準長柄',
    compatibility: '各式牙科技工用高速/慢速微型馬達'
  }
];

// 4. Local Inventory Specifications (Section 4: 常用規格在地備貨 - 2x2 comparison grid)
const localInventoryCards = [
  {
    id: 'bur-stock',
    category: '銑刀耗材庫存',
    name: 'CAD/CAM 銑刀全系列常態在庫',
    description: '常態儲備適用各大主流機型的標準銑刀規格（0.6mm、1.0mm、2.0mm），涵蓋標準鍍膜、DLC 類鑽石鍍膜與 CVD 奈米金剛石鍍膜。',
    specs: [
      { label: '支援設備品牌', value: 'Zirkonzahn 全系列、Roland DWX 系列、GenCore' },
      { label: '常備刃徑規格', value: 'Φ0.6mm（精修咬合面）、Φ1.0mm（內冠細磨）、Φ2.0mm（粗切輪廓）' },
      { label: '現貨承諾', value: '台北/台中/高雄常備 500+ 支安全庫存，下單即可安排出貨' }
    ]
  },
  {
    id: 'komax-filters',
    category: '集塵濾芯耗材',
    name: 'KO-MAX 原廠濾袋與 HEPA 濾筒',
    description: '專為 KO-MAX 系列集塵機提供原廠等級耗材，包含高密度初效集塵袋、HEPA 圓筒濾網與靜音排氣濾棉，維持吸力持久不衰退。',
    specs: [
      { label: '適用機種', value: 'KO-MAX KM-200、KM-300、KM-500 及各式技工吸塵桌' },
      { label: '濾網等級規格', value: 'H13 級醫療 HEPA 濾筒，微塵過濾效率高達 99.97%' },
      { label: '更換週期建議', value: '集塵袋依使用量每月更換；HEPA 濾筒建議每 6–12 個月更換' }
    ]
  },
  {
    id: 'polishing-kits',
    category: '研磨拋光耗材',
    name: '研磨砂輪與矽膠拋光輪套裝',
    description: '針對全瓷修復體（氧化鋯、二矽酸鋰）提供全套顆粒度拋光輪與羊毛刷。滿足技師從切斷支撐點、形態修整至鏡面高光的全流程需求。',
    specs: [
      { label: '常備品項清單', value: '金剛石研磨石（平頭/錐形/輪狀）、兩步法拋光輪、鑽石拋光膏' },
      { label: '包裝出貨形式', value: '單支補充包、10 支量販經濟包、全套技師專用工具盒' },
      { label: '品質檢驗認證', value: '通過 ISO 醫療器械製造品質認證，旋轉平穩不偏擺' }
    ]
  },
  {
    id: 'cooling-lubricants',
    category: '切削冷卻與保養',
    name: '專用切削冷卻液與主軸潤滑油',
    description: '濕式研磨機專用切削冷卻添加劑，具備優異潤滑、散熱與抑菌防鏽效果；並常備高精密主軸專用保養潤滑脂與清潔套件。',
    specs: [
      { label: '適用設備範圍', value: '四軸/五軸濕式玻璃陶瓷切削機、高頻主軸保養系統' },
      { label: '主要功能特性', value: '降低切削高溫、防止陶瓷微崩、保持加工艙內無沉積油垢' },
      { label: '包裝規格容量', value: '1L 濃縮配方補充瓶 / 5L 技工所經濟裝' }
    ]
  }
];

// 5. Ordering and Delivery (Section 5: 訂購與交期 - 4-step workflow)
const orderProcessSteps = [
  {
    num: '01',
    title: '耗材型號與規格確認',
    desc: '告知您的設備廠牌型號（如 Zirkonzahn、Roland）或所需研磨耗材尺寸，崧達專員迅速核對最佳相容規格並提供報價。'
  },
  {
    num: '02',
    title: '在地庫存即時核對',
    desc: '系統即時查詢全台倉儲現貨狀態。常備耗材規格即時確認，如遇特殊客製或量大需求亦明確告知到貨排程。'
  },
  {
    num: '03',
    title: '專業包裝與當日出貨',
    desc: '平日工作日下午 15:00 前完成確認之現貨訂單，當日即完成專業防震包裝並由配合物流迅速寄出，最快次日送達。'
  },
  {
    num: '04',
    title: '使用參數指導與售後',
    desc: '隨貨附原廠使用建議（主軸轉速、進給率、更換週期）。若有切削或打磨參數疑問，工程團隊隨時提供線上諮詢。'
  }
];

export function ProductConsumables() {
  usePageMeta({
    title: '牙科耗材｜崧達企業',
    description: '常態備有各大品牌 CAD/CAM 專用銑刀、韓國 KO-MAX 集塵機原廠濾芯、高精密研磨拋光工具及切削冷卻液，在地現貨快速供應。',
  });

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="牙科耗材" 
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
              Dental Consumables & Accessories
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              牙科耗材
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              供應牙科專用研磨拋光耗材、KO-MAX 專業集塵過濾系統、CAD/CAM 切削銑刀與旋轉器械。台灣在地充裕庫存，提供迅速配送與技術諮詢。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 研磨與拋光耗材 (2-col Featured Grid) */}
      <section id="grinding" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Grinding & Polishing Consumables
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              研磨與拋光耗材
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              針對氧化鋯、玻璃陶瓷、金屬與樹脂等不同修復體材質，提供專屬的粗修、細磨與極致鏡面拋光工具。耐用度高、產熱低，確保成品邊緣密合度與美學光澤。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {grindingProducts.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex flex-col bg-gray-50/70 rounded-2xl p-6 sm:p-8 border border-gray-200/80 hover:border-brand-primary/40 hover:shadow-md transition-all duration-300"
              >
                {/* Large Featured Image */}
                <div className="aspect-[16/10] w-full mb-7 overflow-hidden bg-gray-200 relative rounded-xl border border-gray-100">
                  <img 
                    src={idx === 0 ? imgGrinding : imgHero} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-brand-primary text-white text-[11px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-md shadow-xs">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">
                  {item.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Specs structured box */}
                <div className="mt-auto bg-white rounded-xl p-5 border border-gray-200/80 space-y-3">
                  {item.specs.map((spec, sIdx) => (
                    <div 
                      key={sIdx}
                      className={cn(
                        "flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 text-sm",
                        sIdx > 0 && "border-t border-gray-100 pt-2.5"
                      )}
                    >
                      <span className="text-gray-500 font-medium shrink-0">{spec.label}</span>
                      <span className="sm:text-right font-bold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/70 flex items-center justify-between">
                  <span className="text-xs text-gray-500">提供單支與多入量販包裝</span>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                  >
                    <span>索取研磨耗材目錄</span>
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 集塵與過濾（KO-MAX） (Asymmetric 1 Large + 2 Side Layout) */}
      <section className="py-24 md:py-32 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-18">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Dust Extraction & Filtration
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                集塵與過濾（KO-MAX）
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                代理韓國 KO-MAX 牙科專用集塵機與高效率過濾濾芯。為乾式切削機、技工打磨桌提供強勁吸力、極致靜音與多層 HEPA 空氣淨化，守護技師與診所空氣品質。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Primary Large Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/90 group hover:border-brand-primary/40 transition-all duration-500 shadow-xs"
            >
              <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/11] w-full overflow-hidden bg-gray-200 relative">
                <img 
                  src={komaxFeatures[0].image} 
                  alt={komaxFeatures[0].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[11px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-md shadow-xs">
                  {komaxFeatures[0].step} · 旗艦集塵
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1.5">
                    {komaxFeatures[0].subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                    {komaxFeatures[0].title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {komaxFeatures[0].desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
                    {komaxFeatures[0].points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">支援各品牌切削機信號連動</span>
                  <Link 
                    to={komaxFeatures[0].linkUrl}
                    className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                  >
                    <span>{komaxFeatures[0].linkText}</span>
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Secondary Side Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              {komaxFeatures.slice(1).map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                  className="flex-1 flex flex-col sm:flex-row lg:flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/90 group hover:border-brand-primary/40 transition-all duration-500 shadow-xs"
                >
                  <div className="aspect-[16/9] sm:aspect-square sm:w-2/5 lg:w-full lg:aspect-[16/8] overflow-hidden bg-gray-200 relative shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-brand-primary/90 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-md">
                      {item.step} · {idx === 0 ? '高效濾芯' : '管路轉接'}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">
                        {item.subtitle}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-500">常態現貨在庫</span>
                      <Link 
                        to={item.linkUrl}
                        className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                      >
                        <span>{item.linkText}</span>
                        <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 加工配件與旋轉器械 (4-col Product Cards Grid) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
            <div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Machining Accessories & Rotary Burs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                加工配件與旋轉器械
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                涵蓋 CAD/CAM 銑刀、咬合板材料、主軸筒夾校準治具與技工用旋轉器械，精準適配各大主流切削與加工設備。
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors border-b-2 border-brand-primary pb-1 group"
              >
                <span>索取完整耗材與配件規格表</span>
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {rotaryInstruments.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="group flex flex-col h-full bg-white rounded-2xl p-6 border border-gray-200/90 shadow-xs hover:border-brand-primary/50 hover:shadow-md transition-all duration-300">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-xl relative border border-gray-100 shadow-inner">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {item.badge && (
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 bg-brand-primary text-white text-[11px] font-bold tracking-wider uppercase rounded-md shadow-xs">
                          {item.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 pt-6">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1.5">
                      {item.category}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors mb-3">
                      {item.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                      {item.summary}
                    </p>

                    <div className="mt-auto bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-2 mb-6 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500">規格說明</span>
                        <span className="font-bold text-gray-900">{item.specs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">相容設備</span>
                        <span className="font-bold text-brand-primary">{item.compatibility}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-primary">
                      <Link to="/contact" className="hover:underline flex items-center gap-1">
                        <span>洽詢訂購與型號庫存</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 常用規格在地備貨 (2x2 Parameter Comparison Grid) */}
      <section className="py-24 md:py-32 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Local Inventory & Compatibility
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              常用規格在地備貨
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              崧達於台灣設有專業溫控與防潮倉儲，常態儲備各大品牌最常用耗材規格與原廠正品，免除漫長海運等待，確保診所與技工所產線零停機。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {localInventoryCards.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-xs hover:border-brand-primary/40 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Header info with Tag & Title */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">
                      {item.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Structured Specs Block */}
                <div className="mt-auto bg-gray-50/80 rounded-xl p-5 border border-gray-100 space-y-3.5">
                  {item.specs.map((spec, sIdx) => (
                    <div 
                      key={sIdx}
                      className={cn(
                        "flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 text-sm",
                        sIdx > 0 && "border-t border-gray-200/60 pt-3"
                      )}
                    >
                      <span className="text-gray-500 font-medium shrink-0">{spec.label}</span>
                      <span className={cn(
                        "sm:text-right font-bold",
                        sIdx === 2 ? "text-brand-primary" : "text-gray-900"
                      )}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">支援快速急件宅配出貨</span>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                  >
                    <span>查詢即時現貨與報價</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 訂購與交期 (4-step Process Workflow + Warehouse Logistics Banner) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Ordering & Fast Delivery
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              訂購與交期
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              簡化耗材採購流程，提供電話、LINE 官方帳號與業務專員多元即時下單管道。常規現貨享當日打包出貨、迅速送達，確保您的加工產線順暢運轉。
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 relative">
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-gray-200 z-0"></div>
            {orderProcessSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex-1 relative z-10"
              >
                <div className="w-14 h-14 bg-white rounded-xl border border-brand-primary/30 shadow-xs flex items-center justify-center text-xl font-bold text-brand-primary mb-6 mx-auto lg:mx-0">
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

          {/* Warehouse and Logistics Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="aspect-[16/9] overflow-hidden bg-gray-200 rounded-2xl group border border-gray-100 relative">
              <img 
                src={imgWarehouse} 
                alt="快速出貨物流倉儲" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Local Fulfillment</div>
                  <div className="text-lg font-bold">全台在地防潮倉儲・現貨當日發貨</div>
                </div>
              </div>
            </div>
            <div className="aspect-[16/9] overflow-hidden bg-gray-200 rounded-2xl group border border-gray-100 relative">
              <img 
                src={imgLabProcess} 
                alt="技工所即時技術支援" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Expert Technical Support</div>
                  <div className="text-lg font-bold">隨貨提供切削與磨耗更換參數指導</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA 區塊 */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCta} 
            alt="洽詢牙科耗材解決方案" 
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
              Consumables Consultation
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              需要補充耗材或索取完整規格清單嗎？
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              歡迎隨時聯繫崧達客服專員，我們將為您查詢現貨庫存、寄送耗材樣品型錄或安排定期批次配送計畫。
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 text-sm md:text-base font-bold text-gray-900 bg-white hover:bg-gray-100 rounded-xl transition-colors shadow-sm group"
              >
                立即洽詢耗材訂購
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl transition-colors"
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
