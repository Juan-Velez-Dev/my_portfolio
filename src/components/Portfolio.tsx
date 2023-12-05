import { motion } from 'framer-motion'

export default function Portfolio (): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div>Portfolio</div>
    </motion.div>
  )
}
