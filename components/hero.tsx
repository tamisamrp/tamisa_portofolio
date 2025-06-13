"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          Tamisa Ulinda Marpaung
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
          Mahasiswa Teknik Informatika & UI/UX Designer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Mahasiswa yang bersemangat dengan pemikiran analitis yang kuat dan keterampilan pemecahan masalah, berdedikasi
          untuk menciptakan pengalaman digital yang intuitif dan ramah pengguna.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="#contact">Hubungi Saya</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#projects">Lihat Proyek</Link>
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <motion.a
            href="https://github.com/tamisamrp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tamisa-ulinda-marpaung-0042662aa/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          <motion.a
            href="mailto:tamisamrp04@gmail.com"
            whileHover={{ y: -5 }}
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
          >
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <Link href="#about">
            <ArrowDown className="text-blue-600 dark:text-blue-500" size={28} />
            <span className="sr-only">Scroll down</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
