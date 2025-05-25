import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
const ReflectionSection = ({ reflection, setReflection, moodTheme }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const textareaRef = useRef(null)
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' }
  const today = new Date().toLocaleDateString('en-US', dateOptions)
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [reflection, isExpanded])
  return (
    <section className="py-4">
      <div 
        className={`
          border rounded-xl shadow-md overflow-hidden 
          transition-all duration-300 mood-transition
        `}
        style={{ 
          backgroundColor: 'white',
          borderColor: `rgba(${moodTheme.rgbAccent}, 0.3)`,
          boxShadow: `0 4px 12px rgba(${moodTheme.rgbAccent}, 0.15)`
        }}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            w-full flex items-center justify-between 
            px-6 py-4 text-left transition-colors duration-300
          `}
          style={{ 
            backgroundColor: `rgba(${moodTheme.rgbAccent}, 0.05)`,
          }}>
          <div>
            <h3 
              className="text-lg font-semibold"
              style={{ color: moodTheme.textColor }}>
              Today's Reflection
            </h3>
            <p 
              className="text-sm"
              style={{ color: moodTheme.subtleTextColor }}>
              {today}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ color: moodTheme.accentColor }}>
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </motion.div>
        </button>
        <motion.div
          className="overflow-hidden reflection-container"
          initial={{ height: 0 }}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}>
          <div className="p-6">
            <textarea
              ref={textareaRef}
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="How are you feeling today? Write your thoughts here..."
              className={`
                w-full p-3 border rounded-lg resize-none 
                min-h-[120px] transition-all duration-300
              `}
              style={{ 
                borderColor: `rgba(${moodTheme.rgbAccent}, 0.3)`,
                backgroundColor: `rgba(${moodTheme.rgbAccent}, 0.05)`,
                color: moodTheme.textColor
              }}
            />
            <p 
              className="mt-2 text-xs text-right"
              style={{ color: moodTheme.subtleTextColor }}>
              Your reflection is saved automatically
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default ReflectionSection