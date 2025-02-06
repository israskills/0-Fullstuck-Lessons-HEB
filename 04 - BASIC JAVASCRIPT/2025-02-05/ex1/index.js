// Step 1: Create an object that describes a car
let car = {
    type: "Sedan",
    engine: "V6",
    color: "Blue",
    doors: 4,
    model: "Toyota Camry",
    year: 2020,
    km: 50000
};

// Step 2: Print the current car color
console.log("Original car color:", car.color);

// Step 3: Change the car color to 'red'
car.color = "Red";

// Step 4: Print the entire car object
console.log("Updated car details:", car);

// Step 5: Create a function that adds more KM to the car
function addKm(amount) {
    car.km += amount; // Increase the car's km by the given amount
    console.log(`New km after adding ${amount}:`, car.km);
}

// Step 6: Test the function by adding 30 km
addKm(30);
