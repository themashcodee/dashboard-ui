# Interview Assignment - Blue Sky Analytics

## Table of Content
- [Assignment Instructions](https://github.com/themashcodee/dashboard-ui/edit/main/README.md#assignment-instructions)
- [Tech Stack](https://github.com/themashcodee/dashboard-ui/edit/main/README.md#tech-stack)
- [Extra features and some other good things](https://github.com/themashcodee/dashboard-ui/edit/main/README.md#extra-features-and-some-other-good-things)
- [How to run locally or contribute](https://github.com/themashcodee/dashboard-ui/edit/main/README.md#how-to-run-locally-or-contribute)
- [Folder Structure](https://github.com/themashcodee/dashboard-ui/edit/main/README.md#folder-structure)
- [Some Questions and their answers which asked in the assignment](https://github.com/themashcodee/dashboard-ui/edit/main/README.md#some-questions-and-their-answers-which-asked-in-the-assignment).

## Assignment Instructions

Assignment 3: Dashboard UI development

You are provided with 5 screens basic Dashboard UI. You need to convert the high fidelity design into code using React and CSS/SASS/SCSS/LESS.

##### What you have to achieve -

   	1. The dashboard should be pixel perfect and look like a replica of the design.
    Dont blindly copy-paste the Figma inspect code. Use your skills to make it fit for all screens.
   	2. Tailwind or bootstrap are allowed as a UI framework (not required just optional to use)
   	3. The charts should be working with some dummy data
   	4. Fetch the basic data using Axios/Fetch. (You can build an API or fetch JSON from public repo)
   
   ##### Coding Guidelines:
   	1. Component-based, min code and easy to read and understand
   	2. Use comments wherever required.
   	3. Min libraries, no redux required - don't add bloatware
   	4. Don't add any new library or if you do please detail as to why so (testing core coding skills)
   	5. For small functionality, you can write your hooks
   	6. Proper error boundaries
   	7. Must be deployed online ( e.g. Netlify/Heroku)
   	8. Include the converting script along with raw data
   	9. Good documentation
   	10. Instructions for setting up and anything else

## Tech Stack 
Below are the frameworks and libraries that are used in this project  
Nextjs - A Product Ready React.js framework to create robust and fast react application.  
TailwindCSS - A utility first CSS framework to build absoluely beautiful user interfaces  
Recharts - A  chart library for react.  
Next-auth - An authentication solution for nextjs.  
Typescript - A strongly typed language that build on Javascript  


## Extra features and some other good things

- Used tailwind-merge to solve specificity issue while overriding classes in tailwindcss
- Used typscript to have a better type system and have less probability of unexpected bugs and error.
- Google Authentication with Next-auth
- Created Custom hooks called useDounce and useUsers to give search functionality in the users page.
- Register and Login page responsiveness for all the devices
- Used useMemo and memo to memoize component and functions result to reduce unnecessary re renders and computation usage.
- Created Custom reusable Input, Button components.

## How to run locally or contribute

First of all clone the repo  
`git clone https://github.com/themashcodee/dashboard-ui.git`  

Then Change directory  
`cd dashboard-ui`  

Install the dependency  
`yarn install`

Run in the local environment  
`yarn dev`  

Change anything in tthe pages/index.tsx file and see the updated changes on the localhost:3000  

That's all you have to do test the application locally.

## Folder Structure
- assets - This folder contains all the images
- components  
    **core** - This folder contains all the common custom reusable components that are being used throughout the application such as input, button, sidebar, header etc  
    **dashboard** - This folder contains all the component that are being used inside the dashboard page  
    **icons** - This folder contains all the svg custom reusable component that are being used throughout the application  
    **onboarding** - This folder contains all the component related to signin and signup  
    **settings** - This folder contains all the component used in the settings page
    **users** - This folder contains all the component used in the users page   
- helpers - This folder contains all the helper function that are common and can be reuse
- hooks - This folder contains all the custom hooks
- pages - This folder contains all the pages and api routes of nextjs
- public - This folder conatains all the public assets
- styles - This folder contains all the css style files
- types - This folder contains all the typescript types except Props (props type are defined in the component file itself)

## Some Questions and their answers which asked in the assignment.
- What was the most challenging part?  
I haven't used any chart library before so that was a little bit fun and challenging. Further, next-auth integration with nextjs middleware had also annoyed me a little bit.

- What was the most fun part?  
The entire project, To be honest I really enjoyed building this project it was fun and exciting. Actually I love making beautiful user interfaces that is why I do my work with pure devotion, dedication and enjoyment.

- What do you think is wrong with this task or could be made better in this task?  
I dont think so that there was something wrong in the project.

- What if I would get more time?  
I would like to make the UI repsonsive to all the screen sizes and implement more features to make the application alive. I would like to write more documentation and comments (TS DOC) so that any other developer could understand my code.  

- Rate yourself on the technologies used in the assignment out of 10!   
Nextjs/React.js - 8/10  
Typescript - 8/10  
TailwindCSS - 8/10  
Recharts - 2/10  
Next-Auth - 6/10  


