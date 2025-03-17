
import { useEffect, useState } from 'react';

interface TypeWriterProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const TypeWriter = ({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500
}: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentString = strings[currentIndex];

    // Handling the typing, deleting, and waiting states
    if (!isWaiting) {
      if (!isDeleting && displayText.length < currentString.length) {
        // Typing
        timeout = setTimeout(() => {
          setDisplayText(currentString.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else if (!isDeleting && displayText.length === currentString.length) {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      } else if (isDeleting && displayText.length > 0) {
        // Deleting
        timeout = setTimeout(() => {
          setDisplayText(currentString.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else if (isDeleting && displayText.length === 0) {
        // Finished deleting, move to next string
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setIsWaiting(true);
        timeout = setTimeout(() => {
          setIsWaiting(false);
        }, 400); // Short pause before starting the next word
      }
    }

    return () => clearTimeout(timeout);
  }, [strings, currentIndex, displayText, isDeleting, isWaiting, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <div className="inline-flex items-center">
      <span className="font-mono">{displayText}</span>
      <span className="w-1 h-6 bg-accent ml-1 animate-blink"></span>
    </div>
  );
};

export default TypeWriter;
