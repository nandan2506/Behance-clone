document.querySelector('.search-bar').addEventListener('input', function(e) {
    let searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.job-card').forEach(card => {
        let jobTitle = card.querySelector('strong').innerText.toLowerCase();
        if (jobTitle.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const newJobButton = document.querySelector('.new-job');
    const jobOptions = document.getElementById('job-options');
    const closeButton = document.querySelector('.close-btn');

    newJobButton.addEventListener('click', () => {
        jobOptions.classList.toggle('show'); // Toggle visibility on button click
    });

    closeButton.addEventListener('click', () => {
        jobOptions.classList.remove('show'); // Close when clicking the close button
    });

    // Optional: Close the card when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!jobOptions.contains(event.target) && !newJobButton.contains(event.target)) {
            jobOptions.classList.remove('show');
        }
    });
});