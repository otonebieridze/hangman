import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyBoardProps = {
  guessedLetters: string[];
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  activeLetters: string[];
  incorrectLetters: string[];
  isWinner: boolean;
  isLoser: boolean;
};

export default function KeyBoard({
  guessedLetters,
  setGuessedLetters,
  activeLetters,
  incorrectLetters,
  isWinner,
  isLoser,
}: KeyBoardProps) {
  const handleKeyboardClick = (index: number) => {
    setGuessedLetters((prev) => [...prev, KEYS[index]]);
  };

  return (
    <div
      style={{
        maxWidth: "710px",
        minHeight: "100px",
        marginTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "5px",
      }}
    >
      {KEYS.map((key, index) => {
        const isActive = activeLetters.includes(KEYS[index]);
        const isInActive = incorrectLetters.includes(KEYS[index]);

        return (
          <button
            disabled={guessedLetters.includes(KEYS[index]) || isLoser || isWinner}
            key={index}
            onClick={() => handleKeyboardClick(index)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            }`}
          >
            {key.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
