import React, { useState } from 'react';
import './index.css';

function App() {
  const [pg, setpg] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState(new Array(15).fill(null)); // State to track selected options
  const meg = ["Page1", "Page2", "Page3", "Page4", "Page5", "Page6", "Page7", "Page8", "Page9", "Page10", "Page11", "Page12", "Page13", "Page14", "Page15"];

  function handleNext() {
    setpg(pg + 1);
  }

  function handlePrevious() {
    setpg(pg - 1);
  }

  // Array of MCQs
  const mcqs = [
    {
      question: 'What is React?',
      options: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
      answerIndex: 0 // Index of the correct answer in the options array
    },
    {
      question: 'What is JSX?',
      options: ['A syntax extension for JavaScript', 'A programming language', 'A database management system'],
      answerIndex: 0
    },
    {
      question: 'What is a component in React?',
      options: ['A reusable piece of UI', 'A programming language', 'A database management system'],
      answerIndex: 0
    },
    // Add more questions here
    {
      question: 'What is HTML?',
      options: ['Hypertext Markup Language', 'Hyperlink and Text Markup Language', 'Hypertext Machine Language'],
      answerIndex: 0
    },
    {
      question: 'What does CSS stand for?',
      options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'],
      answerIndex: 0
    },
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Rome'],
      answerIndex: 0
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'NaCl'],
      answerIndex: 0
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'Stephen King', 'J.K. Rowling'],
      answerIndex: 0
    },
    {
      question: 'What year did the Titanic sink?',
      options: ['1912', '1907', '1921'],
      answerIndex: 0
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter'],
      answerIndex: 0
    },
    {
      question: 'What is the tallest mammal?',
      options: ['Giraffe', 'Elephant', 'Whale'],
      answerIndex: 0
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Pb'],
      answerIndex: 0
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'],
      answerIndex: 0
    },
    {
      question: 'What is the capital of Japan?',
      options: ['Tokyo', 'Beijing', 'Seoul'],
      answerIndex: 0
    },
    {
      question: 'What is the boiling point of water in Celsius?',
      options: ['100°C', '0°C', '50°C'],
      answerIndex: 0
    }
  ];

  // Function to handle option selection
  function handleOptionSelect(index, selectedOption) {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[index] = selectedOption;
    setSelectedOptions(updatedSelectedOptions);
  }

  // Function to calculate the score
  function calculateScore() {
    let score = 0;
    for (let i = 0; i < mcqs.length; i++) {
      if (selectedOptions[i] === mcqs[i].answerIndex) {
        score++;
      }
    }
    alert(`Your score is: ${score}`);
  }

  return (
    <div className="page">
      <div className="number">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
      </div>
      <div className="message">
        {/* Render MCQ or page message based on pg state */}
        {pg <= 15 ? (
          <div>
            <p>{meg[pg - 1]}</p>
            <div className="mcq">
              {/* Render MCQ question and options */}
              <p>{mcqs[pg - 1].question}</p>
              {mcqs[pg - 1].options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name={`option-${pg}`}
                    value={option}
                    checked={selectedOptions[pg - 1] === index}
                    onChange={() => handleOptionSelect(pg - 1, index)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ) : (
          <p>End of pages</p>
        )}
      </div>
      <div className="buttons">
        <button onClick={handlePrevious} disabled={pg === 1}> Previous</button>
        {pg === 15 ? <button onClick={calculateScore}>Submit</button> : <button onClick={handleNext}>Next</button>}
      </div>
    </div>
  );
}

export default App;
