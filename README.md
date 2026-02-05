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

---

##  Key Features

| Feature | What It Does |
|---------|-------------|
|  **OAuth Login** | Users login with TikTok account |
|  **Auto Logout** | Session expires after 20 seconds (demo) |
|  **Create Ads** | Fill form to create ad campaigns |
|  **Music Selection** | Choose music for ads |
|  **Protected Pages** | Ad creation page locked until logged in |
|  **Modern UI** | Beautiful design with Tailwind CSS |

---

##  How It's Built (Architecture)

### The 3 Main Layers

```

  PAGES (What Users See)             
   ConnectTikTok.jsx (Login)       
   CreateAd.jsx (Make Ad)          
   TikTokCallback.jsx (OAuth Done) 

                    

  COMPONENTS (Reusable Parts)        
   Layout (Header/Footer)          
   ProtectedRoute (Lock Pages)     
   ErrorBanner (Show Errors)       

                    

  CONTEXT & UTILS (Logic)            
   AuthContext.jsx (Store Token)   
   tiktokOAuth.js (Login Logic)    
   errorMapper.js (Handle Errors)  

```

### What Each Folder Does

```
src/
 pages/               User sees these (Login, Create Ad, OAuth callback)
 components/         Parts used by pages (Layout, Guards, Popups)
 context/           Brain of app (Remember who's logged in)
 api/               Talk to TikTok (OAuth, token exchange)
 utils/             Helper functions (Errors, Validation)
 hooks/             Reusable logic (Form handling)
 App.jsx            Main file (Routes setup)
 main.jsx           Startup file (Runs App.jsx)
```

---

##  How Login Works (Step by Step)

### Step 1: User Clicks Login Button
```jsx
// pages/ConnectTikTok.jsx
<button onClick={redirectToTikTok}>
  Connect TikTok
</button>
```

### Step 2: App Redirects to TikTok
```javascript
// api/tiktokOAuth.js
function redirectToTikTok() {
  const url = "https://www.tiktok.com/v2/auth/authorize/?" +
    `client_key=abc123` +
    `&redirect_uri=https://yoursite.com/callback/`;
  
  window.location.href = url; // User goes to TikTok
}
```

### Step 3: TikTok Redirects Back with Code
```
TikTok sends: http://yoursite.com/callback/?code=xyz789
```

### Step 4: App Exchanges Code for Token
```javascript
// pages/TikTokCallback.jsx
const code = getCodeFromURL(); // Extract: xyz789
const token = exchangeCodeForTokenMock(code);
// Returns: { access_token: "token123", expires_in: 20 }
```

### Step 5: Save Token & Remember Login
```javascript
// context/AuthContext.jsx
login(token, 20); // Save token for 20 seconds

// This schedules auto-logout:
setTimeout(() => {
  logout(); // Auto logout after 20 seconds
}, 20 * 1000);
```

---

##  Data Flow (Where Does Data Go?)

```
LocalStorage (Saved on User's Computer)
 token: "abc123xyz..."           The access key
 token_expires_at: 1707190420    When it expires
 tt_state: "xyz789"              OAuth security
 (Data auto-deleted on logout)

AuthContext (App Memory - Faster Access)
 token: null or "abc123xyz..."
 login()    Function to save login
 logout()   Function to clear login

Browser Display
 If logged in: Show "Create Ad" page
 If logged out: Show "Connect TikTok" page
```

---

##  Understanding Auto-Logout (The Timer)

### How the Timer Works

```javascript
// When user logs in
login(token, expires_in = 20) {
  localStorage.setItem("token", token);
  
  // Schedule logout after 20 seconds
  setTimeout(() => {
    handleLogout();
  }, 20 * 1000); // 20000 milliseconds = 20 seconds
}

// After 20 seconds...
handleLogout() {
  localStorage.removeItem("token");  // Delete token
  setToken(null);                    // Update app memory
  navigate("/");                     // Go back to login
}
```

### What Gets Deleted on Logout

```javascript
localStorage.removeItem("token");              //  Delete login
localStorage.removeItem("token_expires_at");   //  Delete timer
localStorage.removeItem("tt_state");           //  Delete OAuth data
// User must login again!
```

---

##  Protected Routes (Locked Pages)

### The Guard
```javascript
// components/ProtectedRoute.jsx
function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);
  
  if (!token) {
    return <Navigate to="/" />; // Not logged in? Go to login!
  }
  
  return children; // Logged in? Show the page!
}
```

### Usage
```javascript
// App.jsx
<Route path="/create-ad" element={
  <ProtectedRoute>
    <CreateAd />
  </ProtectedRoute>
} />
```

**What This Means:**
- `ProtectedRoute` checks if user is logged in
- If NO token  Kick them back to login page
- If YES token  Let them see the page

---

##  File Quick Reference

| File | Does What |
|------|-----------|
| `App.jsx` | Defines all pages and their paths |
| `main.jsx` | Starts the app |
| `pages/ConnectTikTok.jsx` | Login page (button to connect) |
| `pages/TikTokCallback.jsx` | Handles login response from TikTok |
| `pages/CreateAd.jsx` | Form to create ads (locked until logged in) |
| `context/AuthContext.jsx` | Remembers if user is logged in |
| `components/Layout.jsx` | Header and footer |
| `components/ProtectedRoute.jsx` | Locks pages (requires login) |
| `api/tiktokOAuth.js` | Talks to TikTok |

---

##  Key Concepts for Beginners

### 1. **Context API** (Remember Things)
```javascript
// Create a "memory" for the whole app
const AuthContext = createContext();

