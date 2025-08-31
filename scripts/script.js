document.addEventListener('DOMContentLoaded', function() {
    const imageGallery = document.getElementById('image-gallery');

    // TODO: Add your image filenames to this array.
    // Place your images in the 'images' folder.
    const images = [
        "test_image.jpg",
    ];

    if (images.length === 0) {
        imageGallery.innerHTML = '<p>No images found. Add image filenames to scripts/script.js and place the files in the /images folder.</p>';
        return;
    }

    images.forEach(imageName => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${imageName}`;
        imgElement.alt = imageName;
        imageGallery.appendChild(imgElement);
    });
});

