import React, { useState } from 'react';
import FramerHero from './components/FramerHero';
import FramerAbout from './components/FramerAbout';
import FramerWhyUs from './components/FramerWhyUs';
import CoursesSection from './components/CoursesSection';
import EligibilityChecker from './components/EligibilityChecker';
import ComparisonTable from './components/ComparisonTable';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('Class 6 Admission Inquiry');

  const handleOpenInquiry = (subject = 'Class 6 Admission Inquiry') => {
    setInquirySubject(subject);
    setInquiryModalOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-slate-800 font-sans selection:bg-[#5096ca] selection:text-white overflow-x-hidden w-full">
      {/* 1st Page: Framer Reference Hero with Running Looping Video & Doodle */}
      <FramerHero
        onOpenInquiry={handleOpenInquiry}
        onScrollToSection={scrollToSection}
      />

      {/* 2nd Page: Framer Reference About Us with Marquee Ticker, 4 Stats, 3 Cards & Floating Logos in #5096ca */}
      <FramerAbout
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 3rd Page: Framer Reference Why Us with Inside-to-Outside Emerging Photo Effect & Swirl Doodle */}
      <FramerWhyUs
        onOpenInquiry={handleOpenInquiry}
      />

      {/* The 5 Key Class 6 Preparation Tracks (RK Mission, Banasthali, Navodaya, Sainik, RMS) */}
      <CoursesSection
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Interactive Class 6 Age Eligibility Calculator */}
      <EligibilityChecker
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Side-by-Side Exam Pattern Matrix */}
      <ComparisonTable
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Frequently Asked Questions */}
      <FaqSection
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Footer */}
      <Footer
        onScrollToSection={scrollToSection}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Interactive Admission Inquiry Modal (Client Prototype) */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultSubject={inquirySubject}
      />

      {/* Floating WhatsApp Quick-Chat Button */}
      <WhatsAppButton />
    </div>
  );
}
