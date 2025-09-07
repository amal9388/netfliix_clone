🎬 Netflix Clone

A React + Firebase based Netflix Clone that replicates the UI and core features of Netflix. Built with Vite for blazing-fast development and Firebase Authentication for login/sign-up.

🧠 What It Does

Displays Netflix-style homepage with movies and shows.

Provides user authentication (Sign In / Sign Up) using Firebase.

Implements horizontal scrolling movie cards with smooth wheel scrolling.

Includes a fixed navbar with dropdown profile menu.

Responsive design for desktop and mobile.

🧭 Motivation & Process

The aim of this project was to learn React (with Vite) and integrate Firebase authentication while replicating a real-world UI like Netflix.

Key learning points:

Organized React project with components (Navbar, TitleCards, Login, etc.)

Usage of useState, useEffect, and useRef hooks

Implemented horizontal scroll with mouse wheel events

Firebase setup for user authentication

Practiced flexbox, z-index, absolute/fixed positioning for styling

🛠 Dataset / API

Currently, the project uses static movie data (hardcoded sample JSON or images).
👉 Can be extended using TMDB API for dynamic movie content in the future.

⚙️ Requirements

Node.js (v16+)

NPM / Yarn

Firebase account

Install dependencies:

npm install


Run development server:

npm run dev


Build for production:

npm run build

🔑 Firebase Setup

Create a Firebase project on Firebase Console

Enable Authentication → Email/Password

Copy your config and paste into firebase.js:

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

📁 Folder Structure
netflix-clone/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── TitleCards.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── firebase.js
├── package.json
├── README.md

📸 Screenshots

Homepage


Login Page


✅ Output

Fully working Netflix UI with scrolling movies.

Functional Sign In / Sign Up with Firebase.

Responsive navbar with dropdown.

✨ Future Improvements

Integrate TMDB API for real movie data.

Add trailer previews (YouTube embed).

Create "My List" for saving favorite shows.

Dark/Light mode toggle.

📌 Final Thought

This Netflix Clone is a great React + Firebase practice project that demonstrates component structuring, state management, authentication, and styling. It can be further expanded into a full-featured streaming app with APIs and database integration.

👨‍💻 Author

Your Name – amal9388
