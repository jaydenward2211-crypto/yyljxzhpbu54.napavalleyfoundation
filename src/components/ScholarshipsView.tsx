import React, { useState, useRef } from 'react';
import { Search, GraduationCap, DollarSign, CheckCircle, FileText, Clock, Sparkles, Upload, AlertCircle } from 'lucide-react';
import { Scholarship } from '../types';

export default function ScholarshipsView() {
  const [activeTab, setActiveTab] = useState<'browse' | 'estimator' | 'apply'>('browse');

  // Search and filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Estimator state
  const [gpa, setGpa] = useState('3.0');
  const [majorSelection, setMajorSelection] = useState('any');
  const [localGraduate, setLocalGraduate] = useState('yes');
  const [enrollmentType, setEnrollmentType] = useState('full-time');
  const [estimatorSubmitted, setEstimatorSubmitted] = useState(false);

  // Application form state
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [studentGpa, setStudentGpa] = useState('');
  const [studentMajor, setStudentMajor] = useState('Nursing');
  const [personalStatement, setPersonalStatement] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [appSubmitted, setAppSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scholarshipsList: Scholarship[] = [
    {
      id: 'nvc-promise',
      name: 'Napa Valley College Promise Scholarship',
      category: 'promise',
      amount: 'Full Tuition & Fees Cover',
      eligibility: ['Napa County High School Graduate', 'First-time College Student', 'Enroll in 12+ units per semester'],
      description: 'Covers standard enrollment fees, tuition, and material costs for up to two full consecutive years.'
    },
    {
      id: 'queen-allied-health',
      name: 'Queen of the Valley Medical Center Endowment',
      category: 'health',
      amount: '$2,500 per year',
      eligibility: ['Enroll in NVC RN or Psychiatric Technician Program', 'GPA of 3.0 or higher', 'Must reside in Napa Valley'],
      description: 'Established to support future clinical health workers in local regional hospitals and emergency facilities.'
    },
    {
      id: 'napavalley-vintners-viticulture',
      name: 'Napa Valley Vintners Viticulture Scholarship',
      category: 'vocational',
      amount: '$4,000 per year',
      eligibility: ['Viticulture & Winery Technology major', 'Financial Need demonstrated', 'Commitment to local vineyard agriculture'],
      description: 'Generously sponsored by Napa Valley Vintners to train future vineyard supervisors, technicians, and winemakers.'
    },
    {
      id: 'stem-innovation',
      name: 'NVC STEM Excellence Scholarship',
      category: 'stem',
      amount: '$3,000 per year',
      eligibility: ['Engineering, CS, Biology, or Chemistry major', 'GPA of 3.2 or higher', 'Completed at least 15 college units'],
      description: 'Awards high-achieving STEM transfer students preparing for undergraduate degrees in research universities.'
    },
    {
      id: 'michelin-culinary-arts',
      name: 'Napa Culinary Hospitality Scholarship',
      category: 'vocational',
      amount: '$2,000 per semester',
      eligibility: ['Enroll in NVC Culinary Arts degree program', 'Demonstrate culinary leadership', 'Submit recommendation letter'],
      description: 'Aims to fund talented local cooks seeking vocational certifications to enter Napa Valley\'s premier dining establishments.'
    },
    {
      id: 'shawn-memorial-humanities',
      name: 'Shawn Memorial Humanities Scholarship',
      category: 'humanities',
      amount: '$1,500',
      eligibility: ['English, History, or Fine Arts major', 'GPA of 2.8 or higher', 'Submit original essay response'],
      description: 'Honoring the late Professor Shawn, this scholarship supports student voices pursuing literature, philosophy, and liberal arts.'
    },
    {
      id: 'tchelistcheff-oenology',
      name: 'Andre Tchelistcheff Oenology Memorial Endowment',
      category: 'vocational',
      amount: '$5,000 per year',
      eligibility: ['VWT Chemistry concentration', 'GPA of 3.5 or higher', 'Intent to pursue premium Napa Winemaking'],
      description: 'Named after the "Maestro" of California winemaking, Andre Tchelistcheff. Supports elite sensory and chemistry research students.'
    },
    {
      id: 'margrit-mondavi-arts',
      name: 'Margrit Mondavi Culinary & Fine Arts Scholarship',
      category: 'vocational',
      amount: '$3,500',
      eligibility: ['Enrolled in Culinary Arts or Visual Fine Arts', 'Portfolio or culinary demonstration video submission', 'Demonstrated financial need'],
      description: 'Established in honor of Margrit Mondavi to promote the marriage of wine, fine food, and the arts in Napa Valley.'
    },
    {
      id: 'peter-mondavi-viticulture',
      name: 'Peter Mondavi Sr. Memorial Wine Award',
      category: 'vocational',
      amount: '$4,500',
      eligibility: ['Viticulture major focusing on sustainable farming', 'Recommendation from VWT Faculty', 'Napa County resident'],
      description: 'Commemorating the legacy of Peter Mondavi Sr. of Charles Krug Winery. Funds educational tools, barrels, and vineyard equipment for the student recipient.'
    },
    {
      id: 'st-helena-rotary',
      name: 'Saint Helena Rotary Club Vocational Scholarship',
      category: 'general',
      amount: '$2,000',
      eligibility: ['Vocational certificate path student', 'Napa resident', 'High community service engagement'],
      description: 'Supporting high-integrity students entering essential trades such as welding, nursing, automotive, or hospitality.'
    },
    {
      id: 'shirley-harold-fine-arts',
      name: 'Shirley & Harold Memorial Fine Arts Scholarship',
      category: 'humanities',
      amount: '$1,800',
      eligibility: ['Studio Art, Painting, or Sculpting major', 'Submit 3 original artwork samples', 'GPA of 2.5 or higher'],
      description: 'Generously funded to enable aspiring Napa painters and sculptors to purchase canvases, tools, and materials.'
    },
    {
      id: 'powell-leadership-equity',
      name: 'Dr. Torence Powell Leadership & Academic Equity Scholarship',
      category: 'general',
      amount: '$3,000',
      eligibility: ['Active member of student government or equity groups', 'First-generation college student', 'GPA of 3.0+'],
      description: 'Sponored in honor of the current Superintendent/President of NVC to support students actively promoting inclusion and leadership on campus.'
    },
    {
      id: 'napa-wine-library',
      name: 'Napa Valley Wine Library Association Scholarship',
      category: 'vocational',
      amount: '$1,500',
      eligibility: ['Research essay on Napa history or grape growing', 'VWT major or local history major'],
      description: 'Encouraging historical literature research in Napa viticulture and vineyard traditions, utilizing the historical NVC Library archives.'
    },
    {
      id: 'disaster-emergency-aid',
      name: 'Napa Community Crisis & Emergency Assistance Relief Award',
      category: 'general',
      amount: 'Variable (Up to $1,500)',
      eligibility: ['Currently enrolled student', 'Demonstrated immediate crisis (wildfire, flood, medical, housing insecurity)'],
      description: 'Quick-access crisis relief fund supported by private community donors to prevent student dropouts due to external environmental hazards.'
    }
  ];

  // Filters browse results
  const filteredScholarships = scholarshipsList.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Calculate matching estimator scholarships
  const matchingEstimatorCount = scholarshipsList.filter((item) => {
    // Basic logic simulation
    const numericGpa = parseFloat(gpa);
    if (item.id === 'queen-allied-health' && (numericGpa < 3.0 || (majorSelection !== 'health' && majorSelection !== 'any'))) return false;
    if (item.id === 'stem-innovation' && (numericGpa < 3.2 || (majorSelection !== 'stem' && majorSelection !== 'any'))) return false;
    if (item.id === 'nvc-promise' && (localGraduate === 'no' || enrollmentType !== 'full-time')) return false;
    if (item.id === 'napavalley-vintners-viticulture' && (majorSelection !== 'vocational' && majorSelection !== 'any')) return false;
    return true;
  });

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName && studentEmail && fileName) {
      setAppSubmitted(true);
    }
  };

  const resetForm = () => {
    setStudentName('');
    setStudentEmail('');
    setStudentPhone('');
    setStudentGpa('');
    setPersonalStatement('');
    setFileName('');
    setAppSubmitted(false);
  };

  return (
    <div id="scholarships-view" className="animate-fade-in max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-12">
      
      {/* Intro Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
          Academic Financial Support
        </span>
        <h1 className="text-4xl font-serif text-[#1C2C24]">
          Scholarships & Programs
        </h1>
        <p className="text-gray-600 text-base leading-relaxed font-light">
          The Napa Valley College Foundation distributes a wide array of donor-established scholarships each year. Browse available awards, estimate your eligibility, or submit a simulated application.
        </p>
      </section>

      {/* Internal Navigation Tabs */}
      <div className="flex border-b border-gray-100 justify-center gap-4">
        {[
          { id: 'browse', label: 'Browse Scholarships', icon: Search },
          { id: 'estimator', label: 'Eligibility Estimator', icon: Sparkles },
          { id: 'apply', label: 'Simulated Application Portal', icon: FileText },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all focus:outline-none ${
                isActive 
                  ? 'border-[#AF8B2C] text-[#AF8B2C]' 
                  : 'border-transparent text-gray-500 hover:text-[#4E7C66]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Contents */}
      <div className="pt-4">
        
        {/* Tab 1: Browse Scholarships */}
        {activeTab === 'browse' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 bg-[#FBFBFA] p-4 rounded-xl border border-gray-100 items-center justify-between">
              <div className="relative w-full sm:max-w-md">
                <input
                  type="text"
                  placeholder="Search scholarships by name or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#AF8B2C]"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#AF8B2C] w-full sm:w-auto font-medium"
                >
                  <option value="all">All Categories</option>
                  <option value="promise">Promise Program</option>
                  <option value="health">Nursing & Allied Health</option>
                  <option value="stem">S.T.E.M. Fields</option>
                  <option value="vocational">Culinary & Vocational</option>
                  <option value="humanities">Liberal Arts & Humanities</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredScholarships.map((sch) => (
                <div 
                  key={sch.id} 
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        {sch.category.toUpperCase()}
                      </span>
                      <span className="text-sm font-extrabold text-[#4E7C66] bg-[#EBF3EF] px-3 py-1 rounded-full flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5 stroke-[3]" />
                        {sch.amount}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1C2C24] leading-tight">
                      {sch.name}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {sch.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-50/80 space-y-2">
                    <span className="text-[10px] font-bold text-[#AF8B2C] uppercase tracking-wider block">
                      Core Eligibility:
                    </span>
                    <ul className="space-y-1.5">
                      {sch.eligibility.map((el, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#4E7C66] shrink-0 mt-0.5" />
                          <span>{el}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              {filteredScholarships.length === 0 && (
                <div className="col-span-2 text-center py-12 text-gray-400 text-sm">
                  No scholarships matched your search filters. Try adjusting your terms.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Eligibility Estimator */}
        {activeTab === 'estimator' && (
          <div className="bg-[#FBFBFA] border border-gray-100 rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Input Form Column */}
            <div className="lg:col-span-5 space-y-6 bg-white p-6 rounded-2xl border border-gray-200/60 shadow-sm">
              <h3 className="text-lg font-bold text-[#1C2C24] border-b border-gray-100 pb-2">
                Your Student Profile
              </h3>
              
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-gray-600 block">Current Cumulative GPA</label>
                <div className="grid grid-cols-4 gap-2">
                  {['2.5', '3.0', '3.2', '3.5'].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => { setGpa(v); setEstimatorSubmitted(true); }}
                      className={`py-2 text-xs font-semibold border rounded-lg transition-colors focus:outline-none ${
                        gpa === v 
                          ? 'bg-[#4E7C66] text-white border-[#4E7C66]' 
                          : 'bg-white text-gray-600 hover:border-[#4E7C66]'
                      }`}
                    >
                      {v}+
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-xs font-bold text-gray-600 block">Intended Major Category</label>
                <select
                  value={majorSelection}
                  onChange={(e) => { setMajorSelection(e.target.value); setEstimatorSubmitted(true); }}
                  className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#AF8B2C] font-semibold"
                >
                  <option value="any">General/Undecided</option>
                  <option value="health">Nursing & Medical Sciences</option>
                  <option value="vocational">Viticulture / Culinary Arts</option>
                  <option value="stem">S.T.E.M. (Computer Sci, Engineering)</option>
                  <option value="humanities">Liberal Arts & Fine Arts</option>
                </select>
              </div>

              <div className="space-y-2.5">
                <label className="text-xs font-bold text-gray-600 block">Napa County High School Graduate?</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: 'yes', label: 'Yes, Local Graduate' },
                    { val: 'no', label: 'No, Out of County' }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => { setLocalGraduate(opt.val); setEstimatorSubmitted(true); }}
                      className={`py-2 text-xs font-semibold border rounded-lg transition-colors focus:outline-none ${
                        localGraduate === opt.val 
                          ? 'bg-[#AF8B2C] text-white border-[#AF8B2C]' 
                          : 'bg-white text-gray-600 hover:border-[#AF8B2C]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-xs font-bold text-gray-600 block">Planned Course Enrollment</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: 'full-time', label: 'Full-Time (12+ units)' },
                    { val: 'part-time', label: 'Part-Time' }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => { setEnrollmentType(opt.val); setEstimatorSubmitted(true); }}
                      className={`py-2 text-xs font-semibold border rounded-lg transition-colors focus:outline-none ${
                        enrollmentType === opt.val 
                          ? 'bg-[#8A5C6D] text-white border-[#8A5C6D]' 
                          : 'bg-white text-gray-600 hover:border-[#8A5C6D]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEstimatorSubmitted(true)}
                className="w-full py-3 bg-[#4E7C66] hover:bg-[#3E6352] text-white font-bold rounded-xl text-sm transition-colors shadow-sm"
              >
                Calculate Match Potentials
              </button>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-serif text-[#1C2C24]">
                  Match Estimator Results
                </h3>
                <p className="text-xs text-gray-400">
                  Calculated based on live criteria parameters configured in the left panel.
                </p>
              </div>

              {estimatorSubmitted ? (
                <div className="space-y-6">
                  <div className="p-4 bg-[#EBF3EF] border border-[#A4C4B4] rounded-2xl flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#4E7C66] font-extrabold text-lg shadow-sm">
                      {matchingEstimatorCount.length}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1C2C24] text-sm">Matching NVC Scholarships Found!</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Based on your GPA of {gpa}+ and profile inputs, you qualify to apply for these awards.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 max-h-[340px] overflow-y-auto pr-2">
                    {matchingEstimatorCount.map((sch) => (
                      <div key={sch.id} className="p-4 bg-white border border-gray-100 rounded-xl space-y-2 shadow-sm">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-[#1C2C24] text-sm">{sch.name}</h4>
                          <span className="text-xs font-extrabold text-[#4E7C66] bg-[#EBF3EF] px-2.5 py-0.5 rounded-full">
                            {sch.amount}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-2">{sch.description}</p>
                      </div>
                    ))}
                    {matchingEstimatorCount.length === 0 && (
                      <div className="text-center py-12 text-gray-400 text-xs">
                        No direct matching awards. Try setting a GPA of 3.0+ or Full-Time course enrollment!
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center bg-white border border-dashed border-gray-200 rounded-3xl space-y-4">
                  <GraduationCap className="w-12 h-12 text-gray-300 mx-auto" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Awaiting Student Profile Parameters</h4>
                    <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed mt-1">
                      Configure your GPA, major interest, and high school residency on the left and click "Calculate Match Potentials" to see tailored opportunities.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Simulated Application Portal */}
        {activeTab === 'apply' && (
          <div className="max-w-3xl mx-auto bg-white border border-gray-100 shadow-xl rounded-3xl p-6 md:p-10 space-y-8">
            
            <div className="space-y-2 border-b border-gray-100 pb-4">
              <h3 className="text-xl font-serif text-[#1C2C24] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#AF8B2C]" />
                Simulated NVC Scholarship Application
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                This is a fully-functional sandbox simulation of the foundation scholarship portal. Fill out the fields, upload a document, and click submit to trigger a verification receipt.
              </p>
            </div>

            {!appSubmitted ? (
              <form onSubmit={handleApplySubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-600 block">Full Legal Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-600 block">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane.doe@student.napavalley.edu"
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-600 block">Contact Phone</label>
                    <input
                      type="tel"
                      placeholder="(707) 555-0199"
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-600 block">Current Cumulative GPA *</label>
                    <input
                      type="number"
                      required
                      step="0.01"
                      min="2.0"
                      max="4.0"
                      placeholder="3.75"
                      value={studentGpa}
                      onChange={(e) => setStudentGpa(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-600 block">Declared NVC Major *</label>
                    <select
                      value={studentMajor}
                      onChange={(e) => setStudentMajor(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66] font-semibold"
                    >
                      <option value="Nursing">Nursing / Allied Health</option>
                      <option value="Viticulture">Viticulture & Oenology</option>
                      <option value="ComputerScience">Computer Science</option>
                      <option value="Culinary">Culinary Arts</option>
                      <option value="Humanities">Liberal Arts / Humanities</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 block">Personal statement of academic purpose (Min 100 words) *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your career goals in Napa Valley and how this scholarship will assist you..."
                    value={personalStatement}
                    onChange={(e) => setPersonalStatement(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66]"
                  />
                </div>

                {/* File Upload Component */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-600 block">Upload Academic Transcript (PDF / Image) *</label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={triggerFileSelect}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-2 ${
                      isDragging 
                        ? 'border-[#AF8B2C] bg-[#F9F7EE]' 
                        : fileName 
                          ? 'border-[#4E7C66] bg-[#EBF3EF]' 
                          : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,image/*"
                    />
                    <Upload className={`w-10 h-10 ${fileName ? 'text-[#4E7C66]' : 'text-gray-400'}`} />
                    {fileName ? (
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-[#4E7C66]">File Attached successfully!</p>
                        <p className="text-xs text-gray-500 font-mono">{fileName}</p>
                      </div>
                    ) : (
                      <div className="space-y-1 text-xs">
                        <p className="font-bold text-gray-700">Drag & drop your transcript here, or <span className="text-[#AF8B2C] underline">browse files</span></p>
                        <p className="text-gray-400">Supports PDF or High-res image formats up to 10MB.</p>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#8A5C6D] hover:bg-[#724957] text-white font-bold rounded-xl text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Submit Scholarship Application</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#EBF3EF] border-2 border-[#4E7C66] flex items-center justify-center mx-auto text-[#4E7C66]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-serif text-[#1C2C24]">Application Submitted!</h4>
                  <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{studentName}</strong>. Your mock application for the NVC Foundation Scholarships has been successfully validated.
                  </p>
                </div>

                {/* Generated receipt */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-left max-w-md mx-auto font-mono text-xs space-y-3 shadow-inner">
                  <div className="text-center border-b border-gray-200 pb-2.5">
                    <span className="font-bold uppercase block tracking-wider">NVC FOUNDATION RECEIPT</span>
                    <span className="text-gray-400 block text-[10px]">Verification ID: SCH-{Math.floor(Math.random() * 900000 + 100000)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 text-gray-600">
                    <span>Applicant:</span>
                    <span className="text-right text-black font-semibold">{studentName}</span>
                    <span>Major Declared:</span>
                    <span className="text-right text-black font-semibold">{studentMajor}</span>
                    <span>G.P.A. Confirmed:</span>
                    <span className="text-right text-black font-semibold">{studentGpa}</span>
                    <span>Transcript Attached:</span>
                    <span className="text-right text-black font-semibold overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px] block">{fileName}</span>
                    <span>Date:</span>
                    <span className="text-right text-black font-semibold">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex justify-center gap-4 pt-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 border border-gray-200 rounded-full text-xs font-semibold hover:bg-gray-50 focus:outline-none"
                  >
                    Submit Another Simulation
                  </button>
                  <button
                    onClick={() => setActiveTab('browse')}
                    className="px-6 py-2.5 bg-[#4E7C66] hover:bg-[#3E6352] text-white rounded-full text-xs font-bold shadow transition-colors"
                  >
                    Back to Browse List
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
