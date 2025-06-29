import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-4 mt-16 theme-surface theme-border border-t">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="pt-8 theme-border border-t">
            <p className="theme-text-muted text-sm">
              © 2024 Muhammad Fazeel. Designed with modern web technologies and attention to detail.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
