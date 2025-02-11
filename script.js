// Create the student object
const student = {
  name: "John"
};

// Adding getKeys method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Testing the function with the student object
console.log(student.getKeys()); // Output: ["name"]
