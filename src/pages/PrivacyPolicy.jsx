import { Link } from "react-router-dom";
import "../legal.css";

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 35C20 35 5 25 5 15C5 10 8 7 12 7C15 7 18 9 20 12C22 9 25 7 28 7C32 7 35 10 35 15C35 25 20 35 20 35Z"
              fill="#FF6B9D"
            />
          </svg>
          <h1>AdCreative Login App</h1>
        </div>

        <nav>
          <Link to="/" style={{color: '#666', textDecoration: 'none', fontSize: '14px', fontWeight: '500'}}>Home</Link>
          <Link to="/terms" style={{color: '#666', textDecoration: 'none', fontSize: '14px', fontWeight: '500'}}>Terms</Link>
        </nav>
      </header>

      <main className="legal-page">
        <div className="legal-content">
          <h2>Privacy Policy</h2>
          <p className="last-updated">Last Updated: February 3, 2026</p>

          <section className="legal-section">
            <h3>1. Introduction</h3>
            <p>
              AdCreative Login App is a demonstration application created solely
              for educational and testing purposes to showcase TikTok OAuth
              authentication and ad creative workflow integration.
            </p>
          </section>

          <section className="legal-section highlight-box">
            <h3>2. TikTok Data Usage</h3>
            <p><strong>Authentication & Ad Creative Management Only</strong></p>
            <ul>
              <li>Account authentication via TikTok OAuth</li>
              <li>No content publishing on behalf of users</li>
              <li>No direct access to user videos or posts</li>
              <li>No interaction with followers or messaging</li>
              <li>Minimal profile data collection only</li>
              <li>Ad creative selection and music integration</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>3. Data Collection</h3>
            <p>The only data collected includes:</p>
            <ul>
              <li>TikTok user ID</li>
              <li>Username</li>
              <li>Profile picture URL (optional)</li>
              <li>Selected ad creatives and templates</li>
              <li>Music selection preferences</li>
            </ul>

            <p><strong>We do NOT collect:</strong></p>
            <ul>
              <li>Videos or posts content</li>
              <li>Followers or following lists</li>
              <li>Likes, comments, or messages</li>
              <li>Location data</li>
              <li>Payment information</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>4. How Data Is Used</h3>
            <ul>
              <li>User authentication and TikTok login</li>
              <li>Displaying user profile information</li>
              <li>Managing ad creative selections</li>
              <li>Music integration for ad templates</li>
              <li>OAuth testing and demonstration</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>5. Data Storage & Security</h3>
            <ul>
              <li>No backend server</li>
              <li>No permanent storage</li>
              <li>Session-based browser data only</li>
              <li>Data cleared on logout or browser close</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>6. Data Sharing</h3>
            <p>
              We do not share data with any third parties. TikTok OAuth is
              the only external service used.
            </p>
          </section>

          <section className="legal-section">
            <h3>7. Demo Purpose</h3>
            <ul>
              <li>Educational use</li>
              <li>OAuth testing</li>
              <li>App review demonstration</li>
            </ul>
            <p>This app is not for production or commercial use.</p>
          </section>

          <section className="legal-section">
            <h3>8. Your Rights</h3>
            <ul>
              <li>Revoke access via TikTok settings</li>
              <li>Request data information</li>
              <li>Automatic data removal on logout</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>9. Children's Privacy</h3>
            <p>
              This demo application is not intended for users under 13
              years of age.
            </p>
          </section>

          <section className="legal-section">
            <h3>10. Policy Updates</h3>
            <p>
              This policy may change for testing purposes. Updates will be
              reflected on this page.
            </p>
          </section>

          <section className="legal-section">
            <h3>11. Contact</h3>
            <p>
              For TikTok privacy concerns, please refer to TikTok's official
              Privacy Policy.
            </p>
          </section>

          <div className="demo-notice">
            <p>
              <strong>⚠️ Demo Disclaimer:</strong>
              This privacy policy applies only to a demo application.
            </p>
          </div>

          <div className="button-group">
            <Link to="/" className="btn-primary" style={{textDecoration: 'none', color: 'white'}}>Back to Home</Link>
            <Link to="/terms" className="btn-secondary" style={{textDecoration: 'none', color: '#1f2937'}}>View Terms of Service</Link>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2026 AdCreative Login App — Demo Application</p>
        <p style={{color: '#9ca3af'}}>
          Created to demonstrate TikTok OAuth login and ad creative management
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
