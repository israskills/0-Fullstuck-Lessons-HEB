// Function to create a product object with validation
function createProduct() {
    let name = prompt("Enter the product name:");
    
    // Validate name (should be a non-empty string)
    if (typeof name !== "string" || name.trim() === "") {
        console.log("Invalid name. Please enter a valid product name.");
        return;
    }

    let price = parseFloat(prompt("Enter the product price:"));

    // Validate price (should be a number greater than 0)
    if (isNaN(price) || typeof price !== "number" || price <= 0) {
        console.log("Invalid price. Please enter a valid number greater than 0.");
        return;
    }

    let id = prompt("Enter the product ID:");

    // Validate ID (should be a non-empty string)
    if (typeof id !== "string" || id.trim() === "") {
        console.log("Invalid ID. Please enter a valid product ID.");
        return;
    }

    // Create the product object
    let product = {
        price: price, // Store price as a number
        name: name,   // Store name as a string
        createdAt: new Date().toLocaleString(), // Store current date & time
        id: id        // Store ID as a string
    };

    // Print the product object to the console
    console.log("Product created successfully:", product);
}

// Call the function
createProduct();
