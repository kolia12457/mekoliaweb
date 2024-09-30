// UnhideLiquidLight.js

function unhideLiquidLight() {
    const items = getItems(); // Function to get all items (adjust if necessary)

    // Loop through items and unhide Liquid Light
    items.forEach(item => {
        if (item.name === "Liquid Light" && item.isHidden) {
            item.isHidden = false; // Unhide the item
            console.log("Liquid Light has been unhidden.");
        }
    });
}

// Run the function when the game loads
document.addEventListener("DOMContentLoaded", unhideLiquidLight);
