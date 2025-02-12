import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {
  sentences: string[] = [
    "Michelle :)",
    "a software developer.",
    "a coffee lover. ☕"
  ];

  currentSentence: string = '';
  currentSentenceIndex: number = 0;
  currentCharIndex: number = 0;
  typingSpeed: number = 275; // milliseconds
  backspaceSpeed: number = 200; // milliseconds 
  sentenceDisplayDelay: number = 500; // milliseconds between sentences

  //ngOnInit is a life cycle hook in Ng that is called when a component is initialized. 
  //It starts the process of the typewriter effect when the component is loaded.
  ngOnInit() {
    this.startTypewriter(); //Recall that 'this' refers to the TypewriterComponent instance
  }

  startTypewriter() {
    this.typeSentence(this.sentences[this.currentSentenceIndex]);
  }

  typeSentence(sentence: string) {
    //keyword this is used to access the properties and methods of the component like sentences, currenSentenceIndex, etc.
    if (this.currentCharIndex < sentence.length) {
      this.currentSentence += sentence[this.currentCharIndex];
      this.currentCharIndex++;
      //The setTimeout function is used to create a delay for each char typed,
      //and a delay between sentences.
      setTimeout(() => this.typeSentence(sentence), this.typingSpeed);
        //In JavaScript, setTimeout is a regular function.
        //We use an arrow function () => this.typeSentence(sentence) inside setTimeout to ensure 'this' refers to the component instance
    } else {
      // Once the sentence is typed, wait and then start backspacing
      setTimeout(() => {
        this.deleteSentence();
      }, this.sentenceDisplayDelay);
    }
  }

  deleteSentence() {
    if (this.currentCharIndex > 0) {
      this.currentSentence = this.currentSentence.slice(0, -1); // remove last character
      this.currentCharIndex--;
      setTimeout(() => this.deleteSentence(), this.backspaceSpeed);
      //Using the arrow function ensures that this refers to the TypewriterComponent instance, even within the asynchronous setTimeout() function.
    } else {
      // After deleting the sentence, move to the next one
      setTimeout(() => {
        this.moveToNextSentence();
      }, this.sentenceDisplayDelay);
    }
  }

  moveToNextSentence() {
    // Reset for next sentence
    this.currentSentence = '';
    this.currentCharIndex = 0;

    // Move to the next sentence or loop back to the first one
    this.currentSentenceIndex++;
    if (this.currentSentenceIndex < this.sentences.length) {
      this.typeSentence(this.sentences[this.currentSentenceIndex]);
    } else {
      // Reset to the first sentence to start the loop again
      this.currentSentenceIndex = 0;
      this.typeSentence(this.sentences[this.currentSentenceIndex]);
    }
  }
}

