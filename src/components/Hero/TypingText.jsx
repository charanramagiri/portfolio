import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

const roles = [
  "Software Developer",
  "Full Stack Developer",
  "Python Full Stack Developer",
  "Java Developer",
  "MERN Stack Developer",
];

const TYPING_SPEED = 50; // milliseconds per character
const DELETING_SPEED = 20; // milliseconds per character
const PAUSE_DURATION = 2000; // pause after typing complete
const INITIAL_DELAY = 800; // delay before starting

function TypingText() {
  const shouldReduceMotion = useReducedMotion();
  const [typingState, setTypingState] = useState({
    currentRoleIndex: 0,
    displayedText: "",
    phase: "initial",
  });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const { phase } = typingState;
    const delay = phase === "initial"
      ? INITIAL_DELAY
      : phase === "paused"
        ? PAUSE_DURATION
        : phase === "deleting"
          ? DELETING_SPEED
          : TYPING_SPEED;

    const timeoutId = setTimeout(() => {
      setTypingState((current) => {
        const role = roles[current.currentRoleIndex];

        if (current.phase === "initial") {
          return { ...current, displayedText: role[0], phase: "typing" };
        }

        if (current.phase === "paused") {
          return { ...current, phase: "deleting" };
        }

        if (current.phase === "deleting") {
          if (current.displayedText.length > 0) {
            return { ...current, displayedText: current.displayedText.slice(0, -1) };
          }

          return {
            currentRoleIndex: (current.currentRoleIndex + 1) % roles.length,
            displayedText: "",
            phase: "typing",
          };
        }

        const nextText = role.slice(0, current.displayedText.length + 1);
        return {
          ...current,
          displayedText: nextText,
          phase: nextText.length === role.length ? "paused" : "typing",
        };
      });
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [typingState, shouldReduceMotion]);

  const displayedText = shouldReduceMotion ? roles[0] : typingState.displayedText;

  return (
    <span className="typing-text">
      {displayedText}
      {!shouldReduceMotion && <span className="typing-cursor">|</span>}
    </span>
  );
}

export default TypingText;

