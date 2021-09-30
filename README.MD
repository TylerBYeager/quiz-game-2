# Multiple Choice Coding Quiz
This is the fourth major project that I have attempted. This project has been the most difficult for me but I enjoyed the chance to learn more Javascript. This project has definitely shown that I need to dive even deeper into learning this language. 

## Project Details
This project features a singular main body that contains the entirety of the quiz. Upon load the user will notice placeholders for the questions and answers as well as a begin button. Things that I was able to accomplish:
---
1. A multi colored background styled in css.
2. Having the 'begin' button seemingly change into the 'next' button when pressed.
3. Populating the placeholder buttons with the correct information when 'begin' and 'next' are pressed.
4. Used javascript property accessors to iterate through arrays and object to get the correct information into the correct spots. 
---
Things that I did not accomplish:
1. I was unable to create a working function that compared the answers and whether they were true or false. 
2. Did not establish an on screen countdown timer although I do have an alert system set up.
3. Did not create a scoreboard to save high scores. 
---
![Preview](https://user-images.githubusercontent.com/89880190/135400823-0908e2d4-b38b-41ff-ad15-927cbc9d822d.png)

## Code Snippets
Here are few code snippets that I enjoyed coding and what they accomplished. This first snippet is one that created a unique colorful background for the quiz body. 
```
main {
    text-align: center;
    border: 10px dashed yellow;
    border-radius: 5px;
    width: 800px;
    max-width: 80%;
    padding: 10px;
    background: linear-gradient(-45deg, red, yellow,blue);
}
```

Next is the initializing function behind my javascript. This function contains several other functions within it and help kick the game off by changing 'begin' to next, populating the questions and answers with the correct information, and beginning the countdown timer. 
```
function start() {
    beginButton.setAttribute("style", "display: none");
    timer();
    randomizer(); //executing the function when the eventlistener for start is clicked
    nextButton.setAttribute("style", "display: initial"); 
}
```

Lastly is a function that iterates through the entirety of my questionList array and separate the questions from the answers. Shown as well is a javascript ability to call upon an ID dynamically without it being called on the global scale. Example: ('answer-' (a+1)).
```
function answerBars() {
    for (var a = 0; a < questionList[randomQuestions].answers.length; a++) {
        //console.log(questionList[randomQuestions].answers[a].answer); //test to see if answers were loggin
        //console.log(document.getElementById('answer-'+ (a+1)).innerText) //test to see if answers were logging to their proper spots
        document.getElementById('answer-'+ (a+1)).innerText = questionList[randomQuestions].answers[a].answer;
        document.getElementById('answer-'+ (a+1)).setAttribute("data-set", questionList[randomQuestions].answers[a].correct);
        document.getElementById('answer-'+ (a+1)).addEventListener("click", answerCheck);
        }
    } 
```

## Get a copy

To get a working copy on your machine you will need a few things such as access to Gitbash or Terminal, a working SSH key, a Github account, and a code reader like VS Code

Getting your clone:

```
Once you have a working SSH key added to your Github account, go to the quiz-game-2 repository. Click the green "code" button on the top right and clonecopy the @github.com link with the SSH key option to your clipboard. 
```

Next:

```
Open Gitbash or Terminal and navigate to a directory that you would like to add the cloned repository. Once in your desired directory type in
"git clone 'right click to paste'" and press enter. This will clone the repository onto your personal machine.
```

Lastly: 

```
Type 'ls' into your Gitbash or Terminal to see a list of items within the directory. If you have done the previous steps correctly then you should see a respository titled "quiz-game-2". Simply type in "code ." to open it in your code editor of choice and have fun!
```

### Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link
* [See the Live Site!](https://tylerbyeager.github.io/quiz-game-2/)

## Authors

* **Tyler Brian Yeager**

- [Link to Game Site](https://github.com/TylerBYeager/quiz-game-2)
- [Link to Github](https://github.com/TylerBYeager/tylerbyeager.github.io)
- [Link to LinkedIn](https://www.linkedin.com/in/tyler-yeager-611926213/)

## License

This project is licensed under the MIT License 

## Acknowledgments 

* Credit to the BCS Learning Assistants who helped troubleshoot numerous issues and provided me a great chance to learn and understand javascript functions.
* Hat tip to anyone else whose code, libraries, packages, or UI was used.
* Inspired by a desire to succeed at the UC Berkeley Extension Bootcamp.
* Lastly, I would like to acknowledge the rest of my fellow bootcamp students and instructors who have helped me get this far. I look forward to learning much much more. Thank you. 
