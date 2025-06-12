import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Glamify Cosmetic Mobile App",
    slug: "glamify-cosmetic-app",
    description:
      "UI/UX design of a mobile app for the beauty industry with interactive prototyping.",
    videoThumbnail: "/videos/glamify.mp4",
    poster: "/images/glamify1.png",
    tools: ["Figma"],
    content: `# Glamify Cosmetic Mobile App

Glamify is a comprehensive mobile application designed for the beauty industry. The app allows users to browse cosmetic products, read reviews, and make purchases directly from their mobile devices.

## Project Overview

The project involved creating a seamless and intuitive user experience for beauty enthusiasts. Key considerations included:

- Creating an aesthetically pleasing interface that aligns with beauty industry standards
- Designing intuitive navigation for product discovery
- Implementing an easy checkout process
- Incorporating user reviews and ratings system

## Design Process

The design process began with user research and competitive analysis, followed by wireframing, prototyping, and user testing. The final design was implemented in Figma with interactive prototyping to demonstrate the user flow.`,
    images: ["/images/glamify1.png", "/images/glamify2.png"],
    features: [
      "Interactive product catalog",
      "User reviews and ratings",
      "Personalized recommendations",
      "Secure checkout process",
      "Order tracking",
    ],
    githubLink: "https://github.com/dewmirajapakshe/cosmetic-designs.git",
  },
  {
    id: "2",
    title: "Cey Coir Enterprise Management System",
    slug: "ceycoir-management-system",
    description:
      "Built Product & Machinery Management Module in a full-stack MERN enterprise app.",
    videoThumbnail: "/videos/ceycoir.mp4",
    poster: "/images/ceycoir1.png",
    tools: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    content: `# Cey Coir Enterprise Management System

A comprehensive enterprise management system built for Cey Coir, a leading manufacturer in the industry.

## Project Overview

The Cey Coir Enterprise Management System is a full-stack MERN application designed to streamline the company's operations. My role focused on building the Product & Machinery Management Module, which is critical for tracking inventory and machinery maintenance.

## Features Implemented

- Real-time inventory tracking
- Machinery maintenance scheduling
- Production analytics dashboard
- Quality control reporting
- Integration with existing enterprise systems

## Technical Details

The application was built using React.js for the frontend, with Tailwind CSS for styling. The backend was implemented using Node.js with Express, and MongoDB was used as the database. The system also incorporated RESTful APIs for integration with other enterprise systems.`,
    images: ["/images/ceycoir1.png", "/images/ceycoir2.png", "/images/ceycoir3.png"],
    features: [
      "Inventory management",
      "Machinery maintenance tracking",
      "Production analytics",
      "Quality control reporting",
      "User role management",
    ],
    githubLink: "https://github.com/dewmirajapakshe/ITP.git",
  },
  {
    id: "3",
    title: "Solar Tracker Android UI",
    slug: "solar-tracker-ui",
    description:
      "Designed UI screens for a solar tracking system using Android navigation components.",
    videoThumbnail: "/videos/solar-tracker.mp4",
    poster: "/images/solar-tracker1.png",
    tools: ["Kotlin", "Android Studio", "XML"],
    content: `# Solar Tracker Android UI

An Android application designed to monitor and control solar panel tracking systems.

## Project Overview

The Solar Tracker Android UI was designed to provide users with a simple yet powerful interface to monitor and control their solar panel tracking systems. The application allows users to view real-time data, adjust settings, and receive notifications about system performance.

## Design Approach

The UI was designed with a focus on clarity and ease of use. Key screens include:

- Dashboard with real-time energy production metrics
- Solar panel position control interface
- Historical data visualization
- System settings and configuration
- Alerts and notifications center

## Implementation Details

The UI was implemented using Kotlin and XML in Android Studio. Android Navigation Components were used to create a seamless navigation experience between different screens.`,
    images: ["/images/solar-tracker1.png", "/images/solar-tracker2.png"],
    features: [
      "Real-time monitoring",
      "Manual control override",
      "Historical data visualization",
      "Alert system",
      "User preferences",
    ],
    link: "https://github.com/dewmirajapakshe/Solo-tracker-mobile-app.git",
  },
  {
    id: "4",
    title: "My Piggy Bank – Finance Tracker App",
    slug: "piggy-bank-finance-app",
    description:
      "Full-stack financial tracker with savings, expenses, and budgeting features.",
    videoThumbnail: "/videos/my-piggy-bank.mp4",
    poster: "/images/piggybank.png",

    tools: ["Kotlin", "React.js", "Node.js"],
    content: `# My Piggy Bank – Finance Tracker App

A comprehensive financial tracking application designed to help users manage their personal finances.

## Project Overview

My Piggy Bank is a full-stack financial tracker application that helps users manage their savings, track expenses, and create budgets. The application provides a comprehensive view of the user's financial health and offers insights to improve financial habits.

## Features

- Expense tracking with categorization
- Savings goals and progress tracking
- Budget creation and monitoring
- Financial insights and reports
- Secure user authentication

## Technical Implementation

The application features a React.js web frontend and a Kotlin Android app, both connecting to a shared Node.js backend. This architecture ensures a consistent experience across platforms while leveraging the native capabilities of each platform.`,
    images: ["/images/piggybank.png", "/images/piggybank2.png"],
    features: [
      "Expense tracking",
      "Savings goals",
      "Budget management",
      "Financial reports",
      "Cross-platform synchronization",
    ],
    githubLink: "https://github.com/dewmirajapakshe/FinancialTracker.git",
  },
];
