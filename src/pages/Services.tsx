import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { usePageMeta } from '../lib/usePageMeta';

// Images
import imgHero from '../assets/images/services_hero_1787202841607.jpg';
import imgLab from '../assets/images/dental_technician_lab_1787196258952.jpg';
import imgClinic from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgInventory from '../assets/images/about_warehouse_1787202214507.jpg';
import imgTrial from '../assets/images/services_trial_1787202852169.jpg';
import imgEdu from '../assets/images/services_education_1787202865679.jpg';
import imgExhibit from '../assets/images/services_exhibition_1787202876583.jpg';
import imgMaintenance from '../assets/images/service_maintenance_1787197564284.jpg';
import imgReps from '../assets/images/services_reps_1787202887652.jpg';

export function Services() {
  usePageMeta({
    title: '服務項目｜崧達企業',
    description: '崧達企業提供全方位的數位牙科導入服務，包含牙科技工數位轉型評估、診間數位製程導入、教育訓練與展會技術支援。',
  });

  return (
    <div className="flex flex-col bg-white">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="崧達企業服務項目" 
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
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              提供全方位的數位牙科解決方案
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              從設備評估導入、耗材穩定供應到原廠級維修保固，崧達企業致力於成為您數位轉型路上的最佳後盾。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 牙科數位製程服務：從設備導入、產品選擇到技術支援 */}
      <section className="py-24 md:py-32 relative bg-gray-50 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:mb-20 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              牙科數位製程服務
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              從設備導入、產品選擇到技術支援。我們針對不同場域的專業需求，量身打造最合適的數位製程升級方案。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* 牙科技工數位轉型評估 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={imgLab} alt="牙科技工數位轉型評估" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs font-bold text-white/90 uppercase tracking-widest mb-1 shadow-sm">Laboratory</div>
                  <h3 className="text-2xl font-bold text-white">牙科技工數位轉型評估</h3>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  專為牙技所設計的產能倍增計畫。我們分析您現有的排程與流程瓶頸，從高階 3D 列印到五軸切削，為您規劃最適切的自動化設備組合，確保轉型投資帶來最實質的產能提升。
                </p>
                <ul className="space-y-3 mb-8">
                  {['產能與空間動線評估', '自動化切削設備與材料選型', 'CAD/CAM 軟體進階技術指導'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services/lab-digital-transformation" className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors uppercase tracking-wide group/link">
                  了解技工轉型方案 <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* 診間數位製程導入 */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={imgClinic} alt="診間數位製程導入" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs font-bold text-white/90 uppercase tracking-widest mb-1 shadow-sm">Clinic</div>
                  <h3 className="text-2xl font-bold text-white">診間數位製程導入</h3>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  協助診所建構高效的單次就診（Single-visit）修復體驗。從口內掃描器到診間型研磨機，我們提供完整的空間規劃建議、材料選擇指引與助理操作培訓，讓臨床數位化無縫接軌。
                </p>
                <ul className="space-y-3 mb-8">
                  {['口掃機與研磨機連線設定', '單塊瓷塊快速結晶與染色教學', '醫師與助理標準操作流程建立'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services/clinic-digital-workflow" className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors uppercase tracking-wide group/link">
                  了解診間導入方案 <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 牙科產品供應與在地庫存 */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
            <div className="w-full lg:w-7/12 relative z-0">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-sm">
                <img src={imgInventory} alt="在地庫存" className="w-full h-full object-cover" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gray-100 hidden lg:block -z-10 rounded-tl-3xl"></div>
            </div>
            
            <div className="w-full lg:w-6/12 bg-white p-10 md:p-14 lg:-ml-24 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-t-4 border-brand-primary relative">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Supply & Inventory</div>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">
                牙科產品供應與在地庫存
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                崧達嚴格控管產品品質與交期。我們在台灣建立完善的恆溫倉儲與零件備品庫存系統，確保氧化鋯、玻璃陶瓷及各式 3D 列印樹脂等日常耗材皆能穩定且快速地送達您的手中。
              </p>
              <p className="text-gray-600 leading-relaxed">
                降低您的庫存壓力與待料風險，讓生產線維持最高效率的持續運轉。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 樣品試用與導入協助 */}
      <section className="py-24 md:py-32 bg-brand-primary relative overflow-hidden">
        {/* Background decorative pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-5/12 order-2 lg:order-1">
              <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">Trial & Implementation</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                樣品試用與導入協助
              </h2>
              <p className="text-brand-bg/90 leading-relaxed mb-8">
                任何新設備與新材料的轉換都存在門檻。為了確保您的投資效益，我們提供特定設備的打樣測試與材料樣品試用。
              </p>
              <p className="text-brand-bg/90 leading-relaxed mb-8">
                由專屬技術顧問與您一同檢視成品細節、切削精度與色彩表現。在確認符合您的臨床與技工標準後，我們再協助您進行完整的系統建置與參數轉移。
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-brand-primary bg-white rounded-sm hover:bg-gray-50 transition-colors shadow-sm">
                申請試用與展示
              </Link>
            </div>
            <div className="w-full lg:w-7/12 order-1 lg:order-2">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl border-4 border-white/10">
                <img src={imgTrial} alt="樣品試用" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 教育課程與臨床講習 */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Education</div>
              <h2 className="text-3xl font-bold text-brand-primary mb-4">教育課程與臨床講習</h2>
              <p className="text-gray-600 leading-relaxed">
                崧達重視技術傳承。我們定期邀請國內外臨床專家與資深牙技師，舉辦實體操作課程、線上研討會與認證講習，與您分享最新的數位牙科趨勢與實戰經驗。
              </p>
            </div>
            <Link to="/courses-events" className="hidden md:inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors">
              查看近期課程 <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="aspect-[21/9] md:aspect-[2.5/1] w-full overflow-hidden">
              <img src={imgEdu} alt="教育課程" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Subtle gradient overlay to make image blend well */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex justify-between items-end">
               <div>
                  <h3 className="text-2xl font-bold text-white mb-2">掌握最新的技術參數與軟體應用</h3>
                  <p className="text-white/80 max-w-xl">從基礎的口掃操作到進階的微笑曲線設計、全口重建植牙導板規劃，為您的團隊注入持續進化的專業動能。</p>
               </div>
               <Link to="/courses-events" className="md:hidden inline-flex items-center text-sm font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-sm transition-colors">
                 查看課程
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 & 7: 展會與展示 / 設備維修 (Grid layout) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* 展會與到府展示 */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={imgExhibit} alt="展會與到府展示" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Exhibitions & Demos</div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">展會與到府展示</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  我們積極參與年度各大牙材展覽與學術大會，將國際最新發表的設備實機引進台灣展示。若您無法親臨現場，我們亦提供專業人員攜帶設備到府展示的服務，讓您在熟悉的環境中親自體驗設備效能。
                </p>
                <Link to="/courses-events" className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors">
                  關注展會資訊 <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 設備維修與保固 */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={imgMaintenance} alt="設備維修與保固" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Maintenance & Support</div>
                <h3 className="text-2xl font-bold text-brand-primary mb-4">設備維修與保固</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  購買設備只是合作的開始。崧達建立原廠認證的工程師團隊，提供透明完善的保固條款。無論是線上遠端排除軟體異常，或是到府進行硬體檢修保養，我們都致力於用最快的速度恢復您的生產力。
                </p>
                <Link to="/support/help-center" className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors">
                  前往技術支援中心 <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. 分區專屬業務 */}
      <section className="py-24 md:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="aspect-square max-h-[500px] overflow-hidden rounded-full border-8 border-gray-50 mx-auto">
                <img src={imgReps} alt="分區專屬業務" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">Local Representatives</div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                分區專屬業務服務
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                我們深知即時服務的重要性。崧達在北、中、南區皆配置具備專業數位牙科知識的專屬業務代表。
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/5 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    <span className="text-brand-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-primary mb-2">單一聯絡窗口</h4>
                    <p className="text-gray-600">從初期的需求訪談、報價諮詢，到後期的交機驗收與耗材叫貨，您的專屬業務都將全程跟進。</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/5 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    <span className="text-brand-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-primary mb-2">深入了解您的痛點</h4>
                    <p className="text-gray-600">透過長期的在地互動，我們更懂您的工作習慣，能主動提供最符合您診所或技工所現況的解決方案。</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-gray-100">
                <Link to="/contact" className="inline-flex items-center text-sm font-bold text-brand-primary uppercase tracking-wide group hover:text-brand-primary/80 transition-colors">
                  聯繫我們分區業務 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
