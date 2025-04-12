document.getElementById ("movieticket").addEventListener ("submit", function (event) {
    event.preventDefault();
    const first = document.getElementById ("fname").value;
    const last = document.getElementById ("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const tcount = document.getElementById("Ticket-counts").value;
    const type = document.getElementById("ticket-type").value;
    const age = document.getElementById("age").value

    if (!first || !last) {
        alert("Please provide your full name.");
        return;
    }
    if (!tcount || !type) {
        alert("Please provide your ticket type and count");
        return;
    }
    if (first.length < 3) {
        alert ("first name must be at least 2 characters long")
        return
    }
    
    if (last.length < 3) {
        alert ("last name must be at least 2 characters long")
        return
    }
    if (!age || age < 18) {
        alert ("lYou must be 18 years old or older to submit")
        return
    }
    const data = {
        firstname: first, 
        lastname: last,
        age: age,
        email: email,
        phone: phone,
        type: type,
        ticketcount: tcount,

    }

    const xhr = new XMLHttpRequest();
    xhr.open ("GET", "submit.json", true);
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