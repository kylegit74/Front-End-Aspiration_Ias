// Loading.js
import React from 'react';

function Loading({ message = "Fetching content, please wait..." }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="flex flex-col items-center">
        {/* Displaying the loading GIF */}
        <img
          src="https://loading.io/spinners/spinner/index.gif" // Replace with your desired GIF URL
          alt="Loading..."
          className="w-24 h-24 mb-4"
        />
        
        {/* Loading Message */}
        <p className="text-white mt-4 text-lg font-semibold text-center">{message}</p>
      </div>
    </div>
  );
}

export default Loading;
