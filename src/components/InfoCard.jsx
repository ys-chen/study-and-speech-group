import React from 'react';

function InfoCard({ title, children }) {
  return (
    <div className="column is-4">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{title}</p>
        </header>
        <div className="card-content">
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
