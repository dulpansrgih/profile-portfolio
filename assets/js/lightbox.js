// Lightbox functionality
class Lightbox {
    constructor() {
        this.init();
    }

    init() {
        this.container = document.createElement('div');
        this.container.id = 'lightbox';
        this.container.style.display = 'none';
        document.body.appendChild(this.container);

        this.lightboxImg = document.createElement('img');
        this.container.appendChild(this.lightboxImg);

        this.container.addEventListener('click', (e) => {
            if (e.target !== this.lightboxImg) {
                this.close();
            }
        });
    }

    open(imageSrc) {
        this.lightboxImg.src = imageSrc;
        this.container.style.display = 'flex';
    }

    close() {
        this.container.style.display = 'none';
    }
}

// Initialize lightbox
const lightbox = new Lightbox();

// Add click event to all images with class 'lightbox-img'
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.lightbox-img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.open(img.src);
        });
    });
});