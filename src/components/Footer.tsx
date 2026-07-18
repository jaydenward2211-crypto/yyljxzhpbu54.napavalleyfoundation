import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, ExternalLink, Calendar, Facebook, Linkedin, Heart, HelpCircle, FileText } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setTab: (tab: string) => void;
}

export default function Footer({ setTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-[#1C2C24] text-gray-200 mt-auto">
      {/* Upper Footer Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="bg-white/95 p-3 rounded-xl inline-block max-w-[280px]">
            <Logo className="h-10 w-auto" showText={true} />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            The Napa Valley College Foundation is dedicated to partnering with the college to provide resources that support student learning, enhance educational environments, and expand student opportunities.
          </p>
          <div className="pt-2">
            <span className="text-xs bg-[#8A5C6D] text-white px-3 py-1 rounded-full font-semibold">
              501(c)(3) Public Charity
            </span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#F1E8B8] border-b border-[#4E7C66] pb-2">
            Quick Navigation
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { label: 'About the Foundation', id: 'who-we-are' },
              { label: 'Impact & Initiatives', id: 'what-we-do' },
              { label: 'Apply for Scholarships', id: 'scholarships' },
              { label: 'Tax ID & IRS Letter', id: 'financials' },
              { label: 'Support NVC Students', id: 'donation' },
              { label: 'Get in Touch', id: 'contact' },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    setTab(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#F1E8B8] transition-colors flex items-center gap-1.5 focus:outline-none"
                >
                  <span className="text-[#AF8B2C]">›</span> {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#F1E8B8] border-b border-[#4E7C66] pb-2">
            Contact Information
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#AF8B2C] shrink-0 mt-0.5" />
              <span>
                Napa Valley College Foundation<br />
                Building 1500, Room 1501<br />
                2277 Napa Vallejo Highway<br />
                Napa, CA 94558
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#AF8B2C]" />
              <a href="tel:+17072567170" className="hover:text-[#F1E8B8] transition-colors">
                (707) 256-7170
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#AF8B2C]" />
              <a href="mailto:foundation@napavalley.edu" className="hover:text-[#F1E8B8] transition-colors">
                foundation@napavalley.edu
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#AF8B2C]" />
              <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#F1E8B8] border-b border-[#4E7C66] pb-2">
            Stay Connected
          </h3>
          <p className="text-gray-300 text-sm">
            Subscribe to our newsletter for scholarship announcements, impact reports, and local Napa event invitations.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2.5">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#2B4035] border border-[#3E5C4C] rounded-lg text-sm text-white focus:outline-none focus:border-[#AF8B2C] placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-[#AF8B2C] hover:bg-[#967420] text-white font-bold rounded-lg text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <div className="p-3 bg-[#2B4035] border border-[#AF8B2C] rounded-lg text-xs text-[#F1E8B8] animate-pulse">
              ✓ Thank you! You've been subscribed to the foundation updates.
            </div>
          )}
          <div className="flex gap-3 pt-2">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full bg-[#2B4035] hover:bg-[#AF8B2C] flex items-center justify-center transition-colors text-white"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full bg-[#2B4035] hover:bg-[#AF8B2C] flex items-center justify-center transition-colors text-white"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://napavalley.edu" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full bg-[#2B4035] hover:bg-[#AF8B2C] flex items-center justify-center transition-colors text-white"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Lower Footer Area (Copyright and Disclaimers) */}
      <div className="bg-[#121E18] border-t border-[#22362C] text-xs text-gray-400 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left space-y-1">
            <p>© {currentYear} Napa Valley College Foundation. All Rights Reserved.</p>
            <p className="text-gray-500">
              The Napa Valley College Foundation is a registered California 501(c)(3) non-profit organization.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://napavalleycollegefoundation.org" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="hover:text-white flex items-center gap-1"
            >
              Official Website <ExternalLink className="w-3 h-3" />
            </a>
            <button onClick={() => setTab('financials')} className="hover:text-white">
              Tax Exempt Disclosures
            </button>
            <button onClick={() => setTab('contact')} className="hover:text-white">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
