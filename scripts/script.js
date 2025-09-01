document.addEventListener('DOMContentLoaded', function() {
    const chaptersContainer = document.getElementById('chapters-container');

    // TODO: Add your chapters and images here.
    // 1. For each chapter, create a subfolder in the 'images' directory.
    // 2. Add an entry for each chapter below, listing its images.
    class Images {
        constructor(fileName, description) {
            this.fileName = fileName;
            this.description = description;
        }
    };

    const chapters = {
        "1. பயணம் ஆரம்பம்": {
            folder: "chapter1",
            images: [
                new Images("test_image.jpg", "This is a test image"),
            ]
        },
        "2. சிலிகான் பள்ளத்தாக்கு ( 3 )": {
             folder: "chapter2",
             images: [
                new Images("test_image copy.jpg", "This is another test image")
             ]
         },
         "3. Chapter Title": {
            folder: "chapterx",
            images: [
                new Images("SampleImage.jpeg", "Some description here"),
            ]
         }
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

        chapterData.images.forEach(image => {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';

            const imgElement = document.createElement('img');
            imgElement.src = `images/${chapterData.folder}/${image.fileName}`;
            imgElement.alt = image.description || image.fileName; // Better for accessibility
            imageContainer.appendChild(imgElement);

            if (image.description) {
                const descriptionElement = document.createElement('p');
                descriptionElement.className = 'image-description';
                descriptionElement.textContent = image.description;
                imageContainer.appendChild(descriptionElement);
            }

            imageGallery.appendChild(imageContainer);
        });

        chapterSection.appendChild(imageGallery);
        chaptersContainer.appendChild(chapterSection);
    });
});
