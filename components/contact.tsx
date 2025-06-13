"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <Mail className="text-blue-600 dark:text-blue-500" />
            Hubungi Saya
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi saya untuk pertanyaan atau kesempatan kolaborasi.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                  <Phone className="text-blue-600 dark:text-blue-500" size={24} />
                </div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Telepon</h3>
                <p className="text-gray-600 dark:text-gray-400">+62 823-6770-2965</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                  <Mail className="text-blue-600 dark:text-blue-500" size={24} />
                </div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">tamisamrp04@gmail.com</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                  <MapPin className="text-blue-600 dark:text-blue-500" size={24} />
                </div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Lokasi</h3>
                <p className="text-gray-600 dark:text-gray-400">Sumenep, Jawa Timur, Indonesia, 69412</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
