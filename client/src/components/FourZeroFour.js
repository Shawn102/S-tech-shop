import React from 'react';
import { Link } from 'react-router-dom';
import "./fourzerofour.css"

const FourZeroFour = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-message">Sorry, the page you are looking for cannot be found.</p>
      <Link to="/" className="not-found-link">
        Go to Home
      </Link>
    </div>
  )
}

export default FourZeroFour;