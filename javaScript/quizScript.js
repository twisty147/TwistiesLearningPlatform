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
// Function to populate the quiz form with biology questions
function populateBiologyQuestions() {
    var quizForm = document.getElementById('quizForm');
    // Dynamically generate HTML for biology questions with radio button options
    quizForm.innerHTML = `
    <label for="question1"><b>Question 1: What is the primary function of DNA?</b></label>
    <div>
        <input type="radio" id="q1_option1" name="question1" value="option1">
        <label for="q1_option1">To store and transmit genetic information</label><br>
        <input type="radio" id="q1_option2" name="question1" value="option2">
        <label for="q1_option2">To produce energy for cells</label><br>
        <input type="radio" id="q1_option3" name="question1" value="option3">
        <label for="q1_option3">To regulate body temperature</label><br>
        <input type="radio" id="q1_option4" name="question1" value="option4">
        <label for="q1_option4">To synthesize proteins</label><br>
    </div>
    <label for="question2"><b>Question 2: What is the function of mitochondria in a cell?</b></label>
    <div>
        <input type="radio" id="q2_option1" name="question2" value="option1">
        <label for="q2_option1">To store genetic information</label><br>
        <input type="radio" id="q2_option2" name="question2" value="option2">
        <label for="q2_option2">To regulate cell division</label><br>
        <input type="radio" id="q2_option3" name="question2" value="option3">
        <label for="q2_option3">To produce energy through cellular respiration</label><br>
        <input type="radio" id="q2_option4" name="question2" value="option4">
        <label for="q2_option4">To synthesize lipids</label><br>
    </div>
    <label for="question3"><b>Question 3: What is the process by which plants make their own food?</b></label>
    <div>
        <input type="radio" id="q3_option1" name="question3" value="option1">
        <label for="q3_option1">Photosynthesis</label><br>
        <input type="radio" id="q3_option2" name="question3" value="option2">
        <label for="q3_option2">Cellular respiration</label><br>
        <input type="radio" id="q3_option3" name="question3" value="option3">
        <label for="q3_option3">Glycolysis</label><br>
        <input type="radio" id="q3_option4" name="question3" value="option4">
        <label for="q3_option4">Fermentation</label><br>
    </div>
    <label for="question4"><b>Question 4: What is the function of the immune system?</b></label>
    <div>
        <input type="radio" id="q4_option1" name="question4" value="option1">
        <label for="q4_option1">To regulate body temperature</label><br>
        <input type="radio" id="q4_option2" name="question4" value="option2">
        <label for="q4_option2">To transport oxygen to cells</label><br>
        <input type="radio" id="q4_option3" name="question4" value="option3">
        <label for="q4_option3">To protect the body from pathogens</label><br>
        <input type="radio" id="q4_option4" name="question4" value="option4">
        <label for="q4_option4">To synthesize hormones</label><br>
    </div>
    <label for="question5"><b>Question 5: What is the function of the circulatory system?</b></label>
    <div>
        <input type="radio" id="q5_option1" name="question5" value="option1">
        <label for="q5_option1">To produce antibodies</label><br>
        <input type="radio" id="q5_option2" name="question5" value="option2">
        <label for="q5_option2">To provide structure and support</label><br>
        <input type="radio" id="q5_option3" name="question5" value="option3">
        <label for="q5_option3">To regulate body temperature</label><br>
        <input type="radio" id="q5_option4" name="question5" value="option4">
        <label for="q5_option4">To transport nutrients and oxygen throughout the body</label><br>
    </div>
    <button type="button" id="submitQuizButton"class="btn btn-primary">Submit Quiz</button>
    `;

}
function populateChemistryQuestions() {
    var quizForm = document.getElementById('quizForm');
    // Dynamically generate HTML for chemistry questions with radio button options
    quizForm.innerHTML = `
    <label for="question1"><b>Question 1: What is an atom?</b></label>
    <div>
        <input type="radio" id="q1_option1" name="question1" value="option1">
        <label for="q1_option1">The smallest unit of matter that retains the properties of an element</label><br>
        <input type="radio" id="q1_option2" name="question1" value="option2">
        <label for="q1_option2">A molecule bonded with another molecule</label><br>
        <input type="radio" id="q1_option3" name="question1" value="option3">
        <label for="q1_option3">A substance composed of multiple elements</label><br>
        <input type="radio" id="q1_option4" name="question1" value="option4">
        <label for="q1_option4">A particle with a positive charge</label><br>
    </div>
    <label for="question2"><b>Question 2: What is a chemical bond?</b></label>
    <div>
        <input type="radio" id="q2_option1" name="question2" value="option1">
        <label for="q2_option1">A force that holds atoms together in a compound</label><br>
        <input type="radio" id="q2_option2" name="question2" value="option2">
        <label for="q2_option2">A measurement of atomic mass</label><br>
        <input type="radio" id="q2_option3" name="question2" value="option3">
        <label for="q2_option3">A type of chemical reaction</label><br>
        <input type="radio" id="q2_option4" name="question2" value="option4">
        <label for="q2_option4">A bond formed between two ions</label><br>
    </div>
    <label for="question3"><b>Question 3: What is the pH scale used for?</b></label>
    <div>
        <input type="radio" id="q3_option1" name="question3" value="option1">
        <label for="q3_option1">To measure temperature</label><br>
        <input type="radio" id="q3_option2" name="question3" value="option2">
        <label for="q3_option2">To measure acidity or alkalinity of a solution</label><br>
        <input type="radio" id="q3_option3" name="question3" value="option3">
        <label for="q3_option3">To measure the concentration of ions in a solution</label><br>
        <input type="radio" id="q3_option4" name="question3" value="option4">
        <label for="q3_option4">To measure the density of a substance</label><br>
    </div>
    <label for="question4"><b>Question 4: What is a chemical reaction?</b></label>
    <div>
        <input type="radio" id="q4_option1" name="question4" value="option1">
        <label for="q4_option1">A physical change in a substance</label><br>
        <input type="radio" id="q4_option2" name="question4" value="option2">
        <label for="q4_option2">A change in temperature</label><br>
        <input type="radio" id="q4_option3" name="question4" value="option3">
        <label for="q4_option3">A process where one or more substances are transformed into new substances</label><br>
        <input type="radio" id="q4_option4" name="question4" value="option4">
        <label for="q4_option4">A physical mixture of two or more substances</label><br>
    </div>
    <label for="question5"><b>Question 5: What is an element?</b></label>
    <div>
        <input type="radio" id="q5_option1" name="question5" value="option1">
        <label for="q5_option1">A compound made up of atoms of different elements</label><br>
        <input type="radio" id="q5_option2" name="question5" value="option2">
        <label for="q5_option2">A substance that cannot be broken down into simpler substances by chemical means</label><br>
        <input type="radio" id="q5_option3" name="question5" value="option3">
        <label for="q5_option3">A substance composed of molecules</label><br>
        <input type="radio" id="q5_option4" name="question5" value="option4">
        <label for="q5_option4">A particle with a negative charge</label><br>
    </div>
    <button type="button" id="submitQuizButton"class="btn btn-primary">Submit Quiz</button>
    `;
}
function populateComputerQuestions() {
    var quizForm = document.getElementById('quizForm');
    // Dynamically generate HTML for computer science questions with radio button options
    quizForm.innerHTML = `
    <label for="question1"><b>Question 1: What is a programming language?</b></label>
    <div>
        <input type="radio" id="q1_option1" name="question1" value="option1">
        <label for="q1_option1">A set of instructions for a computer to perform tasks</label><br>
        <input type="radio" id="q1_option2" name="question1" value="option2">
        <label for="q1_option2">A hardware component of a computer</label><br>
        <input type="radio" id="q1_option3" name="question1" value="option3">
        <label for="q1_option3">A type of computer processor</label><br>
        <input type="radio" id="q1_option4" name="question1" value="option4">
        <label for="q1_option4">A form of computer memory</label><br>
    </div>
    <label for="question2"><b>Question 2: What does HTML stand for?</b></label>
    <div>
        <input type="radio" id="q2_option1" name="question2" value="option1">
        <label for="q2_option1">Hyper Text Markup Language</label><br>
        <input type="radio" id="q2_option2" name="question2" value="option2">
        <label for="q2_option2">Highly Technical Markup Language</label><br>
        <input type="radio" id="q2_option3" name="question2" value="option3">
        <label for="q2_option3">Home Tool Markup Language</label><br>
        <input type="radio" id="q2_option4" name="question2" value="option4">
        <label for="q2_option4">Hyperlink and Text Markup Language</label><br>
    </div>
    <label for="question3"><b>Question 3: What is the purpose of a compiler?</b></label>
    <div>
        <input type="radio" id="q3_option1" name="question3" value="option1">
        <label for="q3_option1">To translate high-level programming languages into machine code</label><br>
        <input type="radio" id="q3_option2" name="question3" value="option2">
        <label for="q3_option2">To execute computer programs</label><br>
        <input type="radio" id="q3_option3" name="question3" value="option3">
        <label for="q3_option3">To manage files and directories</label><br>
        <input type="radio" id="q3_option4" name="question3" value="option4">
        <label for="q3_option4">To design user interfaces</label><br>
    </div>
    <label for="question4"><b>Question 4: What is a function in programming?</b></label>
    <div>
        <input type="radio" id="q4_option1" name="question4" value="option1">
        <label for="q4_option1">A mathematical equation</label><br>
        <input type="radio" id="q4_option2" name="question4" value="option2">
        <label for="q4_option2">A collection of data</label><br>
        <input type="radio" id="q4_option3" name="question4" value="option3">
        <label for="q4_option3">A block of code that performs a specific task</label><br>
        <input type="radio" id="q4_option4" name="question4" value="option4">
        <label for="q4_option4">A type of programming language</label><br>
    </div>
    <label for="question5"><b>Question 5: What is the purpose of a database?</b></label>
    <div>
        <input type="radio" id="q5_option1" name="question5" value="option1">
        <label for="q5_option1">To create animations</label><br>
        <input type="radio" id="q5_option2" name="question5" value="option2">
        <label for="q5_option2">To store and manage data</label><br>
        <input type="radio" id="q5_option3" name="question5" value="option3">
        <label for="q5_option3">To edit images</label><br>
        <input type="radio" id="q5_option4" name="question5" value="option4">
        <label for="q5_option4">To generate reports</label><br>
    </div>
    <button type="button" id="submitQuizButton"class="btn btn-primary">Submit Quiz</button>
    
    `;
}
function populateEconomicsQuestions() {
    var quizForm = document.getElementById('quizForm');
    // Dynamically generate HTML for economics questions with radio button options
    quizForm.innerHTML = `
    <label for="question1"><b>Question 1: What is scarcity in economics?</b></label>
    <div>
        <input type="radio" id="q1_option1" name="question1" value="option1">
        <label for="q1_option1">The unlimited wants and needs of society</label><br>
        <input type="radio" id="q1_option2" name="question1" value="option2">
        <label for="q1_option2">The limited resources available to fulfill society's wants and needs</label><br>
        <input type="radio" id="q1_option3" name="question1" value="option3">
        <label for="q1_option3">The excess supply of goods and services</label><br>
        <input type="radio" id="q1_option4" name="question1" value="option4">
        <label for="q1_option4">The balance between supply and demand</label><br>
    </div>
    <label for="question2"><b>Question 2: What is inflation?</b></label>
    <div>
        <input type="radio" id="q2_option1" name="question2" value="option1">
        <label for="q2_option1">A decrease in the general level of prices</label><br>
        <input type="radio" id="q2_option2" name="question2" value="option2">
        <label for="q2_option2">An increase in the general level of prices</label><br>
        <input type="radio" id="q2_option3" name="question2" value="option3">
        <label for="q2_option3">A decrease in the unemployment rate</label><br>
        <input type="radio" id="q2_option4" name="question2" value="option4">
        <label for="q2_option4">An increase in the production of goods and services</label><br>
    </div>
    <label for="question3"><b>Question 3: What is the law of demand?</b></label>
    <div>
        <input type="radio" id="q3_option1" name="question3" value="option1">
        <label for="q3_option1">As the price of a good increases, the quantity demanded increases</label><br>
        <input type="radio" id="q3_option2" name="question3" value="option2">
        <label for="q3_option2">As the price of a good decreases, the quantity demanded decreases</label><br>
        <input type="radio" id="q3_option3" name="question3" value="option3">
        <label for="q3_option3">There is no relationship between price and quantity demanded</label><br>
        <input type="radio" id="q3_option4" name="question3" value="option4">
        <label for="q3_option4">As the price of a good increases, the quantity demanded decreases</label><br>
    </div>
    <label for="question4"><b>Question 4: What is gross domestic product (GDP)?</b></label>
    <div>
        <input type="radio" id="q4_option1" name="question4" value="option1">
        <label for="q4_option1">The total value of all goods and services produced within a country in a given period</label><br>
        <input type="radio" id="q4_option2" name="question4" value="option2">
        <label for="q4_option2">The total value of all goods and services consumed within a country in a given period</label><br>
        <input type="radio" id="q4_option3" name="question4" value="option3">
        <label for="q4_option3">The total value of all goods and services exported by a country in a given period</label><br>
        <input type="radio" id="q4_option4" name="question4" value="option4">
        <label for="q4_option4">The total value of all goods and services imported by a country in a given period</label><br>
    </div>
    <label for="question5"><b>Question 5: What is a monopoly?</b></label>
    <div>
        <input type="radio" id="q5_option1" name="question5" value="option1">
        <label for="q5_option1">A market structure with many sellers and no barriers to entry</label><br>
        <input type="radio" id="q5_option2" name="question5" value="option2">
        <label for="q5_option2">A market structure with one seller and many buyers</label><br>
        <input type="radio" id="q5_option3" name="question5" value="option3">
        <label for="q5_option3">A market structure with few sellers and high barriers to entry</label><br>
        <input type="radio" id="q5_option4" name="question5" value="option4">
        <label for="q5_option4">A market structure with many sellers and low barriers to entry</label><br>
    </div>
    <button type="button" id="submitQuizButton"class="btn btn-primary">Submit Quiz</button>
    `;
}
function populateCEQuestions() {
    var quizForm = document.getElementById('quizForm');
    // Dynamically generate HTML for civil engineering questions with radio button options
    quizForm.innerHTML = `
    <label for="question1"><b>Question 1: What is the purpose of a foundation in civil engineering?</b></label>
    <div>
        <input type="radio" id="q1_option1" name="question1" value="option1">
        <label for="q1_option1">To provide structural support for a building or structure</label><br>
        <input type="radio" id="q1_option2" name="question1" value="option2">
        <label for="q1_option2">To insulate a building from temperature changes</label><br>
        <input type="radio" id="q1_option3" name="question1" value="option3">
        <label for="q1_option3">To provide electrical wiring for a building</label><br>
        <input type="radio" id="q1_option4" name="question1" value="option4">
        <label for="q1_option4">To regulate water flow around a building</label><br>
    </div>
    <label for="question2"><b>Question 2: What is the purpose of a beam in structural engineering?</b></label>
    <div>
        <input type="radio" id="q2_option1" name="question2" value="option1">
        <label for="q2_option1">To support the weight of a building</label><br>
        <input type="radio" id="q2_option2" name="question2" value="option2">
        <label for="q2_option2">To provide insulation for a building</label><br>
        <input type="radio" id="q2_option3" name="question2" value="option3">
        <label for="q2_option3">To distribute electrical power throughout a building</label><br>
        <input type="radio" id="q2_option4" name="question2" value="option4">
        <label for="q2_option4">To regulate air flow within a building</label><br>
    </div>
    <label for="question3"><b>Question 3: What is the purpose of a retaining wall?</b></label>
    <div>
        <input type="radio" id="q3_option1" name="question3" value="option1">
        <label for="q3_option1">To provide structural support for a building</label><br>
        <input type="radio" id="q3_option2" name="question3" value="option2">
        <label for="q3_option2">To prevent soil erosion and landslides</label><br>
        <input type="radio" id="q3_option3" name="question3" value="option3">
        <label for="q3_option3">To filter water runoff from a site</label><br>
        <input type="radio" id="q3_option4" name="question3" value="option4">
        <label for="q3_option4">To regulate traffic flow</label><br>
    </div>
    <label for="question4"><b>Question 4: What is the purpose of a culvert in civil engineering?</b></label>
    <div>
        <input type="radio" id="q4_option1" name="question4" value="option1">
        <label for="q4_option1">To transport electrical cables</label><br>
        <input type="radio" id="q4_option2" name="question4" value="option2">
        <label for="q4_option2">To provide drainage for stormwater</label><br>
        <input type="radio" id="q4_option3" name="question4" value="option3">
        <label for="q4_option3">To support the weight of a building</label><br>
        <input type="radio" id="q4_option4" name="question4" value="option4">
        <label for="q4_option4">To regulate airflow in a tunnel</label><br>
    </div>
    <label for="question5"><b>Question 5: What is the purpose of geotechnical engineering?</b></label>
    <div>
        <input type="radio" id="q5_option1" name="question5" value="option1">
        <label for="q5_option1">To design electrical systems for buildings</label><br>
        <input type="radio" id="q5_option2" name="question5" value="option2">
        <label for="q5_option2">To analyze the behavior of soil and rock</label><br>
        <input type="radio" id="q5_option3" name="question5" value="option3">
        <label for="q5_option3">To regulate traffic flow</label><br>
        <input type="radio" id="q5_option4" name="question5" value="option4">
        <label for="q5_option4">To manage water resources</label><br>
    </div>
    <button type="button" id="submitQuizButton"class="btn btn-primary">Submit Quiz</button>
    `;

}
// Add an event listener to the submit button
var submitButton = document.getElementById('submitQuizButton');
submitButton.addEventListener('click', calculateScore);

