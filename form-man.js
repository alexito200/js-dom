const form = document.getElementById("form");
const user = {};
const nombre = document.getElementById("username");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const errorElement = document.getElementById('error');

function handleSubmit(event) {
    event.preventDefault();
    
    const username = nombre.value;
    const email = emailField.value;
    const message = messageField.value;

    user.username = username;
    user.email = email;
    user.message = message;

    console.log(user);

    form.reset();
}

form.addEventListener('submit', (e) => {
    let messages = [];
    
    if (nombre.value === '' || nombre.value == null) {
        messages.push('Name is required');
    }
    
    if (emailField.value === '' || emailField.value == null) {
        messages.push('Email is required');
    }
    
    if (messageField.value === '' || messageField.value == null) {
        messages.push('Message is required');
    }
    
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    } else {
        handleSubmit(e);  // Call handleSubmit if validation passes
    }
});
