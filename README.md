# React Dog

A React-based interactive landing page featuring a 3D animated dog model, scroll-triggered motion, and layered storytelling sections.

## Overview

This project was built with React and uses Three.js through React Three Fiber to render a stylized 3D dog. The animation is enhanced with GSAP and ScrollTrigger to create a smooth scroll-driven experience.

## Features

- 3D dog model rendered with React Three Fiber
- Scroll-based animation using GSAP
- Interactive section layout with a modern landing page design
- Custom material and texture effects for a stylized look
- Responsive single-page experience

## Tech Stack

- React
- JavaScript
- Three.js
- @react-three/fiber
- @react-three/drei
- GSAP
- Create React App

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

```bash
npm install
```

### Run the app

```bash
npm run start
```

## This will start the development server and open the app in your browser at: http://localhost:3000


### Project Structure

react-dog/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   ├── matcap/
│   └── models/
├── src/
│   ├── components/
│   │   ├── Dog.js
│   │   ├── Hero.js
│   │   ├── Images.js
│   │   ├── Information.js
│   │   ├── Navbar.js
│   │   ├── Paragraphs.js
│   │   └── Titles.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── README.md
└── public/


## Notes

- The 3D model is loaded from the public assets folder.
- The project uses custom shader/material work and texture-based styling for the dog model.
- Scroll-triggered animations are used to simulate motion as the user navigates through the page.

### Licence

This project is for educational and demonstration purposes.

### Author

Sourabh (https://github.com/Sourabh108-Coder)