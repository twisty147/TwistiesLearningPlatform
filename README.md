# Twisties Learning Platform

Twisties Learning Platform offers a dynamic and immersive STEM education experience that empowers learners of all ages and backgrounds. By seamlessly blending interactive technology with a comprehensive STEM curriculum, we provide a platform where users can engage with hands-on learning activities, access high-quality educational content, and track their progress. Our responsive interface ensures accessibility across various devices, while our commitment to inspiring engagement and fostering a lifelong love for learning sets us apart. Whether you're a student seeking to expand your knowledge or an educator looking to enhance your teaching resources, Twisties Learning Platform is your gateway to a world of limitless learning opportunities in science, technology, engineering, and mathematics. 

![Twisties Learning Platform Mockup for different screen sizes](images/MockUp.jpg)

# Table of Contents

1. [Requirements](#requirements)
2. [Usecase](#usecase)
2. [Design](#product-design)
3. [Development](#development)
4. [Testing](#testing)
5. [Credits](#credit)
6. [License](#license)

## REQUIREMENTS

### Home Page
- **Dictionary**: Display a dictionary feature prominently on the home page, allowing users to explore and search for definitions of STEM- terms.
- **Featured Lessons**: Showcase featured lessons or courses on the home page to grab user's attention and encourage exploration.
- **Testimonials**: Include a section for user testimonials to build credibility and trust.

### Educator Section
- **Call to Action**: Implement a section specifically targeting educators, inviting them to join the platform.
- **Sign Up & Login**: Provide options for educators to sign up or log in to access additional features or instructor tools.

### Courses Page
- **Available Courses**: Present a list of available courses on the platform, categorized by subject or topic.
- **Course Content**: For each course, detail the content structure.
- **Video Tutorials**: Include video tutorials for each lesson within the course content, providing interactive learning experiences.

### Quiz Feature
- **End-of-Course Quiz**: After completing each course, users are prompted to take a quiz to test their understanding of the material.
- **Score Display**: Upon completion of the quiz, users should see their quiz scores.

### General Requirements
- **Responsive Design**: Ensure the platform is responsive and accessible across various devices and screen sizes.
- **Progress Tracking**: Enable users to track their progress within each course.

## USECASE

### Actors:
- **User**: A person interested in learning STEM subjects.

### Main Flow:
1. **User Navigation**:
   - The user navigates to the Twisties Learning Platform website.
   - The home page loads, displaying various sections including a navigation bar, dictionary, featured lessons, and testimonials.

2. **Exploring Available Courses**:
   - The user clicks on the "Courses" link from the navigation menu.
   - The user sees a list of available STEM courses categorized by subject or topic.

3. **Selecting a Course**:
   - The user browses through the list of courses and selects one that interests them.

4. **Viewing Course Details**:
   - The user is directed to the course details page, which includes the course content and video tutorials.

6. **Accessing Course Content**:
   - The user starts with the first lesson and progresses through the lessons.

7. **Watching Video Tutorials**:
   - Within each lesson selected from the list, the user watches video tutorials that explain the concepts and demonstrate examples related to the topic.

8. **Taking End-of-Course Quiz**:
   - Upon completing all the lessons in the course, the user is prompted to take an end-of-course quiz to test their understanding.
   - The user answers the quiz questions and submits their responses.

9. **Viewing Quiz Results**:
   - After submitting the quiz, the platform displays the user's quiz scores.
   - If the user scores below a certain mark the user is allowed to Try again.
   - if the user scores above a certain mark the user is congratulated and redirected to the courses pageand may choose to revisit specific lessons for further study.

## DESIGN

### Low Fidelity Prototype
This serves as the foundational blueprint for Twisties learning Platform  design and layout. It outlines the structural framework of the site, depicting the arrangement of key elements such as navigation menus, content sections, and interactive features.

![Low fidelity prototype](images/LowFidelity1.png)
![Low fidelity prototype](images/Lowfidelity2.png)
![Low fidelity prototype](images/LowFidelity3.png)

### Justification for Color Scheme
The choice of a blue, grey, and white color scheme for the Twisties Learning Platform is deliberate and serves several purposes:

1. **Professionalism and Trustworthiness**: Blue is often associated with professionalism, trustworthiness, and reliability. By incorporating blue into the color scheme, the platform communicates a sense of credibility and authority in providing STEM education.

2. **Calmness and Serenity**: Blue is also known for its calming and serene qualities. In an educational context, where users may be seeking knowledge and focus, using blue can help create a tranquil and conducive learning environment.

3. **Neutrality and Balance**: Grey is a neutral color that complements blue well. It provides a sense of balance and stability to the color scheme, preventing it from feeling overwhelming or overly vibrant. Grey can also convey sophistication and modernity.

4. **Cleanliness and Simplicity**: White is often associated with cleanliness, simplicity, and purity. By incorporating white into the color scheme, the platform achieves a clean and minimalist aesthetic, which can enhance readability and user experience.

5. **Accessibility and Readability**: Blue and grey are typically high-contrast colors when paired with white, which can improve accessibility and readability, particularly for text and interactive elements.



## DEVELOPMENT

The Waterfall Iterative Development Life Cycle (WIDLC) methodology was selected for the development of the Twisties Learning Platform. The WIDLC methodology follows a sequential, step-by-step process, with each phase building upon the results of the previous phase. However, it incorporates iterative elements, allowing for feedback and adjustments throughout the development lifecycle. It offered a structured approach to the development of the Twisties Learning Platform, allowing for thorough planning, design, implementation, testing, deployment, and maintenance.  This methodology was selected because the project requirements were well-defined, stable, and unlikely to change significantly throughout the development process.

## Implementation

HTML, CSS, jqueryand Bootstrap were used extensively in the development of the Twisties Learning Platform to create a visually appealing and user-friendly interface. HTML was used to structure the content of the platform, defining the layout and elements such as headings, paragraphs, buttons, and forms. CSS was utilized to style the HTML elements, including fonts, colors, spacing, and layout, ensuring a cohesive and consistent design across all pages. Bootstrap, a popular front-end framework, played a crucial role in the implementation by providing pre-designed components and utilities for responsive and mobile-first development. Bootstrap's grid system facilitated the creation of responsive layouts, ensuring that the platform is accessible and optimized for various screen sizes and devices. Additionally, Bootstrap's predefined CSS classes were utilized to enhance the visual appearance of elements such as navigation bars, buttons, cards, and modals, contributing to a polished and professional user experience.JavaScript played an instrumental role in adding interactivity and functionality to the platform. JavaScript was used to implement dynamic behavior, such as form validation, DOM manipulation, event handling, and modal popups. Together, these technologies enabled the creation of a seamless learning environment, allowing users to explore courses, search for definitions, view testimonials, and interact with educational content effortlessly. The integration of HTML, CSS, JavaScript, jQuery, and Bootstrap resulted in a cohesive and user-friendly platform that meets the needs of learners and educators alike

## Features & Functions Implemented

### Dictionary Functionality
- The `searchWord()` function fetches dictionary data from an API based on user input and displays the results in a modal dialog.
- Fetched data is rendered using the `displayDictionaryResultsInModal()` function.
![Dictionary Feature](images/searchWordFunction.png)
![Dictionary Result](images/DictionaryResult.png)

### Form Validation
- Two functions, `validateLogin()` and `validateForm()`, handle form validation.
- `validateLogin()` alerts users about the unavailability of login functionality.
![Login Form](images/formValidation2.png)
- `validateForm()` checks email format and password complexity using regular expressions.
![Signup Form](images/FormValidation1.png)

### URL Parameters
- URL parameters are utilized to extract the course name and pass it along for various operations, such as fetching course content and setting up quiz links.
- Based on the query parameter `course`, the script populates course content dynamically.
- Each course has a list of topics with corresponding video links, populated based on the selected course.
![URL Parameters](images/URIParameter.png)

### Video Loading and Marking as Watched
- On page load, the initial video for the selected course is loaded automatically.
- Users can click on course topics to load corresponding videos.
- Watched videos are marked, triggering a completion modal once all videos are watched. The modal congratulates the user and provides a link to a course-related quiz.

### Completion Modal
- The completion modal dynamically updates the course title each time it's displayed.
- It also provides a link to take a quiz related to the course.
![Video Loading and Marking as Watched](images/courseCompletion.png)

### Event Listeners and jQuery Usage
- Event listeners handle user interactions, such as clicking on course topics or the "Take Quiz" button.
- jQuery is used for functionalities like dynamically setting the course title in the completion modal.

## Quiz Implementation Details

### Retrieving URL Parameters
A JavaScript function `getParameterByName(name, url)` is implemented to retrieve the value of a URL parameter by name. It uses regular expressions to parse the URL and extract the desired parameter.
![function to get parameter by name](images/getParamByname.png)

### Dynamically Populating Quiz Forms
- Separate functions are defined for each subject (e.g., `populatePhysicsQuestions()`, `populateChemistryQuestions()`).
- Each function dynamically generates HTML content for the quiz form with radio button options for multiple-choice questions.
- The HTML content is inserted into the designated quiz form element in the DOM (`<div id="quizForm"></div>`).
![Populating Quiz Forms](images/porpulateQuizform.png)

### Switch Case for Subject Selection
- After retrieving the subject title from the URL parameter, a switch case statement is used to determine which subject's quiz questions to populate.
- Based on the subject title, the corresponding function to populate quiz questions is called.
![Subjection Selection Condition](images/swichCase.png)

### Sample Quiz Questions
The image below shows a sample of the quiz page.
![Sample Quiz](images/sample%20quiz.png)


## TESTING

### Usability Testing
The site demonstrates adherence to Norman and Nielsen's design principles of:

1. **Visibility**:
   - The navigation bar at the top of the page is clearly visible and provides immediate access to essential sections like Home, Courses, Sign Up, and Login.
   - The use of contrasting colors for buttons and links makes them easily distinguishable from other page elements, enhancing their visibility.
   ![Sample Quiz](images/Visibility.png)

2. **Feedback**:
   - Interactive elements, such as buttons, modals, lerts and links, provide immediate visual feedback upon interaction, such as changing color or appearance.
   - The use of hover effects on cards provides feedback to users when they hover over them, indicating that they are clickable.
   - The mouse pointer changes when you hover a clickable element on the website.
   ![Sample Quiz](images/feedback.png)

3. **Affordance**:
   - Buttons and links are styled to look clickable, indicating their function and encouraging user interaction.
   - The search input field and button in the dictionary section afford the action of searching for a word, clearly indicating their purpose.

4. **Consistency**:
   - The layout and design elements, such as typography, colors, and spacing, are consistent throughout the website, providing a cohesive user experience.
   - Navigation elements, like the navbar and buttons, maintain consistent styling across different sections of the website.

5. **Error Prevention and Recovery**:
   -form inputs are validated before submission to prevent user errors, and by providing clear error messages and guidance for users in case of input mistakes.
    ![Sample Quiz](images/ErrorPrevention.png)

6. **Flexibility and Efficiency of Use**:
   - The layout is designed to be responsive, ensuring that the website is usable across various devices and screen sizes, thus accommodating a wide range of users efficiently.
    ![Sample Quiz](images/Responsive.png)
    ![Sample Quiz](images/Responsive2.png)

7. **Aesthetic and Minimalist Design**:
   - The use of a clean and minimalist design approach, evident in the consistent layout, typography, and use of white space, contributes to an aesthetically pleasing user interface.

### Functional Testing (Manual Test Result)
**Home Page**
1. **Dictionary**:
   - [x] Verify that the dictionary feature is prominently displayed on Home page. (Pass)
   - [x] Test search functionality with different STEM terms. (Pass)

2. **Featured Lessons**:
   - [x] Check that featured lessons are showcased. (Pass)
   - [x] Click to ensure redirection to course pages. (Pass)

3. **Testimonials**:
   - [x] Confirm presence of testimonials. (Pass)

**Educator Section**
1. **Call to Action**:
   - [x] Ensure educator section is visible on home page. (Pass)
   - [x] Test that sign up and log in are visible (Pass)

2. **Sign Up & Login**:
   - [x] Test educator sign-up process. (Pass Validation/ Process incomplete (No database))
   - [x] Verify login functionality. (Pass Visibility/process incomplete (No database))

**Courses Page**
1. **Available Courses**:
   - [x] Check list of courses and categories. (Pass)
   - [x] Ensure redirection to course details. (Pass)

2. **Course Content**:
   - [x] Verify clear course structure. (Pass)
   - [x] Test navigation between sections. (Pass)

3. **Video Tutorials**:
   - [x] Ensure videos play correctly. (Pass)
   - [x] Test pause, play, volume controls. (Pass)

**Quiz Feature**
1. **End-of-Course Quiz**:
   - [x] Confirm prompt after course completion. (Pass)
   - [x] Test relevance of quiz questions. (Pass)

2. **Score Display**:
   - [x] Verify immediate score display. (Pass)
   - [x] Check feedback on answers. (Fail: Does not display correct answers because it was not implemented)

**General Requirements**
1. **Responsive Design**:
   - [x] Test on various devices. (Pass)
   - [x] Check for layout issues. (Pass)

2. **Progress Tracking**:
   - [x] Test progress indicators. (Pass)
   


### Testing HTML with W3C Markup Validation Service

**Accessing the Validator:**- Navigate to the [W3C Markup Validation Service/Jigsaw](https://validator.w3.org/)(https://jigsaw.w3.org/css-validator/validator).

**Uploading HTML File or Entering URL:**- Paste the HTML file directly or enter the URL of the webpage to be validated.

**Initiating Validation:**- Click on the "Check" or "Validate" button to start the validation process.

**Reviewing Results:**
  - The validator will analyze the HTML document and provide a detailed report of any errors, warnings, or suggestions.
  - Errors indicate serious issues that need immediate attention.
  - Warnings highlight potential problems that may impact usability or accessibility.
  - Suggestions offer recommendations for improving the code structure or adherence to best practices.

**Addressing Issues:**
- Review each reported issue and make necessary corrections to the HTML code.
- Revalidate the document after fixing errors to ensure compliance.

**Images Showing some validation Results HTML/CSS**

![Iframe Frame Border Obsolate](images/FrameBorderObsolate.png)
## Solution for the above

![Solution for above](images/cssforiframe.png)

## Other Errors
![Stray Div Tag](images/StrayDiv.png)
![No issues with CSS](images/cssValidation.png)





