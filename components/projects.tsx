"use client"

import { motion } from "framer-motion"
import { ExternalLink, FolderGit2, FileText } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  const projects = [
    {
      title: "SIAPP (Sosial Investment Application)",
      description:
        "Merancang konsep desain UI/UX untuk aplikasi web yang terinspirasi oleh Tompangan Madura, sebuah tradisi lokal untuk saling membantu.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-13%20081557-8Bs0gogCVmooX7wgHG6mocl2e6wM3E.png",
      details: [
        "Mendesain antarmuka yang user friendly, bersih, dan mudah diakses menggunakan Figma.",
        "Membuat alur pengguna lengkap seperti landing page, login, register, dashboard, pembuatan acara, hingga pelacakan kontribusi donasi.",
        "Memastikan bahwa layout konsisten dan berkolaborasi dengan tim untuk meningkatkan fungsionalitas dan pengalaman pengguna.",
      ],
      date: "Oktober – November 2024",
      link: "https://www.figma.com/design/1fK726JW2ChqIz8ES7O4Ug/TAMISA-DESAIN?node-id=0-1&t=eupPqsiUaIn2DuBP-1",
      category: "ui-ux",
    },
    {
      title: "Lulusin (Learning Untuk Lulus Seleksi Nasioal)",
      description:
        "Merancang konsep dan desain UI/UX untuk halaman guru dan siswa baik versi mobile maupun web pada platform Lulusin, sebuah platform tryout UTBK untuk persiapan masuk perguruan tinggi.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-20%20203912-v4mz7jkZZxlpHT9MoBzxoGWPT4um8m.png",
      details: [
        "Melakukan user research melalui survei online menggunakan google form terhadap siswa SMA di daerah kabupaten Sumenep untuk memahami kebutuhan serta preferensi pengguna.",
        "Membuat empathy map, brand positioning dan user persona untuk menggambarkan profil dan kebutuhan pengguna serta target value unik dari aplikasi lulusin.",
        "Membuat wireframe, mockup, dan prototipe interaktif menggunakan Figma.",
        "Bekerja sama dengan tim developer untuk memastikan integrasi desain yang baik dan tampilan responsif di berbagai perangkat.",
      ],
      date: "Februari – Juni 2025",
      links: [
        {
          name: "Lihat Desain Figma",
          url: "https://www.figma.com/design/NDNUATcNuBnWA2fsUR3cHg/lulusin?node-id=0-1&p=f&t=E2hjI9t6yhQ4vYsq-0",
          icon: <ExternalLink size={16} />,
        },
        {
          name: "Lihat Dokumentasi PDF",
          url: "https://drive.google.com/file/d/1vK_JCvvvRbiC5MGoJ6wv62r9YzWne2jL/view?usp=sharing",
          icon: <FileText size={16} />,
        },
      ],
      category: "ui-ux",
    },
    {
      title: "MyMOOD (Moodtracker app)",
      description:
        "Merancang dan membangun aplikasi pencatatan mood yang memiliki fitur rekomendasi aktivitas berdasarkan mood yang diinput, statistik mood, dan berbagi mood kepada orang lain.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-12%20115619-IplVjxCI852cgoUvwb2GghNPwbwCEL.png",
      details: [
        "Merancang dan membangun struktur database menggunakan MySQL untuk menyimpan data pengguna, entri mood, dan histori aktivitas secara terstruktur dan efisien.",
        "Membuat tampilan interface pengguna menggunakan Flutter sebagai framework front-end.",
        "Mengintegrasikan desain interface dengan layanan backend untuk menyimpan dan menampilkan data suasana hati pengguna.",
        "Menerapkan sistem kalender visual untuk mencatat suasana hati harian menggunakan emoji ekspresif dan indikator warna.",
        "Menyediakan fitur pemilihan mood dengan ikon dan label yang jelas agar mudah dikenali pengguna.",
        "Menjaga konsistensi desain di semua halaman, termasuk home, histori mood, dan halaman mood yang dibagikan.",
      ],
      date: "April – Juni 2025",
      link: "https://www.figma.com/design/apAGpZIc3Ze7YTm9fD6hPe/MoodTracker?node-id=0-1&p=f&t=Kgq4W6VUprEU2sZO-0",
      category: "development",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2">
            <FolderGit2 className="text-blue-600 dark:text-blue-500" />
            Proyek
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan, menampilkan keterampilan UI/UX design dan kemampuan
            kolaborasi saya.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mx-auto flex justify-center">
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="ui-ux">UI/UX Design</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ui-ux" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "ui-ux")
                .map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="development" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "development")
                .map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200">{project.title}</CardTitle>
            <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
          </div>
          <CardDescription className="text-gray-600 dark:text-gray-400">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2">
            {project.details.slice(0, 2).map((detail: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500 mt-2"></div>
                <span>{detail}</span>
              </li>
            ))}
            {project.details.length > 2 && (
              <li className="text-sm text-blue-600 dark:text-blue-500">+ {project.details.length - 2} lainnya</li>
            )}
          </ul>
        </CardContent>
        <CardFooter className={project.links ? "flex flex-col gap-2" : ""}>
          {project.links ? (
            project.links.map((link: any, i: number) => (
              <Button key={i} asChild variant="outline" className="w-full">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  {link.name} {link.icon}
                </a>
              </Button>
            ))
          ) : (
            <Button asChild variant="outline" className="w-full">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Lihat Proyek <ExternalLink size={16} />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
