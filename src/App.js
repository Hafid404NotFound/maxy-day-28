import React, { useState } from "react";
import WordCounterView from "./components/WordCounterView";
import { countWords } from "./utils/wordCounter";
import { countChars } from "./utils/charCounter";

const App = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (newText) => {
    setText(newText);
    setWordCount(countWords(newText));
    setCharCount(countChars(newText));
  };

  return (
    <div>
      <WordCounterView
        text={text}
        wordCount={wordCount}
        charCount={charCount}
        onTextChange={handleTextChange}
      />
    </div>
  );
};

export default App;
