const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

const galleryImages = document.querySelectorAll(".gallery-card img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {

        const fullImage = img.getAttribute("data-full");

        modal.classList.add("active");
        modalImage.src = fullImage; // 👈 use full image now
        document.body.style.overflow = "hidden";
    });
});

// Close modal button
closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
});

// Close when clicking outside image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});