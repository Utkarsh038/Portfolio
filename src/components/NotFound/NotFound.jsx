import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-animation">
          <h1 className="error-code">404</h1>
          <div className="error-icon">🔍</div>
        </div>
        
        <div className="error-message">
          <h2>Oops! Page Not Found</h2>
          <p>
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, it happens to the best of us!
          </p>
        </div>
        
        <div className="not-found-actions">
          <Link to="/" className="home-button">
            <span>🏠</span>
            Back to Home
          </Link>
          <button 
            className="back-button"
            onClick={() => window.history.back()}
          >
            <span>⬅️</span>
            Go Back
          </button>
        </div>
        
        <div className="helpful-links">
          <h3>You might be looking for:</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/frontend">Frontend Projects</Link></li>
            {/* <li><Link to="/uiux">UI/UX Projects</Link></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
