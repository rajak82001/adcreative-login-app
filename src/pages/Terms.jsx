import { Link } from "react-router-dom";
import "../legal.css";

const Terms = () => {
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
          <Link to="/privacy" style={{color: '#666', textDecoration: 'none', fontSize: '14px', fontWeight: '500'}}>Privacy</Link>
        </nav>
      </header>

      <main className="legal-page">
        <div className="legal-content">
          <h2>Terms of Service</h2>
          <p className="last-updated">Last Updated: February 3, 2026</p>

          <section className="legal-section">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing or using AdCreative Login App ("the app"), you agree to
              be bound by these Terms of Service. If you do not agree, please
              do not use this application.
            </p>
          </section>

          <section className="legal-section highlight-box">
            <h3>2. Nature of This Application</h3>
            <p><strong>Demo and Testing Only</strong></p>
            <ul>
              <li>Educational purposes</li>
              <li>Testing TikTok OAuth authentication</li>
              <li>Ad creative template and music integration demonstration</li>
              <li>Demonstration of login flow and creative workflow</li>
            </ul>
            <p><strong>This is NOT a production or commercial application.</strong></p>
          </section>

          <section className="legal-section">
            <h3>3. TikTok Integration</h3>
            <ul>
              <li>Used only for authentication</li>
              <li>No posting or content publishing on user's behalf</li>
              <li>No access to videos, posts, or followers</li>
              <li>Only basic profile info is received</li>
              <li>Ad creative templates and music selection features only</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>4. No Commercial Use</h3>
            <p>
              This app is a proof-of-concept demo only and must not be used
              for commercial, business, or production purposes.
            </p>
          </section>

          <section className="legal-section">
            <h3>5. Ad Creative Usage</h3>
            <ul>
              <li>Templates for demonstration only</li>
              <li>Music integration for preview purposes</li>
              <li>Not intended for actual TikTok publishing</li>
            </ul>
            <p><strong>This is a development and testing tool only.</strong></p>
          </section>

          <section className="legal-section">
            <h3>6. User Responsibilities</h3>
            <ul>
              <li>Use only for demo/testing</li>
              <li>Follow TikTok Terms of Service</li>
              <li>No misuse or abuse</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>7. Disclaimer</h3>
            <p>
              The app is provided "AS IS" with no warranties of any kind,
              including reliability or availability.
            </p>
          </section>

          <section className="legal-section">
            <h3>8. Limitation of Liability</h3>
            <p>
              We are not liable for any damages, losses, or issues arising
              from use of this demo application.
            </p>
          </section>

          <section className="legal-section">
            <h3>9. Modifications</h3>
            <p>
              We may update, change, or discontinue this demo at any time
              without notice.
            </p>
          </section>

          <section className="legal-section">
            <h3>10. Third-Party Services</h3>
            <p>
              TikTok login is governed by TikTok's own policies. We are not
              responsible for TikTok services.
            </p>
          </section>

          <section className="legal-section">
            <h3>11. Privacy</h3>
            <p>
              Please review our{' '}
              <Link to="/privacy" style={{color: '#1f2937', textDecoration: 'underline'}}>Privacy Policy</Link>
              {' '}for details on data handling.
            </p>
          </section>

          <section className="legal-section">
            <h3>12. Age Requirement</h3>
            <p>
              You must be at least 13 years old to use this demo application.
            </p>
          </section>

          <div className="demo-notice">
            <p>
              <strong>⚠️ Demo Only:</strong>
              This application exists solely for educational and testing
              purposes.
            </p>
          </div>

          <div className="button-group">
            <Link to="/" className="btn-primary" style={{textDecoration: 'none', color: 'white'}}>Back to Home</Link>
            <Link to="/privacy" className="btn-secondary" style={{textDecoration: 'none', color: '#1f2937'}}>View Privacy Policy</Link>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2026 AdCreative Login App — Demo Application</p>
        <p style={{color: '#9ca3af'}}>
          Created to demonstrate TikTok OAuth login and ad creative workflow
        </p>
      </footer>
    </div>
  );
};

export default Terms;
