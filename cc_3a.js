// Customer Records Tracker

let customers = [
    {
        name: "Alex Turner",
        email: "alex.turner@email.com",
        purchases: ["Laptop", "Keyboard"]
    },
    {
        name: "Jasmine Lee",
        email: "jasmine.lee@email.com",
        purchases: ["Desk"]
    },
    {
        name: "Michael Davis",
        email: "michael.davis@email.com",
        purchases: []
    }
];

console.log("Starting customers:", customers);

// add a new customer
customers.push({
    name: "Taylor Morgan",
    email: "taylor.morgan@email.com",
    purchases: ["Notebook"]
});

console.log("After adding:", customers);

// remove the first customer
let firstRemoved = customers.shift();
console.log("Removed customer:", firstRemoved.name);

// update one customer's email
customers[0].email = "jasmine.updated@email.com";

// add a new purchase to another customer
customers[1].purchases.push("Headphones");

console.log("After updates:", customers);

// show final customer summary
customers.forEach(function(customer) {
    console.log(`${customer.name} | ${customer.email} | Total Purchases: ${customer.purchases.length}`);
});