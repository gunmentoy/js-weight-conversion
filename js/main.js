// making sure output cards don't show up on load
document.getElementById('output').style.visibility = 'hidden';

// get weight input
document.getElementById('lbsInput').addEventListener('input', function(e){
  // toggle visibility after input received
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  // output grams
  document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;

  // output kilograms
  document.getElementById('kgOutput').innerHTML = lbs/2.2046;

  // output ounces
  document.getElementById('ozOutput').innerHTML = lbs*16;
});