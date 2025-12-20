import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AboutConferencePageProps {
  onNavigate: (page: string) => void;
}

export function AboutConferencePage({ onNavigate }: AboutConferencePageProps) {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const highlights = [
    {
      title: "World-Class Research",
      description: "Present your research to an international audience of academics and industry professionals",
      icon: "🎓"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with leading researchers, practitioners, and thought leaders in your field",
      icon: "🤝"
    },
    {
      title: "Publication Opportunities",
      description: "Selected papers will be published in indexed journals and conference proceedings",
      icon: "📚"
    },
    {
      title: "Keynote Sessions",
      description: "Learn from distinguished speakers and industry experts sharing cutting-edge insights",
      icon: "💡"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B1F3A] via-[#1E4ED8] to-[#0B1F3A] py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white text-[32px] sm:text-[42px] lg:text-[56px] xl:text-[64px] font-['Montserrat',sans-serif] font-bold mb-4 sm:mb-6">
              About the <span className="text-[#F97316]">Conference</span>
            </h1>
            <p className="text-white/90 text-[16px] sm:text-[18px] lg:text-[20px] max-w-[800px] mx-auto leading-relaxed">
              A premier platform for sharing innovative research in strategic management, digital transformation, and organizational resilience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <motion.section
        ref={contentRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-12 sm:py-16 lg:py-24 bg-white"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div variants={fadeInUp} className="prose prose-lg max-w-none mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-[#0B1F3A] text-[24px] sm:text-[28px] lg:text-[32px] font-['Montserrat',sans-serif] font-bold mb-4">
              Why This <span className="text-[#F97316]">Theme Matters</span>
            </h2>
            <p className="text-[#0F172A] text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed mb-4 sm:mb-6">
              In a world where <strong>digital transformation</strong> is no longer optional, <strong>strategic agility</strong> and <strong>resilience</strong> have become vital for organizations to thrive. Recent global disruptions, rapid technological advancements, and shifting stakeholder expectations have highlighted the need for business strategies that are flexible, future-oriented, and tech-enabled.
            </p>
            <p className="text-[#0F172A] text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed mb-4 sm:mb-6">
              This conference seeks to explore the intersection of <strong>technology and management</strong>—examining how organizations can innovate responsibly, lead through uncertainty, and build enduring value.
            </p>
          </motion.div>

          {/* About BNMIT Section */}
          <motion.div variants={fadeInUp} className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 lg:p-12 mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-[#0B1F3A] text-[24px] sm:text-[28px] lg:text-[32px] font-['Montserrat',sans-serif] font-bold mb-4 sm:mb-6">
              About <span className="text-[#F97316]">BNMIT</span>
            </h2>
            <p className="text-[#0F172A] text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed mb-4">
              <strong>B.N.M. Institute of Technology (BNMIT)</strong>, Bengaluru, was established in 2001 by the Sri Bhagawan Mahaveer Jain Sangha, Belgaum, under the leadership of Founder Chairman, Sri. B. M. Maanay. Affiliated to Visvesvaraya Technological University (VTU), Belagavi, the institute is recognized by AICTE and received Autonomous Status from 2021 onwards.
            </p>
            <p className="text-[#0F172A] text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed mb-4">
              Located in a sprawling, eco-friendly campus in Bengaluru, BNMIT offers UG, PG programs, and doctoral studies across various disciplines. The institution is accredited by NAAC with 'A' Grade and all eligible undergraduate programs are accredited by NBA.
            </p>
            <p className="text-[#0F172A] text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed">
              The institute houses state-of-the-art infrastructure including modern laboratories, a well-stocked library, innovation cells, incubation centers, and robust industry-academia partnerships. With a dedicated faculty, active placement cell, and strong alumni network, BNMIT is recognized for nurturing academic excellence, research, and holistic student development.
            </p>
          </motion.div>

          {/* About Department Section */}
          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#0B1F3A] to-[#1E4ED8] rounded-2xl p-6 sm:p-8 lg:p-12 text-white mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-['Montserrat',sans-serif] font-bold mb-4 sm:mb-6">
              About <span className="text-[#F97316]">Department of Business Administration</span>
            </h2>
            <p className="text-white/90 text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed mb-4">
              The <strong>Department of Business Administration</strong> at BNMIT was established in <strong>2006</strong> and offers MBA and BBA programs with specializations in Marketing, Finance, and Human Resources. It is one of the leading management departments affiliated to VTU and is recognized for its focus on academic rigor, industry exposure, and entrepreneurial spirit.
            </p>
            <p className="text-white/90 text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed mb-4">
              The department has MoUs with international institutions and offers student and faculty exchange programs. It actively promotes research through faculty development programs (FDPs), management development programs (MDPs), and has organized several national/international conferences.
            </p>
            <p className="text-white/90 text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed">
              With a blend of experienced faculty, industry mentors, and a curriculum aligned to global business needs, the department fosters holistic development, preparing students for leadership roles in the corporate world.
            </p>
          </motion.div>

          {/* Who Should Participate Section */}
          <motion.div variants={fadeInUp} className="mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-[#0B1F3A] text-[24px] sm:text-[28px] lg:text-[32px] font-['Montserrat',sans-serif] font-bold text-center mb-6 sm:mb-8">
              Who Should <span className="text-[#F97316]">Participate?</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: "👨‍🏫", label: "Academicians & Faculty Members" },
                { icon: "🎓", label: "Research Scholars & PhD Candidates" },
                { icon: "📚", label: "Postgraduate Students" },
                { icon: "💼", label: "Industry Practitioners" },
                { icon: "🏛️", label: "Policy Makers" },
                { icon: "💡", label: "Startup Founders & Entrepreneurs" },
                { icon: "📊", label: "Business Consultants" },
                { icon: "🌐", label: "NGO & CSR Professionals" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white rounded-xl p-4 sm:p-5 text-center border border-[#E2E8F0] shadow-md hover:shadow-lg transition-all"
                >
                  <div className="text-[32px] sm:text-[40px] mb-2">{item.icon}</div>
                  <p className="text-[#0B1F3A] text-[12px] sm:text-[14px] font-semibold">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-[#0B1F3A] text-[28px] sm:text-[36px] lg:text-[48px] font-['Montserrat',sans-serif] font-bold text-center mb-8 sm:mb-10 lg:mb-12">
              Conference <span className="text-[#F97316]">Highlights</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-[#E2E8F0] shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-[36px] sm:text-[42px] lg:text-[48px] mb-3 sm:mb-4">{highlight.icon}</div>
                  <h3 className="text-[#0B1F3A] text-[20px] sm:text-[24px] lg:text-[28px] font-['Montserrat',sans-serif] font-bold mb-3 sm:mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-[#475569] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Objectives */}
          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-[#0B1F3A] to-[#1E4ED8] rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-['Montserrat',sans-serif] font-bold mb-5 sm:mb-6 lg:mb-8">
              Conference Objectives
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed">
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="text-[#F97316] text-[20px] sm:text-[22px] lg:text-[24px] font-bold">•</span>
                <span>Foster interdisciplinary research and collaboration in strategic management and digital transformation</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="text-[#F97316] text-[20px] sm:text-[22px] lg:text-[24px] font-bold">•</span>
                <span>Provide a platform for sharing cutting-edge research findings and innovative business practices</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="text-[#F97316] text-[20px] sm:text-[22px] lg:text-[24px] font-bold">•</span>
                <span>Bridge the gap between academic research and industry application</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="text-[#F97316] text-[20px] sm:text-[22px] lg:text-[24px] font-bold">•</span>
                <span>Facilitate networking and knowledge exchange among researchers, practitioners, and policymakers</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="text-[#F97316] text-[20px] sm:text-[22px] lg:text-[24px] font-bold">•</span>
                <span>Promote publication of high-quality research in indexed journals and proceedings</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-10 sm:mt-12 lg:mt-16">
            <p className="text-[#475569] text-[16px] sm:text-[17px] lg:text-[18px] mb-6 sm:mb-8">
              Ready to be part of this transformative conference?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("registration")}
                className="bg-[#F97316] text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-lg font-semibold text-[16px] sm:text-[17px] lg:text-[18px] shadow-xl hover:bg-[#ea580c] transition-colors"
              >
                Register Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("tracks")}
                className="bg-white text-[#0B1F3A] px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-lg font-semibold text-[16px] sm:text-[17px] lg:text-[18px] border-2 border-[#0B1F3A] hover:bg-[#F8FAFC] transition-colors"
              >
                Explore Tracks
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
