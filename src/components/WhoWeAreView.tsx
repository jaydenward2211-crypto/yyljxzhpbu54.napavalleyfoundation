import React from 'react';
import { Shield, Award, Users, BookOpen, Star, Compass } from 'lucide-react';

export default function WhoWeAreView() {
  const values = [
    { title: 'Academic Equity', desc: 'Ensuring financial barriers never prevent any student from achieving higher education.', icon: Compass },
    { title: 'Community Stewardship', desc: 'Carefully aligning donors\' generosity with direct student and regional workforce development.', icon: Shield },
    { title: 'Transparency & Trust', desc: 'Maintaining pristine financial disclosures and audited accountability.', icon: Users },
  ];

  const staff = [
    { name: 'Jessica Thomason', role: 'Executive Director', desc: 'Directs the foundation\'s advancement, capital campaigns, and strategic community partnerships.' },
    { name: 'Katie Everidge', role: 'Administrative & Events Coordinator', desc: 'Coordinates administrative services and hosts prestigious community and donor recognition events.' },
    { name: 'Ann Hobaugh', role: 'Financial Services Manager', desc: 'Manages endowment funds, balance sheets, and charitable distribution compliance.' },
    { name: 'Dianna Messenger', role: 'Development Manager', desc: 'Leads donor cultivation, legacy gift planning, and private scholarship programs.' }
  ];

  const officers = [
    { name: 'Malcolm de Sieyes', role: 'President', desc: 'Community leader guiding long-term philanthropic strategy and alignment.' },
    { name: 'Todd Zapolski', role: 'Vice President', desc: 'Napa Valley developer and business advisor empowering capital campaigns.' },
    { name: 'Carol Cartwright, Ph.D.', role: 'Secretary', desc: 'Educational advocate overseeing governance and constitutional records.' },
    { name: 'Virginia “Ginny” Humphrey', role: 'Treasurer', desc: 'Financial executive stewarding the active endowment and budget safety.' }
  ];

  const directors = [
    { name: 'Donna Altes', desc: 'Community advocate and champion for nursing programs.' },
    { name: 'Jeff Dodd', desc: 'Vintner and local agricultural workforce advisor.' },
    { name: 'Richard Hall', desc: 'Civic leader focused on equitable access and community aid.' },
    { name: 'Lona Hardy', desc: 'Supporter of student success initiatives and emergency grants.' },
    { name: 'Ethan Hare', desc: 'Business executive helping build capital campaigns.' },
    { name: 'Bret Johnson, Ph.D.', desc: 'Educational consultant prioritizing academic excellence.' },
    { name: 'Bruce Ketron', desc: 'Legal professional and champion for legacy endowment structures.' },
    { name: 'Tim Matz', desc: 'Viticulture and winery program business advisor.' },
    { name: 'Penny Pawl', desc: 'Writer, arts advocate, and champion for the humanities.' },
    { name: 'Marcus Sitzman', desc: 'Local leader committed to workforce training programs.' }
  ];

  const benefactors = [
    { name: 'Congressman Mike Thompson', role: 'Honorary Benefactor', desc: 'Long-standing Napa public servant and scholarship advocate.' },
    { name: 'Dick Vermeil', role: 'Honorary Benefactor', desc: 'Legendary NFL coach, winemaker, and passionate community philanthropist.' }
  ];

  const emeritus = [
    'Hon. Wm. L. Blanckenburg',
    'Bruce Cakebread',
    'Alan John Cash',
    'Peter Chiarella',
    'Mark Coleman',
    'James R. Gibbany',
    'Bill Hardy',
    'Jack Hussey',
    'Joseph Keebler',
    'Wanda Lamb',
    'Kathleen Lucier',
    'Gerardo Martin',
    'Kathi Metro',
    'David W. Meyers',
    'Dennis Pedisich',
    'Margo Perez-Bruhn',
    'Perry Teaff',
    'James W. Terry',
    'Bobbie Yeiter',
    'Tom Young'
  ];

  return (
    <div id="who-we-are-view" className="animate-fade-in max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-20">
      
      {/* Intro Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
          About the NVC Foundation
        </span>
        <h1 className="text-4xl font-serif text-[#1C2C24]">
          Who We Are
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed font-light">
          We are the philanthropic engine of Napa Valley College, committed to transforming lives through accessibility, community alignment, and student-focused aid.
        </p>
      </section>

      {/* Mission & Vision Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-br from-[#F9F7EE] to-[#EBF3EF] p-8 md:p-12 rounded-3xl border border-gray-100">
        <div className="space-y-4">
          <div className="text-xs font-bold text-[#AF8B2C] uppercase tracking-wider">Our Core Mission</div>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1C2C24]">To Support Student Learning & Opportunity</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            The Napa Valley College Foundation partners with the college to provide the private financial support, community connections, and institutional resources required to enhance learning environments, fund critical scholarships, and unlock educational horizons for students of all backgrounds.
          </p>
        </div>
        <div className="space-y-4 border-t md:border-t-0 md:border-l border-gray-200/80 pt-6 md:pt-0 md:pl-12">
          <div className="text-xs font-bold text-[#4E7C66] uppercase tracking-wider">Our Core Vision</div>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1C2C24]">An Empowered, Thriving Napa Community</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            We envision a valley where higher education is an achievable reality for every single resident. By establishing deep, reliable funding reserves, we aim to eliminate systemic socioeconomic barriers, creating a sustainable pool of qualified local healthcare workers, viticultural scientists, public servants, and leaders.
          </p>
        </div>
      </section>

      {/* History Timeline/Narrative */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
            Over 50 Years of History
          </span>
          <h2 className="text-3xl font-serif text-[#1C2C24]">
            Our Legacy of Giving
          </h2>
          <div className="text-gray-600 text-sm space-y-4 leading-relaxed">
            <p>
              The Napa Valley College Foundation was incorporated in <strong>1968</strong> as an independent 501(c)(3) tax-exempt educational foundation. It was created by a group of forward-thinking Napa Valley business owners, vineyard operators, and civic leaders who recognized that the newly founded Napa Valley College would require private support to reach its full potential.
            </p>
            <p>
              Over the last five decades, the Foundation has grown from a modest book-loan fund to managing a robust endowment. We have funded state-of-the-art laboratory machinery, sponsored critical construction including the Performing Arts Center, and expanded scholarship distribution to exceed 1 million dollars in direct aid annually.
            </p>
          </div>
        </div>

        {/* History Quick Facts Box */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F9F7EE] rounded-bl-full opacity-60 -z-10" />
          
          <div className="space-y-2">
            <div className="text-xs font-bold text-gray-400">FOUNDED</div>
            <div className="text-3xl font-extrabold text-[#4E7C66]">1968</div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Established as an independent 501(c)(3) public charity to support California's premier community college.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-gray-400">ANNUAL SUPPORT</div>
            <div className="text-3xl font-extrabold text-[#AF8B2C]">$1.2M+</div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Distributed each academic year across scholarships, emergency grants, and structural department awards.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-gray-400">NVC PROMISE</div>
            <div className="text-3xl font-extrabold text-[#8A5C6D]">100% Free</div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Tuition and registration fees covered for local eligible high school graduates attending NVC full-time.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-gray-400">WINE REGION ROOTING</div>
            <div className="text-3xl font-extrabold text-[#1C2C24]">Viticulture</div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Deep partnerships with Napa Valley Vintners to train future mechanical, viticultural, and cellar professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
            Our Standards of Conduct
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1C2C24]">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-[#FBFBFA] p-8 rounded-2xl border border-gray-100 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#4E7C66] shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#1C2C24]">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Governance & Leadership Sections */}
      <section className="space-y-16">
        
        {/* Section: Foundation Staff */}
        <div className="space-y-8">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
              Professional Leadership
            </span>
            <h2 className="text-2xl font-serif text-[#1C2C24] mt-1">
              Foundation Staff
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:border-[#4E7C66] transition-all group"
              >
                <div className="space-y-3">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EBF3EF] text-[#4E7C66]">
                    Staff
                  </span>
                  <h3 className="text-base font-bold text-[#1C2C24] group-hover:text-[#4E7C66] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#AF8B2C]">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed pt-1">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Board Officers */}
        <div className="space-y-8">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
              Board Governance
            </span>
            <h2 className="text-2xl font-serif text-[#1C2C24] mt-1">
              Board Officers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officers.map((member, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex flex-col justify-between hover:border-[#AF8B2C] transition-all group"
              >
                <div className="space-y-3">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F9F7EE] text-[#AF8B2C]">
                    Officer
                  </span>
                  <h3 className="text-base font-bold text-[#1C2C24] group-hover:text-[#AF8B2C] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#4E7C66]">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed pt-1">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Board of Directors */}
        <div className="space-y-8">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
              Active Trustees
            </span>
            <h2 className="text-2xl font-serif text-[#1C2C24] mt-1">
              Board of Directors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {directors.map((member, i) => (
              <div 
                key={i} 
                className="bg-[#FBFBFA] p-5 rounded-xl border border-gray-100 shadow-sm hover:bg-white hover:border-[#4E7C66] transition-all"
              >
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-[#1C2C24]">{member.name}</h3>
                  <p className="text-[11px] font-semibold text-gray-400">Director</p>
                  <p className="text-gray-500 text-[10px] leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Honorary Benefactors */}
        <div className="space-y-8">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
              Valued Champions
            </span>
            <h2 className="text-2xl font-serif text-[#1C2C24] mt-1">
              Honorary Benefactors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefactors.map((member, i) => (
              <div 
                key={i} 
                className="bg-gradient-to-br from-[#FDFCF7] to-[#F5F8F6] p-6 rounded-2xl border border-amber-100/60 shadow-sm hover:border-[#AF8B2C] transition-all"
              >
                <div className="space-y-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 inline-block">
                    {member.role}
                  </span>
                  <h3 className="text-base font-bold text-[#1C2C24]">{member.name}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Emeritus Past Presidents */}
        <div className="space-y-8 bg-gradient-to-b from-gray-50 to-white p-8 rounded-3xl border border-gray-100">
          <div className="border-b border-gray-200/80 pb-4 text-center max-w-xl mx-auto">
            <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
              Our Legacy and Foundations
            </span>
            <h2 className="text-2xl font-serif text-[#1C2C24] mt-1">
              Emeritus Past Presidents
            </h2>
            <p className="text-gray-500 text-[11px] leading-relaxed mt-2">
              We extend our deepest gratitude to the visionary leaders who guided the NVC Foundation through five decades of transformational support.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 gap-x-4 pt-4">
            {emeritus.map((name, i) => (
              <div 
                key={i} 
                className="flex items-center gap-2 text-xs text-gray-700 bg-white/60 px-3 py-2 rounded-lg border border-gray-100 hover:border-amber-200 hover:bg-white transition-all shadow-2xs"
              >
                <span className="text-[#AF8B2C] font-semibold">★</span>
                <span className="font-medium text-gray-800">{name}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
