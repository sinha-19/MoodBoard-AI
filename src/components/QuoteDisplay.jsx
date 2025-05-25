import { motion } from 'framer-motion'

const QuoteDisplay = ({ quote, author, moodTheme }) => {
  return (
    <section className="py-4">
      <motion.div 
        className={`
          quote-card p-6 rounded-xl 
          border shadow-lg mood-transition
        `}
        style={{ 
          backgroundColor: `rgba(${moodTheme.rgbAccent}, 0.1)`,
          borderColor: `rgba(${moodTheme.rgbAccent}, 0.3)`,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-4">
          <motion.div 
            className="text-4xl opacity-60"
            style={{ color: moodTheme.accentColor }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            ❝
          </motion.div>
          
          <blockquote 
            className={`
              text-xl md:text-2xl font-medium italic 
              px-4 md:px-6 leading-relaxed
            `}
            style={{ color: moodTheme.textColor }}
          >
            {quote}
          </blockquote>
          
          <div className="flex justify-end">
            <p 
              className="text-sm md:text-base font-medium"
              style={{ color: moodTheme.subtleTextColor }}
            >
              — {author}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default QuoteDisplay