import React from "react";
import "./WordCounterView.css";

const WordCounterView = ({ text, wordCount, charCount, onTextChange }) => {
  return (
    <div className="container">
      <h1>Word & Char Counter</h1>
      <textarea
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        rows="10"
        cols="50"
        placeholder="Type or paste your text here..."
      />

      <p>Character Count: {charCount}</p>
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounterView;
