import React from 'react';
// import './SearchHeader.css';
// import logo from '../giphy-searcher-logo.svg';

function SearchHeader({ lastSearch }) {
  return (
    <header>
      <p className="muted">
        Showing results for <strong>{lastSearch}</strong>
      </p>
    </header>
  );
}
export default SearchHeader;