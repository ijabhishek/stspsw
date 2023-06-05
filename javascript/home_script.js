document.addEventListener("DOMContentLoaded", function () {
    var popup = document.querySelector(".popup");
    var closeBtn = document.querySelector(".close-btn");

    // Show the popup
    popup.style.display = "block";

    // Close the popup after 4 seconds
    setTimeout(function () {
        closePopup();
    }, 4000);

    // Function to close the popup
    function closePopup() {
        popup.style.opacity = "0";
        setTimeout(function () {
            popup.style.display = "none";
        }, 500);
    }

    // Close the popup when the close button is clicked
    closeBtn.addEventListener("click", function () {
        closePopup();
    });
});
