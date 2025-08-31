# America-Post

A simple static website to display a gallery of images.

## How to use

1.  For each chapter of images, create a new subfolder inside the `/images` directory (e.g., `/images/chapter1`).
2.  Add your image files into their corresponding chapter subfolder.
3.  Open `scripts/script.js`.
4.  Define your chapters in the `chapters` object. For each image, create a `new Images()` object with the filename and a description.

For example:
```javascript
const chapters = {
    "Chapter 1: The Beginning": {
        folder: "chapter1", // This must match the subfolder name in /images
        images: [
            new Images("photo1.jpg", "A brief description for the first photo."),
            new Images("photo2.png", "Description for the second photo.")
        ]
    },
    "Chapter 2: The Journey": {
        folder: "chapter2",
        images: [new Images("photo3.jpg", "A photo from the journey.")]
    }
};
```

4.  Open `index.html` in your browser to see the gallery.
