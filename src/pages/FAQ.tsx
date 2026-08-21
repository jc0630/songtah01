import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { SEO_DATA } from '../data';
import { usePageMeta } from '../lib/usePageMeta';

// Images
import imgBanner from '../assets/images/service_maintenance_1787197564284.jpg';
import imgCTA from '../assets/images/help_hero_1787215351364.jpg';
import imgFAQ from '../assets/images/tech_support_process_1787213941345.jpg';

const pageSeo = SEO_DATA['/support/faq'] || {
  h1: '牙科設備維修常見問題',
  h2: ['常見問題解答', '維修與保固']
};

const FAQItem = ({ index, question, answer }: { index: string, question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0 group">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full items-start justify-between py-6 text-left focus:outline-none transition-colors"
      >
        <div className="flex items-start flex-1 mr-4">
          <span className={cn(
            "text-lg md:text-xl font-bold mr-4 md:mr-6 shrink-0 transition-colors duration-300",
            isOpen ? "text-[#36563C]" : "text-gray-300 group-hover:text-[#36563C]/60"
          )}>
            {index}
          </span>
          <h3 className={cn(
            "text-lg md:text-xl font-bold transition-colors duration-300",
            isOpen ? "text-[#36563C]" : "text-gray-900 group-hover:text-[#36563C]"
          )}>
            {question}
          </h3>
        </div>
        <span className={cn(
          "flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-[#36563C] group-hover:text-white shrink-0 border border-gray-200 group-hover:border-[#36563C] mt-0.5 md:mt-0",
          isOpen && "bg-[#36563C] text-white border-[#36563C] rotate-180"
        )}>
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
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
            <div className="pb-6 pl-10 md:pl-14">
              <div className="bg-[#F4F7F5] p-5 md:p-6 rounded-lg text-gray-700 leading-relaxed text-base border border-gray-100">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function FAQ() {
  usePageMeta({
    title: '常見問題 FAQ｜崧達企業',
    description: '整理牙科數位設備常見問題、故障排除步驟、保固與售後維修相關說明，即時解答您的疑問。',
  });

  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgBanner} 
            alt={pageSeo.h1} 
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
              Frequently Asked Questions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {pageSeo.h1}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              為您解答牙科設備維修、保固與售後服務中最常見的疑問。幫助您快速了解維修流程與權益，確保產線持續穩定運作。
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section with Image + Accordion Layout */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: Sticky Image */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 hidden md:block">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-gray-100 border border-gray-100"
              >
                <img 
                  src={imgFAQ} 
                  alt="設備維修技術支援" 
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>

            {/* Right side: Numbered Accordion FAQ */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">常見問題與維修指引</h2>
                <p className="text-gray-600">若在此找不到解答，歡迎隨時聯繫技術團隊。</p>
              </motion.div>

              <div className="space-y-1">
                <FAQItem 
                  index="01"
                  question="牙科設備出現異常，第一步該做什麼？" 
                  answer="請先記錄設備螢幕上的錯誤代碼（Error Code）或異常提示，並將發生異常時的操作步驟與畫面拍照。接著，您可以先查閱「說明中心」的疑難排解，若無法排除，請立即聯繫我們的技術支援團隊，我們會透過遠端連線或電話協助您初步診斷。"
                />
                <FAQItem 
                  index="02"
                  question="保固期內維修收費嗎？" 
                  answer="在正常操作使用下，保固期內的設備非人為損壞維修均為免費，包含零件更換與工程師檢修工資。唯消耗性零件（如車針、濾網、列印槽離型膜等）與人為操作不當造成之損壞，不在此保固免費範圍內。"
                />
                <FAQItem 
                  index="03"
                  question="維修期間有備用機嗎？" 
                  answer="針對特定關鍵製程設備（如指定的 3D 列印機或掃描機型號），若經工程師評估無法於短時間內現場修復，且您有簽署進階維護合約（SLA），我們將盡力安排提供同等級之備用機，以確保您的診所或技工所產線不中斷。"
                />
                <FAQItem 
                  index="04"
                  question="耗材多久需要更換？" 
                  answer="耗材更換頻率取決於設備機型與您的使用量。例如：3D 列印機的樹脂槽離型膜建議每週檢查，視霧化程度更換；齒雕機的切削液與過濾袋建議每月更換。詳細的更換週期表，請參閱隨機附上的設備保養手冊或至本站「說明中心」查詢。"
                />
                <FAQItem 
                  index="05"
                  question="外縣市也能到府維修嗎？" 
                  answer="是的，崧達企業的技術服務網涵蓋全台。不論您位於北、中、南或東部地區，我們都有專屬或合作的駐點技術工程師為您提供到府維修服務。偏遠地區可能會酌收額外的交通處理費，詳情請洽專責業務。"
                />
                <FAQItem 
                  index="06"
                  question="非崧達售出的設備能維修嗎？" 
                  answer="我們主要負責由崧達企業代理與售出之設備的保固與維護。若您的設備並非由我們售出，但屬於我們代理的品牌型號，我們仍可提供自費檢修與單次維護服務（需視原廠零件供應狀況而定），歡迎來電洽詢維修方案。"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCTA} 
            alt="聯絡技術支援" 
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
              仍有其他維修與保固問題？
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-10 font-normal">
              歡迎直接聯繫我們的客服與技術支援團隊。我們將由專人為您提供一對一的諮詢服務。
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
