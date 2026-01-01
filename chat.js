document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.querySelector('.chat-toggle');
    const chatContainer = document.querySelector('.chat-container');
    const closeChat = document.querySelector('.close-chat');
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendMessage = document.getElementById('sendMessage');
    const quickReplies = document.querySelectorAll('.quick-reply');
    
    // Toggle chat visibility
    chatToggle.addEventListener('click', function() {
        chatContainer.classList.toggle('active');
    });
    
    closeChat.addEventListener('click', function() {
        chatContainer.classList.remove('active');
    });
    
    // Send message function
    function sendUserMessage(message) {
        if (message.trim() === '') return;
        
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(userMessage);
        
        // Clear input
        userInput.value = '';
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot';
            botMessage.innerHTML = `<p>${botResponse}</p>`;
            chatMessages.appendChild(botMessage);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
    
    // Handle send button click
    sendMessage.addEventListener('click', function() {
        const message = userInput.value;
        sendUserMessage(message);
    });
    
    // Handle Enter key
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const message = userInput.value;
            sendUserMessage(message);
        }
    });
    
    // Quick replies
    quickReplies.forEach(reply => {
        reply.addEventListener('click', function() {
            const message = this.textContent;
            sendUserMessage(message);
        });
    });
    
    // Simple bot response logic
    function getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();
        
        if (userMessage.includes('book') || userMessage.includes('appointment')) {
            return "Great! Let's book your appointment. What date are you looking for? You can also book directly on our website: <a href='#contact' style='color: var(--neon-cyan)'>Book Now</a>";
        } else if (userMessage.includes('price') || userMessage.includes('cost')) {
            return "Our services start at $150 and go up to $500 for premium packages. The exact price depends on the service and your specific needs. Would you like details about a particular service?";
        } else if (userMessage.includes('advice') || userMessage.includes('tip')) {
            return "Here's a pro tip: Always prep your skin with moisturizer before applying makeup for a flawless finish! For more personalized advice, book a consultation with one of our artists.";
        } else if (userMessage.includes('hello') || userMessage.includes('hi')) {
            return "Hi there! 💖 How can I help you today? You can ask about bookings, pricing, or makeup advice.";
        } else {
            return "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to ask about our services or check out our portfolio.";
        }
    }
});