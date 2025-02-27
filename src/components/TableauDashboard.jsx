import { useState } from "react";

const SimpleTableauDashboard = ({ url, id }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Create the embed URL with proper parameters
  const embedUrl = `${url}?:showVizHome=no&:embed=true&:toolbar=no&:tabs=no&:display_count=no&:size=fit`;

  return (
    <div className="tableau-container" style={{ width: '100%', height: '400px' }}>
      {isLoading && (
        <div className="tableau-loading-overlay">
          <div className="spinner"></div>
          <p>Loading dashboard...</p>
        </div>
      )}
      
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        frameBorder="0"
        onLoad={() => setIsLoading(false)}
        title={`Tableau Dashboard ${id}`}
      />
    </div>
  );
};

export default SimpleTableauDashboard;