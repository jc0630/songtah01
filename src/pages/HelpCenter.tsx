import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, BookOpen, Settings, Wrench, Thermometer, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { SEO_DATA } from '../data';
import { usePageMeta } from '../lib/usePageMeta';

// Images
import imgHero from '../assets/images/help_hero_1787215351364.jpg';
import imgOpPrinter from '../assets/images/asiga_3d_printer_dental_1787211175160.jpg';
import imgOpMilling from '../assets/images/clinic_cad_cam_hero_1787208403676.jpg';
import imgOpCad from '../assets/images/dental_technician_lab_1787196258952.jpg';
import imgParamZirconia from '../assets/images/help_param_zirconia_1787215388580.jpg';
import imgParamCuring from '../assets/images/help_param_curing_1787215401783.jpg';
import imgMaintenance from '../assets/images/help_maintenance_1787215414991.jpg';

const pageSeo = SEO_DATA['/support/help-center'] || {
  h1: '牙科設備操作與製程說明中心',
  h2: ['設備操作指引', '製程參數建議', '操作手冊', '切削／壓鑄參數與結晶條件']
};

// FAQ Accordion matching TechnicalSupport.tsx exactly
const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#36563C] transition-colors">{question}</h3>
        <span className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-500 transition-all duration-300 group-hover:bg-[#36563C] group-hover:text-white shrink-0 ml-4 border border-gray-200 group-hover:border-[#36563C]",
          isOpen && "bg-[#36563C] text-white border-[#36563C] rotate-180"
        )}>
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 leading-relaxed text-base md:text-lg pl-4 border-l-2 border-[#36563C]/30 ml-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function HelpCenter() {
  const [activeParamTab, setActiveParamTab] = useState<'zirconia' | 'curing'>('zirconia');

  usePageMeta({
    title: '說明中心｜崧達企業',
    description: '提供牙科設備操作手冊、製程參數建議（氧化鋯結晶、樹脂固化、玻璃陶瓷燒結）及日常維護指引，讓操作標準化。',
  });

  return (
    <div className="w-full">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt={pageSeo.h1} 
            className="w-full h-full object-cover"
          />
          {/* Deep brand color gradient overlay */}
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
              Technical Documentation & Operation Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {pageSeo.h1}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              設備操作說明、製程參數建議與保養指引，協助牙科診所與牙體技術所在日常使用中排除問題、維持穩定品質。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 牙科設備操作指引 (Card with large image + Title + brief description + Single CTA button) */}
      <section className="py-24 md:py-32 bg-[#F4F7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#36563C]" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  牙科設備操作指引
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                各品牌設備的基本操作與日常使用注意事項，點擊進入即可查看完整的標準作業流程與操作步驟。
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 3D Printer Guide */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group border border-gray-100 flex flex-col"
            >
              <div className="h-64 relative overflow-hidden bg-gray-100">
                <img 
                  src={imgOpPrinter} 
                  alt="3D 列印機操作指引" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#36563C]/90 text-white text-xs font-bold px-3 py-1 rounded-sm shadow">
                    3D Printing
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#36563C] transition-colors">
                    3D 列印機操作指引
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    涵蓋 ASIGA 等系列設備之列印前準備、樹脂槽 (Tray) 安裝與校正、材料更換注意事項，以及下機後之後處理流程。
                  </p>
                </div>
                <Link 
                  to="/products/3d-printers" 
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#F4F7F5] hover:bg-[#36563C] text-gray-900 hover:text-white font-bold text-sm rounded-sm transition-all duration-300 group/btn"
                >
                  <span>查看操作指引</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Milling Machine Guide */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group border border-gray-100 flex flex-col"
            >
              <div className="h-64 relative overflow-hidden bg-gray-100">
                <img 
                  src={imgOpMilling} 
                  alt="齒雕機／研磨機操作指引" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#36563C]/90 text-white text-xs font-bold px-3 py-1 rounded-sm shadow">
                    CAD/CAM Milling
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#36563C] transition-colors">
                    齒雕機／研磨機操作指引
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    材料固定與盤塊夾持、車針壽命管理、乾濕式切削模式切換與冷卻液濃度校正等標準作業步驟。
                  </p>
                </div>
                <Link 
                  to="/products/cad-cam" 
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#F4F7F5] hover:bg-[#36563C] text-gray-900 hover:text-white font-bold text-sm rounded-sm transition-all duration-300 group/btn"
                >
                  <span>查看操作指引</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* CAD / Scanner Software Guide */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 group border border-gray-100 flex flex-col"
            >
              <div className="h-64 relative overflow-hidden bg-gray-100">
                <img 
                  src={imgOpCad} 
                  alt="設計軟體與掃描指引" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#36563C]/90 text-white text-xs font-bold px-3 py-1 rounded-sm shadow">
                    CAD & Scanning
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#36563C] transition-colors">
                    設計軟體與掃描指引
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    口掃檔案匯入、牙冠邊緣線定義、參數庫選擇到排版輸出 (Nesting) 的系統化操作教學。
                  </p>
                </div>
                <Link 
                  to="/technical-support" 
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#F4F7F5] hover:bg-[#36563C] text-gray-900 hover:text-white font-bold text-sm rounded-sm transition-all duration-300 group/btn"
                >
                  <span>查看操作指引</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. 製程參數建議 (左右圖文排版：左側圖片，右側說明內容；搭配簡潔底線 Tab) */}
      <section className="py-24 md:py-32 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Thermometer className="w-6 h-6 text-[#36563C]" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                製程參數建議
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              提供材料與設備的最佳化匹配參數，包含氧化鋯燒結曲線與 3D 列印材料的後固化時間設定。
            </p>
          </motion.div>

          {/* Clean Tab Selector (Underline style, no AI capsule) */}
          <div className="flex justify-center border-b border-gray-200 mb-14">
            <div className="flex gap-8 md:gap-12">
              <button
                onClick={() => setActiveParamTab('zirconia')}
                className={cn(
                  "pb-4 text-lg md:text-xl font-bold transition-all relative",
                  activeParamTab === 'zirconia' 
                    ? "text-[#36563C]" 
                    : "text-gray-400 hover:text-gray-700"
                )}
              >
                氧化鋯燒結參數
                {activeParamTab === 'zirconia' && (
                  <motion.div 
                    layoutId="paramTabBorder"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-[#36563C]"
                  />
                )}
              </button>

              <button
                onClick={() => setActiveParamTab('curing')}
                className={cn(
                  "pb-4 text-lg md:text-xl font-bold transition-all relative",
                  activeParamTab === 'curing' 
                    ? "text-[#36563C]" 
                    : "text-gray-400 hover:text-gray-700"
                )}
              >
                列印後固化時間
                {activeParamTab === 'curing' && (
                  <motion.div 
                    layoutId="paramTabBorder"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-[#36563C]"
                  />
                )}
              </button>
            </div>
          </div>

          {/* Fixed Left-Image, Right-Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left side: Image with moderate rounded corners */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeParamTab}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-100 border border-gray-100"
                >
                  <img 
                    src={activeParamTab === 'zirconia' ? imgParamZirconia : imgParamCuring} 
                    alt={activeParamTab === 'zirconia' ? '氧化鋯燒結參數' : '列印後固化時間'}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side: Parameter details / Table */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {activeParamTab === 'zirconia' ? (
                  <motion.div
                    key="tab-zirconia-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        氧化鋯標準燒結曲線
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        適用於 Rosetta 等高透性多層次氧化鋯材料。正確的升溫速率與最高溫持溫時間是決定假牙透度、色澤與抗折強度的關鍵。
                      </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <table className="w-full text-left border-collapse text-sm md:text-base">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="py-3.5 px-5 font-bold text-gray-900">階段</th>
                            <th className="py-3.5 px-5 font-bold text-gray-900">目標溫度 (°C)</th>
                            <th className="py-3.5 px-5 font-bold text-gray-900">升溫速率</th>
                            <th className="py-3.5 px-5 font-bold text-gray-900">持溫時間</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          <tr className="hover:bg-gray-50/50">
                            <td className="py-3.5 px-5 text-gray-900 font-medium">1. 預熱升溫</td>
                            <td className="py-3.5 px-5 text-gray-600">0 - 900</td>
                            <td className="py-3.5 px-5 text-gray-600">8.0 °C/min</td>
                            <td className="py-3.5 px-5 text-gray-600">30 min</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50">
                            <td className="py-3.5 px-5 text-gray-900 font-medium">2. 主燒結升溫</td>
                            <td className="py-3.5 px-5 text-gray-600">900 - 1500</td>
                            <td className="py-3.5 px-5 text-gray-600">3.0 °C/min</td>
                            <td className="py-3.5 px-5 text-gray-600">0 min</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50">
                            <td className="py-3.5 px-5 text-gray-900 font-medium">3. 最高溫持溫</td>
                            <td className="py-3.5 px-5 text-gray-600">1500</td>
                            <td className="py-3.5 px-5 text-gray-600">-</td>
                            <td className="py-3.5 px-5 text-gray-600">120 min</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50">
                            <td className="py-3.5 px-5 text-gray-900 font-medium">4. 降溫冷卻</td>
                            <td className="py-3.5 px-5 text-gray-600">1500 - 800</td>
                            <td className="py-3.5 px-5 text-gray-600">10.0 °C/min (自然)</td>
                            <td className="py-3.5 px-5 text-gray-600">-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="tab-curing-content"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        3D 列印清洗與後固化標準
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        光固化樹脂列印完成後，需依據材料等級經過嚴格的超音波清洗與二次光固化，以達到預期的尺寸精確度與生物相容性。
                      </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                      <table className="w-full text-left border-collapse text-sm md:text-base">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="py-3.5 px-5 font-bold text-gray-900">材料類別</th>
                            <th className="py-3.5 px-5 font-bold text-gray-900">清洗程序 (IPA)</th>
                            <th className="py-3.5 px-5 font-bold text-gray-900">二次光固化參數</th>
                            <th className="py-3.5 px-5 font-bold text-gray-900">適用等級與環境</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          <tr className="hover:bg-gray-50/50">
                            <td className="py-3.5 px-5 text-gray-900 font-medium">模型樹脂 (Model)</td>
                            <td className="py-3.5 px-5 text-gray-600">3 + 2 分鐘 (雙槽)</td>
                            <td className="py-3.5 px-5 text-gray-600">2,000 次閃光 (或 UV 10 分)</td>
                            <td className="py-3.5 px-5 text-gray-600">一般空氣環境 (非口內)</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50">
                            <td className="py-3.5 px-5 text-gray-900 font-medium">臨時假牙樹脂 (Temp)</td>
                            <td className="py-3.5 px-5 text-gray-600">2 + 1 分鐘 (雙槽)</td>
                            <td className="py-3.5 px-5 text-gray-600">2,000 閃光 x 2 (需翻面)</td>
                            <td className="py-3.5 px-5 text-gray-600">建議充氮防氧阻聚 (Class IIa)</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50">
                            <td className="py-3.5 px-5 text-gray-900 font-medium">咬合板 / 導板 (Splint/Guide)</td>
                            <td className="py-3.5 px-5 text-gray-600">2 + 2 分鐘 (雙槽)</td>
                            <td className="py-3.5 px-5 text-gray-600">2,000 次閃光 (充氮固化)</td>
                            <td className="py-3.5 px-5 text-gray-600">醫療相容性認證 (Class I/IIa)</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50">
                            <td className="py-3.5 px-5 text-gray-900 font-medium">精密鑄造樹脂 (Castable)</td>
                            <td className="py-3.5 px-5 text-gray-600">3 + 2 分鐘 (雙槽)</td>
                            <td className="py-3.5 px-5 text-gray-600">2,000 次閃光 (確保完全聚合)</td>
                            <td className="py-3.5 px-5 text-gray-600">低灰份完全燃盡標準</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 保養與耗材更換 (Left image height matches right content height seamlessly) */}
      <section className="py-24 md:py-32 bg-[#36563C] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left: Image with height automatically matching right text container */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 w-full flex"
            >
              <div className="relative w-full h-full min-h-[320px] md:min-h-[420px] lg:min-h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/20">
                <img 
                  src={imgMaintenance} 
                  alt="保養與耗材更換" 
                  className="w-full h-full object-cover object-center absolute inset-0" 
                />
              </div>
            </motion.div>

            {/* Right: Content with high readability and crisp contrast */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 w-full flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-white" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  保養與耗材更換
                </h2>
              </div>
              <p className="text-lg text-white/95 leading-relaxed mb-8 font-normal">
                定期的設備保養與正確的耗材更換，是維持產線良率與設備壽命的最有效方法。以下提供各類設備的重點維護項目。
              </p>

              <div className="space-y-6">
                {/* 3D Printer Maintenance card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    3D 列印機日常維護
                  </h3>
                  <ul className="space-y-2.5 text-white/90 text-sm md:text-base">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-1 shrink-0" />
                      <span>樹脂槽 (Resin Tray) 清潔與離型膜檢查 (建議每週定期巡檢)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-1 shrink-0" />
                      <span>成型平台校正與表面殘留樹脂固化層清除</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-1 shrink-0" />
                      <span>光學玻璃與反射鏡表面除塵 (請使用專用無塵布，勿使用含水酒精)</span>
                    </li>
                  </ul>
                </div>

                {/* Milling Maintenance card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    齒雕／研磨機維護
                  </h3>
                  <ul className="space-y-2.5 text-white/90 text-sm md:text-base">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-1 shrink-0" />
                      <span>切削液 / 冷卻水濃度檢查與定時更換 (建議每月)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-1 shrink-0" />
                      <span>集塵器過濾袋檢查與內部粉塵定期清理</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-1 shrink-0" />
                      <span>主軸筒夾 (Collet) 清潔與專用保養油潤滑</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-1 shrink-0" />
                      <span>車針 (Bur) 加工壽命管理與定期幾何校正 (Calibration)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. 疑難排解 (Directly matching TechnicalSupport.tsx style) */}
      <section className="py-24 md:py-32 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-xs font-bold text-[#36563C] uppercase tracking-widest mb-3">
              TROUBLESHOOTING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              疑難排解
            </h2>
            <p className="text-lg text-gray-600">
              整理了設備操作與製程中最常見的異常狀況與排除指引，若在此找不到解答，歡迎隨時聯繫技術團隊。
            </p>
          </motion.div>

          <div className="space-y-4">
            <FAQItem 
              question="3D 列印物件經常掉落或無法附著在成型平台上？" 
              answer="這通常是底部曝光時間不足或平台未確實歸零導致。請先重新執行成型平台的 Z 軸歸零校正 (Calibration)。若問題持續，請檢查軟體中的「Burn-in layers (底部曝光)」時間是否足夠，或檢查樹脂槽底部的離型膜是否已霧化受損，必要時請更換新樹脂槽。"
            />
            <FAQItem 
              question="齒雕機加工出來的氧化鋯牙冠邊緣容易崩裂 (Chipping)？" 
              answer="請先檢查目前使用的車針 (Bur) 是否已達加工壽命上限（通常為 100-150 顆牙），磨損的刀具會導致過大切削應力。其次，檢查設計軟體中的邊緣厚度設定是否過薄（建議至少 0.2mm）。最後，確認排版 (Nesting) 時支撐點 (Support Pin) 避開了邊緣細微處。"
            />
            <FAQItem 
              question="氧化鋯燒結後顏色太白或透度不如預期？" 
              answer="透度不佳通常與燒結最高溫不足或持溫時間不夠有關；顏色偏白偏淡，可能是升溫速率過快導致材料未能完全緻密化，或是燒結爐內的加熱棒老化（如矽鉬棒老化）造成實際爐溫低於顯示溫度。建議使用原廠測溫環 (PTC Ring) 進行爐溫校正。"
            />
            <FAQItem 
              question="掃描機軟體無法順利拼接上下顎咬合模型？" 
              answer="請確認咬合紀錄（Bite registration）的掃描資料是否足夠清晰，並包含足夠的齒列與幾何特徵。掃描咬合時，建議切除多餘的軟組織干擾。如果在軟體中手動對位，請選擇特徵最明顯且無變形的 1-3 個點進行強制對齊。"
            />
            <FAQItem 
              question="設備螢幕顯示 'Spindle Error' 或 'Water Level Low'，該如何排除？" 
              answer="'Spindle Error' 通常表示主軸過載或筒夾卡死，請立即停機並聯繫崧達技術支援，切勿強行重啟造成馬達損壞。'Water Level Low' 則為冷卻水箱水位低於感測極限，請補充純水與原廠切削液至標準水位線，並檢查水管是否有折彎或濾網阻塞。"
            />
          </div>
        </div>
      </section>

      {/* 6. CTA (Consistent full-width CTA) */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="設備技術支援諮詢" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#36563C]/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
              Technical Assistance & Service
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              設備出現異常？立即聯繫技術團隊
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              專業的在地技術支援團隊，為您的數位產線保駕護航。無論是軟體排除、遠端協助或到府檢修，我們隨時準備為您服務。
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-[#36563C] bg-white rounded-sm hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                聯絡技術支援
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
