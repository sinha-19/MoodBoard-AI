import { motion } from 'framer-motion'
import { FaSmile, FaSadTear, FaAngry, FaLeaf, FaFire } from 'react-icons/fa'
import { getMoodTheme } from '../utils/moodUtils'
const moods = [
  { id: 'happy', label: 'Happy', icon: <FaSmile /> },
  { id: 'sad', label: 'Sad', icon: <FaSadTear /> },
  { id: 'angry', label: 'Angry', icon: <FaAngry /> },
  { id: 'relaxed', label: 'Relaxed', icon: <FaLeaf /> },
  { id: 'motivated', label: 'Motivated', icon: <FaFire /> }
]
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}
const MoodSelector = ({ currentMood, onMoodChange }) => {
  return (
    <section className="py-4">
      <h2 className="text-xl font-semibold text-neutral-800 mb-4 text-center">
        How are you feeling today?
      </h2>
      
      <motion.div 
        className="flex flex-wrap justify-center gap-3 md:gap-4"
        variants={container}
        initial="hidden"
        animate="show">
        {moods.map((mood) => {
          const moodTheme = getMoodTheme(mood.id)
          const isSelected = currentMood === mood.id
          return (
            <motion.button
              key={mood.id}
              onClick={() => onMoodChange(mood.id)}
              className={`
                relative flex flex-col items-center justify-center 
                py-3 px-4 rounded-lg transition-all duration-300
                ${isSelected ? 'scale-105' : 'scale-100 hover:scale-102'}
              `}
              style={{
                backgroundColor: isSelected 
                  ? `rgba(${moodTheme.rgbAccent}, 0.2)` 
                  : 'rgba(255, 255, 255, 0.7)',
                border: isSelected
                  ? `2px solid ${moodTheme.accentColor}`
                  : '2px solid rgba(0, 0, 0, 0.1)',
                boxShadow: isSelected
                  ? `0 4px 12px rgba(${moodTheme.rgbAccent}, 0.3)`
                  : '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
              variants={item}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}>
              <div 
                className="text-2xl mb-2"
                style={{ color: moodTheme.accentColor }}>
                {mood.icon}
              </div>
              <span 
                className="font-medium"
                style={{ 
                  color: isSelected ? moodTheme.accentColor : '#1e293b'
                }}>
                {mood.label}
              </span>
              {isSelected && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 w-2 h-2 rounded-full"
                  style={{ backgroundColor: moodTheme.accentColor }}
                  layoutId="moodIndicator"
                  initial={false}
                />
              )}
            </motion.button>
          )
        })}
      </motion.div>
    </section>
  )
}
export default MoodSelector