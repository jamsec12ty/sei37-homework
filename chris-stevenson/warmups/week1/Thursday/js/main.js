// ## Warmup - Raindrops
// ​
// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
// ​
// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
// ​
// ### Examples
// - 28 has 7 as a factor.
//   - In raindrop-speak, this would be a simple "Plong".
// - 1755 has 3 and 5 as factors.
//   - In raindrop-speak, this would be a "PlingPlang".
// - 34 has neither 3, 5 nor 7 as a factor.
//   - Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
// Collapse

const plingPlangPlong = function(factor){
  if(factor === 0){
    return 0;
  }
  let output = '';
  if (factor % 3 === 0) {
    output += 'Pling';
  }
  if (factor % 5 === 0){
    output += 'Plang';
  }
  if (factor % 7 === 0){
    output += 'Plong';
  }
  if (output === ''){
    output += factor.toString();
  }
  return output;
}

plingPlangPlong(28);
plingPlangPlong(1755);
plingPlangPlong(34);
