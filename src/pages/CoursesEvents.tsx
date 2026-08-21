import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, User, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { SEO_DATA } from '../data';
import { usePageMeta } from '../lib/usePageMeta';

// Image imports - professional dental technology training, workshops, and exhibitions
import imgHero from '../assets/images/course_hero_banner_1787213546440.jpg'; 
import imgNeed1 from '../assets/images/sit_bottleneck_1787207296999.jpg'; 
import imgNeed2 from '../assets/images/asiga_3d_printer_dental_1787211175160.jpg'; 
import imgNeed3 from '../assets/images/dental_materials_1787196270407.jpg'; 
import imgNeed4 from '../assets/images/services_reps_1787202887652.jpg'; 

import imgFormat1 from '../assets/images/course_workshop_hands_1787213559325.jpg'; 
import imgFormat2 from '../assets/images/sit_training_1787207315661.jpg'; 
import imgFormat3 from '../assets/images/dental_expo_booth_1787213575694.jpg'; 

import imgApply from '../assets/images/dental_technician_lab_1787196258952.jpg'; 

import imgCourse1 from '../assets/images/dental_3d_printed_applications_1787211189531.jpg';
import imgCourse2 from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgCourse3 from '../assets/images/sit_highend_1787207333157.jpg';

import imgEvent1 from '../assets/images/services_exhibition_1787202876583.jpg';
import imgEvent2 from '../assets/images/hero_wide_dental_1787197373982.jpg';

import imgCta from '../assets/images/course_custom_plan_1787213588632.jpg';

// Article Data for preview
const courses = [
  {
    id: 'c1',
    image: imgCourse1,
    title: '3D 列印醫材與樹脂材料應用實務班',
    date: '2024.08.15',
    instructor: '王技師',
    summary: '深入探討多種牙科樹脂的特性與適用情境，涵蓋參數設定、後處理與臨床實際案例分享。'
  },
  {
    id: 'c2',
    image: imgCourse2,
    title: '數位牙體技術：從口掃到 CAM 加工全流程',
    date: '2024.09.05',
    instructor: '陳醫師',
    summary: '針對技工所與診間數位轉型，實地演練口內掃描檔案的匯入、設計及排版加工。'
  },
  {
    id: 'c3',
    image: imgCourse3,
    title: 'Zirkonzahn 系統進階美學設計工作坊',
    date: '2024.09.20',
    instructor: 'Zirkonzahn 認證講師',
    summary: '進階軟體操作與美學設計，探討前牙美學與複雜植牙牙橋的軟體設計技巧與參數微調。'
  }
];

const events = [
  {
    id: 'e1',
    image: imgEvent1,
    title: '2024 台灣牙科數位科技展 (TDC)',
    date: '2024.11.10 - 11.12',
    location: '台北南港展覽館',
    summary: '崧達企業將於大會展示最新 ASIGA ULTRA 3D 列印機與全新透鋯材料，歡迎蒞臨體驗。'
  },
  {
    id: 'e2',
    image: imgEvent2,
    title: 'ASIGA 新機發表與技術交流晚宴',
    date: '2024.12.05',
    location: '台北寒舍艾美酒店',
    summary: '邀請原廠技師分享次微米級智慧剝離技術，並與國內頂尖牙科技師交流臨床心得。'
  }
];

