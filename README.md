# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Accessible design
- Mobile-first workflow
- [Tailwindcss](https://tailwindcss.com/) - CSS framework
- [Vite](https://vite.dev/) - Frontend build tool
- [React](https://reactjs.org/) - JS library


### What I learned

While this is a fairly simple form as forms go, I'm proud of my work here in both matching the design comp and producing versitle component structure that I could make small tweaks to in the future. Afterall, forms are one of the backbones of the web. It was well worthwhile to spend a good deal of time on this project.

This, as Kevin Powell notes in the video linked below, is a deceptively complicated form. In my experience, this was primarily due to the radio input styles and custom error states. This is especially true in a vanilla JavaScript implementation. I used React for my solution, which greatly simplified much of the form's logic while allowing for a good deal of practice with React hooks. The subdued and straightforward design of the form also made choosing Tailwind an easy chocie. 



The focus styles in the design comp felt a little too subtle to me so I add added a ring effect to make the focused input more obvious. The error prop passed to the component allows for a simple solution to applying error state styles along with the rest of the Tailwind classes.

```js
  <input
    id={name}
    name={name}
    required={required}
    type={type}
    value={value}
    onChange={onChange}
    aria-invalid={!!error}
    aria-describedby={error ? errorId : undefined}
    className={`block w-full cursor-pointer rounded-lg bg-white px-4 py-3.5 text-base outline-1 -outline-offset-1 focus:-outline-2 focus:-outline-offset-2 focus:outline-brand-green-600 focus:ring-2 focus:ring-brand-green-600/40 hover:outline-2 hover:outline-brand-green-600 ${error ? "outline-brand-alert" : "outline-brand-grey-500" }`}
  />
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Form styling essentials](https://www.youtube.com/watch?v=nuDpLN2dazU&t=43s) - Another great resource from Kevin Powell on using modern CSS to style a form. I used TailwindCSS for my styling, but this video was still hugely instructive on approaching a styling strategy.
- [A deceptively complex form](https://youtu.be/jJgNgNNHqjk) - Yet another Kevin Powell video tutorial where he is actually coding this exact challenge. I found this after I'd started the project and decided I was going to use Tailwind for my styling, so I definitely diverge in some areas. But it was still helpful, particularly in nailing down some of the the trickier layout sizing (particularly the textarea input)
- [How to set custom error messages](https://youtu.be/h5qqmE83Tes) - The follow-up to Kevin's project walkthrough above. This one mainly handles building out the custom error messaging the design comp calls for using JavaScript. Since I used React for my solution, much of this isn't relevant to my project but still well worth the watch, especially if you're using vanilla JS for the challenge. However, this video did remind me to implement the feature of returning the focus to the first invalid field after form submission (which I'd neglected to implement before reviewing Kevin's video walkthrough), so that ended up a great 
- [Tailwindcss docs](https://tailwindcss.com/docs/hover-focus-and-other-states#has) - The official Tailwind docs have a use case example for the `:has()` selector that is pretty much perfect for styling the radio inputs for this project. There are svg assets for the radio and checkbox selected states, but I opted to style the native inputs as close to the design comp rather than create fully customized visual input states.
- [Frontend Masters Tailwind CSS v2](https://frontendmasters.com/courses/tailwind-css-v2/) - Steve Kinney's latest Tailwind course over at Frontend Masters is excellent. The supplemental course material you get access to is probably worth the cost alone of a month's subscription. In building out my confirmation modal dialog, this content was extremely useful for implementing the Tailwind styles.
- [Pure CSS Custom Checkbox](https://moderncss.dev/pure-css-custom-checkbox-style/) - Though this is primarily a Tailwind implementation, I still found a place for a touch of custom CSS. Stephanie Eckles is a consistantly excellent rosource for all things CSS and Accessibility. This article walks you though building out an entirely custom checkbox input, which was great for better matching the design comp in this project and producing more consistant styling across browsers. I needed to tweak the styles for a design match and to make them into a partial Tailwind implementation (thanks, ChatGPT) but there's a ton of useful info here and an attached CodePen example.


## Author

- Website - [Matt Pahuta](https://www.mattpahuta.com)
- Frontend Mentor - [@mattpahuta](https://www.frontendmentor.io/profile/MattPahuta)
- Bluesky - [@mattpahuta](https://bsky.app/profile/mattpahuta.bsky.social)
- LinkedIn - [Matt Pahuta](www.linkedin.com/in/mattpahuta)