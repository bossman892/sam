// Confetti Animation
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff4081', '#5d5dff', '#ff8a00', '#4CAF50', '#FFEB3B'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 15 + 5 + 'px';
        confetti.style.height = Math.random() * 15 + 5 + 'px';
        
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
        });
        
        container.appendChild(confetti);
        
        animation.onfinish = () => {
            confetti.remove();
        };
    }
}

// Birthday Surprise Button
document.getElementById('surprise-btn').addEventListener('click', function() {
    createConfetti();
    
    // Play birthday sound (simulated with alert for this example)
    alert("🎉 SURPRISE! 🎉\n\nHappy Birthday Tess! \nSending virtual confetti and cake your way!");
    
    // Animate the button
    this.style.animation = 'bounce 0.5s ease 3';
    setTimeout(() => {
        this.style.animation = '';
    }, 1500);
});

// Form Submission
document.getElementById('birthdayWishForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('senderName').value;
    const message = document.getElementById('senderMessage').value;
    
    if (name && message) {
        // In a real app, you would send this data to a server
        // For this example, we'll just show a success message
        alert(`Thank you ${name}! Your birthday message for Tess has been sent! 🎂`);
        
        // Reset form
        this.reset();
        
        // Create a new message card (temporarily - in a real app, this would come from a server)
        const messagesContainer = document.querySelector('.messages-container');
        const newMessage = document.createElement('div');
        newMessage.className = 'message-card';
        newMessage.innerHTML = `
            <div class="message-sender">From: ${name}</div>
            <p class="message-text">${message}</p>
        `;
        messagesContainer.prepend(newMessage);
        
        // Animate the new message
        newMessage.style.transform = 'scale(0.8)';
        newMessage.style.opacity = '0.5';
        
        setTimeout(() => {
            newMessage.style.transition = 'all 0.5s ease';
            newMessage.style.transform = 'scale(1)';
            newMessage.style.opacity = '1';
        }, 10);
    }
});

// Age counter animation
const ageElement = document.getElementById('years');
let age = 25; // Change this to Tess's actual age
ageElement.textContent = age;

// Fun age counter animation on load
setTimeout(() => {
    let currentAge = 0;
    const ageInterval = setInterval(() => {
        if (currentAge < age) {
            currentAge++;
            ageElement.textContent = currentAge;
        } else {
            clearInterval(ageInterval);
        }
    }, 100);
}, 1000);

// Add some floating emojis
function addFloatingEmojis() {
    const emojis = ['🎂', '🎉', '🎁', '🎈', '🥳', '✨', '❤️', '🥂'];
    const container = document.querySelector('.header');
    
    for (let i = 0; i < 8; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'absolute';
        emoji.style.fontSize = Math.random() * 30 + 20 + 'px';
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.top = Math.random() * 100 + '%';
        emoji.style.opacity = '0.7';
        emoji.style.zIndex = '-1';
        emoji.style.animation = `float ${Math.random() * 5 + 3}s infinite ease-in-out`;
        emoji.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(emoji);
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    addFloatingEmojis();
    
    // Start with a little confetti
    setTimeout(createConfetti, 500);
    
    // Add some interactive hover effects to message cards
    const messageCards = document.querySelectorAll('.message-card');
    messageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
        });
    });
});
