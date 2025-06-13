"use client"

import { motion } from "framer-motion"
import { Award, Calendar } from "lucide-react"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineTitle,
  TimelineBody,
} from "@/components/ui/timeline"

export default function Experience() {
  const experiences = [
    {
      title: "Member of the Society of Renewable Energy (SRE) PENS 2024",
      date: "Oktober 2024 – Sekarang",
      description:
        "Mengikuti workshop mengenai energi terbarukan dari berbagai narasumber. Mempelajari dan mendiskusikan berbagai teknologi energi terbarukan bersama anggota komunitas. Aktif berdiskusi seputar isu organisasi, perkuliahan, dan pengembangan diri bersama anggota lainnya.",
    },
    {
      title: "Liaison Officer (LO) – LKMM Pra-TD PENS PSDKU Sumenep 2024",
      date: "November 2024",
      description:
        "Menjadi penghubung antara peserta, panitia, dan pemateri untuk memastikan kelancaran jalannya acara. Mengelola administrasi dan absensi peserta serta panitia selama kegiatan berlangsung. Bertanggung jawab atas sistem penilaian dengan mencatat poin peserta yang aktif bertanya atau menjawab dalam sesi menggunakan Excel.",
    },
    {
      title: "Bendahara – RamadanTech Bagi-Bagi Takjil dan Sembako HMPS PENS Sumenep 2025",
      date: "2025",
      description:
        "Bertanggung jawab atas pengumpulan dana dan pencatatan pengeluaran untuk kegiatan berbagi takjil dan sembako. Mengelola anggaran dan pencatatan keuangan acara agar dana tersalurkan dengan tepat. Turut serta dalam pembagian takjil di jalanan dan penyaluran sembako ke panti asuhan.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <Award className="text-blue-600 dark:text-blue-500" />
            Pengalaman Organisasi
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Pengalaman organisasi dan kerelawanan yang telah membentuk keterampilan kepemimpinan dan kerja tim saya.
          </p>
        </motion.div>

        <Timeline>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TimelineItem>
                {index !== experiences.length - 1 && <TimelineConnector />}
                <TimelineHeader>
                  <TimelineIcon className="bg-blue-600 dark:bg-blue-500" />
                  <TimelineTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {experience.title}
                  </TimelineTitle>
                </TimelineHeader>
                <TimelineBody className="pl-12">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar size={16} />
                    <span>{experience.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{experience.description}</p>
                </TimelineBody>
              </TimelineItem>
            </motion.div>
          ))}
        </Timeline>
      </div>
    </section>
  )
}
