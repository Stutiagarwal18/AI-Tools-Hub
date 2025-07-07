import React from 'react';

const ToolCard = ({ tool }) => {
  return (
    <div className="tool-card-flip">
      <div className="flip-inner">
        {/* FRONT SIDE */}
        <div className="flip-front">
          <img
            src={tool.logo}
            alt={tool.name}
            className="tool-logo"
            onError={(e) => (e.target.style.display = 'none')}
          />
          <h3>{tool.name}</h3>
          <p className="short-intro">{tool.intro}</p> {/* 🟡 new short line */}
        </div>

        {/* BACK SIDE */}
        <div className="flip-back">
          <p className="full-description">{tool.description}</p>
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-btn"
          >
            🔗 Visit Tool
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
