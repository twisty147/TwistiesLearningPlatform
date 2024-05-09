/*
License

Copyright (c) 2024 Oliver Amah

Permission is hereby granted, free of charge, to any person obtaining a copy
of this website and associated documentation files (the "website"), to deal
in the website without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, copies of the website, 
and to permit persons to whom the website is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the website.

THE WEBSITE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

//Original Code: Means that I wrote the code myself (*ofcause you know I had to seek for solutions to my bugs on stackoverflow*)

// original Code: Function to fetch and display dictionary results in a modal
function searchWord() {
  const searchInput = document.getElementById('dictionaryInput').value;
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayDictionaryResultsInModal(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// original Code:  Function to dynamically display dictionary results in the modal body
function displayDictionaryResultsInModal(data) {
  const modalBody = document.getElementById('dictionaryModalBody');
  modalBody.innerHTML = '';

  // Iterate through each dictionary entry
  data.forEach(entry => {
    const entryElement = document.createElement('div');
    entryElement.classList.add('card', 'mb-3');

    const entryBody = document.createElement('div');
    entryBody.classList.add('card-body');

    // original Code: Display word title
    const wordTitle = document.createElement('h4');
    wordTitle.classList.add('card-title');
    wordTitle.textContent = entry.word;
    entryBody.appendChild(wordTitle);

    // original Code: Display phonetic details
    entry.phonetics.forEach(phonetic => {
      const phoneticText = document.createElement('p');
      phoneticText.textContent = `Phonetic: ${phonetic.text}`;
      entryBody.appendChild(phoneticText);
    });

    // original Code: Display meanings and definitions
    entry.meanings.forEach(meaning => {
      const partOfSpeech = document.createElement('h5');
      partOfSpeech.classList.add('card-subtitle', 'mb-2');
      partOfSpeech.textContent = meaning.partOfSpeech;
      entryBody.appendChild(partOfSpeech);

      meaning.definitions.forEach(definition => {
        const definitionText = document.createElement('p');
        definitionText.textContent = `Definition: ${definition.definition}`;
        entryBody.appendChild(definitionText);
      });
    });

    // original Code: Append entry to modal body
    entryElement.appendChild(entryBody);
    modalBody.appendChild(entryElement);
  });

  // original Code: Open the modal
  $('#dictionaryModal').modal('show');
}

// original Code: Function to inform the user that login functionality is not available
function validateLogin() {
  alert("Sorry, the login functionality is not available at this point. Please try again later.");
  return false; // Prevent form submission
}

// original Code: Function to validate the signup form
function validateForm() {
  // Retrieve input values
  var username = document.getElementById('inputUsername').value;
  var email = document.getElementById('inputEmail').value;
  var password = document.getElementById('inputPassword').value;

  // original Code: Validate email format using regular expression
  var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;//this regular expression was copied from stackoverflow
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // original Code: Validate password complexity using regular expression
  var passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/;//this regular expression was copied from stackoverflow
  if (!passwordRegex.test(password)) {
    alert("Password must contain at least 8 characters, including one uppercase letter, one digit, and one special character.");
    return false;
  }

  // original Code: All validations passed, show processing message
  showProcessingMessage();
  return true;
}

// original Code: Function to show processing message
function showProcessingMessage() {
  alert("Thank you for signing up! Your information is being processed. You'll receive a notification once everything is ready.");
}

// original Code: Parse the query parameters
const params = new URLSearchParams(window.location.search);
const courseName = params.get('course');
// original Code: Define course content for each course
const courseContent = {
  physics: [
    { title: "Introduction to Physics", video: "b1t41Q3xRM8" },
    { title: "Mechanics", video: "aD58U3Ib0ng" },
    { title: "Thermodynamics", video: "NyOYW07-L5g" },
    { title: "Electricity and Magnetism", video: "79_SF5AZtzo" },
    { title: "Optics", video: "Oh4m8Ees-3Q" }
  ],
  chemistry: [
    { title: "Introduction to chemistry", video: "bka20Q9TN6M" },
    { title: "Acids and bases", video: "vt8fB3MFzLk" },
    { title: "The periodic table", video: "0RRVV4Diomg" },
    { title: "Chemical bonds", video: "AE5QcL4VfH4" },
    { title: "Organic chemistry", video: "PmvLB5dIEp8" }
  ],
  biology: [
    { title: "Introduction to Biology", video: "DTnCqBUnaRM" },
    { title: "Cell biology", video: "t5DvF5OVr1Y" },
    { title: "Ecology", video: "OfV3VNgjpvw" },
    { title: "Evolution", video: "GcjgWov7mTM" },
    { title: "Human anatomy", video: "gEUu-A2wfSE" }
  ],
  computer: [
    { title: "Introduction to Computer", video: "qfUZBKDh9BY" },
    { title: "Operating System", video: "26QPDBe-NB8" },
    { title: "Hardware", video: "8_itvuz5Dc4" },
    { title: "Software", video: "PBDlbSAddAI" },
    { title: "Desktop Publishing", video: "J-3-IMlriW0" }
  ],
  economics: [
    { title: "Introduction to Economics", video: "3ez10ADR_gM" },
    { title: "Demand", video: "LwLh6ax0zTE" },
    { title: "Supply", video: "ewPNugIqCUM" },
    { title: "Trade", video: "dmqoqVwFopE" },
    { title: "Taxation", video: "7Qtr_vA3Prw" }
  ],
  civilEngineering: [
    { title: "Introduction to Civil Engineering", video: "LCyZFTEyNoo" },
    { title: "Building Materials", video: "a1cQcIJfjPw" },
    { title: "Construction", video: "mbwuj58UEPg" },
    { title: "Surveying", video: "VD1ltgO_iaw" },
    { title: "Engineering Technology", video: "5zDcHJn4oj0" }
  ],
};

// original Code: Populate course details based on the course name
if (courseName in courseContent) {
  const content = courseContent[courseName];
  const courseTopics = document.getElementById('courseTopics');
  courseTopics.innerHTML = ''; // Clear existing content

  // Populate course content
  content.forEach(topic => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = topic.title;
    listItem.dataset.video = topic.video;
    courseTopics.appendChild(listItem);
  });
} else {
  // original Code: Handle invalid course name
  console.error('Invalid course name:', courseName);
}

// original Code: Populate course details based on the course name
if (courseName === 'physics') {
  // Populate details for Physics course
  document.getElementById('courseTitle').innerText = 'Introduction to Physics';
  document.getElementById('courseDescription').innerText = 'Explore the fundamental principles of physics in this interactive course1.';
} else if (courseName === 'chemistry') {
  document.getElementById('courseTitle').innerText = 'Introduction to Chemistry';
  document.getElementById('courseDescription').innerText = 'Explore the fundamental principles of Chemistry in this interactive course.';

}
else if (courseName === 'biology') {
  document.getElementById('courseTitle').innerText = 'Introduction to Biology';
  document.getElementById('courseDescription').innerText = 'Explore the fundamental principles of Biology in this interactive course.';
}
else if (courseName === 'computer') {
  document.getElementById('courseTitle').innerText = 'Introduction to Computer';
  document.getElementById('courseDescription').innerText = 'Explore the fundamental principles of Computer in this interactive course.';
}
else if (courseName === 'economics') {
  document.getElementById('courseTitle').innerText = 'Introduction to Economics';
  document.getElementById('courseDescription').innerText = 'Explore the fundamental principles of Economics in this interactive course.';
}
else if (courseName === 'civilEngineering') {
  document.getElementById('courseTitle').innerText = 'Introduction to Civil Engineering';
  document.getElementById('courseDescription').innerText = 'Explore the fundamental principles of Civil Engineering in this interactive course.';
}


// original Code: Execute when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Function to load YouTube video based on selected topic
  function loadVideo(videoId) {
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '?si=yiDg2PJRDOX2CREn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  }

  // original Code: Function to mark a video as watched and trigger completion modal
  function markAsWatched(videoId) {
    var listItem = document.querySelector('li[data-video="' + videoId + '"]');
    if (listItem) {
      listItem.classList.add('watched');
      //original Code:  Check if all videos are watched
      var allWatched = Array.from(document.querySelectorAll('li[data-video]')).every(function (item) {
        return item.classList.contains('watched');
      });
      if (allWatched) {
        //original Code:  Get the course title
        var courseTitle = document.getElementById('courseTitle').textContent;

        //original Code:  Show modal congratulating the user and providing physics quiz link
        $('#completionModal').modal('show');

        //original Code:  Add "Take Quiz" link under topic list
        var quizLink = document.createElement('a');
        quizLink.href = 'quiz.html?title=' + encodeURIComponent(courseTitle); // Append the course title as a parameter
        quizLink.textContent = 'Take Quiz';
        quizLink.classList.add('btn', 'btn-primary', 'mt-3');
        document.querySelector('.col-md-4').appendChild(quizLink);
      }
    }
  }

  //original Code:  Load the first video automatically when the page loads based on the selected topic
  loadInitialVideo();

  //original Code:  Function to load the first video automatically based on the selected topic
  function loadInitialVideo() {
    // Parse the query parameters
    const params = new URLSearchParams(window.location.search);
    const courseName = params.get('course');

    // original Code: Define the initial video for each course
    const initialVideos = {
      physics: "b1t41Q3xRM8",
      chemistry: "bka20Q9TN6M",
      biology: "DTnCqBUnaRM",
      computer: "qfUZBKDh9BY",
      economics: "3ez10ADR_gM",
      civilEngineering: "LCyZFTEyNoo"
    };

    //original Code:  Load the initial video based on the selected course
    if (courseName in initialVideos) {
      const initialVideoId = initialVideos[courseName];
      loadVideo(initialVideoId);
      markAsWatched(initialVideoId);
    } else {
      console.error('Invalid course name:', courseName);
    }
  }

  //original Code:  Event listener for course topics
  var courseTopics = document.getElementById('courseTopics');
  courseTopics.addEventListener('click', function (event) {
    var target = event.target;
    if (target.tagName === 'LI') {
      var videoId = target.getAttribute('data-video');
      loadVideo(videoId);
      markAsWatched(videoId);
    }
  });
});

// original Code: Function to add topic in view to quiz modal

$(document).ready(function () {
  //original Code:  Function to set the course title in the completion modal
  function setCourseTitle() {
    var courseTitle = $("#courseTitle").text();
    $("#completionModalLabel").text("Congratulations on completing " + courseTitle + "!");
  }

  //original Code:  Call the function to set the course title when the document is ready
  setCourseTitle();

  //original Code:  Function to handle modal display
  $('#completionModal').on('show.bs.modal', function (e) {
    setCourseTitle(); // Set the course title dynamically every time the modal is shown
  });
});

//original Code:  Function to handle click event of the "Take Quiz" button
document.getElementById('takeQuizBtn').addEventListener('click', function () {
  // Get the course title
  var courseTitle = document.getElementById('courseTitle').innerText;
  // Encode the course title to be used in the URL
  var encodedCourseTitle = encodeURIComponent(courseTitle);
  // Append the course title to the URL of the quiz page
  var quizURL = 'quiz.html?title=' + encodedCourseTitle;
  // Redirect the user to the quiz page with the course title
  window.location.href = quizURL;
});



