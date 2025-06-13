"use client"

import { motion } from "framer-motion"
import { GraduationCap, User } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <User className="text-blue-600 dark:text-blue-500" />
            Tentang Saya
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_7196.JPG-A65LK0N4zygw7MrIhC6l2qcGynuUNJ.jpeg"
                alt="Tamisa Ulinda Marpaung"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Mahasiswa Teknik Informatika
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Saya adalah mahasiswa semester 4 di Politeknik Elektronika Negeri Surabaya (PENS), jurusan Teknik
              Informatika. Saya memiliki kemampuan berpikir analitis yang kuat, keterampilan pemecahan masalah yang
              baik, serta mampu beradaptasi dengan cepat.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Saya sangat termotivasi untuk mempelajari teknologi baru dan terus mengembangkan keahlian teknis saya.
              Saya memiliki ketertarikan khusus pada bidang UI/UX design, dan berkomitmen menciptakan pengalaman
              pengguna yang intuitif dan menarik. Saya juga memiliki semangat tinggi untuk bekerja dalam tim, terlibat
              dalam proyek-proyek inovatif, dan terus mengasah kemampuan di bidang teknologi informasi.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="text-blue-600 dark:text-blue-500" size={24} />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Pendidikan</h4>
                <p className="text-gray-600 dark:text-gray-400">Politeknik Elektronika Negeri Surabaya</p>
                <p className="text-gray-600 dark:text-gray-400">D3 Teknik Informatika - IPK 3.46</p>
                <p className="text-gray-600 dark:text-gray-400">2023 - Sekarang</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
