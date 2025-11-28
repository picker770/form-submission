document.addEventListener("DOMContentLoaded", function () {
   const form = document.getElementById("my-form");
   form.addEventListener("submit", handleSubmit);

   function handleSubmit(e) {
    e.preventDefault();
    let myForm = e.target;
    console.log(myForm.usernameField.value);
   }
});