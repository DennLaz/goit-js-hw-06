const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", sendingForm);

function sendingForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled");
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.target.reset();
  }
}
