// Function to create a product object from user input
function createProduct() {
    // Get product details from user input
    let name = prompt("Enter the product name:");
    let price = parseFloat(prompt("Enter the product price:")); // Convert input to number
    let id = prompt("Enter the product ID:");

    // Create the product object
    let product = {
        price: price, // Store price as a number
        name: name,   // Store name as a string
        createdAt: new Date().toLocaleString(), // Store current date & time
        id: id        // Store ID as a string
    };

    // Print the product object to the console
    console.log(product);
}

// Call the function to execute
createProduct();
