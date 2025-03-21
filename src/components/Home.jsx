import { useState, useEffect } from 'react';
import './home.css';
import starrysky from '../images/starrysky.jpg';


export default function Home() {
    const sentences = [
        "Hi! I'm Michelle :)",
        "I'm a software developer.",
        "I'm a coffee lover. ☕"
    ];
    
    const typingSpeed = 250; // milliseconds
    const deletingSpeed = 200; // milliseconds
    const delayBetweenSentences = 500; // milliseconds

    const [isTyping, setIsTyping] = useState(true); 
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0); // tracks which sentence we're on
    const [currentText, setCurrentText] = useState(''); // holds current text being typed/deleted

    useEffect(() => {
        let interval; // to store interval between typing/deleting execution

        if (isTyping) {
          // Using setInterval to type one char at a time to currentText until the sentence is  fully typed
          interval = setInterval(() => { // setInterval is used to run a fx at regular intervals (typingSpeed milliseconds)
            setCurrentText((prev) => { // prev is the currentText being displayed
              const currentSentence = sentences[currentSentenceIndex];
              const nextCharIndex = prev.length; // represents the index of the next character to type 
              if (nextCharIndex < currentSentence.length) {
                return prev + currentSentence[nextCharIndex];
              } else { // else if the sentence is fully typed (nextCharIndex >= currentSentence.length)
                clearInterval(interval); // Stops the interval to stop typing
                setIsTyping(false); 
                setIsDeleting(true);
              }
              return prev;
            });
          }, typingSpeed);
        } else if (isDeleting) {
          // Otherwise if deleting logic is true, the hook sets up another interval to delete one char at a time
          interval = setInterval(() => {
            setCurrentText((prev) => {
              if (prev.length > 0) {
                return prev.slice(0, -1); // Remove one character at a time from currentText on each interval
              } else { // else if the text has been fully deleted (prev.length === 0)
                clearInterval(interval); // stop interval to stop deleting
                setIsDeleting(false);
                setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length); // Move to the next sentence
                setTimeout(() => setIsTyping(true), delayBetweenSentences); // Start typing the next sentence after delay
              }
              return prev;
            });
          }, deletingSpeed);
        }
    
        return () => {
          clearInterval(interval); // Cleanup the interval on component unmount or state change
        };
      }, [isTyping, isDeleting, currentSentenceIndex, sentences]);
        // dependency array ensures that this hook will run every time any of these values change

    return (
      <div style={{ backgroundImage: `url(${starrysky})`, backgroundSize: 'cover', width: '100vw'}}>
        <div className="typewriter" >
            <h1>{currentText}</h1>
          </div>
          <div className="photo-credit">
            <p>Photo by <a href="https://unsplash.com/@hjuteau?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hugo Juteau</a> on <a href="https://unsplash.com/photos/low-angle-photography-of-purple-borealis-xh_l2eGV4B4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </p></div>
      </div>
    )
};
