import subTaskFormula from './formulas/subTaskFormula';

// Define a function that takes a JSON object as an argument
function generateFormula(json: any): string {
  // Initialize an empty formula string
  let formula = '';

  // Iterate over the keys in the JSON object
  for (const key in json) {
    // Check if the key is "orElse"
    if (key === 'orElse') {
      // If the key is "orElse", add the corresponding value to the formula string
      // and break out of the loop
      formula += `'${json[key]}')`;
      break;
    }

    // Add the key and the first element of the array to the formula string
    formula += `if(${json[key][0]}, '${json[key][1]}', `;
  }

  // Close any remaining brackets in the formula string
  for (let i = 0; i < Object.keys(json).length - 2; i++) {
    formula += ')';
  }

  // Return the generated formula string
  return formula;
}

console.log(generateFormula(subTaskFormula));
