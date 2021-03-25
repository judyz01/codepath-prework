# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Judy Zhang**

Time spent: **3** hours spent in total

Link to project: https://codepath-prework-judyzhang.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a video walkthrough of the game:
![](https://cdn.glitch.com/c543ad00-fc54-48f0-b6f8-66ba204c87a8%2Fezgif.com-gif-maker.gif?v=1616652641791)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    - [AudioContext not playing bug fix](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio)
    - [Math.random() refresher](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
    - [Timer implementation](https://stackoverflow.com/questions/40638402/javascript-countdown-timer-with-start-stop-buttons)
    - [CSS Background image/size property](https://www.w3schools.com/cssref/css3_pr_background-size.asp)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    
    Accidentally re-initialized the guessCounter (var guessCounter) everytime within my playClueSequence() function.
    Was able to debug the problem by console logging the guessCounter in correspondance with the pattern, and finding out that the guessCounter was out of sync.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    
    How should I utilize these skills/what other things should I learn in order to create a more complex web application that would be useful, helpful, and functional for the community surrounding me?
    

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

    If I had a few more hours to work on this project, I would probably implement difficulty levels for the player by changing factors such as speed, time, and the number of buttons. I would've also liked to implement a mode where the colors get hidden, and the user would have to rely on their sense of hearing in order to complete the game.



## License

    Copyright Judy Zhang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.