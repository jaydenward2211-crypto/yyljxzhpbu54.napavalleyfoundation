import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Globe, Send, CheckCircle, Info } from 'lucide-react';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('General Inquiry');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div id="contact-view" className="animate-fade-in max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-16">
      
      {/* Page Title */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[#AF8B2C] text-xs font-bold uppercase tracking-widest block">
          Get in Touch with NVC Foundation
        </span>
        <h1 className="text-4xl font-serif text-[#1C2C24]">
          Contact Us
        </h1>
        <p className="text-gray-600 text-base leading-relaxed font-light">
          Have questions about establishing a scholarship, making a corporate gift, or applying for academic funding? Our staff is here to help.
        </p>
      </section>

      {/* Grid of details & form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact details Column */}
        <div className="lg:col-span-5 space-y-8 bg-[#FBFBFA] p-6 md:p-8 rounded-3xl border border-gray-100">
          <div className="space-y-2">
            <h2 className="text-xl font-serif text-[#1C2C24]">
              Foundation Office
            </h2>
            <p className="text-xs text-gray-500">
              We are located on the main campus of Napa Valley College.
            </p>
          </div>

          <div className="space-y-6 text-sm text-gray-700">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#AF8B2C] shadow-sm shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900">Physical & Mailing Address</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Napa Valley College Foundation<br />
                  Building 1500, Room 1501<br />
                  2277 Napa Vallejo Highway<br />
                  Napa, CA 94558
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#AF8B2C] shadow-sm shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900">Phone Directory</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Office Desk: <a href="tel:+17072567170" className="text-[#4E7C66] font-semibold hover:underline">(707) 256-7170</a><br />
                  Fax Line: <span className="font-semibold">(707) 256-7179</span>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#AF8B2C] shadow-sm shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900">Email Inquiries</h4>
                <p className="text-xs text-gray-600 leading-relaxed space-y-1 flex flex-col">
                  <span>General Support: <a href="mailto:foundation@napavalley.edu" className="text-[#4E7C66] font-semibold hover:underline">foundation@napavalley.edu</a></span>
                  <span>Scholarship Office: <a href="mailto:scholarships@napavalley.edu" className="text-[#4E7C66] font-semibold hover:underline">scholarships@napavalley.edu</a></span>
                  <span>Executive Director: <a href="mailto:jessica.thomason@napavalley.edu" className="text-[#4E7C66] font-semibold hover:underline">jessica.thomason@napavalley.edu</a></span>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#AF8B2C] shadow-sm shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900">Office Working Hours</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Monday – Friday: 8:00 AM – 5:00 PM<br />
                  Closed Saturday, Sunday, and all California state/federal holidays.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl flex gap-3 text-blue-800">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="text-[10px] leading-relaxed">
              <span className="font-bold block mb-0.5">Student Transcript Notice</span>
              Official student academic transcript issues or course registration holds must be settled directly with the NVC Admissions & Records Office.
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-white border border-gray-100 shadow-xl rounded-3xl p-6 md:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#1C2C24]">
              Send a Secure Message
            </h3>
            <p className="text-xs text-gray-400">
              Fill out the fields below and our team will get back to you within 2 business days.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane.doe@example.com"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600">Subject Category</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66] font-semibold"
                >
                  <option value="General Inquiry">General Foundation Inquiry</option>
                  <option value="Establish Scholarship">Establish a New Endowment / Scholarship</option>
                  <option value="Promise Program">Napa Valley College Promise Program Inquiries</option>
                  <option value="Donation Question">Matching Gift & Stock Transfers Questions</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600">Message / Comments *</label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1C2C24] focus:outline-none focus:border-[#4E7C66]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#4E7C66] hover:bg-[#3E6352] text-white font-bold rounded-xl text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#EBF3EF] border-2 border-[#4E7C66] flex items-center justify-center mx-auto text-[#4E7C66]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-serif text-[#1C2C24]">Message Received!</h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. Your message regarding "<strong>{subject}</strong>" has been transmitted successfully to our staff inbox.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#4E7C66] hover:bg-[#3E6352] text-white font-bold rounded-full text-xs shadow transition-colors focus:outline-none"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

      </section>

      {/* Embedded Live Google Map pointing to Napa Valley College */}
      <section className="space-y-4">
        <h3 className="font-serif text-[#1C2C24] text-xl text-center">
          Find Us on Campus
        </h3>
        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.539824647656!2d-122.27961222409543!3d38.25530757186851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085065a71df3889%3A0xe7f98fb7ec3357fb!2sNapa%20Valley%20College!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Napa Valley College Google Maps Location"
          />
        </div>
      </section>

    </div>
  );
}