// App can access it anywhere:
const { token, login, logout } = useContext(AuthContext);
```

### 2. **useNavigate** (Change Pages)
```javascript
const navigate = useNavigate();
navigate("/create-ad"); // Go to this page
```

### 3. **localStorage** (Save on Computer)
```javascript
// Save
localStorage.setItem("token", "xyz123");

// Read
const token = localStorage.getItem("token");

// Delete
localStorage.removeItem("token");
```

### 4. **useEffect** (Run Code After Page Loads)
```javascript
useEffect(() => {
  console.log("Page loaded!");
  // Check if user is logged in
}, []); // Run once when page loads
```

### 5. **useState** (Remember Values)
```javascript
const [campaignName, setCampaignName] = useState("");
// Start with empty string
// setCampaignName("My Campaign") to change it
```

---

##  Testing the App Locally

### Test Login
1. Click "Connect TikTok"
2. App redirects to TikTok (fake)
3. Gets sent back with code
4. Shows success page

### Test Auto-Logout (20 seconds)
1. Login successfully
2. Wait 20 seconds
3. App automatically kicks you out
4. See login page again

### Check localStorage
```javascript
// Open browser console (F12)
localStorage.getItem("token")        // See if logged in
localStorage.getItem("token_expires_at")  // See when logout happens
```

---

##  Tech Stack (Simple Explanation)

| Tech | What It Is | Why We Use It |
|------|-----------|---------------|
| **React** | UI library | Reusable components |
| **Vite** | Builder | Makes app fast |
| **React Router** | Navigation | Change pages without reload |
| **Tailwind CSS** | Styling | Beautiful design, less code |
| **Context API** | Memory | Remember logged-in state |
| **GitHub Pages** | Hosting | Free server |

---

##  Common Mistakes (Avoid These!)

###  Storing Token Only in Memory
```javascript
// BAD - Lost on page refresh!
const [token, setToken] = useState("abc123");
```

###  Store in localStorage Too
```javascript
// GOOD - Survives page refresh
localStorage.setItem("token", "abc123");
const [token, setToken] = useState(localStorage.getItem("token"));
```

###  Forgetting Logout Cleanup
```javascript
// BAD - Old data still in memory
logout() {
  setToken(null); // Only clears memory
}
```

###  Clean Everything
```javascript
// GOOD - Clears memory and storage
logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("token_expires_at");
  setToken(null);
}
```

---

##  Learn More

### Understanding OAuth
- OAuth = "Let someone else handle login"
- User login to TikTok (TikTok is trusted)
- TikTok tells our app: "This person is real!"
- App gives user access

### Why Token Expires
- Security: Old tokens can't be used forever
- Forces login again = Safer
- If someone steals a token, it only works 20 seconds

### Why HashRouter (# in URL)
- GitHub Pages doesn't have backend
- HashRouter puts everything after #
- So GitHub Pages can serve the app
- Example: `yoursite.com/#/create-ad`

---

##  FAQ for Juniors

**Q: Where does the token go?**  
A: Saved in browser's localStorage (like a browser memory card)

**Q: What if user refreshes page?**  
A: AuthContext checks localStorage, finds token, lets them stay logged in (until expiry)

**Q: How does auto-logout work?**  
A: When login happens, we say "delete token in 20 seconds" - JavaScript timer does it

**Q: Why do we need ProtectedRoute?**  
A: To prevent non-logged-in users from seeing secret pages

**Q: Can I change the 20-second expiry?**  
A: Yes! In `api/tiktokOAuth.js`, change `expires_in: 20` to any number

---

##  Deployment Checklist

- [ ] Run `npm install` (Install packages)
- [ ] Run `npm run dev` (Test locally at localhost:5173)
- [ ] Click "Connect TikTok" (Test login)
- [ ] Fill form (Test ad creation)
- [ ] Wait 20 seconds (Test auto-logout)
- [ ] Run `npm run deploy` (Upload to GitHub Pages)
- [ ] Visit https://rajak82001.github.io/adcreative-login-app/ (Check live)

---

##  Next Steps for Learning

1. **Add Logging** - Add `console.log()` everywhere to see what's happening
2. **Change Expiry Time** - Make token last 60 seconds instead of 20
3. **Add Remember Me** - Let users stay logged in for a week
4. **Add Backend** - Replace mock OAuth with real server
5. **Add Database** - Save ads to real database, not localStorage

---

##  Need Help?

- Check browser console (F12) for errors
- Look at GitHub Issues
- Read the code comments in source files
- Trace through one login using browser DevTools

---

**Last Updated:** February 5, 2026  
**Version:** 1.0.0  
**For:** Junior Developers Learning React
