# Accessibility Engineer Homework

I created this project based on a set of designs and quidelines created by [AdHoc](https://homework.adhoc.team/):

✅ Goal: Achieve 100 in a Google Lighthouse accessibility scan.
<br>✅ Scope: Modern browsers only, with no need for legacy support, UI or JS libraries, frameworks, or mixin libraries.
<br>✅ Specifications: The form doesn’t need to submit; no animations or task runners are required. 

For a detailed overview and access to the starter files, visit the [Accessibility Engineer Assignment](https://homework.adhoc.team/accessibility_engineer/) on AdHoc’s official website.

**Why I Love This Project!**

I believe in a web where everyone has a place. I welcome every challenge that allows me to improve my knowledge of accessibility features. This project has been an opportunity to test my skills and it has put me in a position to research and reach out to accessibility experts on best practices.

### My Implementation (please scroll below for the requirements for this project)

**Semantic HTML**: I used tags like `nav`, `header`, `main`, and `form` to help assistive technologies understand the structure of the page, enhancing the user experience for those relying on screen readers or other aids.

**ARIA Attributes**: I used several ARIA attributes (like aria-live, aria-label, and aria-hidden) to make the page more understandable to assistive tools.

**Skip to Content**: This feature was not part of the provided design. I felt it's important to include it because it enhances keyboard navigation by allowing users to skip repetitive sections and dive straight into the main content.

**Focus Styles**: Elements like links and buttons have clear focus styles, which are essential for keyboard-only users.

**Error Handling in Form**: The form has clear error messages, with live regions ensuring that assistive technologies pick up error messages as they appear.

**Responsive Design**: I used a mobile-first approach, with media queries optimizing the layout for larger screens. 


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