export function CoursesEvents() {
  const seo = SEO_DATA['/courses-events'];

  usePageMeta({
    title: '課程與活動｜崧達企業',
    description: '崧達定期舉辦數位牙科實作工作坊、原廠技術研討會與展會活動，不只展示設備，更協助您將新技術順利導入日常工作流程。',
  });

  return (
    <div className="w-full">
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={imgHero}
            alt="牙科專業課程與活動"
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
              Courses & Events
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              課程與活動｜不只參加一場活動，而是把新技術帶回工作現場
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              從設備操作到材料應用，我們規劃符合臨床與技工所實際需求的技術講習，讓每一次的學習都能轉化為產線升級的動能。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 從需求選主題 (Topics based on needs) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:mb-20 max-w-2xl">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Start From Needs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              從需求選主題
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              您的痛點就是我們課程設計的出發點。無論是提升良率、導入新材料，或建立標準化數位製程，都能找到對應的學習資源。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col"
            >
              <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-xl mb-4 relative">
                <img src={imgNeed1} alt="數位製程" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">數位製程導入</div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">針對診間與技工所的數位化痛點，建立從口掃到加工的標準工作流。</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col"
            >
              <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-xl mb-4 relative">
                <img src={imgNeed2} alt="設備操作" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">進階設備操作</div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">深度解析 3D 列印機與齒雕機的參數微調，提升產品良率與穩定度。</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group flex flex-col"
            >
              <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-xl mb-4 relative">
                <img src={imgNeed3} alt="材料應用" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">新材料應用</div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">掌握最新氧化鋯、玻璃陶瓷與醫材級樹脂的特性與後處理技巧。</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group flex flex-col"
            >
              <div className="aspect-square w-full overflow-hidden bg-gray-100 rounded-xl mb-4 relative">
                <img src={imgNeed4} alt="技術交流" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">實戰技術交流</div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">與業界資深講師與同業進行案例研討，分享實際遭遇的臨床難題與解法。</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. 確認場次與形式 (Formats) - Asymmetric layout */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Event Formats
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              確認場次與形式
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              我們提供多元的活動形式，從百人規模的大型展會到深度的實作工坊，您可以依據團隊的參與目的選擇最適合的場次。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Main large block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:row-span-2 relative rounded-2xl overflow-hidden group bg-white border border-gray-200/80"
            >
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full w-full">
                <img src={imgFormat1} alt="實體專業課程" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">深度實體課程與工坊</h3>
                  <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-md">由原廠認證講師與業界專家親自授課，包含實機操作、軟體排版練習與參數調校指導，確保紮實的技術吸收。</p>
                </div>
              </div>
            </motion.div>

            {/* Smaller block 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-gray-200/80 group"
            >
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden relative shrink-0">
                <img src={imgFormat2} alt="客製化技術講習" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">客製化到府講習</h3>
                <p className="text-sm text-gray-600 leading-relaxed">針對個別技工所或診所的設備現況與人員組成，規劃專屬的到府技術指導與痛點排除。</p>
              </div>
            </motion.div>

            {/* Smaller block 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-gray-200/80 group"
            >
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden relative shrink-0">
                <img src={imgFormat3} alt="大型展會與設備展示" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">大型展會與設備展示</h3>
                <p className="text-sm text-gray-600 leading-relaxed">參與年度指標性牙科展覽，近距離體驗最新設備效能，並與國內外原廠代表直接交流。</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. 把內容帶回現場 (Apply) - Large Feature Image */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgEvent2} 
            alt="把內容帶回現場背景" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <div className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                Practical Application
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                把內容帶回現場，才是學習的真正目的
              </h2>
              <div className="w-12 h-1 bg-brand-primary mb-8"></div>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                我們深知參加課程最怕「聽起來很棒，但不知道怎麼做」。因此崧達的課程設計極度強調實務與落地性。
              </p>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
                講師將帶領您解析實際產線中可能遇到的誤差、失敗原因與設備參數極限，並提供可以直接複製回實驗室的 SOP 流程建議，讓新技術無縫接軌您的日常作業。
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center text-sm font-bold text-white border-b border-white pb-1 group"
              >
                <span>聯絡我們安排專屬訓練</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-800 shadow-2xl border border-white/10">
                <img src={imgApply} alt="實際應用在工作現場" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. 牙科專業課程 (Extensible Course List) */}
      <section className="py-24 md:py-32 bg-gray-50 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
                Professional Courses
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                牙科專業課程
              </h2>
              <p className="text-gray-600 text-base max-w-2xl">
                近期舉辦的技術實作與專題講座，點擊查看課程大綱與報名資訊。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Link to="/contact" className="group block bg-white rounded-xl border border-gray-200/80 overflow-hidden hover:border-brand-primary/40 hover:shadow-md transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-sm shadow-xs flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                      {course.date}
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4 text-xs font-medium text-gray-500">
                      <User className="w-3.5 h-3.5" />
                      講師：{course.instructor}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {course.summary}
                    </p>
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-sm font-bold text-brand-primary">
                      了解課程詳情
                      <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 牙科展會活動 (Exhibitions - Different Layout) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">
              Exhibitions & Events
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              牙科展會活動
            </h2>
            <p className="text-gray-600 text-base max-w-2xl">
              邀請您參與年度盛會與品牌專屬發表活動，掌握牙科最新發展趨勢。
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:gap-12">
            {events.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to="/contact" className="group flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 hover:border-brand-primary/40 transition-all duration-300">
                  <div className="md:w-1/2 lg:w-3/5 aspect-[16/9] md:aspect-auto overflow-hidden relative">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="md:w-1/2 lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-bold text-gray-500">
                      <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-sm shadow-xs border border-gray-100">
                        <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-sm shadow-xs border border-gray-100">
                        <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                        {event.location}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                      {event.summary}
                    </p>

                    <div className="mt-auto inline-flex items-center text-sm font-bold text-brand-primary">
                      查看活動詳情
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA: 找不到適合的場次 */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgCta} 
            alt="教育訓練與技術交流" 
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            找不到適合的場次？<br />也可以從需求開始規劃
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-normal">
            我們提供客製化的到府技術講習與團隊教育訓練。無論是新設備導入指導，或是特定材料的製程優化，都能為您的團隊量身打造專屬課程。
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-brand-primary hover:bg-brand-primary/90 rounded-sm transition-colors shadow-lg"
          >
            聯絡崧達討論客製課程
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
