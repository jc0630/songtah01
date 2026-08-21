import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Settings, PenTool, ShieldCheck, Phone, CheckCircle2, Wrench, HeadphonesIcon, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { SEO_DATA } from '../data';
import { usePageMeta } from '../lib/usePageMeta';

// Images
import imgHero from '../assets/images/tech_support_hero_1787213916459.jpg';
import imgProcess from '../assets/images/tech_support_process_1787213941345.jpg';
import imgWarranty from '../assets/images/tech_support_warranty_1787213962097.jpg';

// Scenario Images
import imgInstall from '../assets/images/services_reps_1787202887652.jpg';
import imgTraining from '../assets/images/sit_training_1787207315661.jpg';
import imgMaintenance from '../assets/images/service_maintenance_1787197564284.jpg';
import imgConsumables from '../assets/images/dental_materials_1787196270407.jpg';

const pageSeo = SEO_DATA.technicalSupport || {
  title: '技術支援',
  h1: '設備與製程的在地技術支援',
  description: '從安裝建置、教育訓練到售後維修與耗材補充，崧達企業提供完整的在地技術支援服務，確保您的牙科數位產線穩定運作。'
};

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

export function TechnicalSupport() {
  usePageMeta({
    title: '技術支援｜崧達企業',
    description: '崧達擁有專業的原廠認證工程師團隊，提供牙科設備安裝建置、實機教育訓練、定期保養維修與即時疑難排解服務。',
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
          {/* Deep brand color gradient overlay for richness */}
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
              Technical Support & Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {pageSeo.h1}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              從安裝建置、教育訓練到售後維修與耗材補充，崧達企業提供完整的在地技術支援服務，確保您的牙科數位產線穩定運作。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro / Scope (Full-bleed Background) */}
      <section className="relative py-32 md:py-48 bg-gray-900 flex flex-col justify-end min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgInstall} 
            alt="設備導入之後，我們持續在你身邊" 
            className="w-full h-full object-cover"
          />
          {/* Gradient to ensure text contrast at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <div className="text-xs font-bold text-[#4ADE80] uppercase tracking-widest mb-3">
              Continuous Partnership
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              設備導入之後，我們持續在你身邊
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              從安裝建置、操作教育訓練到售後維修與耗材補充，提供完整的技術支援服務，確保產線穩定運作。
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-white/20 pt-10"
          >
            {/* Scenario 1 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="text-[#4ADE80] text-sm font-bold tracking-wider">01</span>
                安裝建置
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                設備到貨後的現場安裝、精準校正與環境評估，確保首日即可上線。
              </p>
            </div>
            {/* Scenario 2 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="text-[#4ADE80] text-sm font-bold tracking-wider">02</span>
                教育訓練
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                操作與軟體使用教學，協助團隊快速上手，縮短學習曲線。
              </p>
            </div>
            {/* Scenario 3 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="text-[#4ADE80] text-sm font-bold tracking-wider">03</span>
                售後維修
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                專業技術人員故障排除與維修服務，將停機影響降至最低。
              </p>
            </div>
            {/* Scenario 4 */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="text-[#4ADE80] text-sm font-bold tracking-wider">04</span>
                耗材補充
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                樹脂、染劑、研磨工具等耗材的穩定供應與專屬補貨提醒。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. 牙科設備維修申請流程 (Clean Minimalist Steps Benchmark Layout) */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgProcess} 
            alt="維修申請流程背景" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-24">
            <div className="text-xs font-bold text-white uppercase tracking-widest mb-3">
              Maintenance Workflow
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              牙科設備維修申請流程
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              當設備發生異常時，請依照以下標準流程申請維修服務，我們的技術團隊將以最快速度為您排除障礙，恢復產線運作。
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 relative">
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-white/20 z-0"></div>
            {[
              {
                step: '01',
                title: '提出申請',
                desc: '透過電話或表單告知設備型號與異常狀況。'
              },
              {
                step: '02',
                title: '問題確認',
                desc: '技術人員初步判斷問題類型，提供排除建議。'
              },
              {
                step: '03',
                title: '維修處理',
                desc: '依需求安排到府服務或遠端協助，進行故障排除。'
              },
              {
                step: '04',
                title: '完成確認',
                desc: '設備修復後進行校正與測試，確保產線恢復穩定。'
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex-1 relative z-10"
              >
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-xl font-bold text-white mb-6 mx-auto lg:mx-0">
                  {item.step}
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 牙科設備保固說明 (Light Theme) */}
      <section className="py-24 md:py-32 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="text-xs font-bold text-[#36563C] uppercase tracking-widest mb-3">
              Warranty & Guarantee
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              牙科設備保固說明
            </h2>
            <p className="text-lg text-gray-600">
              崧達企業為代理之全系列數位牙科設備提供完善的原廠級保固。確保您的投資獲得最安心的保障。
            </p>
          </motion.div>

          <div className="bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-sm">
            <div className="w-full lg:w-5/12 relative min-h-[300px] lg:min-h-full">
              <img 
                src={imgWarranty} 
                alt="設備保固" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5"></div>
            </div>
            
            <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16">
              <div className="space-y-10">
                {/* Standard Warranty */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <ShieldCheck className="w-7 h-7 text-[#36563C]" />
                    <h3 className="text-2xl font-bold text-gray-900">標準保固範圍</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      '自裝機完成日起算，享有一年原廠標準保固。', 
                      '保固期間內，非人為因素導致之硬體故障，免收零件及維修費用。', 
                      '軟體授權及韌體更新享有技術諮詢支援。'
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#36563C] mt-2.5 shrink-0"></div>
                        <p className="text-gray-600 leading-relaxed text-lg">{text}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <div className="w-full h-px bg-gray-200"></div>

                {/* Exclusions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <PenTool className="w-7 h-7 text-gray-400" />
                    <h3 className="text-2xl font-bold text-gray-900">除外責任</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      '未依原廠操作手冊指示，或由非本公司授權人員進行拆解、改裝。', 
                      '消耗性零件（如：樹脂槽、過濾網、刀具等）之正常耗損。', 
                      '因天災、意外、電壓異常或不當使用環境造成之損壞。'
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 shrink-0"></div>
                        <p className="text-gray-500 leading-relaxed text-lg">{text}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* SLA Highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }} 
                  className="mt-8 p-6 bg-[#36563C]/5 rounded-xl border border-[#36563C]/10"
                >
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed flex items-start gap-3">
                    <span className="text-[#36563C] text-xl leading-none">*</span>
                    <span>針對高用量技工所或診所，我們另提供<strong className="text-gray-900 font-bold mx-1">延長保固專案</strong>與<strong className="text-gray-900 font-bold mx-1">年度定期保養合約 (SLA)</strong>，詳細方案請洽您的專屬業務窗口。</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 常見問題 (FAQ) */}
      <section className="py-24 md:py-32 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-xs font-bold text-[#36563C] uppercase tracking-widest mb-3">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              常見問題
            </h2>
            <p className="text-lg text-gray-600">
              整理了客戶最常詢問的維修與技術支援問題，若在此找不到解答，歡迎隨時聯繫我們。
            </p>
          </motion.div>

          <div className="space-y-4">
            <FAQItem 
              question="設備發生故障時，初步應該如何處理？" 
              answer="請先記錄故障現象，若螢幕有顯示錯誤代碼 (Error Code) 請務必拍照存檔。接著暫停使用該設備，並立即透過電話或官方表單聯繫我們的技術窗口，我們會指導您進行初步排除或安排維修。"
            />
            <FAQItem 
              question="工程師到府維修通常需要等待多久時間？" 
              answer="一般情況下，我們會在收到維修申請後的 24 小時內與您聯繫確認狀況。若需安排到府維修，通常會於 2-3 個工作天內安排專責工程師前往，緊急狀況則可啟動加急處理程序。"
            />
            <FAQItem 
              question="維修期間會提供備用機嗎？" 
              answer="若設備判定需要較長時間回廠檢修，且客戶已簽署「年度維護合約 (SLA)」或具備特殊保固條款，我們將視庫存狀況盡力安排同級備用機，以降低產線停工影響。"
            />
            <FAQItem 
              question="保固過後的維修與保養如何收費？" 
              answer="過保設備將酌收檢測費（含出車費用）與零件費。工程師在檢測後會提供詳細的維修報價單，經您確認同意後才會進行維修作業。為確保設備穩定，強烈建議定期安排保養校正。"
            />
            <FAQItem 
              question="操作軟體忘記如何使用，可以重新安排教育訓練嗎？" 
              answer="可以的！針對新進員工培訓或軟體功能複習，我們提供付費的客製化教育訓練課程。若是軟體升級帶來的功能變更，我們也會不定期舉辦技術講座或線上教學，歡迎隨時關注最新活動資訊。"
            />
          </div>
        </div>
      </section>

      {/* 6. CTA */}
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
              <Link 
                to="/support/help-center" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-sm transition-colors"
              >
                前往說明中心
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
