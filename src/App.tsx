import { useEffect, useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "./wordData.json";
import "./App.css";

function App() {
  const [wordToGuess, setWordToGuess] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);

  useEffect(() => {
    setIncorrectLetters(
      guessedLetters.filter((letter) => !wordToGuess.includes(letter))
    );
  }, [guessedLetters]);

  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isLoser = incorrectLetters.length >= 6;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "710px",
          height: "365px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <HangmanDrawing incorrectLetters={incorrectLetters} />
        <div
          style={{
            width: "360px",
            height: "365px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontFamily: "monospace",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Hangman
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "sans-serif",
              marginTop: "10px",
            }}
          >
            Find the hidden word
          </p>
          <p
            style={{
              fontSize: "23px",
              textAlign: "center",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              marginTop: "60px",
              color: isLoser ? "red" : "green",
            }}
          >
            {isLoser ? "Unfortunately you lost!" : ""}
            {isWinner ? "Congratulations! You won!" : ""}
          </p>
          <button
            onClick={() => location.reload()}
            style={{
              width: "250px",
              height: "35px",
              fontSize: "20px",
              cursor: "pointer",
              marginTop: "130px",
              visibility: isLoser || isWinner ? "visible" : "hidden"
            }}
          >
            Try again
          </button>
        </div>
      </div>
      <HangmanWord
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        isLoser={isLoser}
      />
      <Keyboard
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        incorrectLetters={incorrectLetters}
        isWinner={isWinner}
        isLoser={isLoser}
      />
    </div>
  );
}

export default App;
