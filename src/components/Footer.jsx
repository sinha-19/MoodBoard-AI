import { motion } from 'framer-motion'
const Footer = ({ moodTheme }) => {
  return (
    <footer className="py-8 mt-8">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}>
        <p 
          className="text-sm"
          style={{ color: moodTheme.subtleTextColor }}>
          © {new Date().getFullYear()} MoodBoard AI • Created by Saket • Your Personal Mood Companion
        </p>
      </motion.div>
    </footer>
  )
}
export default Footer