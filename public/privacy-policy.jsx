import { Link } from "react-router-dom";

const Privacy = () => {
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
          <Link to="/">Home</Link>
          <Link to="/terms">Terms</Link>
        </nav>
      </header>

      <main className="legal-page">
        <div className="legal-content">
          <h2>Privacy Policy</h2>
          <p className="last-updated">Last Updated: January 30, 2026</p>

          <section className="legal-section">
            <h3>1. Introduction</h3>
            <p>
              AdCreative Login App is a demonstration application created solely
              for educational and testing purposes. This Privacy Policy explains
              how limited data is handled within the app.
            </p>
          </section>

          <section className="legal-section highlight-box">
            <h3>2. Authentication Data Usage</h3>
            <p><strong>Authentication Only</strong></p>
            <ul>
              <li>No content publishing or posting</li>
              <li>No access to videos, posts, or followers</li>
              <li>No interaction with user content</li>
              <li>Only basic profile data is accessed</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>3. Data We Collect</h3>
            <p>The limited data collected includes:</p>
            <ul>
              <li>User ID (for authentication)</li>
              <li>Username (for display purposes)</li>
              <li>Profile image URL (optional)</li>
            </ul>

            <p><strong>We do NOT collect:</strong></p>
            <ul>
              <li>Videos or media content</li>
              <li>Followers or following data</li>
              <li>Messages, comments, or likes</li>
              <li>Location data</li>
              <li>Payment, health, or sensitive personal data</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>4. How We Use Data</h3>
            <ul>
              <li>Authenticate users during login</li>
              <li>Display basic profile information</li>
              <li>Demonstrate OAuth login flow</li>
              <li>Test creative workflow features</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>5. Data Storage & Security</h3>
            <ul>
              <li>No backend server is used</li>
              <li>No permanent data storage</li>
              <li>Session data exists only in browser memory</li>
              <li>Data is cleared on logout or browser close</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>6. Data Sharing</h3>
            <p>
              We do not sell, rent, or share user data with third parties. No
              external services are used beyond authentication.
            </p>
          </section>

          <section className="legal-section">
            <h3>7. Demo & Educational Use</h3>
            <p>
              This application is intended only for educational demonstration,
              testing, and app review purposes. It is not a production system.
            </p>
          </section>

          <section className="legal-section">
            <h3>8. User Rights</h3>
            <ul>
              <li>Revoke app access at any time</li>
              <li>Request information about collected data</li>
              <li>Automatic data removal on logout</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>9. Children’s Privacy</h3>
            <p>
              This demo application is not intended for users under the age of
              13. No data is knowingly collected from children.
            </p>
          </section>

          <section className="legal-section">
            <h3>10. Policy Updates</h3>
            <p>
              This Privacy Policy may be updated for testing or demonstration
              purposes. Any changes will be reflected on this page.
            </p>
          </section>

          <section className="legal-section">
            <h3>11. Contact</h3>
            <p>
              This is a demonstration application. For authentication platform
              privacy practices, please refer to their official policies.
            </p>
          </section>

          <div className="demo-notice">
            <p>
              <strong>⚠️ Demo Disclaimer:</strong> This Privacy Policy applies only
              to a demo application created for educational and testing purposes.
            </p>
          </div>

          <div className="button-group">
            <Link className="btn-primary" to="/">Back to Home</Link>
            <Link className="btn-secondary" to="/terms">
              View Terms of Service
            </Link>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2026 AdCreative Login App — Demo Application</p>
        <p className="footer-note">
          Created for OAuth login and ad creative workflow demonstration
        </p>
      </footer>
    </div>
  );
};

export default Privacy;
