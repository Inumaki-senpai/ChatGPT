function previewImage(event) {
    const image = document.getElementById('preview');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.onload = function() {
        URL.revokeObjectURL(image.src); // free memory
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const resetButton = document.querySelector('button[type="reset"]');
    resetButton.addEventListener('click', () => {
        const image = document.getElementById('preview');
        image.src = ''; // Clear the image preview
    });

    // Clear form inputs and image preview when the page is reloaded
    const form = document.querySelector('form');
    form.reset();
    document.getElementById('preview').src = '';
});

function generatePoster() {
    const name = document.getElementById('name').value;
    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const imageSrc = document.getElementById('preview').src;

    if (!name || !breed || !age || !imageSrc) {
        alert('Please fill in all the details and select an image.');
        return;
    }

    document.getElementById('posterName').textContent = name;
    document.getElementById('posterBreed').textContent = breed;
    document.getElementById('posterAge').textContent = age;
    document.getElementById('posterImage').src = imageSrc;

    document.getElementById('poster').style.display = 'block';
}

function downloadPoster() {
    const poster = document.getElementById('poster');
    html2canvas(poster).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'lost-kitten-poster.png';
        link.click();
    });
}
