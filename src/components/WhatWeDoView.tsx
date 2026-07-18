import React from 'react';
import { Sparkles, Library, HeartHandshake, ShieldAlert, GraduationCap, UtensilsCrossed, Wine, Leaf, FlaskConical, Award } from 'lucide-react';

export default function WhatWeDoView() {
  const initiatives = [
    {
      title: 'Napa Valley College Promise Program',
      category: 'Student Support',
      desc: 'Our flagship accessibility program covers 100% of enrollment tuition and material fees for local eligible high-school graduates attending NVC full-time, making a college degree completely accessible and barrier-free.',
      impact: 'Over 1,200 students attended NVC tuition-free this past academic year.',
      icon: GraduationCap,
      color: '#4E7C66'
    },
    {
      title: 'Nursing & Allied Health Support',
      category: 'Vocational Workforce',
      desc: 'Napa Valley depends heavily on local medical professionals. We provide specific scholarships for supplies, uniform costs, and state licensing exam fees, in addition to funding the high-fidelity mock clinical simulation laboratory on campus.',
      impact: '85% of graduates from NVC\'s nursing classes stay to practice in Napa County clinics.',
      icon: HeartHandshake,
      color: '#8A5C6D'
    },
    {
      title: 'Viticulture & Winery Tech Equipment',
      category: 'Regional Specialty',
      desc: 'We purchase advanced agricultural and laboratory machinery, sensory science tools, and cellar equipment for the award-winning NVC Estate Vineyard and Winery, ensuring students train on cutting-edge systems used in commercial Napa estates.',
      impact: '100% of graduating viticulture students secure high-value winery apprenticeships.',
      icon: Sparkles,
      color: '#AF8B2C'
    },
    {
      title: 'Emergency Crisis Funding',
      category: 'Basic Needs',
      desc: 'When an unexpected life event strikes—such as food insecurity, potential eviction, family emergencies, or natural disaster—our emergency student aid program distributes rapid-response grants to keep students enrolled and safe.',
      impact: 'Average crisis check of $450 issued within 36 hours of faculty referral.',
      icon: ShieldAlert,
      color: '#E53E3E'
    },
    {
      title: 'Library Technology & Digital Lending',
      category: 'Academic Environment',
      desc: 'Funding high-speed laptop lending pools, Wi-Fi hotspots, and adaptive research database subscriptions, bridging the digital divide so students can conduct high-quality academic research from home.',
      impact: 'Over 400 laptops and hotspots loaned to student researchers each semester.',
      icon: Library,
      color: '#2B6CB0'
    },
    {
      title: 'Culinary Arts & Hospitality Training',
      category: 'Workforce Development',
      desc: 'Supporting NVC\'s legendary culinary program with scholarship endowments for kitchen equipment, knife sets, and culinary externships in world-renowned Michelin-starred Napa establishments.',
      impact: 'Prepares students for prestigious careers in our valley\'s elite tourism industry.',
      icon: UtensilsCrossed,
      color: '#D69E2E'
    },
  ];

  return (
    <div id="what-we-do-view" className="animate-fade-in max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-20">
      
      {/* Page Title */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
          Our Programs and Impact
        </span>
        <h1 className="text-4xl font-serif text-[#1C2C24]">
          What We Do
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed font-light">
          We turn donor generosity into tangible academic tools, tuition sponsorships, and regional career pipelines, supporting students from admission to graduation.
        </p>
      </section>

      {/* Pillars of Action Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group hover:border-[#4E7C66]"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                  {item.category}
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-50 text-[#4E7C66] group-hover:text-white group-hover:bg-[#4E7C66] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1C2C24] group-hover:text-[#4E7C66] transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed pt-2">
                  {item.desc}
                </p>
              </div>

              {/* Impact Callout */}
              <div className="mt-6 pt-4 border-t border-gray-100 bg-[#FBFBFA] p-3.5 rounded-xl border-l-2 border-[#AF8B2C]">
                <span className="text-[10px] font-bold text-[#AF8B2C] uppercase tracking-wider block mb-1">
                  Pillar Impact:
                </span>
                <p className="text-xs text-gray-700 leading-snug font-medium">
                  {item.impact}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Wine Programs & Viticulture Showcase */}
      <section className="space-y-12 bg-[#F9F8F3] p-8 md:p-12 rounded-3xl border border-[#EBE8DB]">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block flex items-center justify-center gap-2">
            <Wine className="w-4 h-4 text-[#8A1C3C]" />
            World-Class Viticulture & Winery Technology (VWT)
          </span>
          <h2 className="text-3xl font-serif text-[#1C2C24]">
            Empowering the Napa Valley Wine Industry
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Napa Valley College is home to the first bonded commercial winery located on a California community college campus. The Foundation actively funds critical operations, specialized sensory labs, and vineyard-management software to train tomorrow's premier winemakers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Wine program 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-[#AF8B2C] transition-all">
            <div>
              <div className="h-44 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600" 
                  alt="NVC Estate Vineyard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#1C2C24] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Estate Vineyard
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-[#1C2C24] text-sm group-hover:text-[#AF8B2C] transition-colors flex items-center gap-1.5 font-semibold">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  NVC Estate Vineyard Support
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  Funding 5+ acres of estate-grown Cabernet Sauvignon, Chardonnay, and Sauvignon Blanc. Students experience hands-on vine pruning, soil hydration analysis, and hand-harvest operations.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 border-t border-gray-50 text-[10px] text-gray-400 font-semibold flex justify-between items-center">
              <span>Foundation Funded</span>
              <span className="text-[#AF8B2C]">$45,000 / Yr Support</span>
            </div>
          </div>

          {/* Wine program 2 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-[#AF8B2C] transition-all">
            <div>
              <div className="h-44 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600" 
                  alt="Sensory Analysis Science" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#8A1C3C] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Sensory Labs
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-[#1C2C24] text-sm group-hover:text-[#AF8B2C] transition-colors flex items-center gap-1.5 font-semibold">
                  <FlaskConical className="w-4 h-4 text-indigo-600" />
                  Sensory Analysis Science Lab
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  Supporting state-of-the-art laboratory tasting tables, spectrophotometers, and gas chromatographs. Students learn structural chemistry profiles and fault detection in commercial wines.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 border-t border-gray-50 text-[10px] text-gray-400 font-semibold flex justify-between items-center">
              <span>Equipment Endowments</span>
              <span className="text-[#AF8B2C]">Active Lab Upgrades</span>
            </div>
          </div>

          {/* Wine program 3 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-[#AF8B2C] transition-all">
            <div>
              <div className="h-44 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=600" 
                  alt="Bonded Commercial Winery" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-[#AF8B2C] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Bonded Winery
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-[#1C2C24] text-sm group-hover:text-[#AF8B2C] transition-colors flex items-center gap-1.5 font-semibold">
                  <Wine className="w-4 h-4 text-[#8A1C3C]" />
                  NVC Bonded Winery Operations
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  Financing industrial-scale pneumatic presses, stainless steel fermentation tanks, French oak barrel reserves, and high-fidelity labeling machines.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 border-t border-gray-50 text-[10px] text-gray-400 font-semibold flex justify-between items-center">
              <span>Bonded Winery #CA-6119</span>
              <span className="text-[#AF8B2C]">Real-World Commerce</span>
            </div>
          </div>

          {/* Wine program 4 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-[#AF8B2C] transition-all">
            <div>
              <div className="h-44 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600" 
                  alt="Winemaker Apprenticeships" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Apprenticeships
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-[#1C2C24] text-sm group-hover:text-[#AF8B2C] transition-colors flex items-center gap-1.5 font-semibold">
                  <Award className="w-4 h-4 text-yellow-600" />
                  Premium Estate Placements
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed">
                  Facilitating funded winery apprenticeships in world-famous Napa properties. Connecting students with master winemakers for cellaring, chemistry, and sensory analysis.
                </p>
              </div>
            </div>
            <div className="p-5 pt-0 border-t border-gray-50 text-[10px] text-gray-400 font-semibold flex justify-between items-center">
              <span>Napa Valley Vintners Partners</span>
              <span className="text-[#AF8B2C]">100% Placement Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Vision statement */}
      <section className="bg-gradient-to-br from-[#1C2C24] to-[#2D4539] text-white p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-[#F1E8B8] text-xs font-bold uppercase tracking-widest block">
            Partnering with Napa Valley College
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-[#F1E8B8]">
            Workforce Alignment & Economic Vitality
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed font-light">
            Napa Valley College is not just an academic institution—it is the educational backbone of the local community. The Foundation works directly with local businesses, viticulture guilds, and medical providers to identify emerging labor shortages and fund custom instructional programs.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed font-light">
            By funding professional-grade equipment and specialized training programs, we prepare our students to enter high-paying careers immediately upon graduation, keeping local industries strong.
          </p>
        </div>
        <div className="lg:col-span-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 space-y-4">
          <h3 className="font-bold text-[#F1E8B8] text-sm">Where Our Impact Goes</h3>
          <ul className="space-y-3 text-xs text-gray-200">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#AF8B2C]" />
              <span>65% Direct Student Scholarships</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#AF8B2C]" />
              <span>20% Instructional & Lab Equipments</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#AF8B2C]" />
              <span>10% Student Emergency Assistance</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#AF8B2C]" />
              <span>5% Program Administration</span>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
