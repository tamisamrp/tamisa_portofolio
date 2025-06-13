"use client"

import { motion } from "framer-motion"
import { Code, Languages, Lightbulb, FileText } from "lucide-react"
import { SiHtml5, SiCss3, SiBootstrap, SiFlutter, SiMysql, SiGooglecloud, SiFigma } from "react-icons/si"

export default function Skills() {
  const technicalSkills = [
    { name: "Figma", icon: <SiFigma className="text-purple-500" size={40} /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={40} /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" size={40} /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" size={40} /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" size={40} /> },
    { name: "SQL", icon: <SiMysql className="text-blue-600" size={40} /> },
    { name: "Office Suite", icon: <FileText className="text-red-600" size={40} /> },
    { name: "G Suite", icon: <SiGooglecloud className="text-yellow-500" size={40} /> },
  ]

  const softSkills = [
    "User-Centered Design Thinking",
    "Analytical Thinking",
    "Observation",
    "Interpersonal skill",
    "Teamwork",
    "Multitasking",
    "Leadership",
  ]

  const languages = [
    { name: "Bahasa Indonesia", level: "Native", percent: 100 },
    { name: "English", level: "Intermediate", percent: 70 },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <Code className="text-blue-600 dark:text-blue-500" />
            Keahlian
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
              <Code className="text-blue-600 dark:text-blue-500" />
              Keahlian Teknis
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div key={index} whileHover={{ y: -5 }} className="flex flex-col items-center text-center">
                  <div className="mb-2">{skill.icon}</div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
              <Lightbulb className="text-blue-600 dark:text-blue-500" />
              Soft Skills
            </h3>
            <ul className="space-y-3">
              {softSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
              <Languages className="text-blue-600 dark:text-blue-500" />
              Bahasa
            </h3>
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">{language.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{language.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
