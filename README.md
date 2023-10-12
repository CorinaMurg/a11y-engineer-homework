
# Accessibility Engineer Homework

I created this project based on a set of designs and quidelines created by [AdHoc](https://homework.adhoc.team/).

✅ Goal: Achieve 100 in a Google Lighthouse accessibility scan.
<br>✅ Scope: Modern browsers only, with no need for legacy support, UI or JS libraries, frameworks, or mixin libraries.
<br>✅ Specifications: The form doesn’t need to submit; no animations or task runners are required. 

For a detailed overview and access to the starter files, visit the [Accessibility Engineer Assignment](https://homework.adhoc.team/accessibility_engineer/) on AdHoc’s official website.

Live site of [my Accessibility Engineer page](https://a11y-engineer.netlify.app/).

## Why I Love This Project!
I believe in a web where everyone has a place. I welcome every challenge that allows me to improve my knowledge of accessibility features. This project has been an opportunity to test my skills and it has put me in a position to research and reach out to accessibility experts on best practices.

![Screen shot of the accessibility engineer homework. It features a navbar, hero section, and a form with three inputs and a submit buttom](https://github.com/CorinaMurg/a11y-engineer-homework/assets/115652409/17d1484c-ebc5-42ed-994c-bf674f5a62fb)

## My Approach 
**Semantic HTML**: I used tags like `nav`, `header`, `main`, and `form` to help assistive technologies understand the structure of the page, enhancing the user experience for those relying on screen readers or other aids.

**ARIA Attributes**: I used several ARIA attributes (like aria-live, aria-label, and aria-hidden) to make the page more understandable to assistive tools.

**Skip to Content**: This feature was not part of the provided design. I felt it's important to include it because it enhances keyboard navigation by allowing users to skip repetitive sections and dive straight into the main content.

**Focus Styles**: Elements like links and buttons have clear focus styles, which are essential for keyboard-only users.

**Error Handling in Form**: The form has clear error messages, with live regions ensuring that assistive technologies pick up error messages as they appear.

**Responsive Design**: I used a mobile-first approach, with media queries optimizing the layout for larger screens. 

## My decisions regarding certain a11y and UI features
**Use input type `email`**:
No hint from the snapshot, so I assumed it was expected. It does a good job reminding users if the input is invalid (when @ is missing), so I did not use JS to add an error message. Plus, on mobile devices it has the added benefit of bringing up the appropriate keyboard.

**Display of error messages**:
I bundled all error messages under one `aria-live` element. 

**Check whether the full-name field contains two words**:
Given my personal experience with forms, I made the decision not to, even though I think, theoretically, it would be a good idea to have it.

**focus vs. focus-visible**:
For in-focus states, it was not clear from the UI snapshot which of the two is required. I decided to use `focus` since it has a more general use.

## Important aspect to address
**Managing focus when there are error meesages**
<br>Right now, the screen reader announces the number of error messages, then reads the list of errors. A keyboard user has to then navigate back from the button to a given input field. 

My question: Should the focus be send to the first input with an error?
