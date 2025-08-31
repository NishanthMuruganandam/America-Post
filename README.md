# America-Post

A simple static website to display a gallery of images.

## How to use

1.  For each chapter of images, create a new subfolder inside the `/images` directory (e.g., `/images/chapter1`).
2.  Add your image files into their corresponding chapter subfolder.
3.  Open `scripts/script.js`.
4.  Define your chapters and list the image filenames in the `chapters` object.

For example:
```javascript
const chapters = {
    "Chapter 1: The Beginning": {
        folder: "chapter1", // This must match the subfolder name in /images
        images: [
            "photo1.jpg",
            "photo2.png"
        ]
    },
    "Chapter 2: The Journey": {
        folder: "chapter2",
        images: ["photo3.jpg"]
    }
};
```

4.  Open `index.html` in your browser to see the gallery.
