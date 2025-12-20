import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface SpeakersPageProps {
  onNavigate: (page: string) => void;
}

export function SpeakersPage({ onNavigate }: SpeakersPageProps) {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const keynoteSpeakers = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Professor of Strategic Management",
      affiliation: "Indian Institute of Management, Bangalore",
      topic: "Digital Transformation: Strategies for the New Era",
      bio: "Dr. Rajesh Kumar is a renowned expert in strategic management and digital transformation with over 25 years of experience in academia and consulting. His research focuses on organizational adaptation to technological change and has been published in top-tier journals including the Academy of Management Journal and Strategic Management Journal.",
      expertise: ["Digital Strategy", "Organizational Transformation", "Innovation Management"],
      image: ""
    },
    {
      name: "Prof. Sarah Anderson",
      title: "Dean & Professor of Business Administration",
      affiliation: "London Business School, United Kingdom",
      topic: "Strategic Agility in the Digital Economy",
      bio: "Prof. Sarah Anderson is a globally recognized thought leader in strategic management and organizational agility. She has advised Fortune 500 companies on digital transformation initiatives and serves on the boards of several technology firms. Her work on dynamic capabilities has been cited over 10,000 times.",
      expertise: ["Strategic Agility", "Digital Leadership", "Corporate Strategy"],
      image: ""
    }
  ];

  const workshopSpeakers = [
    {
      name: "Dr. Mayank Singh",
      title: "Assistant Professor",
      affiliation: "IIM Bangalore",
      topic: "Research Methodology and Publication Strategies",
      bio: "Dr. Singh specializes in research methodology and has guided numerous scholars in publishing their work in top-tier journals.",
      expertise: ["Research Methods", "Academic Writing", "Publication Strategy"]
    },
    {
      name: "Dr. Avinash K Shrivastava",
      title: "Associate Professor",
      affiliation: "International Management Institute Kolkata",
      topic: "Advanced Data Analytics for Management Research",
      bio: "Dr. Shrivastava is an expert in quantitative research methods and data analytics with extensive experience in management research.",
      expertise: ["Data Analytics", "Quantitative Methods", "Statistical Analysis"]
    },
    {
      name: "Dr. Subham Singhania",
      title: "Assistant Professor",
      affiliation: "FORE School of Management, New Delhi",
      topic: "Case Study Development and Teaching",
      bio: "Dr. Singhania specializes in case study methodology and has developed impactful case studies for management education.",
      expertise: ["Case Study Research", "Teaching Pedagogy", "Management Education"]
    }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B1F3A] via-[#1E4ED8] to-[#0B1F3A] py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white text-[36px] sm:text-[48px] lg:text-[64px] font-['Montserrat',sans-serif] font-bold mb-4 sm:mb-6">
              Distinguished <span className="text-[#F97316]">Speakers</span>
            </h1>
            <p className="text-white/90 text-[16px] sm:text-[18px] lg:text-[20px] max-w-[800px] mx-auto leading-relaxed">
              Learn from world-renowned experts and thought leaders in strategic management and digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Keynote Speakers */}
      <motion.section
        ref={contentRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="py-16 sm:py-20 lg:py-24 bg-white"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div variants={fadeInUp} className="text-center mb-10 lg:mb-16">
            <h2 className="text-[#0B1F3A] text-[32px] sm:text-[40px] lg:text-[48px] font-['Montserrat',sans-serif] font-bold mb-4">
              Keynote <span className="text-[#F97316]">Speakers</span>
            </h2>
            <p className="text-[#475569] text-[16px] sm:text-[18px] max-w-[700px] mx-auto">
              Two powerful keynote sessions from leading academics shaping the future of business and technology
            </p>
          </motion.div>

          <div className="space-y-8 lg:space-y-12">
            {keynoteSpeakers.map((speaker, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E2E8F0]"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 p-6 sm:p-8 lg:p-10 ${index % 2 === 1 ? "bg-gradient-to-r from-[#F8FAFC] to-white" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative mx-auto lg:mx-0 max-w-[280px] lg:max-w-none"
                  >
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#F97316] to-[#ea580c] text-white px-4 sm:px-6 py-2 rounded-full shadow-lg">
                      <p className="text-[12px] sm:text-[14px] font-bold whitespace-nowrap">Keynote Speaker</p>
                    </div>
                  </motion.div>

                  <div className="lg:col-span-2 text-center lg:text-left mt-6 lg:mt-0">
                    <h3 className="text-[#0B1F3A] text-[26px] sm:text-[30px] lg:text-[36px] font-['Montserrat',sans-serif] font-bold mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-[#1E4ED8] text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mb-2">{speaker.title}</p>
                    <p className="text-[#475569] text-[14px] sm:text-[16px] mb-4 lg:mb-6">{speaker.affiliation}</p>
                    
                    <div className="bg-gradient-to-r from-[#0B1F3A] to-[#1E4ED8] text-white rounded-xl p-4 sm:p-6 mb-4 lg:mb-6">
                      <p className="text-[12px] sm:text-[14px] opacity-80 mb-2">Keynote Topic</p>
                      <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold italic">"{speaker.topic}"</p>
                    </div>

                    <p className="text-[#0F172A] text-[14px] sm:text-[16px] leading-relaxed mb-4 lg:mb-6">
                      {speaker.bio}
                    </p>

                    <div className="text-left">
                      <p className="text-[#0B1F3A] text-[13px] sm:text-[14px] font-semibold mb-3">Areas of Expertise:</p>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {speaker.expertise.map((area, areaIndex) => (
                          <span
                            key={areaIndex}
                            className="bg-[#F8FAFC] text-[#0B1F3A] px-3 sm:px-4 py-2 rounded-full text-[12px] sm:text-[14px] font-medium border border-[#E2E8F0]"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Workshop Speakers */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-16"
          >
            <h2 className="text-[#0B1F3A] text-[32px] sm:text-[40px] lg:text-[48px] font-['Montserrat',sans-serif] font-bold mb-4">
              Pre-Conference Workshop <span className="text-[#F97316]">Speakers</span>
            </h2>
            <p className="text-[#475569] text-[16px] sm:text-[18px] max-w-[700px] mx-auto">
              April 15, 2026 - Interactive workshop sessions led by distinguished academic leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {workshopSpeakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-[#E2E8F0] hover:border-[#F97316] hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1E4ED8] rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[18px] sm:text-[24px] font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#0B1F3A] text-[20px] sm:text-[24px] font-['Montserrat',sans-serif] font-bold mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-[#1E4ED8] text-[14px] sm:text-[16px] font-semibold mb-1">{speaker.title}</p>
                    <p className="text-[#475569] text-[13px] sm:text-[14px]">{speaker.affiliation}</p>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] rounded-lg p-3 sm:p-4 mb-4">
                  <p className="text-[#475569] text-[11px] sm:text-[12px] mb-1">Workshop Topic</p>
                  <p className="text-[#0B1F3A] text-[14px] sm:text-[16px] font-semibold">{speaker.topic}</p>
                </div>

                <p className="text-[#0F172A] text-[13px] sm:text-[14px] leading-relaxed mb-4">
                  {speaker.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {speaker.expertise.map((area, areaIndex) => (
                    <span
                      key={areaIndex}
                      className="bg-[#F8FAFC] text-[#0B1F3A] px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-medium border border-[#E2E8F0]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0B1F3A] to-[#1E4ED8] rounded-2xl p-8 sm:p-10 lg:p-12 text-white text-center"
          >
            <h3 className="text-[28px] sm:text-[34px] lg:text-[40px] font-['Montserrat',sans-serif] font-bold mb-4 sm:mb-6">
              Don't Miss These Insightful Sessions
            </h3>
            <p className="text-[16px] sm:text-[18px] mb-6 sm:mb-8 max-w-[700px] mx-auto">
              Secure your spot to learn from these distinguished speakers and participate in interactive workshops
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("registration")}
                className="bg-[#F97316] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-[16px] sm:text-[18px] shadow-xl hover:bg-[#ea580c] transition-all duration-300"
              >
                Register Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("schedule")}
                className="bg-white/10 backdrop-blur-sm text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-[16px] sm:text-[18px] border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                View Schedule
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
