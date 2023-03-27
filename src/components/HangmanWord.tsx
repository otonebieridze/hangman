type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  isLoser: boolean;
};

export default function HangmanWord({
  wordToGuess,
  guessedLetters,
  isLoser,
}: HangmanWordProps) {
  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        fontSize: "2rem",
        gap: ".25em",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) || isLoser
                ? "visible"
                : "hidden",
              color: isLoser && !guessedLetters.includes(letter) ? "red" : "black"
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
