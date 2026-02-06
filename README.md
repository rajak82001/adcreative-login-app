# AdCreative Login App

A simple TikTok login app where users can authenticate, create ads, and the session automatically expires after a set time.

 **Live Demo:** https://rajak82001.github.io/adcreative-login-app/

---

##  Quick Start (5 minutes)

### 1. Clone & Install
```bash
git clone https://github.com/rajak82001/adcreative-login-app.git
cd adcreative-login-app
npm install
```

### 2. Run Locally
```bash
npm run dev
# Open http://localhost:5173/adcreative-login-app/
```

### 3. Deploy to GitHub Pages
```bash
npm run deploy
```

---

##  What Does This App Do?

**The 4 Simple Steps:**
1. User clicks "Connect TikTok"
2. App redirects to TikTok for login
3. User approves  Token saved
4. Auto-logout after token expires

# TikTok Ads Campaign Manager

## Project Overview

This project was built as part of a frontend assignment. It's a React app that lets users log in with their TikTok account and create ad campaigns.

The main features are:
- Real TikTok OAuth login (not simulated)
- A form to create ad campaigns with validation
- Saving campaigns locally so they don't disappear on refresh
- View and delete campaigns you've created

Everything runs on the frontend only. There's no backend server involved.

## OAuth Setup Steps

The TikTok OAuth is already configured and working. But if you want to set it up from scratch or understand how it works:

1. Go to TikTok Developer Portal (https://developer.tiktok.com/) and create an app
2. In your app settings, register the redirect URI (or use the default one listed in `src/config/constants.js`)
3. Copy your Client Key and Client Secret from the app dashboard
4. **Create your `.env` file from the template:**
   ```bash
   cp .env.example .env
   ```
5. **Edit `.env` and add your credentials:**
   ```
   VITE_TIKTOK_CLIENT_SECRET=your_actual_client_secret_from_tiktok_dashboard
   VITE_TIKTOK_REDIRECT_URI=https://your-deployment-url/oauth/callback
   ```
6. Rebuild the app for changes to take effect:
   ```
   npm run build
   npm run preview
   ```

**Important:** The redirect URI in your code MUST exactly match what you register in the TikTok Developer Console (including the trailing slash and scheme).

Since this is frontend-only, the OAuth token exchange happens on the client side. I know this isn't ideal for production, but it works for this assignment. The client secret is loaded from environment variables at build time (from the `.env` file), which is better than hardcoding it directly in source files.

**Note:** The `.env` file is in `.gitignore` and will NOT be uploaded to git. This protects your credentials.

## Assumptions or Shortcuts Taken

Here are some things I simplified or assumed:

- **No backend:** The token exchange happens on the frontend. In a real app, this should be done on a secure backend server.

- **Client secret in environment variables:** The client secret is loaded from build-time environment variables (`.env` file). While this prevents hardcoding in source files, the secret is still embedded in the bundled JavaScript and can be extracted from browser DevTools. **Production apps MUST handle OAuth token exchange on a secure backend.**

- **Music upload simulation:** The custom music upload feature generates a mock ID instead of actually uploading a file. TikTok's music API would require more setup.

- **Local storage only:** Campaigns are stored in the browser's localStorage. They won't sync across devices or browsers.

- **Limited error handling:** Some edge cases might not be handled perfectly. The focus was on getting the core OAuth flow and form working properly.

- **No actual ad creation:** When you submit a campaign, it's just saved locally. It doesn't actually create an ad on TikTok because that would need advertiser credentials and backend integration.

The main goal was to demonstrate a working OAuth flow with real TikTok authentication and a functional UI for managing campaigns, while showing awareness of security best practices.
