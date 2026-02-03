# TikTok Ads Creative

A React + Vite application for creating and managing TikTok ads with integrated music selection and authentication features.

## Features

- **TikTok Authentication**: Connect your TikTok account securely
- **Ad Creation Form**: Create ads with customizable content and parameters
- **Music Selection**: Browse and select music tracks for your ads
- **Error Handling**: Comprehensive error messages and validation
- **Context API**: State management using React Context
- **Fast Development**: Powered by Vite with Hot Module Replacement (HMR)

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code quality
- **PostCSS** - CSS processing
- **JavaScript (ES6+)** - Modern JavaScript

## Project Structure

```
src/
├── api/                    # API integration
│   ├── ads.api.js         # Ads API endpoints
│   ├── auth.api.js        # Authentication API
│   └── music.api.js       # Music API
├── components/            # React components
│   ├── AdForm.jsx         # Ad creation form
│   ├── ConnectTikTok.jsx  # TikTok authentication
│   ├── ErrorBanner.jsx    # Error display
│   └── MusicSelector.jsx  # Music selection
├── context/               # React Context
│   └── AuthContext.jsx    # Authentication state
├── hooks/                 # Custom hooks
│   └── useAdForm.js       # Form handling hook
├── utils/                 # Utility functions
│   ├── errorMessages.js   # Error message templates
│   └── validators.js      # Validation functions
├── App.jsx               # Main app component
├── App.css               # App styles
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd adcreative-login-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Configuration Files

- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint rules
- `postcss.config.js` - PostCSS configuration
- `package.json` - Dependencies and scripts

## API Integration

The application integrates with the following API modules:

- **auth.api.js** - Handle TikTok authentication
- **ads.api.js** - Manage ad creation and management
- **music.api.js** - Fetch available music tracks

## Error Handling

Error messages are centralized in `utils/errorMessages.js` and displayed through the `ErrorBanner` component for consistent user feedback.

## Validation

Input validation is handled by `utils/validators.js` to ensure data integrity before submission.

