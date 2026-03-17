import { motion } from "motion/react";
import { ArrowRight, Users } from "lucide-react";

interface CTASectionProps {
  variant?: "primary" | "secondary";
}

export function CTASection({ variant = "primary" }: CTASectionProps) {
  if (variant === "primary") {
    return (
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 bg-gradient-to-br from-[#003056] via-[#002845] to-[#001f35]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Users className="w-20 h-20 mx-auto mb-6 text-white" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Bock bekommen?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Werde Teil von Tower & Friends und lauf mit uns für die Forschung!
              <br />Jeder Schritt zählt. Jeder Meter macht den Unterschied.
            </p>
            <motion.a
              href="https://www.wingsforlifeworldrun.com/de/teams/5dpLP5?join=1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-[#E2004C] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[#C20041] transition-all shadow-2xl"
            >
              Jetzt dem Team beitreten
              <ArrowRight className="ml-3 w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gradient-to-r from-[#003056]/10 to-[#003056]/5 border-2 border-[#003056]/20 rounded-xl p-8 text-center"
        >
          <p className="text-2xl font-bold mb-4 text-gray-900">
            Lass uns gemeinsam Geschichte schreiben! 🏃‍♂️💪
          </p>
          <motion.a
            href="https://www.wingsforlifeworldrun.com/de/teams/5dpLP5?join=1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-[#E2004C] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#C20041] transition-all shadow-lg"
          >
            Zum Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}