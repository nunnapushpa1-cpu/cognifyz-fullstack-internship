function validateForm() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    if (name.length < 3) {
        alert("Name must contain at least 3 characters.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email address.");
        return false;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return false;
    }

    if (age < 18 || age > 60) {
        alert("Age must be between 18 and 60.");
        return false;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return false;
    }

    return true;
}