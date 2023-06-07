function openPopup() {
    var popup = document.getElementById("contact-popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("contact-popup");
    popup.style.display = "none";
}

function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Perform form submission logic here

    // Show the thank you popup
    var thankYouPopup = document.getElementById("thank-you-popup");
    thankYouPopup.style.display = "block";
    setTimeout(function () {
        thankYouPopup.style.display = "none";
    }, 10000); // Adjust the duration (in milliseconds) the popup should stay visible

    // Reset the form fields
    var form = document.getElementById("contact-form");
    form.reset();

    // Close the form popup
    closePopup();
}

