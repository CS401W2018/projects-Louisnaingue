document.getElementById("containform").addEventListener("submit", function(event) {
    event.preventDefault();
    const first = document.getElementById("fname").value;
    const last = document.getElementById("lname").value;
    const bdate = document.getElementById("bdate").value
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!first || !last) {
        alert("Please provide your full name");
        return;
        
    }

    const birthDate = new Date(bdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        alert("You must be 18 years old and above to register")
        return;
    }
    if (first.length < 2){
        alert("Name must be at least 2 characters long")
    }
    if (last.length < 2){
        alert("Name must be at least 2 characters long")
    }


    const data = {
        fname: first, 
        lname: last,
        bdate: bdate,
        email: email,
        phone: phone,
    }

    const xhr = new XMLHttpRequest();
    xhr.open ("POST", "register.json", true);
    xhr.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message
        } 
        else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);
});
