import { Link } from 'react-router-dom';
import { MAIN_MENU } from '../data';
import logoImg from '../assets/images/logo_black.png';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <img 
              src={logoImg} 
              alt="SONG TAH 崧達企業" 
              className="h-10 w-auto object-contain mb-6"
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              深耕台灣牙科產業逾四十年，整合設備、材料與技術，讓數位牙科製程穩定落地。
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: contact@songtah.com.tw</p>
              <p>Phone: (02) 1234-5678</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-accent font-medium mb-6">關於與服務</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">關於崧達</Link></li>
              <li><Link to="/services/lab-digital-transformation" className="text-sm text-gray-400 hover:text-white transition-colors">牙科技工數位轉型評估</Link></li>
              <li><Link to="/services/clinic-digital-workflow" className="text-sm text-gray-400 hover:text-white transition-colors">診間數位製程導入</Link></li>
              <li><Link to="/case-studies" className="text-sm text-gray-400 hover:text-white transition-colors">客戶案例</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-brand-accent font-medium mb-6">牙科產品</h3>
            <ul className="space-y-3">
              {MAIN_MENU.find(m => m.href === '/products')?.subItems?.map(item => (
                <li key={item.title}>
                  <Link to={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-brand-accent font-medium mb-6">技術與支援</h3>
            <ul className="space-y-3">
              <li><Link to="/courses-events" className="text-sm text-gray-400 hover:text-white transition-colors">課程與活動</Link></li>
              <li><Link to="/support/help-center" className="text-sm text-gray-400 hover:text-white transition-colors">說明中心</Link></li>
              <li><Link to="/support/faq" className="text-sm text-gray-400 hover:text-white transition-colors">常見問題FAQ</Link></li>
              <li><Link to="/support/downloads" className="text-sm text-gray-400 hover:text-white transition-colors">資源下載</Link></li>
              <li><Link to="/news" className="text-sm text-gray-400 hover:text-white transition-colors">最新消息</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} 崧達企業股份有限公司. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">隱私權政策</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">服務條款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
