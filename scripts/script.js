document.addEventListener('DOMContentLoaded', function() {
    const chaptersContainer = document.getElementById('chapters-container');

    // TODO: Add your chapters and images here.
    // 1. For each chapter, create a subfolder in the 'images' directory.
    // 2. Add an entry for each chapter below, listing its images.
    const chapters = {
        "Chapter 1: The Beginning": {
            folder: "chapter1",
            images: [
                "test_image.jpg",
                "test_image copy.jpg"
            ]
        },
        // "Chapter 2: The Journey": {
        //     folder: "chapter2",
        //     images: [
        //         "photo3.jpg"
        //     ]
        // }
    };

    const chapterKeys = Object.keys(chapters);

    if (chapterKeys.length === 0) {
        chaptersContainer.innerHTML = '<p>No chapters found. Add your chapter information to <code>scripts/script.js</code>.</p>';
        return;
    }

    chapterKeys.forEach(chapterTitle => {
        const chapterData = chapters[chapterTitle];
        
        const chapterSection = document.createElement('section');
        chapterSection.className = 'chapter';

        const titleElement = document.createElement('h2');
        titleElement.textContent = chapterTitle;
        chapterSection.appendChild(titleElement);

        const imageGallery = document.createElement('div');
        imageGallery.className = 'image-gallery';

        chapterData.images.forEach(imageName => {
            const imgElement = document.createElement('img');
            imgElement.src = `images/${chapterData.folder}/${imageName}`;
            imgElement.alt = imageName;
            imageGallery.appendChild(imgElement);
        });

        chapterSection.appendChild(imageGallery);
        chaptersContainer.appendChild(chapterSection);
    });
});

