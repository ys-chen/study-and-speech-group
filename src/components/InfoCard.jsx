import React from 'react';

function InfoCard({ title, children, col = 12 }) {
  return (
    <div className={`column is-${col}`} data-aos="fade-up">
      <div className="card">
        {title && (
          <header className="card-header">
            <p className="card-header-title">{title}</p>
          </header>
        )}
        <div className="card-content">
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
