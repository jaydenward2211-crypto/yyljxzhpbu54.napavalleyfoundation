import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import WhoWeAreView from './components/WhoWeAreView';
import WhatWeDoView from './components/WhatWeDoView';
import ScholarshipsView from './components/ScholarshipsView';
import FinancialsView from './components/FinancialsView';
import DonationView from './components/DonationView';
import ContactView from './components/ContactView';

export default function App() {
  const [tab, setTab] = useState('home');

  const renderView = () => {
    switch (tab) {
      case 'home':
        return <HomeView setTab={setTab} />;
      case 'who-we-are':
        return <WhoWeAreView />;
      case 'what-we-do':
        return <WhatWeDoView />;
      case 'scholarships':
        return <ScholarshipsView />;
      case 'financials':
        return <FinancialsView />;
      case 'contact':
        return <ContactView />;
      case 'donation':
        return <DonationView />;
      default:
        return <HomeView setTab={setTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFD] font-sans text-gray-800 antialiased selection:bg-[#F1E8B8] selection:text-[#1C2C24]">
      {/* App Header */}
      <Header currentTab={tab} setTab={setTab} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* App Footer */}
      <Footer setTab={setTab} />
    </div>
  );
}
