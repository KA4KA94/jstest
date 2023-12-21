const form = document.querySelector('.login-form');
// console.log(form);
// const emailEl = form.firstElementChild;
// console.log(emailEl);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {elements: { email, password } } = event.currentTarget;
    // console.log('Email:', email.value, ' Password:', password.value);
    // console.log(event.currentTarget.elements.email.value)

    const formData = new FormData(event.currentTarget);
    // console.log(formData)

    formData.forEach((value, name) => {
        console.log(value);
        console.log(name);
    })

    if (email.value === '' || password.value === '') {
        alert("Please fill in all the fields!");
    }

    // form.reset();
    // Or
    event.currentTarget.reset();
})





// const formEl = document.querySelector('.login-form');

// formEl.addEventListener('submit', handlSubmitButtonClick);

// // console.log(formEl.elements)

// function handlSubmitButtonClick(event) {
//     event.preventDefault();

//     // console.log(event.currentTarget.elements.email.value)
//     // console.log(event.currentTarget.elements.password.value)
//     const {
//         elements: { email, password }
//     } = event.currentTarget;

//     if (email.value === '' || password.value === '') {
//         alert('All fields must be fieled');
//     }

//     const formData = new FormData(event.currentTarget);

//     formData.forEach((value, name) => {
//         console.log(value);
//         console.log(name);
//     });

//     console.log("~ formData", formData);

//     event.currentTarget.reset();
// }