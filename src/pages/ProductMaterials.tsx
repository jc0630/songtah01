import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronRight, 
  Layers, 
  Cpu, 
  CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';
import { usePageMeta } from '../lib/usePageMeta';

// Image imports
import imgHero from '../assets/images/dental_materials_1787196270407.jpg';
import imgZirconia from '../assets/images/sit_highend_1787207333157.jpg';
import imgColoring from '../assets/images/help_param_zirconia_1787215388580.jpg';
import imgPMMA from '../assets/images/news_bg_materials_1787197419092.jpg';
import imgWax from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgResin from '../assets/images/dental_3d_printed_applications_1787211189531.jpg';
import imgLabProcess from '../assets/images/dental_technician_lab_1787196258952.jpg';
import imgTraining from '../assets/images/services_education_1787202865679.jpg';
import imgCta from '../assets/images/hero_wide_dental_1787197373982.jpg';

// 1. Zirconia Data (Mapped to Section 2 - Application Assessment)
const zirconiaMaterials = [
  {
    id: 'prettau-2',
    category: '高透光美學',
    title: 'Prettau® 2 氧化鋯',
    volume: '適配度：單顆至全口牙橋',
    description: '具備優異的透光度與卓越的抗彎強度。適合製作要求高美學效果的單顆牙冠至長跨度全瓷牙橋，燒結後無需額外飾面瓷即可達到自然擬真外觀。',
    recommendedModel: 'Zirkonzahn 全系列加工機',
    accuracy: '收縮率極其穩定',
    tag: '美學首選'
  },
  {
    id: 'prettau-4',
    category: '極致超透光',
    title: 'Prettau® 4 Anterior® 氧化鋯',
    volume: '適配度：前牙單冠、貼片',
    description: '專為前牙區美學設計，透光性媲美二矽酸鋰（玻璃陶瓷），同時具備更高的機械強度。非常適合前牙貼片、單冠或三顆以內的短跨度牙橋。',
    recommendedModel: 'Zirkonzahn 五軸機',
    accuracy: '邊緣密合度極佳',
    tag: '前牙專用'
  },
  {
    id: 'prettau-bridge',
    category: '高強度基底',
    title: 'Prettau® Bridge 氧化鋯',
    volume: '適配度：大跨度支架、全口',
    description: '抗彎強度最高，能承受強大咬合力。專為大跨度植牙支架、全口重建與後牙區高負荷修復體所開發，確保長期穩定不崩裂。',
    recommendedModel: 'Zirkonzahn 旗艦重切削機',
    accuracy: '長跨度穩定不變形',
    tag: '全口重建'
  }
];

// 2 & 3. PMMA/Wax and Resin (Mapped to Section 3 - Equipment Lineup)
const otherMaterials = [
  {
    id: 'pmma-disc',
    name: 'YAMAHACHI PMMA 圓盤',
    category: 'PMMA 與蠟塊',
    summary: '高密度交聯型 PMMA，耐磨耗且生物相容性佳。提供單色與漸層多色選擇，完美應對長期臨時假牙需求。',
    badge: '臨時假牙首選',
    image: imgPMMA,
    link: '/contact',
  },
  {
    id: 'wax-disc',
    name: 'YAMAHACHI 精密雕刻蠟塊',
    category: 'PMMA 與蠟塊',
    summary: '純淨無灰燼配方，切削不沾刀具。適合傳統失蠟法鑄造金屬支架，或是壓鑄玻璃陶瓷的精密蠟型製作。',
    badge: '無灰燼蠟型',
    image: imgWax,
    link: '/contact',
  },
  {
    id: 'detax-resin',
    name: 'DETAX 3D 列印樹脂',
    category: '3D 列印樹脂',
    summary: '德國頂級牙科 3D 列印樹脂，涵蓋高透明植牙導板、矯正模型與臨時牙冠材料。全系列通過醫材認證。',
    badge: '二類醫材認證',
    image: imgResin,
    link: '/contact',
  }
];

// 4. Coloring System (Mapped to Section 4 - Ecosystem)
const coloringEcosystem = [
  {
    step: 'PART 01',
    title: 'Colour Liquid 水性染色液',
    subtitle: '燒結前的基底染色',
    desc: '無酸水性配方，不損害燒結爐加熱棒。深入氧化鋯生胚內部進行基底滲透上色，燒結後呈現由內而外的自然齒色過渡。',
    points: ['無酸水性不傷爐具', '深入滲透基底染色', '對應 16 色 VITA 色板'],
    image: imgColoring,
    linkText: '了解染色液',
    linkUrl: '/contact'
  },
  {
    step: 'PART 02',
    title: 'ICE Zirkon 表面染色劑',
    subtitle: '燒結後的細節描繪',
    desc: '在燒結完成的氧化鋯冠表面進行 3D 立體塗抹。能夠精準擬真牙齒裂紋、咬合面窩溝染色與切端透明感。',
    points: ['立體膏狀易於塗抹', '高溫燒結不褪色', '還原天然牙細節'],
    image: imgZirconia,
    linkText: '查看表面染色劑',
    linkUrl: '/contact'
  },
  {
    step: 'PART 03',
    title: 'Glaze 專用亮光釉膏',
    subtitle: '封閉毛細孔與最終光澤',
    desc: '作為最後一道工序，釉膏能在高溫下均勻包覆修復體表面，形成平滑的玻璃化抗汙層，保護對咬牙免於磨耗。',
    points: ['平滑抗汙表面', '保護對咬天然牙', '極致透亮光澤'],
    image: imgColoring,
    linkText: '了解亮光釉膏',
    linkUrl: '/contact'
  }
];

