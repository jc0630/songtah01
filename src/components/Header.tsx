import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MAIN_MENU } from '../data';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import logoImg from '../assets/images/logo.png';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img 
              src={logoImg} 
              alt="SONG TAH 崧達企業" 
              className="h-12 md:h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {MAIN_MENU.map((item) => {
              const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
              const hasSubmenu = item.subItems && item.subItems.length > 0;
              const isContact = item.href === '/contact';

              return (
                <div key={item.title} className={cn("relative group", isContact && "flex items-center")}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors",
                      isContact
                        ? "px-5 py-2.5 bg-brand-primary text-white rounded-sm hover:bg-brand-primary/90 shadow-sm"
                        : "py-8 hover:text-brand-primary",
                      (!isContact && isActive) ? "text-brand-primary" : (!isContact ? "text-gray-600" : "")
                    )}
                  >
                    {item.title}
                    {hasSubmenu && <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-brand-primary" />}
                  </Link>

                  {/* Desktop Dropdown */}
                  {hasSubmenu && (
                    <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white border border-gray-100 rounded-xl shadow-lg shadow-gray-200/50 overflow-hidden transform opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="py-2">
                        {item.subItems!.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-brand-bg hover:text-brand-primary transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-brand-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col py-4">
            {MAIN_MENU.map((item) => {
              const isContact = item.href === '/contact';
              return (
              <div key={item.title} className={isContact ? "px-6 py-4" : ""}>
                <Link
                  to={item.href}
                  className={cn(
                    isContact
                      ? "block w-full text-center px-6 py-3 text-base font-medium text-white bg-brand-primary rounded-sm shadow-sm hover:bg-brand-primary/90 transition-colors"
                      : "block px-6 py-3 text-base font-medium text-gray-800 hover:bg-brand-bg transition-colors"
                  )}
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
                {item.subItems && (
                  <div className="bg-gray-50/50 py-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className="block px-10 py-2.5 text-sm text-gray-600 hover:text-brand-primary transition-colors"
                        onClick={closeMenu}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )})}
          </nav>
        </div>
      )}
    </header>
  );
}
