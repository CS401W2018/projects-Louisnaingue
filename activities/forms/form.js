document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    //alert("Form Submitted");
    const fullname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
   
   const formData = {
        name: fullname,
        email: email,

   }
    console.log(fullname);
});