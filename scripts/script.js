function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    menu.classList.toggle("active");
}

// Function to open the modal with the clicked image
function openModal(imageSrc) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("image-modal");
    modal.style.display = "none";
}