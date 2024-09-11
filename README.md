# Make It Real - Profile Card Component

This is a solution to the Profile Card Component project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Visualize the profile card information.
- Divide the summary card into components.
- Make it responsive for mobile devices.

### Screenshot

## My process
#### Desktop
![image](https://github.com/user-attachments/assets/995c961e-cc70-4b7f-99aa-5e008a0c2a96)


#### Mobile
![image](https://github.com/user-attachments/assets/81d4feba-921c-41b1-a9e8-2aa1bba2efb9)



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- React-Vite
- Mobile-first workflow

### What I learned

During this project, I learned how to build a user profile card using React, focusing on component-based architecture. I practiced breaking down the UI into smaller components, such as the profile image, user information, and social stats. This helped improve the structure, reusability, and maintainability of the code. Additionally, I gained experience working with CSS to style the components, ensuring the design was responsive for both mobile (375px) and desktop (1440px) layouts. I also worked with background images, aligning them correctly within the body to match the provided design, and learned how to handle complex layouts using Flexbox and CSS Grid

```css
body {
  font-family: 'Kumbh Sans', sans-serif;
  background-color: hsl(185, 74%, 44%);
  background-image: url('/src/assets/bg-pattern-top.svg'),url('/src/assets/bg-pattern-bottom.svg') ;
  background-position: -22rem -19rem, 10rem 450px;
  background-size: 160%, 160%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

```
### Continued development

In the future, I aim to deepen my knowledge of React by exploring state management using tools like Context API or Redux to manage complex data flows in larger applications. I also plan to continue working with Vite to optimize builds and improve performance in more extensive projects. Furthermore, I want to explore CSS-in-JS libraries like Styled Components to streamline styling within React components and maintain a consistent design system throughout applications.

### Useful resources

- [React and Vite](https://carlosazaustre.es/react-vite) - This helped me for understanding how to efficiently set up a React project using Vite. The article provided a clear explanation of the advantages Vite offers in terms of faster development builds and a more streamlined configuration compared to traditional tools like Create React App.

- [Center a Div Vertically and Horizontally with Flexbox](https://www.freecodecamp.org/espanol/news/centrar-en-html-div-con-css/) - This is an amazing article which helped me finally understand the intricacies of centering elements both vertically and horizontally using Flexbox. Before this, I struggled with aligning content in the middle of the screen across different layouts

## Author

- Github - [GabrielMaQui](https://github.com/GabrielMaQui)

## Acknowledgments

I would like to thank the instructors at Make It Real for their guidance and support throughout this project.
