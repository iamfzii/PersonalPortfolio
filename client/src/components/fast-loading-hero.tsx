import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export default function FastLoadingHero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image - Optimized loading */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">MF</span>
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Muhammad Fazeel
          </h1>
          <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
            Technical Operations Coordinator
          </p>
        </motion.div>

        {/* Contact Info - Simplified for speed */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300"
        >
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Lahore, Pakistan</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <span>+92 300 7756442</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <span>muhammadfazeel.dr@gmail.com</span>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="group px-8 py-3"
            onClick={() => window.open('https://linkedin.com/in/muhammad-fazeel-5b24b8223', '_blank')}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col items-center text-gray-500 dark:text-gray-400"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}