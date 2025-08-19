import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Variants } from "framer-motion"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export const sectionFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
}
