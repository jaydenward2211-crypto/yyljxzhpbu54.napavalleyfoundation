import React, { useState } from 'react';
import { Heart, DollarSign, ShieldCheck, CheckCircle, Award, Sparkles, Printer, Lock } from 'lucide-react';
import { DonationFormState } from '../types';

export default function DonationView() {
  const [form, setForm] = useState<DonationFormState>({
    amount: 100,
    frequency: 'one-time',
    purpose: 'General Scholarship Fund',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isAnonymous: false,
    isTribute: false,
    tributeType: 'honor',
    tributeName: '',
    employerMatch: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    zipCode: '',
  });

  const [activeAmountPreset, setActiveAmountPreset] = useState<number | 'custom'>(100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donationCompleted, setDonationCompleted] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');

  const purposes = [
    'General Scholarship Fund',
    'Napa Valley College Promise Program (Free Tuition)',
    'Nursing & Allied Health Program Support',
    'Viticulture & Winery Technology Equipment',
    'Emergency Student Crisis Aid',
    'Culinary Arts & Hospitality Training Fund',
    'Athletic Department Programs',
  ];

  const presets = [50, 100, 250, 500, 1000];

  const handleAmountSelect = (val: number) => {
    setActiveAmountPreset(val);
    setForm({ ...form, amount: val });
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveAmountPreset('custom');
    const val = e.target.value === '' ? '' : parseFloat(e.target.value);
    setForm({ ...form, amount: val });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Basic Card Number Formatter
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 16) val = val.slice(0, 16);
    // Format: 4444 4444 4444 4444
    const formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    setForm({ ...form, cardNumber: formatted });
  };

  // Basic Expiry Formatter
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 4) val = val.slice(0, 4);
    if (val.length > 2) {
      val = val.slice(0, 2) + '/' + val.slice(2);
    }
    setForm({ ...form, expiryDate: val });
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 4) val = val.slice(0, 4);
    setForm({ ...form, cvv: val });
  };

  // Identify Card Brand based on prefix
  const getCardBrand = () => {
    const rawNum = form.cardNumber.replace(/\s/g, '');
    if (rawNum.startsWith('4')) return 'Visa';
    if (rawNum.startsWith('5')) return 'Mastercard';
    if (rawNum.startsWith('3')) return 'Amex';
    if (rawNum.startsWith('6')) return 'Discover';
    return 'Unknown';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.amount || form.amount <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }
    if (form.cardNumber.replace(/\s/g, '').length < 15) {
      alert('Please enter a valid credit card number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setDonationCompleted(true);
      setReceiptNumber('NVC-TXN-' + Math.floor(Math.random() * 900000 + 100000));
    }, 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const resetForm = () => {
    setForm({
      amount: 100,
      frequency: 'one-time',
      purpose: 'General Scholarship Fund',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      isAnonymous: false,
      isTribute: false,
      tributeType: 'honor',
      tributeName: '',
      employerMatch: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      zipCode: '',
    });
    setActiveAmountPreset(100);
    setDonationCompleted(false);
  };

  return (
    <div id="donation-view" className="animate-fade-in max-w-5xl mx-auto px-4 md:px-8 py-16">
      
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
          Make a Difference Today
        </span>
        <h1 className="text-4xl font-serif text-[#1C2C24]">
          Secure Donation Portal
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          100% of your donation is directed to the student programs or funds of your choice. Thank you for empowering academic excellence in Napa Valley.
        </p>
      </div>

      {!donationCompleted ? (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Donation parameters */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-sm">
            
            {/* Step 1: Frequency & Amount */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#4E7C66] border-b border-gray-100 pb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#EBF3EF] text-[#4E7C66] font-mono text-xs flex items-center justify-center font-bold">1</span>
                Gift Amount & Frequency
              </h3>

              {/* Frequency Selector */}
              <div className="grid grid-cols-3 gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-200/50">
                {[
                  { id: 'one-time', label: 'One-Time' },
                  { id: 'monthly', label: 'Monthly' },
                  { id: 'annually', label: 'Annually' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setForm({ ...form, frequency: item.id as any })}
                    className={`py-2 text-xs font-bold rounded-lg transition-all focus:outline-none ${
                      form.frequency === item.id 
                        ? 'bg-white text-[#AF8B2C] shadow-sm font-extrabold' 
                        : 'text-gray-500 hover:text-[#4E7C66]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Amount Presets */}
              <div className="grid grid-cols-5 gap-2 pt-2">
                {presets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleAmountSelect(preset)}
                    className={`py-3 text-sm font-extrabold border rounded-xl transition-all focus:outline-none ${
                      activeAmountPreset === preset 
                        ? 'bg-[#4E7C66] text-white border-[#4E7C66] shadow-sm' 
                        : 'bg-white text-gray-700 border-gray-200 hover:border-[#4E7C66]'
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>

              {/* Custom Amount input */}
              <div className="relative pt-2">
                <div className="absolute left-4 top-5 text-gray-400 font-bold text-lg select-none">$</div>
                <input
                  type="number"
                  min="5"
                  step="0.01"
                  placeholder="Enter custom donation amount..."
                  value={activeAmountPreset === 'custom' ? form.amount : ''}
                  onChange={handleCustomAmountChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-[#1C2C24] focus:outline-none focus:border-[#AF8B2C] placeholder-gray-400"
                />
              </div>
            </div>

            {/* Step 2: Designation Purpose */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#4E7C66] border-b border-gray-100 pb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#EBF3EF] text-[#4E7C66] font-mono text-xs flex items-center justify-center font-bold">2</span>
                Designate Your Support
              </h3>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-600 block">Select Academic Fund</label>
                <select
                  name="purpose"
                  value={form.purpose}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-[#1C2C24] focus:outline-none focus:border-[#AF8B2C]"
                >
                  {purposes.map((p, idx) => (
                    <option key={idx} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Donor Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#4E7C66] border-b border-gray-100 pb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#EBF3EF] text-[#4E7C66] font-mono text-xs flex items-center justify-center font-bold">3</span>
                Donor Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 block">First Name *</label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    value={form.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 block">Last Name *</label>
                  <input
                    type="text"
                    required
                    name="lastName"
                    value={form.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 block">Email Address *</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 block">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="(707) 555-0123"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66]"
                  />
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="isAnonymous"
                    checked={form.isAnonymous}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-[#4E7C66] focus:ring-[#4E7C66]"
                  />
                  <span>Make this donation anonymous (hide name on public honor rolls)</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold text-gray-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="isTribute"
                    checked={form.isTribute}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-[#4E7C66] focus:ring-[#4E7C66]"
                  />
                  <span>This is a tribute gift (in honor or memory of someone)</span>
                </label>

                {form.isTribute && (
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col sm:flex-row gap-4 items-center">
                    <select
                      name="tributeType"
                      value={form.tributeType}
                      onChange={handleInputChange}
                      className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold focus:outline-none focus:border-[#AF8B2C] w-full sm:w-auto"
                    >
                      <option value="honor">In Honor of</option>
                      <option value="memory">In Memory of</option>
                    </select>
                    <input
                      type="text"
                      name="tributeName"
                      value={form.tributeName}
                      onChange={handleInputChange}
                      placeholder="Enter nominee name..."
                      className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs text-[#1C2C24] focus:outline-none focus:border-[#AF8B2C]"
                    />
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Secure Payment details sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#1C2C24] text-white p-6 rounded-3xl border border-[#22362C] space-y-6 shadow-md">
              <div className="flex justify-between items-center border-b border-[#2B4035] pb-4">
                <span className="text-sm font-semibold text-gray-300">Donation Summary</span>
                <span className="text-xs bg-[#8A5C6D] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  {form.frequency}
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-gray-400">Total Gift Commitment:</div>
                <div className="text-4xl font-extrabold font-mono text-[#F1E8B8] flex items-baseline gap-1">
                  ${form.amount || '0'}
                  <span className="text-xs font-normal text-gray-300">
                    {form.frequency !== 'one-time' && `/ ${form.frequency.replace('-time', '')}`}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-gray-300">
                <div>Allocated Towards:</div>
                <div className="font-bold text-[#F1E8B8]">{form.purpose}</div>
              </div>

              {/* Secure Payment Card form fields */}
              <div className="border-t border-[#2B4035] pt-4 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#AF8B2C]" />
                  Secure Card Payment
                </h4>

                {/* Card Number */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold text-gray-300 block">Credit Card Number *</label>
                    <span className="text-[9px] font-mono text-[#AF8B2C] font-semibold uppercase">
                      {getCardBrand() !== 'Unknown' ? getCardBrand() : 'Secure Checkout'}
                    </span>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="4000 1234 5678 9010"
                    value={form.cardNumber}
                    onChange={handleCardNumberChange}
                    className="w-full px-4 py-2.5 bg-[#2B4035] border border-[#3E5C4C] rounded-lg text-sm text-white focus:outline-none focus:border-[#AF8B2C] placeholder-gray-500 font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Expiry Date */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 block">Expiry Date *</label>
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      value={form.expiryDate}
                      onChange={handleExpiryChange}
                      className="w-full px-4 py-2.5 bg-[#2B4035] border border-[#3E5C4C] rounded-lg text-sm text-white focus:outline-none focus:border-[#AF8B2C] placeholder-gray-500 font-mono text-center"
                    />
                  </div>
                  {/* CVV */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-300 block">CVV Code *</label>
                    <input
                      type="password"
                      required
                      placeholder="123"
                      value={form.cvv}
                      onChange={handleCvvChange}
                      className="w-full px-4 py-2.5 bg-[#2B4035] border border-[#3E5C4C] rounded-lg text-sm text-white focus:outline-none focus:border-[#AF8B2C] placeholder-gray-500 font-mono text-center"
                    />
                  </div>
                </div>

                {/* Zip Code */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-300 block">Billing Zip Code *</label>
                  <input
                    type="text"
                    required
                    name="zipCode"
                    value={form.zipCode}
                    onChange={handleInputChange}
                    placeholder="94558"
                    className="w-full px-4 py-2.5 bg-[#2B4035] border border-[#3E5C4C] rounded-lg text-sm text-white focus:outline-none focus:border-[#AF8B2C] placeholder-gray-500 font-mono"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#AF8B2C] hover:bg-[#967420] disabled:bg-gray-600 text-[#1C2C24] hover:text-white font-extrabold rounded-xl text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Processing secure transaction...</span>
                ) : (
                  <>
                    <Heart className="w-4 h-4 fill-current" />
                    <span>Authorize Gift of ${form.amount || '0'}</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#4E7C66] shrink-0 mt-0.5" />
              <div className="text-[10px] leading-relaxed text-gray-500">
                <span className="font-bold text-gray-700 block mb-0.5">SSL Secure Transaction</span>
                This checkout is protected with industry-standard 256-bit bank-level SSL encryption. Your credit card metrics are processed tokenized and never stored on local servers.
              </div>
            </div>

          </div>

        </form>
      ) : (
        /* Completed Donation Screen & Receipt Generator */
        <div className="max-w-xl mx-auto bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-12 text-center space-y-8 animate-scale-up">
          <div className="w-16 h-16 rounded-full bg-[#EBF3EF] border-2 border-[#4E7C66] flex items-center justify-center mx-auto text-[#4E7C66]">
            <CheckCircle className="w-8 h-8" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl font-serif text-[#1C2C24]">Thank You for Your Generosity!</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Dear <strong>{form.firstName} {form.lastName}</strong>, your critical gift has been successfully processed. An official tax receipt has been compiled and emailed to <strong>{form.email}</strong>.
            </p>
          </div>

          {/* Render printable high-fidelity receipt */}
          <div 
            id="print-receipt"
            className="p-6 bg-[#FBFBFA] border border-gray-200/80 rounded-2xl text-left font-mono text-xs space-y-4 shadow-inner text-gray-800"
          >
            <div className="text-center border-b border-gray-200 pb-3">
              <span className="font-extrabold uppercase text-[#1C2C24] block tracking-widest text-sm">NVC FOUNDATION RECEIPT</span>
              <span className="text-gray-400 block text-[10px] pt-1">Charitable Donation Tax Confirmation Receipt</span>
            </div>

            <div className="grid grid-cols-2 gap-y-2">
              <span className="text-gray-500">Receipt/Txn ID:</span>
              <span className="text-right text-black font-semibold">{receiptNumber}</span>
              
              <span className="text-gray-500">Donor Name:</span>
              <span className="text-right text-black font-semibold">
                {form.isAnonymous ? 'Anonymous Donor' : `${form.firstName} ${form.lastName}`}
              </span>

              <span className="text-gray-500">Designated Fund:</span>
              <span className="text-right text-black font-semibold overflow-hidden text-ellipsis whitespace-nowrap block max-w-[190px]">
                {form.purpose}
              </span>

              <span className="text-gray-500">Gift Frequency:</span>
              <span className="text-right text-black font-semibold capitalize">{form.frequency}</span>

              {form.isTribute && (
                <>
                  <span className="text-gray-500">Tribute nominee:</span>
                  <span className="text-right text-black font-semibold italic">
                    {form.tributeType === 'honor' ? 'In Honor of' : 'In Memory of'} {form.tributeName}
                  </span>
                </>
              )}

              <span className="text-gray-500">Date Issued:</span>
              <span className="text-right text-black font-semibold">{new Date().toLocaleString()}</span>
            </div>

            <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between items-center text-sm">
              <span className="font-bold text-[#1C2C24]">Amount Deductible:</span>
              <span className="font-extrabold text-[#4E7C66] text-lg">${form.amount}</span>
            </div>

            <div className="border-t border-gray-200 pt-3 text-[10px] text-gray-400 text-center leading-relaxed">
              Napa Valley College Foundation confirms that no goods or services were provided in exchange for this contribution. Please retain this for income tax preparations.
            </div>
          </div>

          {/* Receipt control actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button
              onClick={handlePrint}
              className="px-6 py-2.5 border border-gray-200 rounded-full text-xs font-bold hover:bg-gray-50 flex items-center justify-center gap-1.5 focus:outline-none"
            >
              <Printer className="w-4 h-4" />
              <span>Print Tax Receipt</span>
            </button>
            <button
              onClick={resetForm}
              className="px-6 py-2.5 bg-[#4E7C66] hover:bg-[#3E6352] text-white rounded-full text-xs font-bold shadow transition-colors flex items-center justify-center"
            >
              Submit Another Donation
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
