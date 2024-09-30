// UnhideAllItems.js

function unhideAllItems() {
    const allItems = getAllItems(); // Function to get all items in the game
    allItems.forEach(item => {
        if (item.isHidden) {
            item.isHidden = false; // Set the hidden property to false
        }
    });
    console.log("All hidden items have been unhidden.");
}

// Ensure this function runs when the game starts or at an appropriate event
document.addEventListener("DOMContentLoaded", unhideAllItems);
