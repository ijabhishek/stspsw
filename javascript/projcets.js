function togglePopup(popupId) {
    var popup = document.getElementById(popupId + "-popup");
    var sublists = document.getElementsByClassName("sublist");

    if (popup) {
        if (popup.style.display === "block") {
            popup.style.display = "none";
            closeAllSublists();
        } else {
            closeAllSublists();
            popup.style.display = "block";
        }
    }
}

function toggleSublist(sublistId) {
    var sublist = document.getElementById(sublistId + "-sublist");

    if (sublist) {
        if (sublist.style.display === "block") {
            sublist.style.display = "none";
        } else {
            closeAllSublists();
            sublist.style.display = "block";
        }
    }
}

function closeAllSublists() {
    var sublists = document.getElementsByClassName("sublist");

    for (var i = 0; i < sublists.length; i++) {
        sublists[i].style.display = "none";
    }
}