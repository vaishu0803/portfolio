import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "📸 Wedding  Photography Studio Website",
    desc:
      "A fully responsive, brand-first website built for a photography studio. Includes a cinematic UI, custom quotation builder flow, PDF generation, AWS S3 storage, and email automation using Flask + SendGrid.",
    ss: "/Snapshoot.png", // put studio.png inside public/
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Flask", "SendGrid", "AWS S3"],
    live: "https://toohspans.netlify.app",
    code: "https://github.com/vaishu0803",
  },
  
  {
    title: "🛍️ Pearl Haus – Fashion Brand Website",
    desc:
       "Pearl Haus is a website for an event organisation and decor company that plans and hosts celebrations. The site showcases services like theme-based decor, event planning and coordination, with sections for highlights, offerings and contact. The goal is to feel like a polished brochure for clients who want a well-organised, aesthetic event rather than a basic booking page.",
    ss: "/Pearlhaus.png", // add screenshot in public/pearlhaus.png
   tech: ["HTML", "CSS", "JavaScript"],
   live: "https://pearlhaus.netlify.app",
    code: "https://github.com/vaishu0803/event-management-mern", // change to repo if separate
  },
  {
    title: "🩸 Glycemic Control Prediction",
    desc:
      "Machine learning model to predict glycemic control levels using patient health indicators. Includes EDA, feature engineering, model training and comparison of multiple ML algorithms to evaluate accuracy and performance.",
    ss: "/Glycemic.png", // add screenshot in public/glycemic.png
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
    live: null, // not hosted
    code: "https://github.com/vaishu0803/Glycemic_Control_Prediction",
  },
  {
    title: "🎓 Pick N Learn – Tutor Selection Platform",
    desc:
      "Pick N Learn is a full-stack educational platform where students can watch demo lectures from multiple tutors and then choose whom they want to learn from. It includes tutor & course search, detailed tutor profiles, comments and contact options, likes/bookmarks, student registration & login, and an admin panel to manage tutors, courses and students. This structure can be plugged into colleges so students select not just subjects, but the faculty whose teaching style fits them best.",
    ss: "/pick.png", // add screenshot in public/picknlearn.png
    tech: ["HTML", "CSS", "JavaScript", "Python", "SQL", "Full-Stack Web"],
    live: null,
    code: "https://github.com/vaishu0803/Pick_N_Learn",
  },
  {
    title: "🧬 Leukemia Cancer Detection (CNN)",
    desc:
      "Deep learning project using Convolutional Neural Networks to classify leukemia from blood smear images. Includes dataset preprocessing, augmentation, model design and tuning to improve classification performance and robustness.",
    ss: "/Cancer.png", // add screenshot in public/leukemia.png
    tech: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV"],
    live: null,
    code: "https://github.com/vaishu0803/LEUKEMIA_CANCER_DETECTION",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState({}); // { index: true/false }

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const MAX_CHARS = 220; // description length before "Read more"

  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div
        className="card"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: 16,
          padding: 30,
        }}
      >
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending full-stack development and
          machine learning.
        </p>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {PROJECTS.map((p, idx) => {
            const isExpanded = expanded[idx];
            const needsToggle = p.desc.length > MAX_CHARS;
            const displayDesc =
              isExpanded || !needsToggle
                ? p.desc
                : p.desc.slice(0, MAX_CHARS) + "...";

            return (
              <motion.div
                key={idx}
                className="project-card"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                style={{
                  background:
                    "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))",
                  border: "1px solid rgba(0,255,255,0.1)",
                  borderRadius: 16,
                  padding: 16,
                  overflow: "hidden",
                  boxShadow: "0 0 20px rgba(0,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Screenshot */}
                <motion.div
                  className="ss"
                  whileHover={{ scale: 1.05 }}
                  style={{ borderRadius: 12, overflow: "hidden" }}
                >
                  <img
                    src={p.ss}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: 12,
                    }}
                  />
                </motion.div>

                {/* Card content */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 18,
                      color: "#0ea5e9",
                      marginBottom: 6,
                      marginTop: 10,
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* Description + Read More */}
                  <p
                    style={{
                      fontSize: 14,
                      color: "#bbb",
                      lineHeight: 1.6,
                      marginBottom: 6,
                    }}
                  >
                    {displayDesc}
                  </p>

                  {needsToggle && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(idx)}
                      style={{
                        alignSelf: "flex-start",
                        background: "transparent",
                        border: "none",
                        color: "#0ea5e9",
                        fontSize: 13,
                        padding: 0,
                        marginBottom: 8,
                        cursor: "pointer",
                      }}
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  )}

                  {/* Spacer to push tech stack to bottom */}
                  <div style={{ flexGrow: 1 }} />

                  {/* Tech stack */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 10,
                    }}
                  >
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "rgba(0,255,255,0.05)",
                          border: "1px solid rgba(0,255,255,0.1)",
                          padding: "3px 8px",
                          borderRadius: 6,
                          fontSize: 12,
                          color: "#aaf",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: 10,
                      marginTop: "auto",
                    }}
                  >
                    {/* Code button */}
                    <motion.a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      whileHover={{ scale: 1.08 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        background: "rgba(255,255,255,0.05)",
                        color: "#0ea5e9",
                        padding: "6px 12px",
                        borderRadius: 8,
                        fontSize: 13,
                        border: "1px solid rgba(0,255,255,0.1)",
                        textDecoration: "none",
                      }}
                    >
                      <Github size={14} /> Code
                    </motion.a>

                    {/* Live button (only when link exists) */}
                    {p.live && (
                      <motion.a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                        whileHover={{ scale: 1.08 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          background:
                            "linear-gradient(90deg, #06b6d4, #0891b2)",
                          color: "#fff",
                          padding: "6px 12px",
                          borderRadius: 8,
                          fontSize: 13,
                          textDecoration: "none",
                        }}
                      >
                        <ExternalLink size={14} /> Live
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
