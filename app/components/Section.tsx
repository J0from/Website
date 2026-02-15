"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "../types"

export default function Section({
  id,
  title,
  subtitle,
  content,
  isActive,
  showButton,
  buttonText,
  buttonLink,
}: SectionProps) {
  const isHero = id === "hero"

  return (
    <section
      id={id}
      className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24"
    >
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      <motion.h2
        className={`lg:text-[4rem] xl:text-[5rem] font-bold leading-[0.6] tracking-tight max-w-3xl text-3xl text-white ${isHero ? "pb-4 min-h-[6rem] md:min-h-[8rem] lg:min-h-[10rem]" : "pb-2"
          }`}
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.p
          className={`text-lg md:text-xl lg:text-2xl max-w-2xl text-neutral-400 ${isHero ? "mt-6" : "mt-4"}`}
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <a href={buttonLink}>
            <Button variant="hero-white" size="lg" style={{ borderRadius: "0.375rem" }}>
              {buttonText}
            </Button>
          </a>
        </motion.div>
      )}
    </section>
  )
}
