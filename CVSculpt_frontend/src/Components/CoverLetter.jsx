// In ../Components/CoverLetter.jsx
import React from "react";

const CoverLetter = ({ text, onTextChange }) => {
  return (
    <div>
      <textarea
        className="textarea textarea-bordered w-full h-96 mb-6 resize-vertical font-mono text-sm" // Adjust styling as needed
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
};

export default CoverLetter;