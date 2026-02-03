import { Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
          <Link to="/privacy">Privacy</Link>
        </nav>
      </header>

      <main className="legal-page">
        <div className="legal-content">
          <h2>Terms of Service</h2>
          <p className="last-updated">Last Updated: January 30, 2026</p>

          <section className="legal-section">
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing or using AdCreative Login App ("the app"), you agree to
              be bound by these Terms of Service. If you do not agree, please do
              not use this application.
            </p>
          </section>

          <section className="legal-section highlight-box">
            <h3>2. Nature of This Application</h3>
            <p><strong>Demo and Testing Only</strong></p>
            <ul>
              <li>Educational purposes</li>
              <li>Testing OAuth-based authentication</li>
              <li>Ad creative template and music workflow demonstration</li>
              <li>Login and creative flow testing</li>
            </ul>
            <p><strong>This is NOT a production or commercial application.</strong></p>
          </section>

          <section className="legal-section">
            <h3>3. Platform Integration</h3>
            <ul>
              <li>Used only for authentication</li>
              <li>No content publishing on user’s behalf</li>
              <li>No access to videos, posts, or followers</li>
              <li>Only basic profile information is accessed</li>
              <li>Creative templates and music previews are for demo use</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>4. No Commercial Use</h3>
            <p>
              This app is a proof-of-concept demo and must not be used for
              commercial, business, or production purposes.
            </p>
          </section>

          <section className="legal-section">
            <h3>5. Ad Creative Usage</h3>
            <ul>
              <li>Templates are for demonstration only</li>
              <li>Music integration is for preview purposes</li>
              <li>No publishing or monetization features are provided</li>
            </ul>
            <p><strong>This is a development and testing tool only.</strong></p>
          </section>

          <section className="legal-section">
            <h3>6. User Responsibilities</h3>
            <ul>
              <li>Use only for demo and testing</li>
              <li>Follow applicable third-party terms of service</li>
              <li>No misuse, abuse, or exploitation</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>7. Disclaimer</h3>
            <p>
              This application is provided “AS IS” without warranties of any kind,
              including reliability, availability, or fitness for a particular
              purpose.
            </p>
          </section>

          <section className="legal-section">
            <h3>8. Limitation of Liability</h3>
            <p>
              We are not liable for any damages, losses, or issues arising from
              use of this demo application.
            </p>
          </section>

          <section className="legal-section">
            <h3>9. Modifications</h3>
            <p>
              We may modify, update, or discontinue this demo application at any
              time without notice.
            </p>
          </section>

          <section className="legal-section">
            <h3>10. Third-Party Services</h3>
            <p>
              Authentication services are governed by their respective platform
              policies. We are not responsible for third-party services.
            </p>
          </section>

          <section className="legal-section">
            <h3>11. Privacy</h3>
            <p>
              Please review our <Link to="/privacy">Privacy Policy</Link> to
              understand how limited authentication data is handled.
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
              <strong>⚠️ Demo Only:</strong> This application exists solely for
              educational and testing purposes.
            </p>
          </div>

          <div className="button-group">
            <Link className="btn-primary" to="/">Back to Home</Link>
            <Link className="btn-secondary" to="/privacy">
              View Privacy Policy
            </Link>
          </div>
        </div>
      </main>

      <footer>
        <p>© 2026 AdCreative Login App — Demo Application</p>
        <p className="footer-note">
          Created to demonstrate OAuth login and ad creative workflow
        </p>
      </footer>
    </div>
  );
};

export default Terms;
