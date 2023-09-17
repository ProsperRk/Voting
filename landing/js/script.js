const formContainer = document.querySelector(".form-container");
const forms = document.getElementById("forms")
const loginForm = document.querySelector(".login-form");
const signinForm = document.querySelector(".signin-form ");
const closeBtn = document.querySelectorAll(".close");

const userPass = document.querySelectorAll(".password");

const loginBtn = document.querySelector("#login");
const signinBtn = document.getElementById("signup");

const adminLogin = document.getElementById("admin-login");
const asAdmin = document.getElementById("as-admin");
const asVoter = document.getElementById("as-voter");

const eyeShow = document.querySelectorAll(".input-control .eye");


// eyeShow[0].addEventListener("click", (e) => {
//     if(userPass.type === "password") {
//         userPass.type = "text";
//         e.target.classList.remove("fa-eye-slash");
//         e.target.classList.add("fa-eye");
        
//     }else if(userPass.type === "text") {
//             userPass.type = "password";
//             e.target.classList.remove("fa-eye");
//             e.target.classList.add("fa-eye-slash");
//         }
// })

eyeShow[0].addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-eye-slash")) {
        e.target.classList.remove("fa-eye-slash");
        e.target.classList.add("fa-eye");
        userPass[0].type = "text";
    }else {
        e.target.classList.remove("fa-eye");
        e.target.classList.add("fa-eye-slash");
        userPass[0].type = "password";
    }
});

eyeShow[1].addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-eye-slash")) {
        e.target.classList.remove("fa-eye-slash");
        e.target.classList.add("fa-eye");
        userPass[1].type = "text";
    }else {
        e.target.classList.remove("fa-eye");
        e.target.classList.add("fa-eye-slash");
        userPass[1].type = "password";
    }
});


asAdmin.addEventListener("click", () => {
    loginForm.classList.remove("active");
    adminLogin.classList.add("active");
});

asVoter.addEventListener("click", () => {
    loginForm.classList.add("active");
    adminLogin.classList.remove("active");
});

loginBtn.addEventListener("click", () => {
    formContainer.classList.add("active");
    loginForm.classList.add("active");
});

signinBtn.addEventListener("click", () => {
    formContainer.classList.add("active");
    signinForm.classList.add("active");
});

document.addEventListener("keyup", (e) => {
    if(e.key === "Escape") {
        formContainer.classList.remove("active");
        loginForm.classList.remove("active");
        signinForm.classList.remove("active");
        adminLogin.classList.remove("active");
    }
});

closeBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        formContainer.classList.remove("active");
        loginForm.classList.remove("active");
        signinForm.classList.remove("active");
        adminLogin.classList.remove("active");
    });
});

forms.addEventListener("click", (e) => {
    if(e.target.classList.contains("form-container")) {
        formContainer.classList.remove("active");
        loginForm.classList.remove("active");
        signinForm.classList.remove("active");
        adminLogin.classList.remove("active");
    }
});
