import React from "react";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Download my latest resume to see experience, education, and projects in detail.
      </p>
      <motion.a
        href={resume}
        download
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="inline-block mt-8 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        Download PDF
      </motion.a>
    </section>
  );
}
