# MoodBoard AI

MoodBoard AI is a personalized mood companion web application designed to help users reflect on their emotions, discover uplifting content, and maintain daily mood journals. Built with React, Tailwind CSS, and Framer Motion, MoodBoard AI adapts visually and interactively based on the user's selected mood.

---

## Features

- **Mood Selection:** Choose your current mood from distinct options with easily recognizable icons and color themes.
- **Dynamic Content:** Receive mood-based suggestions including relevant quotes and media (YouTube videos) tailored to your emotional state.
- **Theme Adaptation:** The app's color scheme and interface transition smoothly according to your chosen mood.
- **Journaling:** A "Today's Reflection" section allows users to write and review personal notes for the day.
- **Media Recommendations:** Embedded YouTube videos provide instant mood-appropriate recommendations.
- **Local Storage:** Mood selections and reflections are saved locally for persistent, private access.
- **Responsive Design:** The layout automatically adapts for optimal experience on mobile, tablet, and desktop devices.
- **Minimal UI:** Clean, beginner-friendly interface with Arial font and clear visual hierarchy for ease of use.
- **Attribution:** Website created by Saket.

---

## Tech Stack

- **React** for UI components and state management
- **Tailwind CSS** for utility-first styling and responsive layout
- **Framer Motion** for smooth, visually appealing transitions and animations
- **LocalStorage API** for persistence of user data

---

## Project Structure

```
MoodBoard-AI/
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── index.css
│   ├── App.jsx
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MoodSelector.jsx
│   │   ├── QuoteDisplay.jsx
│   │   ├── MediaSuggestion.jsx
│   │   ├── ReflectionSection.jsx
│   │   └── Footer.jsx
│   └── utils/
│       └── moodUtils.js
```

---

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sinha-19/MoodBoard-AI.git
   cd MoodBoard-AI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```

---

## Customization

- **Font:** The application uses Arial for a simple, accessible look.
- **Media Links:** Each mood is mapped to a working, mood-appropriate YouTube video embedded directly in the app.
- **Attribution:** The footer credits Saket as the creator.

---

## License

This project is released under the MIT License.

---

**Made with ❤️ by Saket**