// 5. Technical Support & Parameter Guidelines (Mapped to Material Compatibility Cards Grid)
const parameterGuidelines = [
  {
    id: 'indication-eval',
    category: '臨床適應症評估',
    name: '材料特性與適應症對應評估',
    filterType: 'milling',
    typeTag: '適應症精準匹配',
    description: '針對醫師的修復計畫（如貼片、單冠、長橋或植牙基台），評估咀嚼咬合受力與美觀透光需求，建議具備最適透光度與抗彎強度的材料圓盤。',
    specs: [
      { label: '推薦適用修復體', value: '前牙貼片、單顆全瓷冠、大跨度牙橋、植牙支架' },
      { label: '材料選擇關鍵指標', value: '抗彎強度（600–1200+ MPa）與透光率（43%–49%）' },
      { label: '技術支援配套', value: '崧達原廠適應症對照手冊、實體色卡與樣品提供' }
    ]
  },
  {
    id: 'cam-optimization',
    category: 'CAM 軟體切削參數',
    name: 'CAM 切削路徑與進給最佳化',
    filterType: 'milling',
    typeTag: '延長刀具壽命',
    description: '提供針對不同材料硬度與密度的專屬切削策略（刀具路徑、進給率與主軸轉速），有效保護微細邊緣不崩裂，並大幅延長銑刀使用壽命。',
    specs: [
      { label: '建議轉速與進給', value: '主軸轉速 25,000–60,000 RPM・粗切與細磨分級設定' },
      { label: '適用切削材料', value: 'Zirkonzahn 氧化鋯、YAMAHACHI PMMA、精密蠟塊' },
      { label: '技術支援配套', value: '原廠 CAM 刀具庫範本檔導入、切削策略遠端微調' }
    ]
  },
  {
    id: 'sintering-curing',
    category: '燒結與光固化曲線',
    name: '高溫燒結與二次光固化曲線設定',
    filterType: 'curing',
    typeTag: '原廠溫控與光照規範',
    description: '不同氧化鋯的緻密化溫度不同；光固化樹脂亦有專屬的後處理光照時間。我們提供原廠驗證的精準升溫、恆溫與氮氣/UV光照參數。',
    specs: [
      { label: '關鍵溫控與光照參數', value: '氧化鋯最高溫 1500°C 恆溫 2hr・UV 385/405nm 光照 10–15min' },
      { label: '適用材料系列', value: 'Prettau® 氧化鋯系列、DETAX 3D 列印光固化樹脂' },
      { label: '技術支援配套', value: '原廠燒結曲線表、燒結爐測溫校準、光固化箱參數表' }
    ]
  },
  {
    id: 'training-aftersales',
    category: '教育培訓與售後',
    name: '團隊實機教育培訓與售後保障',
    filterType: 'curing',
    typeTag: '專業技師駐點',
    description: '提供專業上色教學、燒結曲線排錯與售後技術支援。協助技工所與診所建立標準化作業流程，確保產出品質穩定且符合美學要求。',
    specs: [
      { label: '培訓服務範疇', value: '氧化鋯浸潤染色教學、表面冰彩釉膏操作、切削排錯' },
      { label: '適用院所機構', value: '牙技工所、牙醫診所技工部、數位齒雕中心' },
      { label: '技術支援配套', value: '24 小時線上技術諮詢、定期技工研討會與到府除錯' }
    ]
  }
];

