<div align="center">
  <img src="public/logo.png" alt="SansaarPay Logo" width="200"/>
  <h1>SansaarPay</h1>
  <p>Fast, Secure, Beautiful Payments</p>
</div>

## Overview
SansaarPay is a modern, sleek mobile payment application clone. Built with React and Vite, it offers seamless interactions for managing contacts, making payments, scanning QR codes, checking bank balances, and viewing transaction history.

## Project Structure
```text
SansaarPay/
├── public/                 # Static assets
│   └── logo.png            # App logo
├── src/
│   ├── assets/             # Images and icons used in the app
│   ├── components/         # Reusable UI components
│   │   ├── BottomNav.jsx   # Bottom navigation bar
│   │   ├── Header.jsx      # Top app header
│   │   ├── People.jsx      # Recent contacts carousel
│   │   ├── QuickActions.jsx# Grid of quick actions (Scan, Pay, etc.)
│   │   └── ToastContext.jsx# Custom toast notification system
│   ├── pages/              # Application views/screens
│   │   ├── BankBalancePage.jsx       # Check account balance
│   │   ├── ContactsPage.jsx          # A-Z contact list
│   │   ├── LandingPage.jsx           # Initial entry video/hero page
│   │   ├── OffersPage.jsx            # View rewards and offers
│   │   ├── PaymentPage.jsx           # Payment entry screen
│   │   ├── PaymentSuccessPage.jsx    # Successful payment confirmation
│   │   ├── QRScannerPage.jsx         # Scan QR code interface
│   │   └── TransactionHistoryPage.jsx# List of past transactions
│   ├── App.css             # Main component styles and animations
│   ├── App.jsx             # Main routing and App shell component
│   ├── index.css           # Global styles and CSS variables
│   └── main.jsx            # React entry point
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the localhost port provided.

## Features
- **Aesthetic UI:** Beautiful glassmorphism UI with subtle micro-animations.
- **Dynamic Routing:** Seamlessly navigate between pages like Contacts, QR Scanner, and History.
- **State Management:** Simple, responsive state handling.
- **Fully Responsive:** Adapts to mobile dimensions while providing a beautiful background experience on desktop.

## Technologies Used
- React 18
- Vite
- Lucide React (Icons)
- React Router DOM
