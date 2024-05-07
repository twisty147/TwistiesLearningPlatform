// Function to retrieve the value of a URL parameter by name
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
// Get the title parameter from the URL
var title = getParameterByName('title');

// Get the quiz title element
var quizTitleElement = document.querySelector('.quiz-title');

// Set the retrieved title as the text content of the quiz title element
if (title) {
    quizTitleElement.textContent = title + ' Quiz';
}
// Dynamically load questions based on the subject in view
switch (title) {
    case 'Introduction to Physics':
        populatePhysicsQuestions();
        break;
    case 'Introduction to Chemistry':
        populateChemistryQuestions();
        break;
    case 'Introduction to Biology':
        populateBiologyQuestions();
        break;
    case 'Introduction to Computer':
        populateComputerQuestions();
        break;
    case 'Introduction to Economics':
        populateEconomicsQuestions();
        break;
    case 'Introduction to Civil Engineering':
        populateCEQuestions();
        break;
    // Add more cases for other subjects as needed
    default:
        // If the subject is not recognized,show an error message
        console.error('Unknown subject:', title);
}
// Function to populate the quiz form with physics questions
function populatePhysicsQuestions() {
    var quizForm = document.getElementById('quizForm');
    // Dynamically generate HTML for physics questions with radio button options
    quizForm.innerHTML = `
    <label for="question1"><b>Question 1: What is the definition of kinematics in physics?</b></label>
    <div>
        <input type="radio" id="q1_option1" name="question1" value="option1">
        <label for="q1_option1">The study of motion and its causes</label><br>
        <input type="radio" id="q1_option2" name="question1" value="option2">
        <label for="q1_option2">The study of forces and their effects</label><br>
        <input type="radio" id="q1_option3" name="question1" value="option3">
        <label for="q1_option3">The study of energy and its conservation</label><br>
        <input type="radio" id="q1_option4" name="question1" value="option4">
        <label for="q1_option4">The study of particles and their interactions</label><br>
    </div>
    <label for="question2"><b>Question 2: Define displacement and give its SI unit.</b></label>
    <div>
        <input type="radio" id="q2_option1" name="question2" value="option1">
        <label for="q2_option1">The change in position; meters per second (m/s)</label><br>
        <input type="radio" id="q2_option2" name="question2" value="option2">
        <label for="q2_option2">The change in position; meters (m)</label><br>
        <input type="radio" id="q2_option3" name="question2" value="option3">
        <label for="q2_option3">The rate of change of displacement; meters per second (m/s)</label><br>
        <input type="radio" id="q2_option4" name="question2" value="option4">
        <label for="q2_option4">The distance traveled; meters (m)</label><br>
    </div>
    <label for="question3"><b>Question 3: What is velocity? How is it different from speed?</b></label>
    <div>
        <input type="radio" id="q3_option1" name="question3" value="option1">
        <label for="q3_option1">Velocity is the speed of an object; Velocity includes direction while speed does not.</label><br>
        <input type="radio" id="q3_option2" name="question3" value="option2">
        <label for="q3_option2">Velocity is the distance traveled; Velocity includes direction while speed does not.</label><br>
        <input type="radio" id="q3_option3" name="question3" value="option3">
        <label for="q3_option3">Velocity is the speed of an object; Velocity does not include direction.</label><br>
        <input type="radio" id="q3_option4" name="question3" value="option4">
        <label for="q3_option4">Velocity is the distance traveled; Velocity does not include direction.</label><br>
    </div>
    <label for="question4"><b>Question 4: State the equations of uniformly accelerated motion.</b></label>
    <div>
        <input type="radio" id="q4_option1" name="question4" value="option1">
        <label for="q4_option1">v = u + at, s = ut + 1/2 at^2, v^2 = u^2 + 2as</label><br>
        <input type="radio" id="q4_option2" name="question4" value="option2">
        <label for="q4_option2">s = ut + 1/2 at^2, v = u + at, v^2 = u^2 + 2as</label><br>
        <input type="radio" id="q4_option3" name="question4" value="option3">
        <label for="q4_option3">s = ut + 1/2 at^2, v^2 = u^2 + 2as, v = u + at</label><br>
        <input type="radio" id="q4_option4" name="question4" value="option4">
        <label for="q4_option4">v^2 = u^2 + 2as, v = u + at, s = ut + 1/2 at^2</label><br>
    </div>
    
    <label for="question5"><b>Question 5: What is acceleration? How is it related to velocity?</b></label>
    <div>
        <input type="radio" id="q5_option1" name="question5" value="option1">
        <label for="q5_option1">Acceleration is the rate of change of velocity; It is the derivative of velocity.</label><br>
        <input type="radio" id="q5_option2" name="question5" value="option2">
        <label for="q5_option2">Acceleration is the rate of change of position; It is the derivative of position.</label><br>
        <input type="radio" id="q5_option3" name="question5" value="option3">
        <label for="q5_option3">Acceleration is the rate of change of velocity; It is the integral of velocity.</label><br>
        <input type="radio" id="q5_option4" name="question5" value="option4">
        <label for="q5_option4">Acceleration is the rate of change of position; It is the integral of position.</label><br>
    </div>
    <!-- "Submit Quiz" button -->
    <button type="button" id="submitQuizButton"class="btn btn-primary">Submit Quiz</button>
    `;

}