# Accessibility Engineer

## My Implementation (please scroll below for the requirements for this project)

### Questions

1. Does the `autocomplete` attribute on inputs help or hinder accessibility?

2. The UI does not show the alert generated on submission if a field has the `required`` attribute. 
- Is `required` off, or is the alert just hidden?
Note: the `required` has the benefit of bringing focus to the first input that has an error, but I was not
successful at hiding the error tooltip. 😡

3. I bundled all error messages under one `aria-live` element. 
- Should the focus be directed to the first input that has an error?

4. Should form validation include a check whether the full name field contains two words?

5. For the submit button's `hover` and `focus` states, I used a background color of dark gray.
- Is this a good alternative to using an `outline` when in focus?
Note: It was not clear from the UI whether `focus-visible` is preferred to `focus` that is why I used the latter.

6. Would a `skip link` make sense here?

7. I was confused by this requirement:
    Spacing values
    - 6px
    - 12px
    - 24px
    - 48px
- I assumed they refered to `letter-spacing`, but I was not sure what do do with such large values.
Note: I added my own `letter-spacing` values.


## PROJECT REQUIREMENTS FROM AD HOC
https://homework.adhoc.team/accessibility_engineer/

## Instructions & Guidelines

Please build a responsive HTML page from the attached large and small screen designs.

- Form does not have to submit anywhere
- Animations are not required
- Submissions should score a 100 in a Google lighthouse accessibility scan
- Please build for modern browsers, don't worry about polyfills and legacy support
- Task runners are not required, but use if you’d like
- No UI libraries
- No JS libraries or frameworks
- No mixin libraries
- Please provide any needed build instructions

## Information

Below, you will find the technical information needed to complete the assignment. You do not have to use the specific pixels listed, translating to a relative unit is fine. Please add your solution into the `./src` directory.

The error depicted in the design is meant to communicate a state, so this should be built as validation on each form field.

### What's in the box?

Feel free to update and change these files as your solution dictates.

- src/index.html: A blank HTML file for you to add your solution
- src/css/style.css: A blank CSS file to use
- src/js/script.js: A blank JS file to use
- src/images/image.png: The image required for the design
- designs/large-screen.png: The large screen version of the design
- designs/small-screen.png: The small screen version of the design

### Colors (already added in styles.css)

- \#FFFFFF
- \#FFECB5
- \#0E7757
- \#CC0000
- \#212121

### Spacing values

- 6px
- 12px
- 24px
- 48px

### Font size

- Headings: 38px
- Copy: 16px

### Line height

- Headings: 40px
- Copy: 24px

### Fonts (prepopulated in the HTML)

[Roboto](https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap) (400, 700)

### URLs (for the page navigation)

- https://adhocteam.us/
- https://adhocteam.us/about/
- https://adhocteam.us/contact/




