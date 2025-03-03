import React from "react";
import "./AppGrid.css";

const appsData = [
  { name: "Time", link: "https://time-ash.vercel.app/" },
  { name: "Filter Data", link: "https://filterdataash.vercel.app/" },
  { name: "Song Player", link: "https://filterdataash.vercel.app/" },
//   { name: "LinkedIn", link: "https://www.linkedin.com" },
//   { name: "Twitter", link: "https://twitter.com" },
];

const AppGrid = () => {
  return (
    <div className="app-container">
      <div className="app-grid">
        {appsData.map((app, index) => (
          <a key={index} href={app.link} target="_blank" rel="noopener noreferrer" className="app-item">
            <div className="app-icon">{app.name.charAt(0)}</div>
            <p className="app-name">{app.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AppGrid;









