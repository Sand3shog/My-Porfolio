function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = "translateY(-500px)";
}


// Typewriter effect for home
const texts = [
    "Student",
    "Content Developer",
    "Videographer",
    "Film Editor"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typewriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typewriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typewriter, 500);
    }
}

window.onload = typewriter;

// Function to validate the contact form //Ensure that the user provides valid inputs before the form is submitted.
function validateForm(event) {
    event.preventDefault(); // Prevent form submission for validation

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Message sent successfully!');
    document.querySelector('form').submit(); // Submit the form if everything is valid
    return true;
}

// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Attach the validateForm function to the form's submit event
document.querySelector('form').addEventListener('submit', validateForm);

// Function to clear the form fields //Automatically clear the form fields after a successful submission.
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Attach the clearForm function to the form's reset event (or after successful submission)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm(event)) {
        clearForm();
    }
});

// Function to update the character counter for the message field 
//Limit the number of characters in the message field and show a counter.
function updateCharCount() {
    const message = document.getElementById('message').value;
    const maxLength = 500;
    const charCount = message.length;
    const charCounter = document.getElementById('char-counter');
    
    charCounter.textContent = `${charCount}/${maxLength} characters`;

    if (charCount > maxLength) {
        charCounter.style.color = 'red';
    } else {
        charCounter.style.color = 'white';
    }
}


//Add a tooltip when hovering over each skill item to display additional information. in skills section
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = "Click for more details!";
        this.appendChild(tooltip);
    });

    item.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

//Clicking on a skill item could expand it to show more detailed information or a small description.
skillItems.forEach(item => {
    item.addEventListener('click', function() {
        const detail = document.createElement('div');
        detail.className = 'skill-detail';
        detail.innerText = "Detailed information about " + this.querySelector('h3').innerText;
        if (!this.classList.contains('expanded')) {
            this.appendChild(detail);
            this.classList.add('expanded');
        } else {
            this.querySelector('.skill-detail').remove();
            this.classList.remove('expanded');
        }
    });
});






