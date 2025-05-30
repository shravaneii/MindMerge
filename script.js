const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
}); 

logicLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
}); 



document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("passwordConfirm").value;
    var passwordError = document.getElementById("passwordError");
    
    // Perform password validation
    if (password !== passwordConfirm) {
        passwordError.textContent = "Passwords do not match";
    } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
    } else {
        // Password validation passed, perform signup (dummy example)
        alert("Signup successful!");
        // Redirect to another page or perform further actions
    }
});