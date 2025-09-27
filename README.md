# 🎬 Netflix GPT – AI-Powered Movie Recommendation App

## Table of Contents

<details>

   <summary>Contents</summary>

1. [📸 Demo](#-demo)
1. [🧠 Overview](#-overview)
1. [✨ Features](#-features)
   1. [🔐 Authentication](#-authentication)
   1. [🧠 AI-Powered Search](#-ai-powered-search)
   1. [🎨 Netflix-Like UI](#-netflix-like-ui)
   1. [🗂️ State Management](#-state-management)
   1. [☁️ Cloud Integration](#-cloud-integration)
1. [🛠️ Tech Stack](#-tech-stack)
1. [⚙️ Installation & Setup](#-installation--setup)

</details>

> 🚀 A smart, AI-powered Netflix-style platform that recommends movies using GPT intelligence.  
> Built as part of the **Namaste React** series to explore advanced React, Redux Toolkit, Firebase, and OpenAI API integrations.

---

## 📸 Demo

👉 **Live Demo:** [https://your-deployed-url.web.app](https://your-deployed-url.web.app)  
👉 **GitHub Repo:** [https://github.com/your-username/netflix-gpt](https://github.com/your-username/netflix-gpt)

---

## 🧠 Overview

**Netflix GPT** is a fully responsive, AI-driven movie recommendation web app inspired by Netflix UI/UX.  
It uses **OpenAI’s GPT API** to understand user queries and suggest personalized movie recommendations from TMDB (The Movie Database).  
With Firebase authentication and Redux Toolkit state management, it’s built like a real production-grade project.

---

## ✨ Features

### 🔐 Authentication
- Secure sign-in and sign-up using **Firebase Email/Password**
- Form validation with Regex
- Conditional rendering of authenticated routes

### 🧠 AI-Powered Search
- GPT-4/OpenAI API integrated search bar  
- Natural language queries (e.g., *“Show me romantic comedies from the 90s”*)  
- Dynamic suggestions with real-time results

### 🎨 Netflix-Like UI
- Pixel-perfect UI built with **Tailwind CSS**
- Responsive layout for mobile, tablet, and desktop
- Hero banners, carousels, and category rows like Netflix

### 🗂️ State Management
- **Redux Toolkit** for managing auth state, search state, and movie data  
- Clean, scalable slice-based architecture

### ☁️ Cloud Integration
- Firebase for auth and hosting  
- TMDB API for fetching movie metadata  
- OpenAI API for AI-generated recommendations

---

## 🛠️ Tech Stack

| Layer              | Technology                             |
|--------------------|----------------------------------------|
| 🧑‍💻 Frontend       | React + Vite + Tailwind CSS            |
| 🔄 State Mgmt      | Redux Toolkit                          |
| 🔐 Authentication  | Firebase Auth                          |
| 🤖 AI Engine       | OpenAI GPT API                         |
| 🎥 Movie Data      | TMDB API                               |
| ☁️ Deployment      | Firebase Hosting                       |

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/netflix-gpt.git
cd netflix-gpt

# 2. Install dependencies
npm install

# 3. Create a .env file and add your API keys
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key

# 4. Start development server
npm run dev


📁 src
 ┣ 📂 components     # UI Components (Header, MovieCard, etc.)
 ┣ 📂 pages          # App pages (Login, Browse, Search)
 ┣ 📂 store          # Redux slices and store
 ┣ 📂 utils          # API calls, config files
 ┣ 📜 App.jsx        # Main React App
 ┗ 📜 main.jsx       # Entry point


🚀 Future Enhancements

👤 User profiles & watchlists

⭐ Movie ratings and reviews

📱 PWA support for mobile

🙌 Acknowledgements

🎥 TMDB API
 – Movie data

🤖 OpenAI API
 – AI-powered search

🔥 Firebase
 – Auth & hosting
