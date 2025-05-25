export const getMoodTheme = (mood) => {
  const themes = {
    happy: {
      bgColor: 'bg-gradient-to-br from-happy-light to-white',
      textColor: 'text-neutral-800',
      subtleTextColor: 'text-neutral-600',
      accentColor: '#FFC107',
      accentTextColor: 'text-happy-dark',
      rgbAccent: '255, 193, 7',
    },
    sad: {
      bgColor: 'bg-gradient-to-br from-sad-light to-white',
      textColor: 'text-neutral-800',
      subtleTextColor: 'text-neutral-600',
      accentColor: '#2196F3',
      accentTextColor: 'text-sad-dark',
      rgbAccent: '33, 150, 243',
    },
    angry: {
      bgColor: 'bg-gradient-to-br from-angry-light to-white',
      textColor: 'text-neutral-800',
      subtleTextColor: 'text-neutral-600',
      accentColor: '#E53935',
      accentTextColor: 'text-angry-dark',
      rgbAccent: '229, 57, 53',
    },
    relaxed: {
      bgColor: 'bg-gradient-to-br from-relaxed-light to-white',
      textColor: 'text-neutral-800',
      subtleTextColor: 'text-neutral-600',
      accentColor: '#4CAF50',
      accentTextColor: 'text-relaxed-dark',
      rgbAccent: '76, 175, 80',
    },
    motivated: {
      bgColor: 'bg-gradient-to-br from-motivated-light to-white',
      textColor: 'text-neutral-800',
      subtleTextColor: 'text-neutral-600',
      accentColor: '#FFEB3B',
      accentTextColor: 'text-motivated-dark',
      rgbAccent: '255, 235, 59',
    },
  }
  return themes[mood] || themes.relaxed
}
export const getMoodContent = (mood) => {
  const content = {
    happy: {
      quote: "Happiness is not something ready-made. It comes from your own actions.",
      quoteAuthor: "Dalai Lama",
      media: {
        type: 'youtube',
        id: 'Y2V6yjjPbX0',
        description: 'Mr. Bean\'s Funniest Moments - Guaranteed to Make You Laugh!'
      }
    },
    sad: {
      quote: "The good life is not one immune to sadness but one in which suffering contributes to our development.",
      quoteAuthor: "Alain de Botton",
      media: {
        type: 'youtube',
        id: 'Xs-HbHCcK58',
        description: 'Funny Animal Videos That Will Make You Smile'
      }
    },
    angry: {
      quote: "For every minute you remain angry, you give up sixty seconds of peace of mind.",
      quoteAuthor: "Ralph Waldo Emerson",
      media: {
        type: 'youtube',
        id: 'aEqlQvczMJQ',
        description: 'Calming Nature Scenes with Peaceful Music'
      }
    },
    relaxed: {
      quote: "Almost everything will work again if you unplug it for a few minutes, including you.",
      quoteAuthor: "Anne Lamott",
      media: {
        type: 'youtube',
        id: 'lFcSrYw-ARY',
        description: 'Relaxing Ocean Waves - 4K Beach Sunset Views'
      }
    },
    motivated: {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      quoteAuthor: "Winston Churchill",
      media: {
        type: 'youtube',
        id: 'g-jwWYX7Jlo',
        description: 'Best Motivational Speech Compilation - Get Up and Never Give Up!'
      }
    }
  }
  return content[mood] || content.relaxed
}