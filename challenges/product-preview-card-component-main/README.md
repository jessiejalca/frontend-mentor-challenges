# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](../../images/product-preview-card-component.jpg)

### Links

- [Solution Repo](https://github.com/jessiejalca/frontend-mentor-challenges/tree/main/challenges/product-preview-card-component-main)
- [Live Site](https://jessiejalca.github.io/frontend-mentor-challenges/challenges/product-preview-card-component-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- Sass (SCSS)
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

#### How to handle subheadings

Using next-level heading tags (like `<h2>` after `<h1>`) for subheadings is semantically incorrect and can cause issues. It's best to use a paragraph element with a "subhead" class. "Subheadings" are also referred to as "subtitles," "subheadlines," or sometimes "taglines" more traditionally refers to a slogan or motto.

```html
<h1>Example Header</h1>
<p class="subhead">Example subhead</p>
```

#### Adding screen-reader only information

Because the crossed-out previous cost isn't explained adequately by screen-readers, it's important to include some extra information to put it into context for visually impaired users. But to make sure that this information isn't visible for other users, a `sr-only` class needs to be correctly implemented. It's a bit long of an explanation why this `clip` technique is used over something like `display: none` and other one-liners, but I'll include the info as a link under the Useful Resources section.

```html
<del><span class="sr-only">The previous price was</span>$169.99</del>
```

```css
/* Make screen-reader instructions invisible for sighted users */
.sr-only {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}
```

### Continued development

I want to continue to learn about making my code more accessible and optimized for users with disabilities. Also, I hope to start learning React and implementing some solutions with it soon.

### Useful resources

- [Semantic Subheadings](https://stackoverflow.com/questions/3910419/semantic-structure-in-html-subtitles-pre-html5) - This Stack Overflow question helped me understand the semantics behind subheadings a little bit better, and I developed my own preference based on the answers.
- [Screen-reader-only Techniques](https://webaim.org/techniques/css/invisiblecontent/) - This article from WebAIM discusses common techniques for visually hiding content meant only for screen-readers and explains which ones are considered best practice.
- [Hiding Content](https://www.a11yproject.com/posts/how-to-hide-content/) - This resource from the A11y Project gets to the point a little faster for the best techniques to use and explores distinctly different but similar situations.

## Author

Frontend Mentor - [@jessiejalca](https://www.frontendmentor.io/profile/jessiejalca)
