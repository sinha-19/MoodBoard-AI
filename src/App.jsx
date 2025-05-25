import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import MoodSelector from './components/MoodSelector'
import QuoteDisplay from './components/QuoteDisplay'
import MediaSuggestion from './components/MediaSuggestion'
import ReflectionSection from './components/ReflectionSection'
import Footer from './components/Footer'
import { getMoodTheme, getMoodContent } from './utils/moodUtils'
function App() {
  const [currentMood, setCurrentMood] = useState(null)
  const [previousMood, setPreviousMood] = useState(null)
  const [reflection, setReflection] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const savedMood = localStorage.getItem('currentMood')
    const savedReflection = localStorage.getItem('reflection')
    if (savedMood) {
      setCurrentMood(JSON.parse(savedMood))
    } else {
      setCurrentMood('relaxed')
    }
    if (savedReflection) {
      setReflection(savedReflection)
    }
    setIsLoading(false)
  }, [])
  useEffect(() => {
    if (currentMood && !isLoading) {
      localStorage.setItem('currentMood', JSON.stringify(currentMood))
    }
  }, [currentMood, isLoading])
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('reflection', reflection)
    }
  }, [reflection, isLoading])
  const handleMoodChange = (mood) => {
    setPreviousMood(currentMood)
    setCurrentMood(mood)
  }
  const moodTheme = getMoodTheme(currentMood)
  const moodContent = getMoodContent(currentMood)
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-50">
        <div className="animate-pulse text-xl font-medium text-neutral-500">
          Loading your mood board...
        </div>
      </div>
    )
  }
  return (
    <div 
      className={`min-h-screen transition-colors duration-500 ease-in-out ${moodTheme.bgColor}`}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 max-w-4xl">
        <Header currentMood={currentMood} moodTheme={moodTheme} />
        <main className="mt-6 space-y-8">
          <MoodSelector 
            currentMood={currentMood} 
            onMoodChange={handleMoodChange} 
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMood}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8">
              <QuoteDisplay 
                quote={moodContent.quote} 
                author={moodContent.quoteAuthor} 
                moodTheme={moodTheme} 
              />
              <MediaSuggestion 
                media={moodContent.media} 
                moodTheme={moodTheme} 
              />
              <ReflectionSection 
                reflection={reflection} 
                setReflection={setReflection} 
                moodTheme={moodTheme} 
              />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer moodTheme={moodTheme} />
      </motion.div>
    </div>
  )
}
export default App