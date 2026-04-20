# ⚡ SkillForge

![SkillForge Cover Image](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

<div align="center">
  <h3><strong>Master Any Skill with AI-Powered Planning</strong></h3>
  <p>SkillForge is an advanced, AI-driven web application designed to help you analyze skills, identify knowledge gaps, and automatically generate structured, personalized learning roadmaps.</p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Frontend-HTML5_%7C_CSS3_%7C_Vanilla_JS-6B46C1?style=for-the-badge&logo=html5" alt="Frontend" />
    <img src="https://img.shields.io/badge/Backend-Node.js_%7C_Express-339933?style=for-the-badge&logo=node.js" alt="Backend" />
    <img src="https://img.shields.io/badge/AI-OpenAI_GPT--4o--mini-000000?style=for-the-badge&logo=openai" alt="AI" />
  </p>
</div>

---

## ✨ Key Features

- 🔍 **AI Skill Analyzer**: Get comprehensive, AI-generated insights about any skill, including difficulty levels, estimated practice time, and career opportunities.
- 📈 **Skill Gap Analyzer**: Enter your current skills and your target goal to receive a detailed breakdown of what you're missing and exactly how to bridge the gap.
- 🗺️ **AI Planner**: Generate beautiful, week-by-week structured learning roadmaps directly from the AI, rendered beautifully in Markdown.
- 🎨 **Premium Aesthetics**: Features a highly modern, vibrant dark-mode UI with sleek glassmorphism effects and smooth micro-animations.

## 🚀 Tech Stack

### Frontend
- **HTML5 & CSS3**: Custom-built, utility-driven CSS with a responsive, glassmorphism aesthetic. No bulky CSS frameworks.
- **Vanilla JavaScript**: Lightweight and fast client-side routing and DOM manipulation.
- **Marked.js**: Parses complex AI markdown responses into beautiful, styled HTML elements.
- **Deployment**: Hosted blazingly fast on **Netlify**.

### Backend
- **Node.js & Express**: A lightweight, robust REST API.
- **OpenAI / OpenRouter API**: Integrates the cutting-edge `gpt-4o-mini` model for highly accurate skill and roadmap generation.
- **Deployment**: Hosted reliably on **Render**.

---

## 💻 Running Locally

To run SkillForge on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Setup the Backend
Navigate to the backend directory, install dependencies, and configure your environment variables.
```bash
cd Backend
npm install
```
Create a `.env` file in the `Backend` directory and add your OpenRouter/OpenAI API Key:
```env
OPENAI_API_KEY=your_api_key_here
PORT=5000
```
Start the server:
```bash
node server.js
```

### 2. Setup the Frontend
Open a new terminal window, navigate to the frontend directory, and serve the files. You can use any static server.
```bash
cd Frontend
npx serve .
```

Navigate to `http://localhost:3000` in your browser to start planning!

---

## 🎨 UI/UX Highlights

SkillForge was built with aesthetics in mind. The design abandons plain, generic colors in favor of a curated, harmonious color palette featuring deep purples (`#6B46C1`), vibrant accents (`#0BC5EA`), and sleek, semi-transparent surfaces (`backdrop-filter: blur(12px)`). 

---

<div align="center">
  <i>Built with ❤️ by Bharat Mehta</i>
</div>
