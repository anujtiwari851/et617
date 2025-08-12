// const logregBox = document.querySelector('.logreg-box');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');

// registerLink.addEventListener('click',() => { logregBox.classList.add('active');});
// loginLink.addEventListener('click',() => { logregBox.classList.remove('active');});

// const signUpButton=document.getElementById('signUpButton');
// const signInButton=document.getElementById('signInButton');
// const signInForm=document.getElementById('signIn');
// const signUpForm=document.getElementById('signup');

// signUpButton.addEventListener('click',function(){
//     signInForm.style.display="none";
//     signUpForm.style.display="block";
// })
// signInButton.addEventListener('click', function(){
//     signInForm.style.display="block";
//     signUpForm.style.display="none";
// })

document.addEventListener("DOMContentLoaded", () => {
    const logregBox = document.querySelector(".logreg-box");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");

   
    registerLink.addEventListener("click", (e) => {
        e.preventDefault();
        logregBox.classList.add("active");
    });

   
    loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        logregBox.classList.remove("active");
    });

   
    function clearInputs(form) {
        form.querySelectorAll("input").forEach(input => {
            if (input.type !== "checkbox") {
                input.value = "";
            }
        });
    }

    registerLink.addEventListener("click", () => {
        clearInputs(document.querySelector(".form-box.login form"));
    });

    loginLink.addEventListener("click", () => {
        clearInputs(document.querySelector(".form-box.register form"));
    });
});
