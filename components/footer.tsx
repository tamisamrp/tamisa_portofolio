import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Tamisa Ulinda Marpaung</h3>
            <p className="text-gray-400">Mahasiswa Teknik Informatika & UI/UX Designer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/tamisamrp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tamisa-ulinda-marpaung-0042662aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:tamisamrp04@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Beranda
            </Link>
            <Link href="#about" className="hover:text-blue-500 transition-colors">
              Tentang
            </Link>
            <Link href="#skills" className="hover:text-blue-500 transition-colors">
              Keahlian
            </Link>
            <Link href="#projects" className="hover:text-blue-500 transition-colors">
              Proyek
            </Link>
            <Link href="#experience" className="hover:text-blue-500 transition-colors">
              Pengalaman
            </Link>
            <Link href="#contact" className="hover:text-blue-500 transition-colors">
              Kontak
            </Link>
          </div>
          <p>&copy; {currentYear} Tamisa Ulinda Marpaung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
