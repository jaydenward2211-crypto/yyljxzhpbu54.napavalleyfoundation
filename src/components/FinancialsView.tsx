import React, { useState } from 'react';
import { Shield, FileText, Download, CheckCircle, TrendingUp, Landmark, FileCheck } from 'lucide-react';

export default function FinancialsView() {
  const [downloadingReport, setDownloadingReport] = useState<string | null>(null);
  const [activeLetterTab, setActiveLetterTab] = useState<'scan' | 'transcript'>('scan');

  const handleDownload = (fileName: string) => {
    setDownloadingReport(fileName);
    setTimeout(() => {
      setDownloadingReport(null);
      // Open in a new window or trigger simulated success alert
      const printContents = document.getElementById('irs-letter-doc')?.innerHTML;
      if (printContents && fileName === 'IRS-501c3-Letter.pdf') {
        const printWindow = window.open('', '_blank');
        if (printWindow) {
          printWindow.document.write('<html><head><title>NVC Foundation IRS Letter</title><style>body { font-family: monospace; padding: 40px; }</style></head><body>');
          printWindow.document.write(printContents);
          printWindow.document.write('</body></html>');
          printWindow.document.close();
          printWindow.print();
        }
      } else {
        alert(`Downloaded file: ${fileName} (Simulated successfully!)`);
      }
    }, 1500);
  };

  const balanceSheet = {
    assets: [
      { name: 'Cash and Cash Equivalents', amount: '$3,421,800' },
      { name: 'Short-Term Investments', amount: '$1,980,500' },
      { name: 'Long-Term Endowment Investments', amount: '$12,450,200' },
      { name: 'Pledges Receivable (Net)', amount: '$850,000' },
      { name: 'Total Assets', amount: '$18,702,500', bold: true },
    ],
    liabilities: [
      { name: 'Accounts Payable & Accrued Expenses', amount: '$120,400' },
      { name: 'Grants & Scholarships Payable', amount: '$450,000' },
      { name: 'Total Liabilities', amount: '$570,400', bold: true },
    ],
    netAssets: [
      { name: 'Without Donor Restrictions', amount: '$4,152,100' },
      { name: 'With Donor Restrictions (Restricted Endowments)', amount: '$13,980,000' },
      { name: 'Total Net Assets', amount: '$18,132,100', bold: true },
    ]
  };

  return (
    <div id="financials-view" className="animate-fade-in max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-16">
      
      {/* Page Title */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
          Public Trust and Accountability
        </span>
        <h1 className="text-4xl font-serif text-[#1C2C24]">
          Financials & Tax ID Details
        </h1>
        <p className="text-gray-600 text-base leading-relaxed font-light">
          We are committed to absolute transparency. Browse our official 501(c)(3) IRS status letter, key balance sheets, and annual Form 990 asset distribution metrics.
        </p>
      </section>

      {/* Primary Tax ID Card */}
      <section className="bg-[#F9F7EE] border border-gray-100 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-4xl mx-auto shadow-sm">
        <div className="space-y-2">
          <div className="text-xs font-bold text-[#AF8B2C] uppercase tracking-wider">Federal Tax ID Number</div>
          <h2 className="text-3xl font-mono font-bold text-[#1C2C24]">23-7003565</h2>
          <span className="text-xs bg-[#4E7C66] text-white px-2.5 py-0.5 rounded-full font-semibold inline-block">
            EIN Registered Active
          </span>
        </div>
        <div className="lg:col-span-2 space-y-4 text-sm text-gray-700 border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-8">
          <p>
            The Napa Valley College Foundation is incorporated as a tax-exempt charitable educational foundation under Section <strong>501(c)(3)</strong> of the Internal Revenue Code.
          </p>
          <p className="text-xs text-gray-500 font-medium">
            ✓ Contributions made directly to the Napa Valley College Foundation are fully tax-deductible to the maximum extent permitted by current United States tax regulations.
          </p>
        </div>
      </section>

      {/* IRS Letter Viewer */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
            IRS 501(c)(3) Status Document
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1C2C24]">
            Official Determination Letter
          </h2>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl shadow-lg max-w-3xl mx-auto overflow-hidden">
          {/* Header Action / Tab Bar */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <span className="text-xs font-bold text-gray-500 flex items-center gap-1.5 font-mono">
                <FileCheck className="w-4 h-4 text-[#4E7C66]" />
                IRS-Determination-501c3.pdf
              </span>
              <div className="bg-gray-200/60 p-1 rounded-xl flex gap-1 w-full sm:w-auto">
                <button
                  onClick={() => setActiveLetterTab('scan')}
                  className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeLetterTab === 'scan'
                      ? 'bg-white text-[#1C2C24] shadow-sm'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Original Scan
                </button>
                <button
                  onClick={() => setActiveLetterTab('transcript')}
                  className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeLetterTab === 'transcript'
                      ? 'bg-white text-[#1C2C24] shadow-sm'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Digital Transcript
                </button>
              </div>
            </div>
            <button
              onClick={() => handleDownload('IRS-501c3-Letter.pdf')}
              className="px-4 py-2 bg-white hover:bg-gray-50 text-xs font-bold text-[#4E7C66] border border-gray-200 rounded-lg flex items-center gap-1.5 shadow-sm transition-colors focus:outline-none w-full sm:w-auto justify-center"
            >
              {downloadingReport === 'IRS-501c3-Letter.pdf' ? (
                <span>Generating...</span>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Print / View PDF</span>
                </>
              )}
            </button>
          </div>

          {activeLetterTab === 'scan' ? (
            <div className="p-4 sm:p-8 bg-gray-100/50 flex justify-center items-center">
              <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-md bg-white max-w-full">
                <img 
                  src="/src/assets/images/irs_determination_letter_original_1784349501556.jpg" 
                  alt="Original IRS 501(c)(3) Determination Letter Scan" 
                  className="max-h-[650px] w-auto object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ) : (
            /* Actual Letter Document Representation */
            <div 
              id="irs-letter-doc"
              className="p-8 md:p-12 bg-[#FAF9F5] font-mono text-xs text-gray-800 space-y-6 leading-relaxed max-h-[600px] overflow-y-auto relative"
            >
              {/* Watermark/Stamp overlay */}
              <div className="absolute top-4 right-4 pointer-events-none select-none border-2 border-red-500/20 text-red-500/20 text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded rotate-12">
                Official IRS Copy
              </div>

              {/* IRS Header */}
              <div className="border-b border-gray-300 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="font-bold block text-sm">Internal Revenue Service</span>
                  <span className="text-xs text-gray-500 block">District Director</span>
                </div>
                <div className="md:text-right space-y-1 text-xs text-gray-600">
                  <div className="font-bold">Department of the Treasury</div>
                  <div>450 Golden Gate Ave.</div>
                  <div>San Francisco, Calif. 94102</div>
                </div>
              </div>

              {/* Support Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs border-b border-gray-200 pb-4">
                <div className="space-y-1">
                  <div className="font-bold text-gray-700">▸ Napa Valley College Foundation</div>
                  <div>2277 Napa-Vallejo Highway</div>
                  <div>Napa, CA 94558</div>
                </div>
                <div className="space-y-1 md:text-right text-gray-600">
                  <div><span className="font-bold">Person to Contact:</span> Taxpayer Service Representative</div>
                  <div><span className="font-bold">Telephone Number:</span> 1-800-424-1040</div>
                  <div><span className="font-bold">Refer Reply to:</span> Taxpayer Service</div>
                  <div><span className="font-bold">Date:</span> Mar. 20, 1985</div>
                </div>
              </div>

              {/* Salutation */}
              <div>
                <p className="font-bold">Dear Sir or Madam:</p>
              </div>

              {/* Content body */}
              <div className="space-y-4 text-justify">
                <p>
                  Reference is made to your request for verification of the tax exempt status of your organization.
                </p>
                <p>
                  We are unable to furnish you with a copy of the original determination or ruling letter that was issued to your organization. However, our records indicate that exemption was granted as shown below.
                </p>
                <p>
                  A determination or ruling letter issued to an organization granting exemption under the Internal Revenue Code of 1954 or under a prior or subsequent Revenue Act remains in effect until exempt status has been terminated, revoked or modified.
                </p>
                <p>
                  Our records indicate that there has been no change in your organization's exempt status.
                </p>
              </div>

              {/* Signature Area */}
              <div className="pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-gray-600">Sincerely yours,</p>
                  {/* Signature Simulation */}
                  <div className="my-1 font-serif text-xl italic text-blue-800/80 pl-4 py-1 border-l-2 border-blue-100 font-bold select-none tracking-wide">
                    Michael Sassi
                  </div>
                  <p className="font-bold text-xs text-gray-700">District Director</p>
                </div>

                <div className="border border-green-200 bg-green-50/50 p-2.5 rounded-lg flex items-center gap-2 font-sans shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <div className="text-[10px] leading-tight text-green-800">
                    <span className="font-bold block uppercase">VERIFIED ACTIVE STATUS</span>
                    <span>Employer ID: 23-7003565</span>
                  </div>
                </div>
              </div>

              {/* Official Exempt Record Details Footer block */}
              <div className="pt-4 border-t border-dashed border-gray-300 space-y-1.5 text-xs text-gray-700 bg-black/5 p-4 rounded-lg">
                <div className="font-bold uppercase text-[10px] text-gray-500 tracking-wider">IRS Registered Record Details:</div>
                <div><span className="font-bold">Name of the organization:</span> Napa Valley College Foundation</div>
                <div><span className="font-bold">Date of exemption letter:</span> January 1969</div>
                <div><span className="font-bold">Exemption granted pursuant to:</span> 1954 Code section 501(c)(3) or its predecessor Code section.</div>
                <div><span className="font-bold">Foundation Classification:</span> 509 (a)(3)</div>
                <div><span className="font-bold">Employer Identification Number (EIN):</span> 23-7003565</div>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* Audited Balance Sheet breakdown */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
            Annual Financial Statement
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1C2C24]">
            Audited Balance Sheet Summary
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Napa Valley College Foundation maintains an independent audit process. Our investments are managed conservatively by our Finance & Investment Committee to assure long-term yield and capital preservation.
          </p>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
            <h4 className="font-bold text-[#1C2C24] text-sm">Download Financial Disclosures</h4>
            <div className="space-y-2.5">
              {[
                'FY 2025 Audited Financial Statement.pdf',
                'FY 2025 Form 990 Tax Return.pdf',
                'NVC Foundation Endowment Policy.pdf'
              ].map((file) => (
                <button
                  key={file}
                  onClick={() => handleDownload(file)}
                  className="w-full p-3 bg-white hover:bg-[#F9F7EE] border border-gray-200 rounded-lg text-xs font-bold text-gray-700 flex justify-between items-center transition-colors focus:outline-none shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#AF8B2C]" />
                    {file}
                  </span>
                  <Download className="w-3.5 h-3.5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Balance Sheet Stats Display */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-md space-y-6">
          <h3 className="font-serif font-bold text-[#1C2C24] text-lg border-b border-gray-100 pb-3">
            Financial Statement Summary (June 30, 2025)
          </h3>

          <div className="space-y-4 text-xs">
            {/* Assets */}
            <div>
              <span className="font-bold text-[#4E7C66] uppercase block tracking-wider mb-2">Assets</span>
              <div className="space-y-1.5">
                {balanceSheet.assets.map((item, idx) => (
                  <div key={idx} className={`flex justify-between border-b border-gray-50 pb-1 ${item.bold ? 'font-bold text-black border-gray-200 pt-1' : 'text-gray-600'}`}>
                    <span>{item.name}</span>
                    <span>{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Liabilities */}
            <div className="pt-2">
              <span className="font-bold text-[#8A5C6D] uppercase block tracking-wider mb-2">Liabilities</span>
              <div className="space-y-1.5">
                {balanceSheet.liabilities.map((item, idx) => (
                  <div key={idx} className={`flex justify-between border-b border-gray-50 pb-1 ${item.bold ? 'font-bold text-black border-gray-200 pt-1' : 'text-gray-600'}`}>
                    <span>{item.name}</span>
                    <span>{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Net Assets */}
            <div className="pt-2">
              <span className="font-bold text-[#AF8B2C] uppercase block tracking-wider mb-2">Net Assets</span>
              <div className="space-y-1.5">
                {balanceSheet.netAssets.map((item, idx) => (
                  <div key={idx} className={`flex justify-between border-b border-gray-50 pb-1 ${item.bold ? 'font-bold text-black border-gray-200 pt-1' : 'text-gray-600'}`}>
                    <span>{item.name}</span>
                    <span>{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Endowment Allocation & Distribution Metrics */}
      <section className="space-y-8 bg-[#FBFBFA] p-8 md:p-12 rounded-3xl border border-gray-100">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
            Endowment stewardship
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1C2C24]">
            Asset Portfolio Allocation & Distribution
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
            The Napa Valley College Foundation manages an active endowment portfolio of approximately <strong>$18.7M</strong>. We adhere strictly to California UPMIFA rules to balance current payouts with long-term capital preservation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-4">
          
          {/* Portfolio Investments Allocation */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-150/80 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-[#1C2C24] text-base border-b border-gray-100 pb-2">
              Endowment Asset Allocation Strategy
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Our investment strategy is overseen by the Finance & Investment Committee, prioritizing inflation-offsetting growth and stable liquid reserves.
            </p>

            <div className="space-y-4 pt-2">
              {/* Asset 1 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Domestic & International Equities</span>
                  <span className="text-[#4E7C66]">55% ($10.28M)</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#4E7C66] h-full rounded-full" style={{ width: '55%' }} />
                </div>
              </div>

              {/* Asset 2 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Fixed Income / Corporate Bonds</span>
                  <span className="text-[#AF8B2C]">25% ($4.67M)</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#AF8B2C] h-full rounded-full" style={{ width: '25%' }} />
                </div>
              </div>

              {/* Asset 3 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Cash & Treasury Notes</span>
                  <span className="text-blue-600">15% ($2.80M)</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '15%' }} />
                </div>
              </div>

              {/* Asset 4 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Real Estate & Alternatives</span>
                  <span className="text-[#8A5C6D]">5% ($0.93M)</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#8A5C6D] h-full rounded-full" style={{ width: '5%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Impact Allocation Breakdown */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-150/80 shadow-sm space-y-6">
            <h3 className="font-serif font-bold text-[#1C2C24] text-base border-b border-gray-100 pb-2">
              Annual Program Funding Distribution
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              How our annual earnings payout and private direct donations are allocated back into Napa Valley College student departments.
            </p>

            <div className="space-y-4 pt-2">
              {/* Distribution 1 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>NVC Promise (Tuition-Free Scholarships)</span>
                  <span className="text-[#4E7C66]">35%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#4E7C66] h-full rounded-full" style={{ width: '35%' }} />
                </div>
              </div>

              {/* Distribution 2 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Viticulture, Winery Technology, & Agriculture</span>
                  <span className="text-[#AF8B2C]">30%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#AF8B2C] h-full rounded-full" style={{ width: '30%' }} />
                </div>
              </div>

              {/* Distribution 3 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Nursing, Emergency Med, & Allied Health</span>
                  <span className="text-red-500">15%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full rounded-full" style={{ width: '15%' }} />
                </div>
              </div>

              {/* Distribution 4 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Student Emergency Crisis Grants</span>
                  <span className="text-[#8A5C6D]">10%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#8A5C6D] h-full rounded-full" style={{ width: '10%' }} />
                </div>
              </div>

              {/* Distribution 5 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Culinary Arts, Library Tech, & Humanities</span>
                  <span className="text-amber-500">10%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: '10%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
