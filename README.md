# 🐕 Dog Studio

A React-based interactive landing page featuring a **3D animated dog model**, scroll-triggered motion, layered visuals, and an immersive storytelling experience. ✨

## 🌟 Overview

This project is built with **React** and uses **Three.js** through **React Three Fiber** to render a stylized 3D dog. 🐕🎨

The experience is enhanced with **GSAP** and **ScrollTrigger** to create smooth scroll-driven animations, transitions, and interactive visual effects. 🚀

The goal of this project is to experiment with **3D web experiences, animation, and modern interactive UI design**.

## ✨ Features

- 🐕 3D dog model rendered with React Three Fiber
- 🎬 Scroll-based animations using GSAP and ScrollTrigger
- 🎨 Custom materials, textures, and visual effects
- 🖼️ Layered images and background effects
- 🧩 Component-based React architecture
- 🖱️ Interactive section layout
- 📱 Responsive single-page experience
- 🌌 Modern landing page design
- ⚡ Smooth interactive transitions

## 🛠️ Tech Stack

- ⚛️ React
- 🟨 JavaScript
- 🎮 Three.js
- 🧊 @react-three/fiber
- 🧰 @react-three/drei
- 🎬 GSAP
- 🖱️ ScrollTrigger
- ⚙️ Create React App

## 🚀 Getting Started

### 📋 Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

### 📥 Installation

Clone the repository:

```bash
git clone https://github.com/Sourabh108-Coder/dog-studio.git
```

### 📁 Project Structure

react-dog/
│
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   ├── background-l.png
│   ├── branches_diffuse.jpeg
│   ├── branches_normals.jpeg
│   ├── dog_normals.jpg
│   ├── kennedy.png
│   ├── kikk.png
│   ├── msi-chicago.png
│   ├── navy-pier.png
│   ├── opera.png
│   ├── phone.png
│   ├── tommorowland.png
│   │
│   ├── matcap/
│   └── models/
│
├── src/
│   ├── components/
│   │   ├── Dog.js
│   │   ├── Hero.js
│   │   ├── Images.js
│   │   ├── Information.js
│   │   ├── Navbar.js
│   │   ├── Paragraphs.js
│   │   └── Titles.js
│   │
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore


### Project Demo
![Demo](/project_video/Dog-Studio.mp4)


### 🎯 How It Works
--- 

### 🐕 3D Dog Model

The 3D dog model is loaded from the public/models/ directory and rendered using React Three Fiber.

Custom materials, textures, and normal maps are used to create the stylized appearance of the dog. 🎨

### 🖱️ Scroll-Driven Animation

GSAP and ScrollTrigger are used to connect animations to the user's scroll position.

The scrolling experience controls different elements such as:

- 🐕 3D dog movement
- 🌌 Background transitions
- 🖼️ Image transitions
- ✨ Opacity effects
- 🎬 Section animations
- 🔄 Layered visual transitions
- 🧩 React Components

The application is divided into reusable React components:

- Dog.js — 🐕 3D dog model and scene
- Hero.js — 🦸 Hero section
- Navbar.js — 🧭 Navigation bar
- Titles.js — 📝 Interactive titles
- Images.js — 🖼️ Project and background images
- Information.js — 📖 Information section
- Paragraphs.js — 📄 Supporting content


## 🎨 Assets

The project uses several custom assets to create the visual experience:

- 🐕 3D models
- 🎨 Diffuse textures
- 🗺️ Normal maps
- 🧊 Matcap materials
- 🌄 Background images
- 🖼️ Project images

These assets are stored inside the public/ directory and are loaded by the application at runtime.

### 📝 Notes

- 🐕 The 3D model is loaded from the public assets folder.
- 🎨 Custom shader/material work and texture-based styling are used for the dog model.
- 🖱️ Scroll-triggered animations are used to simulate motion as the user navigates through the page.
- ⚡ The project focuses on experimenting with React, Three.js, GSAP, and interactive web design.
- 📱 The layout is designed as a responsive single-page experience.

### 📄 License

This project is created for educational and demonstration purposes.

Feel free to explore the source code and use it as inspiration for your own projects. ❤️

### 👨‍💻 Author
Sourabh 🐙 GitHub: https://github.com/Sourabh108-Coder