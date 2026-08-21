import { ArrowRight, CheckCircle2, Award, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePageMeta } from '../lib/usePageMeta';

// Images
import imgAboutHero from '../assets/images/about_office_1787202180371.jpg';
import imgIntlTech from '../assets/images/dental_cad_cam_1787196229677.jpg';
import imgService1 from '../assets/images/hero_dental_equipment_1787196216501.jpg';
import imgService2 from '../assets/images/service_maintenance_1787197564284.jpg';
import imgWarehouse from '../assets/images/about_warehouse_1787202214507.jpg';
import imgBrands from '../assets/images/dental_materials_1787196270407.jpg';
import imgCertificates from '../assets/images/about_certificates_1787202198891.jpg';

export function About() {
  usePageMeta({
    title: '關於崧達｜崧達企業',
    description: '深耕台灣牙科產業逾四十年，長期在地服務，讓國際數位技術真正接上台灣牙科工作現場。',
  });

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      
      {/* 1. Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgAboutHero} 
            alt="崧達企業總部" 
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
              Company Overview
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              崧達企業（崧達牙材）｜台灣牙科材料設備代理商，深耕產業逾四十年
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              我們以專業、誠信為本，不僅引進全球頂尖的數位牙科技術，更致力於將這些技術無縫轉化為在地診所與技工所可實際操作的製程。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. 崧達連結國際技術 (Main Visual Intro Section) */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={imgIntlTech} 
                    alt="連結國際技術" 
                    className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Accent box */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-primary/5 rounded-2xl -z-10 hidden md:block"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-block px-3 py-1 rounded bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase mb-4">
                Global Partnerships
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                崧達連結國際技術，建立在地可行的牙科數位製程
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                面對日新月異的牙科數位化浪潮，我們深知引進先進設備僅是第一步。崧達的核心價值在於「技術落地」——我們不僅篩選國際優質品牌，更針對台灣牙醫生態與技工環境，進行深度的參數調校與製程驗證。
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                從口內掃描、CAD 軟體設計，到 CAM 切削與 3D 列印輸出，我們確保每一個數位環節都能完美銜接，降低客戶的試錯成本，讓高階科技真正成為您日常工作的穩定助力。
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">國際接軌</div>
                    <div className="text-xs text-gray-500">引進歐美頂尖設備</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">技術落地</div>
                    <div className="text-xs text-gray-500">針對在地環境調校</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. 崧達提供的服務 (Standard Service Display) */}
      <section className="py-24 md:py-32 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">Our Services</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                崧達提供的服務
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                全方位的數位轉型支援，從硬體設備到在地維護，我們為您建立穩定的生產線。
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors uppercase tracking-wide">
              查看詳細服務 <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: '設備評估與材料供應',
                desc: '針對您的實際產能需求，提供客製化的 3D 列印機、CAD/CAM 切削設備導入評估，並穩定供應高階材料。',
                img: imgService1,
                link: '/products',
                label: 'Equipment & Materials'
              },
              {
                title: '原廠級技術支援與維護',
                desc: '擁有原廠認證的在地工程師團隊，提供即時排障、軟體教學與到府維修服務，確保您的數位製程不中斷。',
                img: imgService2,
                link: '/support/help-center',
                label: 'Technical Support'
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[10%] group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase border border-white/20 rounded-full">
                      {service.label}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-primary/80 transition-colors uppercase tracking-wide group/btn"
                  >
                    查看詳情 <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 崧達作為代理商的意義 (Full-width Image + Text Section) */}
      <section className="relative py-32 md:py-48 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgWarehouse} 
            alt="崧達代理商的意義" 
            className="w-full h-full object-cover grayscale-[30%]"
          />
          <div className="absolute inset-0 bg-brand-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-bold tracking-widest uppercase mb-8 border border-white/20">
              Distributor Value
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              崧達作為代理商的意義
            </h2>
            <p className="text-xl text-white/90 leading-relaxed font-light">
              在高度依賴設備穩定性的牙科產業中，優秀的代理商絕不僅是貿易橋樑，更是維持生產線運作的關鍵防線。
            </p>
            <div className="w-24 h-1 bg-white/30 mx-auto my-10"></div>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              我們建立完整的在地零組件庫存與快速的物流系統，避免因海外待料導致的長期停工。同時，我們吸收並轉譯國外的技術手冊，提供符合在地語言與習慣的教育訓練，成為您最堅實的後盾。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. 崧達代理品牌與原廠授權 (Brand Grid Section) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 md:mb-24">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">Authorized Brands</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              崧達代理品牌與原廠授權
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              我們以嚴謹的標準挑選合作夥伴，旗下代理品牌皆為全球牙科領域的技術領先者。獲得原廠直接授權，代表我們具備原廠認可的維修技術、技術支援能力，並能提供最新、最純正的原廠材料。
            </p>
          </div>

          {/* Asymmetrical Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {[
              { title: 'Zirkonzahn', category: 'CAD/CAM System', img: imgBrands, colSpan: 'lg:col-span-7', aspectRatio: 'aspect-[16/10] lg:aspect-auto lg:h-[400px]' },
              { title: 'Asiga', category: '3D Printing', img: imgIntlTech, colSpan: 'lg:col-span-5', aspectRatio: 'aspect-[4/3] lg:aspect-auto lg:h-[400px]' },
              { title: 'GenCore', category: 'Milling Technology', img: imgService1, colSpan: 'lg:col-span-5', aspectRatio: 'aspect-[4/3] lg:aspect-auto lg:h-[400px]' },
              { title: 'MAI', category: 'Advanced Processing', img: imgService2, colSpan: 'lg:col-span-7', aspectRatio: 'aspect-[16/10] lg:aspect-auto lg:h-[400px]' },
            ].map((brand, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative group ${brand.colSpan} ${brand.aspectRatio} rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-end bg-gray-50`}
              >
                <img 
                  src={brand.img} 
                  alt={brand.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80"></div>
                
                <div className="relative z-10 p-8 md:p-10">
                  <div className="text-xs font-bold text-brand-bg/80 uppercase tracking-widest mb-2">{brand.category}</div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{brand.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 崧達的證照與資格 (Certificate Gallery) */}
      <section className="py-24 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3">Professional Qualifications</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              崧達的證照與資格
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              專業不只是一句承諾，更建立在合規與認證的基礎上。崧達企業擁有完整合法的販售許可，技術團隊更具備原廠專業考核認證。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[1, 2, 3, 4].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[3/4] bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 p-2 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                  <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden relative">
                    <img 
                      src={imgCertificates} 
                      alt={`證照 ${item}`} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-brand-primary">
                        <Award className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="font-bold text-gray-900 text-sm mb-1">
                    {idx === 0 ? '醫療器材販賣業許可' : idx === 1 ? 'TFDA 查驗登記證' : idx === 2 ? '原廠技術服務認證' : '精密設備維修執照'}
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest">SongDa Enterprise</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
