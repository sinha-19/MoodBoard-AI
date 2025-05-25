import { useState } from 'react'
import { motion } from 'framer-motion'
const MediaSuggestion = ({ media, moodTheme }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <section className="py-4">
      <h3 
        className={`
          text-lg font-medium mb-3 
          transition-colors duration-500
        `}
        style={{ color: moodTheme.textColor }}>
        {media.type === 'youtube' ? 'Recommended Video' : 'Recommended Song'}
      </h3>
      
      <motion.div
        className="rounded-lg overflow-hidden shadow-lg bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0.3, y: 0 }}
        transition={{ duration: 0.5 }}>
        {media.type === 'youtube' ? (
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${media.id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoaded(true)}
            ></iframe>
          </div>
        ) : (
          <div className="h-[380px]">
            <iframe
              className="w-full h-full"
              src={`https://open.spotify.com/embed/track/${media.id}`}
              allow="encrypted-media"
              allowFullScreen
              onLoad={() => setIsLoaded(true)}
            ></iframe>
          </div>
        )}
      </motion.div>
      
      <p 
        className="mt-2 text-sm italic px-1"
        style={{ color: moodTheme.subtleTextColor }}>
        {media.description}
      </p>
    </section>
  )
}
export default MediaSuggestion