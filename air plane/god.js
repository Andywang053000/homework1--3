// Select all cards
const cards = document.querySelectorAll('.card');

// Add click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        const airlineName = card.querySelector('h3').textContent;
        alert(`You clicked on ${airlineName}!`);
    });
});

// Add hover effect with JavaScript for enhanced experience
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'all 0.3s';
    });

    card.addEventListener('mouseout', () => {
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        card.style.transform = 'scale(1)';
    });
});

// Scroll to top button functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '⬆️';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.backgroundColor = '#0077b6';
scrollToTopButton.style.color = 'white';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.padding = '10px 15px';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.display = 'none';
document.body.appendChild(scrollToTopButton);

// Show button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to top functionality
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
