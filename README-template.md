# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

A simple interactive rating component that allows users to select a rating from a set of options.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

- Solution URL: [https://dorianarri.github.io/interactive-rating-component-main/]
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

My process was to begin with the HTML first to build out the layout of the page. Next while experimenting with scss i was able to style the page, i had few difficulties in this section since i havn't used css in a while but once i got a rhythm going it was the most enjoyable part of the project. The javascript code was the hardest for me since I was not used to building code from scratch but after a quick refresher from a few google searches and youtube videos on how certain code works, i was able to power through it and finish the project that works.

### Built with

- Semantic HTML5 markup
- SASS preprocessor
- Flexbox
- JavaScript

### What I learned

This is my first time using Sass, through documentation i was able to learn how to set scss variables, nest selectors, and run the scss file live.
```scss
.rating-card{
    @extend %card-style;
    .star{
        @extend %circle-container;
        
        img{
            padding-left: 2px;
        }
    }
    h1{
        color: $white;
    }
    
    .rating-text{
        @extend %text-style;
    }
}
```
I was also able to reinforce my knowledge of DOM manipulation through query selectors and event listners. Also use my knowledge of running a for each loop on the node list returned from querySelectorAll(). Using what I learned, I was able to use the submit button only if one of the numbers were selected to show off the thank you card.

```js
let rate = null;

ratingNum.forEach(num => {
    num.addEventListener('click', (e)=>{
        const active = document.querySelector(".checked");
        if(active){
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    })
})
```

## Author

- Website - [Dorian Arriaga](https://github.com/dorianarri)
- Frontend Mentor - [@dorianarri](https://www.frontendmentor.io/profile/dorianarri)
