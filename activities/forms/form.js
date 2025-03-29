document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    //alert("Form Submitted");
    const fullname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;

    if(!fullanme || lastname){
        alert("You need a firts name and lastname")
        retur;
    }
    if(!age || age <18){
        alert("You must be 18 years old")
        return;
    }
   const formData = {
        name: fullname,
        email: email,
        password: password,
        age: age,

   }
    console.log(fullname);
});