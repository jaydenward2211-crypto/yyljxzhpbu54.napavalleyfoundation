import React, { useState } from 'react';
import { Heart, GraduationCap, Award, Landmark, TrendingUp, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface HomeViewProps {
  setTab: (tab: string) => void;
}

export default function HomeView({ setTab }: HomeViewProps) {
  const [activeStory, setActiveStory] = useState(0);

  const stats = [
    { value: '$1.2M+', label: 'Awarded Annually', desc: 'Direct financial support to NVC students.', icon: Award },
    { value: '850+', label: 'Scholarships Provided', desc: 'Covering various fields of study and needs.', icon: GraduationCap },
    { value: '10,000+', label: 'Alumni Supported', desc: 'Over decades of service in Napa Valley.', icon: Landmark },
    { value: '100%', label: 'Student Impact', desc: 'Donations go directly to student funds and programs.', icon: Heart },
  ];

  const pillars = [
    {
      title: 'Academic Scholarships',
      desc: 'Providing merit and need-based financial aid for over 85 categories of students, including STEM, nursing, viticulture, and humanities.',
      action: 'Explore Scholarships',
      tab: 'scholarships'
    },
    {
      title: 'Napa Valley College Promise',
      desc: 'Removing barriers to higher education by covering tuition and fees for local high school graduates attending NVC full-time.',
      action: 'Learn More',
      tab: 'what-we-do'
    },
    {
      title: 'Emergency Student Aid',
      desc: 'Immediate crisis funding to help students overcome unexpected hardships, like housing instability, medical costs, or textbook expenses.',
      action: 'Our Impact',
      tab: 'what-we-do'
    },
  ];

  const stories = [
    {
      name: 'Maria Rodriguez',
      major: 'Registered Nursing (RN)',
      achievement: 'Class of 2024 / Head ER Nurse',
      quote: "As a working mother of two, returning to school seemed impossible. The Foundation's Nursing scholarship covered my clinical supplies and textbooks, letting me focus on my studies. Today, I am proud to serve our community at the Napa Queen of the Valley Medical Center.",
      image: '/src/assets/images/student_success_portrait_1784339422202.jpg'
    },
    {
      name: 'Devon Carter',
      major: 'Viticulture & Winery Technology',
      achievement: 'Class of 2025 / Vineyard Assistant',
      quote: "Learning hands-on at the NVC estate vineyard was an incredible experience. The viticulture scholarship sponsored by local Napa growers took care of my tuition, giving me the opportunity to work alongside master winemakers in Rutherford.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Amy Tran',
      major: 'Computer Science & Mathematics',
      achievement: 'NVC Promise Scholar / UC Berkeley Transfer',
      quote: "Thanks to the Napa Valley College Promise program, my first two years of college were completely tuition-free. That stability gave me the foundation to transfer to UC Berkeley to complete my Bachelor's degree in Computer Science.",
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const handleNextStory = () => {
    setActiveStory((prev) => (prev + 1) % stories.length);
  };

  const handlePrevStory = () => {
    setActiveStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div id="home-view" className="animate-fade-in">
      {/* Hero Banner Section */}
      <section 
        className="relative bg-cover bg-center h-[540px] flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(28, 44, 36, 0.78), rgba(28, 44, 36, 0.45)), url('/src/assets/images/napa_valley_campus_hero_1784339405037.jpg')` 
        }}
      >
        <div className="absolute inset-0 bg-[#1C2C24]/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full text-white space-y-6">
          <span className="bg-[#AF8B2C] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block">
            Napa Valley College Foundation
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight max-w-3xl leading-tight text-[#F1E8B8]">
            Cultivating Student Success, Enriching Napa Valley
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed font-light">
            We partner with donors and community members to provide critical resources, scholarships, and academic support, paving pathways for every student to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => setTab('donation')}
              className="px-8 py-3.5 bg-[#8A5C6D] hover:bg-[#724957] text-white font-bold rounded-full text-base transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
            >
              Support Our Students
            </button>
            <button 
              onClick={() => setTab('scholarships')}
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold border border-white/40 rounded-full text-base backdrop-blur-sm transition-all duration-300"
            >
              Apply for Scholarships
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="bg-white py-16 border-b border-gray-100 shadow-sm relative z-10 -mt-10 max-w-6xl mx-auto rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 gap-8 md:gap-0 px-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center md:px-6 py-4 space-y-2">
                <div className="mx-auto w-10 h-10 rounded-full bg-[#F9F7EE] flex items-center justify-center text-[#AF8B2C]">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-[#4E7C66] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-800">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Welcome Joint Message Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
            A Message from Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1C2C24]">
            Welcome to the Napa Valley College Foundation
          </h2>
          <div className="text-gray-600 space-y-4 leading-relaxed">
            <p>
              Since our establishment, the Napa Valley College Foundation has worked tirelessly to build bridges between community generosity and student aspirations. We believe that an investment in our local students is a direct investment in the health, viticulture, economy, and culture of the entire Napa Valley region.
            </p>
            <p>
              Whether we are ensuring a local student can attend tuition-free through the <strong>NVC Promise</strong>, equipping future emergency medical professionals, or providing critical scholarships, your contributions create immediate, tangible impact.
            </p>
            <p className="font-serif italic text-lg text-[#4E7C66] pt-2">
              "We invitation you to explore our programs, meet our resilient students, and discover how we can shape a bright, equitable future together."
            </p>
          </div>
          <button 
            onClick={() => setTab('who-we-are')}
            className="px-6 py-2.5 bg-[#4E7C66] hover:bg-[#3F6352] text-white text-sm font-bold rounded-full transition-colors inline-block"
          >
            Meet Our Board of Directors
          </button>
        </div>

        <div className="lg:col-span-5 bg-gradient-to-br from-[#F9F7EE] to-[#EBF3EF] p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 border-b border-gray-200/60 pb-3">
            Foundation Leadership
          </h3>
          
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shrink-0 border-2 border-white shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" 
                alt="Jessica Thomason" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-[#1C2C24]">Jessica Thomason</h4>
              <p className="text-xs text-[#AF8B2C] font-semibold">Executive Director</p>
              <p className="text-xs text-gray-500 leading-relaxed pt-1">
                "Stewardship, transparency, and regional alignment guide everything we do. Thank you for empowering student success across Napa Valley."
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-t border-gray-200/60 pt-6">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shrink-0 border-2 border-white shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" 
                alt="Dr. Torence Powell" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-[#1C2C24]">Dr. Torence Powell</h4>
              <p className="text-xs text-[#AF8B2C] font-semibold">Superintendent / College President</p>
              <p className="text-xs text-gray-500 leading-relaxed pt-1">
                "Our partnership with the Foundation is essential to providing high-quality educational pathways that are affordable and inclusive."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Impact Pillars */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
              What We Support
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1C2C24]">
              Empowering Students in Key Educational Areas
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We allocate generous funding across various critical campus programs to match the academic demands of the Napa Valley economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#F9F7EE] group-hover:bg-[#AF8B2C] text-[#AF8B2C] group-hover:text-white rounded-xl flex items-center justify-center transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1C2C24] group-hover:text-[#AF8B2C] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <button 
                    onClick={() => setTab(pillar.tab)}
                    className="text-xs font-bold text-[#4E7C66] hover:text-[#AF8B2C] transition-colors flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>{pillar.action}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories Slider */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
            Donors Make a Difference
          </span>
          <h2 className="text-3xl font-serif text-[#1C2C24]">
            Student Impact Stories
          </h2>
        </div>

        {/* Story Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-6 right-6 text-gray-100">
            <Quote className="w-24 h-24 stroke-[4] rotate-180" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-4 flex justify-center">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden border-4 border-white shadow-md relative">
                <img 
                  src={stories[activeStory].image} 
                  alt={stories[activeStory].name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="md:col-span-8 space-y-4">
              <div className="text-[#8A5C6D] font-bold text-xs uppercase tracking-wider">
                {stories[activeStory].achievement}
              </div>
              <h3 className="text-2xl font-bold text-[#1C2C24]">
                {stories[activeStory].name}
              </h3>
              <p className="text-sm font-semibold text-gray-400">
                Major: {stories[activeStory].major}
              </p>
              <p className="text-gray-600 italic text-base leading-relaxed">
                "{stories[activeStory].quote}"
              </p>

              {/* Navigation Controls */}
              <div className="flex gap-2 pt-4">
                <button 
                  onClick={handlePrevStory}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#F9F7EE] text-[#4E7C66] hover:text-[#AF8B2C] transition-colors focus:outline-none"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleNextStory}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#F9F7EE] text-[#4E7C66] hover:text-[#AF8B2C] transition-colors focus:outline-none"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="bg-[#1C2C24] text-white py-16 px-4 md:px-8 text-center space-y-6">
        <h2 className="text-3xl font-serif text-[#F1E8B8] tracking-tight">
          Are you ready to support NVC students?
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed font-light">
          Your tax-deductible gift directly funds the scholarships, grants, and instructional technologies that inspire excellence.
        </p>
        <button 
          onClick={() => setTab('donation')}
          className="px-8 py-3.5 bg-[#AF8B2C] hover:bg-[#967420] text-white font-bold rounded-full text-base transition-transform hover:scale-105 shadow-md inline-flex items-center gap-2"
        >
          <Heart className="w-5 h-5 fill-current" />
          <span>Donate to NVC Foundation</span>
        </button>
      </section>
    </div>
  );
}
