import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { SEO_DATA } from '../data';
import { usePageMeta } from '../lib/usePageMeta';

// Images
import imgBanner from '../assets/images/tech_support_hero_1787213916459.jpg';

const pageSeo = SEO_DATA['/contact'] || {
  h1: '聯絡崧達',
  h2: ['聯絡我們', '客戶服務']
};

export function Contact() {
  usePageMeta({
    title: '聯絡崧達｜崧達企業',
    description: '歡迎聯繫崧達企業，我們提供設備諮詢、實機展示、材料採購與售後維修等專業技術服務。',
  });

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    type: '一般諮詢',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('表單已成功送出！我們的專業團隊將盡快與您聯繫。');
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      type: '一般諮詢',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Banner */}
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
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {pageSeo.h1}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl font-normal">
              無論您需要產品諮詢、技術支援或是專案合作，我們的專業團隊隨時為您提供最即時的協助。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content: Info & Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Info & Map */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">聯絡資訊</h2>
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-[#36563C]/10 flex items-center justify-center shrink-0 mr-5">
                      <Phone className="w-5 h-5 text-[#36563C]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">客服電話</h3>
                      <p className="text-gray-600 mb-2">免付費專線 (僅限台灣)</p>
                      <a href="tel:0800-123-456" className="text-xl font-bold text-[#36563C] hover:text-[#36563C]/80 transition-colors">0800-123-456</a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-[#36563C]/10 flex items-center justify-center shrink-0 mr-5">
                      <Mail className="w-5 h-5 text-[#36563C]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">電子郵件</h3>
                      <p className="text-gray-600 mb-2">我們將於 1-2 個工作日內回覆</p>
                      <a href="mailto:service@songda.com.tw" className="text-lg font-bold text-[#36563C] hover:text-[#36563C]/80 transition-colors break-all">service@songda.com.tw</a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-[#36563C]/10 flex items-center justify-center shrink-0 mr-5">
                      <Clock className="w-5 h-5 text-[#36563C]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">服務時間</h3>
                      <p className="text-gray-600 mb-2">週一至週五 (國定假日休息)</p>
                      <p className="text-lg font-bold text-[#36563C]">09:00 - 18:00</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-[#36563C]/10 flex items-center justify-center shrink-0 mr-5">
                      <MapPin className="w-5 h-5 text-[#36563C]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">台北總部暨展示中心</h3>
                      <p className="text-gray-600 mb-2 leading-relaxed">104 台北市中山區南京東路 123 號 8 樓</p>
                      <p className="text-sm text-gray-500">捷運松江南京站步行約 3 分鐘，大樓後方設有付費停車場</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[320px] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200 relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.542456487926!2d121.53018151537871!3d25.051918383963498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9675ebc40e5%3A0xc3afbfccfcb670f9!2sSongjiang%20Nanjing%20Station!5e0!3m2!1sen!2stw!4v1684570000000!5m2!1sen!2stw" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="崧達企業位置地圖"
                  className="transition-all duration-700 absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </motion.div>

            {/* Right Column: Form Container */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-[#F4F7F5] rounded-3xl p-8 md:p-12 border border-[#E8EEE9]"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">線上留言與諮詢</h2>
                <p className="text-gray-700 leading-relaxed">
                  請填寫下方表單，告訴我們您的需求或疑問，我們將盡快安排專人為您服務。標示 <span className="text-red-500">*</span> 為必填欄位。
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700">姓名 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-[#36563C] focus:ring-2 focus:ring-[#36563C]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 shadow-sm"
                      placeholder="王大明"
                    />
                  </div>
                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-bold text-gray-700">診所 / 單位名稱 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-[#36563C] focus:ring-2 focus:ring-[#36563C]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 shadow-sm"
                      placeholder="陽光牙醫診所"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700">聯絡電話 <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-[#36563C] focus:ring-2 focus:ring-[#36563C]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 shadow-sm"
                      placeholder="0912-345-678"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">電子信箱 <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-[#36563C] focus:ring-2 focus:ring-[#36563C]/20 outline-none transition-all text-gray-900 placeholder:text-gray-400 shadow-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label htmlFor="type" className="block text-sm font-bold text-gray-700">詢問類型 <span className="text-red-500">*</span></label>
                  <select 
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-[#36563C] focus:ring-2 focus:ring-[#36563C]/20 outline-none transition-all text-gray-900 shadow-sm"
                  >
                    <option value="一般諮詢">一般諮詢</option>
                    <option value="產品採購">產品採購與詢價</option>
                    <option value="技術支援">設備維修與技術支援</option>
                    <option value="教育訓練">課程與教育訓練</option>
                    <option value="其他">其他合作提案</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700">留言內容 <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-[#36563C] focus:ring-2 focus:ring-[#36563C]/20 outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400 shadow-sm"
                    placeholder="請簡述您的需求或設備型號，我們將安排適合的專員與您聯繫..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-10 py-4 bg-[#36563C] text-white font-bold rounded-xl hover:bg-[#2b4430] transition-colors shadow-md hover:shadow-xl group"
                  >
                    送出表單
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