export function ProductMaterials() {
  usePageMeta({
    title: '牙科材料｜崧達企業',
    description: '供應高品質氧化鋯瓷塊、PMMA 樹脂塊、3D 列印生物相容樹脂與專用染色滲透液，確保修復體兼具極致強度與自然美學透亮感。',
  });

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="牙科材料" 
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
              Dental CAD/CAM Materials
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              牙科材料
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              代理 Zirkonzahn 氧化鋯與染色系統、YAMAHACHI PMMA 與蠟塊、Detax 列印樹脂，並提供上色與燒結參數的技術支援。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 氧化鋯材料 (1:1 with Application Assessment) */}
      <section id="zirconia" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Zirconia Materials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              氧化鋯材料
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              引進義大利 Zirkonzahn 原廠高等級氧化鋯圓盤。針對前牙高透美學、後牙高強硬度至全口長跨度重建，提供最完整的材料解決方案。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {zirconiaMaterials.map((item, idx) => (
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
                    src={imgZirconia} 
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

                {/* Specs list */}
                <div className="flex flex-col gap-3 pt-6 border-t border-gray-200 mt-auto">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-500">設備兼容性</span>
                    <span className="text-base font-bold text-gray-900">{item.recommendedModel}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-500">材料特性</span>
                    <span className="text-base font-bold text-gray-900">{item.accuracy}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-gray-500">適應症建議</span>
                    <span className="text-base font-bold text-gray-900">{item.volume}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PMMA 與蠟塊 / 3D 列印樹脂 (1:1 with Equipment Lineup) */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
            <div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Other Materials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                PMMA 與蠟塊 / 3D 列印樹脂
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
                除了高強度氧化鋯，崧達也代理 YAMAHACHI 與 DETAX 國際頂尖醫材，全面滿足臨時贋復、精密蠟型與數位列印需求。
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors border-b-2 border-brand-primary pb-1 group"
              >
                <span>索取完整材料型錄</span>
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {otherMaterials.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Link
                  to={item.link || "/contact"}
                  className="group flex flex-col h-full bg-white rounded-xl p-5 border border-gray-200/90 shadow-xs hover:border-brand-primary/50 hover:shadow-md transition-all duration-300 focus:outline-hidden"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 rounded-lg relative border border-gray-100 shadow-inner">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {item.badge && (
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 bg-brand-primary text-white text-[11px] font-bold tracking-wider uppercase rounded-sm shadow-xs">
                          {item.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 pt-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1.5">
                      {item.category}
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-brand-primary flex items-center justify-center transition-colors shrink-0">
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-0.5" />
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-5">
                      {item.summary}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-primary">
                      <span>索取樣品與規格說明</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 染色與上色系統 (1:1 with Digital Production Ecosystem) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-18">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Coloring & Finishing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                染色與上色系統
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                完美的氧化鋯牙冠，需要依賴精準的染色工藝。我們引進 Zirkonzahn 全套水性滲透液與表面冰彩釉膏，幫助技師重現自然牙的透亮與漸層質感。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 group hover:border-brand-primary/40 transition-all duration-500 shadow-xs"
            >
              <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/11] w-full overflow-hidden bg-gray-200 relative">
                <img 
                  src={coloringEcosystem[0].image} 
                  alt={coloringEcosystem[0].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[11px] font-bold tracking-widest px-3.5 py-1.5 uppercase rounded-sm shadow-xs">
                  {coloringEcosystem[0].step} · 基底染色
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1.5">
                    {coloringEcosystem[0].subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                    {coloringEcosystem[0].title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {coloringEcosystem[0].desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">重現自然齒色核心</span>
                  <Link 
                    to={coloringEcosystem[0].linkUrl}
                    className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                  >
                    <span>{coloringEcosystem[0].linkText}</span>
                    <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              {coloringEcosystem.slice(1).map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                  className="flex-1 flex flex-col sm:flex-row lg:flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 group hover:border-brand-primary/40 transition-all duration-500 shadow-xs"
                >
                  <div className="aspect-[16/9] sm:aspect-square sm:w-2/5 lg:w-full lg:aspect-[16/8] overflow-hidden bg-gray-200 relative shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-brand-primary/90 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm">
                      {item.step} · {idx === 0 ? '細節描繪' : '最終光澤'}
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
                    <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                      <span className="text-xs text-gray-500">專業技師選用</span>
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

      {/* 5. 材料選用與參數建議 (Standard Material Compatibility & Parameter Guidelines Grid) */}
      <section id="parameters" className="py-24 md:py-32 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Technical Support
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              材料選用與參數建議
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              不同材料的燒結曲線、光固化參數與保存條件，皆會影響最終成品的品質。崧達工程團隊依據實體案例，提供設備搭配與參數最佳化建議。
            </p>
          </div>

          {/* Guidelines Cards Grid (2x2 Grid using clean 3D Printers page styling) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {parameterGuidelines.map((item, idx) => (
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

                {/* Structured Specs Block (Clean & Easy to Compare) */}
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
                  <span className="text-xs text-gray-500">崧達原廠技術支援與參數表供應</span>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link"
                  >
                    <span>索取參數手冊與上色指南</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA 區塊 */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCta} 
            alt="洽詢牙科材料解決方案" 
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
              需要客製化的材料建議嗎？
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              不知道該為您的設備選擇哪款氧化鋯，或是需要原廠的燒結與上色參數？歡迎預約崧達專業顧問，我們將提供您詳細的材料說明與技術支援。
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 text-sm md:text-base font-bold text-gray-900 bg-white hover:bg-gray-100 transition-colors shadow-sm group"
              >
                洽詢材料詳情與報價
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
