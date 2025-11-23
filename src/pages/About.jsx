import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* Intro */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Vaishnavi</strong> — a{" "}
          <strong>Full-Stack Web Developer</strong> and{" "}
          <strong>Machine Learning Engineer</strong>. I enjoy building things
          that are both <em>useful</em> and <em>beautiful</em>: clean UIs on the
          frontend, solid APIs on the backend, and smart ML models behind the
          scenes.
        </p>

        {/* Tech focus */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "1rem",
          }}
        >
          On the web side, I work mainly with{" "}
          <strong>React, Vite, Tailwind CSS, Framer Motion</strong> and{" "}
          <strong>Flask</strong>. On the ML side, I use{" "}
          <strong>Python, TensorFlow, Keras, Scikit-Learn, OpenCV</strong> and
          the usual data stack like <strong>Pandas</strong> and{" "}
          <strong>NumPy</strong>. I like taking ownership of a feature from
          idea → UI → backend → deployment.
        </p>

        {/* Highlight: Studio website */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "1rem",
          }}
        >
          Recently, I built a{" "}
          <strong>Wedding Photography Studio Website</strong>  a
          full-stack project with a quotation builder flow, PDF generation,
          AWS&nbsp;S3 storage, and email automation using Flask + SendGrid. It’s
          designed to feel like a real studio brand, not just a demo.
        </p>

        {/* ML projects */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "0.6rem",
          }}
        >
          I’ve also worked on several ML and deep learning projects:
        </p>

        <ul
          style={{
            color: "rgba(255,255,255,0.8)",
            marginLeft: "1.2rem",
            marginBottom: "1.2rem",
            lineHeight: 1.9,
            fontSize: "1.05rem",
          }}
        >
          <li>
            🩸 <strong>Glycemic Control Prediction</strong> – predicting
            glycemic control using patient health indicators with classical ML
            models.
          </li>
          <li>
            🎓 <strong>Pick N Learn – Tutor Selection Platform</strong> – a
            full-stack system where students watch demo lectures and choose
            tutors based on teaching style, with search, profiles,
            registration/login and an admin panel.
          </li>
          <li>
            🧬 <strong>Leukemia Cancer Detection (CNN)</strong> – deep learning
            pipeline using CNNs and image preprocessing to classify leukemia
            from blood smear images.
          </li>
        </ul>

        {/* Way you think / work */}
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "0.6rem",
          }}
        >
          Whether it’s a portfolio, a studio website or an ML project, I care
          about structure and clarity: clean code, reusable components,
          meaningful animations, and straightforward user flows. I like solving
          problems step-by-step and turning vague ideas into something people
          can actually click and use.
        </p>

        {/* Education / now */}
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          I’ve completed my <strong>B.Tech in Computer Science (2025)</strong>{" "}
          and I’m actively looking for opportunities where I can work on real
          products, grow as a developer, and collaborate with teams that value
          both engineering and design.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
