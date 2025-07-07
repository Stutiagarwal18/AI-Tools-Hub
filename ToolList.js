import React from "react";
import toolsData from "../data/toolsData";

function ToolList() {
  return (
    <div className="tools-container">
      {Object.entries(toolsData).map(([category, tools]) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="tools-grid">
            {tools.map((tool) => (
              <div className="tool-card" key={tool.name}>
                <img src={tool.logo} alt={tool.name} />
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToolList;
