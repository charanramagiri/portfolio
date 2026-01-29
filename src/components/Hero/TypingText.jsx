import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Java Developer",
  "AI/ML Enthusiast",
];

const TYPING_SPEED = 50; // milliseconds per character
const DELETING_SPEED = 20; // milliseconds per character
const PAUSE_DURATION = 2000; // pause after typing complete
const INITIAL_DELAY = 800; // delay before starting

function TypingText() {
  const shouldReduceMotion = useReducedMotion();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      // For reduced motion, just show the first role
      setDisplayedText(roles[0]);
      return;
    }

    if (!hasStarted) {
      const initialTimeout = setTimeout(() => {
        setHasStarted(true);
        setDisplayedText(roles[0][0]);
      }, INITIAL_DELAY);

      return () => clearTimeout(initialTimeout);
    }
  }, [hasStarted, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion || !hasStarted) return;

    const currentRole = roles[currentRoleIndex];
    let timeoutId;

    if (isPaused) {
      // Pause after typing is complete
      timeoutId = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, PAUSE_DURATION);
    } else if (isDeleting) {
      // Deleting characters
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, DELETING_SPEED);
      } else {
        // Move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      // Typing characters
      if (displayedText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        // Typing complete, pause
        setIsPaused(true);
      }
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [displayedText, isDeleting, isPaused, currentRoleIndex, hasStarted, shouldReduceMotion]);

  return (
    <span style={{ minWidth: "280px", display: "inline-block" }}>
      {displayedText}
      {!shouldReduceMotion && <span className="typing-cursor">|</span>}
    </span>
  );
}

export default TypingText;