// Function to calculate the score
function calculateScore() {
    //Define correct answers
    var correctCEQuestionAnswers = {
        question1: "option1",
        question2: "option1",
        question3: "option2",
        question4: "option2",
        question5: "option2"
    };
    var correctEconomicsQuestionsAnswers = {
        question1: "option2",
        question2: "option2",
        question3: "option2",
        question4: "option1",
        question5: "option2"
    };
    var correctComputerQuestionsAnswers = {
        question1: "option1",
        question2: "option1",
        question3: "option1",
        question4: "option3",
        question5: "option2"
    };
    var correctChemistryQuestionsAnswers = {
        question1: "option1",
        question2: "option1",
        question3: "option2",
        question4: "option3",
        question5: "option2"
    };
    var correctBiologyQuestionsAnswers = {
        question1: "option1",
        question2: "option3",
        question3: "option1",
        question4: "option3",
        question5: "option4"
    };
    var correctPhysicsQuestionsAnswers = {
        question1: "option1",
        question2: "option2",
        question3: "option1",
        question4: "option1",
        question5: "option1"
    };

    var correctAnswers = {};
    switch (title) {
        case 'Introduction to Physics':
            correctAnswers = correctPhysicsQuestionsAnswers;
            break;
        case 'Introduction to Chemistry':
            correctAnswers = correctChemistryQuestionsAnswers;
            break;
        case 'Introduction to Biology':
            correctAnswers = correctBiologyQuestionsAnswers;
            break;
        case 'Introduction to Computer':
            correctAnswers = correctComputerQuestionsAnswers;
            break;
        case 'Introduction to Economics':
            correctAnswers = correctEconomicsQuestionsAnswers;
            break;
        case 'Introduction to Civil Engineering':
            correctAnswers = correctCEQuestionAnswers;
            break;
        default:
            // If the subject is not recognized,show an error message
            console.error('Unknown subject:', title);
            return;
    }

    var quizForm = document.getElementById('quizForm');
    var score = 0;

    // Loop through each question and check the selected answer against the correct answer
    for (var question in correctAnswers) {
        var selectedAnswer = quizForm.querySelector('input[name="' + question + '"]:checked');
        if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    // Display the score
    if (score > 3) {
        alert('Your score is: ' + score + '/' + Object.keys(correctAnswers).length + '. Well done!');
        window.location.href = 'courses.html';
    } else {
        alert('Your score is: ' + score + '/' + Object.keys(correctAnswers).length + '. Try again.');
    }

}
