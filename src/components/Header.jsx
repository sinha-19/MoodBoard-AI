import { motion } from 'framer-motion'
const Header = ({ currentMood, moodTheme }) => {
  const displayMood = currentMood ? 
    currentMood.charAt(0).toUpperCase() + currentMood.slice(1) : 
    'Your';
  return (
    <header className="pt-4 pb-6">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <h1 
            className={`text-4xl md:text-5xl font-display font-bold mb-2 ${moodTheme.textColor}`}>
            MoodBoard AI
          </h1>
        </motion.div>

        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          <p className={`text-lg ${moodTheme.subtleTextColor}`}>
            Your personalized daily mood companion
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-4 px-4 py-2 rounded-full mood-transition"
          style={{ 
            backgroundColor: `rgba(${moodTheme.rgbAccent}, 0.15)`,
            border: `1px solid rgba(${moodTheme.rgbAccent}, 0.3)`
          }}
          animate={{
            backgroundColor: `rgba(${moodTheme.rgbAccent}, 0.15)`,
            border: `1px solid rgba(${moodTheme.rgbAccent}, 0.3)`
          }}
          transition={{ duration: 0.5 }}>
          <span 
            className={`font-medium ${moodTheme.accentTextColor}`}>
            {displayMood} Mood
          </span>
        </motion.div>
      </div>
    </header>
  )
}
export default Header