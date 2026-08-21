import { useState } from 'react';
import { ArrowRight, ChevronDown, Lightbulb, PenTool, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { usePageMeta } from '../lib/usePageMeta';

// Images
import imgHero from '../assets/images/hero_digital_assessment_1787206057309.jpg';
import imgReport from '../assets/images/assessment_report_1787206101518.jpg';

// Situation Images
import imgBottleneck from '../assets/images/sit_bottleneck_1787207296999.jpg';
import imgTraining from '../assets/images/sit_training_1787207315661.jpg';
import imgHighEnd from '../assets/images/sit_highend_1787207333157.jpg';
import imgScanner from '../assets/images/dental_cad_cam_1787196229677.jpg';

// CTA Images
import imgCtaBg from '../assets/images/dental_technician_lab_1787196258952.jpg';

const situations = [
  {
    num: '01',
    title: '傳統包埋鑄造 bottleneck',
    desc: '傳統包埋鑄造耗時長、成功率不穩定，導致產能無法提升',
    img: imgBottleneck,
    tag: '產能提升'
  },
  {
    num: '02',
    title: '人才與技術傳承',
    desc: '面臨資深技師退休潮或人才招募困難，急需標準化流程',
    img: imgTraining,
    tag: '標準化流程'
  },
  {
    num: '03',
    title: '高附加價值轉型',
    desc: '想拓展高階全瓷冠、植牙導板等高附加價值業務',
    img: imgHighEnd,
    tag: '業務拓展'
  },
  {
    num: '04',
    title: '診所數位介面對接',
    desc: '診所端客戶越來越多採用口內掃描機，必須銜接數位檔案',
    img: imgScanner,
    tag: '數位銜接'
  }
];

const faqs = [
  {
    question: '導入新設備會不會影響現有產能與出貨時間？',
    answer: '我們會為您規劃「分階段導入時程」，在不影響現有類比製程出貨的前提下，先從部分製程（如特定材質的單顆牙套）開始進行數位化轉換。透過雙軌並行，直到技師完全熟悉數位操作後，再逐步擴大應用範圍。'
  },
  {
    question: '我們的技師沒有數位軟體設計經驗，可以順利轉型嗎？',
    answer: '絕對可以。崧達不僅提供設備，更重視「教育訓練銜接」。我們會安排原廠認證的工程師，提供從基礎到進階的 CAD/CAM 軟體操作教學。針對初學者，我們有標準化的 SOP 指南，讓您的團隊能無痛接軌數位設計流程。'
  },
  {
    question: '數位化設備的維修與保固如何處理？如果停機怎麼辦？',
    answer: '我們在全台北中南皆配備專業維修工程師。一般軟體問題可透過遠端連線即時排除；硬體問題我們承諾在最短時間內到府檢修。針對關鍵產線設備，在特定合約方案下，我們亦可提供備機服務，將您的停機風險降至最低。'
  },
  {
    question: '如何確認投資這些數位設備能帶來實際的獲利？',
    answer: '在「設備選型建議與投資評估」階段，我們會根據您技工所目前的接單類型、每月件數與預計成長率，為您進行 ROI (投資報酬率) 分析。讓您的每一分設備投資，都能精準對應到未來的產能提升與人力成本節省。'
  }
];

const steps = [
  {
    num: '01',
    title: '預約諮詢',
    desc: '透過表單或電話說明目前的製程與需求，我們會安排專人聯繫。',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    num: '02',
    title: '現況評估',
    desc: '實地或遠端了解現有設備、產能與工作流程，盤點可優化的環節。',
    icon: <Search className="w-6 h-6" />
  },
  {
    num: '03',
    title: '規劃建議',
    desc: '提出設備選型、導入時程與教育訓練銜接建議，依預算分階段規劃。',
    icon: <Lightbulb className="w-6 h-6" />
  }
];

const scopeItems = [
  {
    title: '工作流程盤點',
    desc: '從掃描、設計到輸出後處理，檢視現有製程的瓶頸與重複工序。'
  },
  {
    title: '設備選型建議',
    desc: '依產能與案例類型，建議合適的掃描、列印或研磨設備組合。'
  },
  {
    title: '導入時程規劃',
    desc: '依預算與人力狀況，分階段規劃設備進場與流程轉換期程。'
  },
  {
    title: '教育訓練銜接',
    desc: '安排實作課程，協助團隊熟悉新設備與軟體的操作流程。'
  }
];

function AccordionItem({ question, answer, isOpen, onClick }: { key?: number | string, question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button 
        className="w-full text-left py-6 px-8 flex justify-between items-center focus:outline-none group transition-colors hover:bg-gray-50/50"
        onClick={onClick}
      >
        <span className={cn("text-base md:text-lg font-bold transition-colors", isOpen ? "text-brand-primary" : "text-gray-800")}>
          {question}
        </span>
        <ChevronDown className={cn("w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300", isOpen ? "rotate-180 text-brand-primary" : "rotate-0 text-gray-400")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-gray-50/30"
          >
            <div className="pb-8 px-8 text-gray-600 leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DigitalAssessment() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  usePageMeta({
    title: '牙科技工數位轉型評估｜崧達企業',
    description: '針對牙技所量身打造的數位化升級評估，從臨床案件類型、現有工作流程到設備選配，協助技工所平穩導入數位製程。',
  });

  return (
    <div className="flex flex-col bg-white">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="牙體技術所數位轉型評估" 
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
              Digital Transformation Assessment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              牙體技術所數位轉型評估：<br className="hidden sm:inline" />牙科數位化診斷與導入規劃
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              每間牙技所的規模、產能與流程需求都不同。我們提供從現況盤點到設備導入的規劃服務，協助釐清投資優先順序，建立適合的數位化路徑。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 什麼情況適合做牙科數位轉型評估 (Image Showcase Grid) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:mb-20 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">Target Scenarios</div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                什麼情況適合做牙科數位轉型評估
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                如果您的技工所正面臨以下挑戰，現在就是重新審視製程、進行數位化轉型的最佳時機：
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {situations.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col group"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm mb-6 relative">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded bg-brand-primary/90 text-white text-[10px] font-bold tracking-widest uppercase">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-black text-brand-primary/20 mt-1">{item.num}</span>
                  <div>
                    <h3 className="text-xl font-bold text-brand-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 評估流程與交付內容 (Clean Minimalist Steps) */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCtaBg} 
            alt="評估流程背景" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-24">
            <div className="text-xs font-bold text-white uppercase tracking-widest mb-3">
              Assessment Workflow
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              評估流程與交付內容
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              我們採用系統化的顧問式服務，從需求診斷到效益評估，為您量身打造循序漸進的升級藍圖。
            </p>
          </div>

          {/* Minimalist Steps Benchmark Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 relative">
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-white/20 z-0"></div>
            {steps.map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex-1 relative z-10"
              >
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-xl font-bold text-white mb-6 mx-auto lg:mx-0">
                  {step.num}
                </div>
                <div className="text-center lg:text-left">
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

      {/* 4. 評估後你會拿到什麼 (Scope & Deliverables) */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Image Container with Accent */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <img src={imgReport} alt="評估後你會拿到什麼" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-bg/50 -z-10 hidden lg:block"></div>
            </motion.div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Deliverables</div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-10 leading-tight">
                評估後你會拿到什麼
              </h2>
              <div className="space-y-8">
                {scopeItems.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-xs font-bold mt-1">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-primary mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 常見的轉型顧慮 (FAQ Accordion) */}
      <section className="py-24 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              常見的轉型顧慮
            </h2>
            <p className="text-gray-600 text-lg">
              我們了解投資新技術的擔憂，以下是我們經常收到的問題與解答：
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === i}
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>


      {/* 6. 預約評估 CTA (Full-Width with Background Image) */}
      <section className="relative w-full overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCtaBg} 
            alt="預約評估背景" 
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
            <div className="text-xs font-bold text-white/70 uppercase tracking-widest mb-4">
              Schedule An Assessment
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              預約評估
            </h2>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
              聯絡方式建置中，將由崧達企業提供後續更新。如需優先聯繫，歡迎透過技術支援頁面留下您的需求，我們將安排專屬顧問為您服務。
            </p>

            <div className="flex justify-center">
              <Link 
                to="/support/help-center" 
                className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-brand-primary bg-white rounded-sm hover:bg-brand-bg transition-colors group shadow-sm"
              >
                前往技術支援頁面
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

