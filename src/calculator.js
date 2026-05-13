function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// সবগুলো ফাংশন একসঙ্গে এক্সপোর্ট করা হলো
module.exports = {
  add,
  subtract,
  multiply,
  divide
};

