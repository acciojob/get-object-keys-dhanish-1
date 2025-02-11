const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function with the student object
console.log(getKeys(student)); // Output: ["name"]

// More comprehensive testing (for your understanding and potential Cypress tests)

const student2 = {
  name: "Alice",
  age: 20,
  city: "New York"
};

console.log(getKeys(student2));