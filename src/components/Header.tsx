import React, { useState } from 'react';
import { Menu, X, Heart, Shield, GraduationCap, Users, Landmark, Mail, BookOpen } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export default function Header({ currentTab, setTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'who-we-are', label: 'Who We Are', icon: Users },
    { id: 'what-we-do', label: 'What We Do', icon: GraduationCap },
    { id: 'scholarships', label: 'Scholarships & Programs', icon: Landmark },
    { id: 'financials', label: 'Financials & Tax ID', icon: Shield },
    { id: 'contact', label: 'Contact Us', icon: Mail },
  ];

  const handleTabClick = (tabId: string) => {
    setTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#4E7C66] text-white text-xs px-4 md:px-8 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">📍 2277 Napa Vallejo Highway, Napa, CA 94558</span>
          <span>📞 (707) 256-7170</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-semibold text-[#F1E8B8]">EIN: 23-7003565</span>
          <span className="hidden md:inline">501(c)(3) Non-Profit Organization</span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
        {/* Logo Section */}
        <button 
          onClick={() => handleTabClick('home')} 
          className="flex items-center focus:outline-none transition-transform hover:scale-[1.01]"
        >
          <Logo className="h-10 md:h-12 w-auto" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`relative px-2 py-1 text-sm font-semibold transition-colors flex items-center gap-1.5 focus:outline-none ${
                  isActive 
                    ? 'text-[#AF8B2C]' 
                    : 'text-[#4E7C66] hover:text-[#AF8B2C]'
                }`}
              >
                <Icon className="w-4 h-4 opacity-75" />
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-0.5 bg-[#AF8B2C] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button Section */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleTabClick('donation')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm shadow-md flex items-center gap-2 transition-all duration-300 transform hover:scale-105 ${
              currentTab === 'donation'
                ? 'bg-[#AF8B2C] text-white hover:bg-[#967420]'
                : 'bg-[#8A5C6D] text-white hover:bg-[#724957]'
            }`}
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>Donate Now</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-[#4E7C66] hover:text-[#AF8B2C] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-inner px-4 py-3 flex flex-col gap-2 transition-all">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 text-sm font-semibold transition-all ${
                  isActive 
                    ? 'bg-[#F9F7EE] text-[#AF8B2C]' 
                    : 'text-[#4E7C66] hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5 opacity-85" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="border-t border-gray-100 my-2 pt-3">
            <button
              onClick={() => handleTabClick('donation')}
              className="w-full py-3 bg-[#8A5C6D] hover:bg-[#724957] text-white rounded-lg font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
            >
              <Heart className="w-5 h-5 fill-current" />
              <span>Donate Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
