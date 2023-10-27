// Select all cards with the specified class
const cards = document.querySelectorAll(".contact .services-card");

// Define a function to add the click event listener to each card
function addClickListener(card) {
    card.addEventListener('click', () => {
        // Create a text area element
        const textArea = document.createElement("textarea");

        // Extract the content of the clicked card
        const cardContent = card.querySelector("p").textContent;

        if (cardContent) {
            // Set the text area's value to the card's content
            textArea.value = cardContent;

            // Append the text area to the document
            document.body.appendChild(textArea);

            // Select and copy the text inside the text area
            textArea.select();
            document.execCommand('copy');

            // Remove the text area from the document
            document.body.removeChild(textArea);
        }
    });
}

// Add the click event listener to each card
cards.forEach(addClickListener);