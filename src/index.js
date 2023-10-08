// Define the default conversion type
var conversionType = 1;

// Function to update the conversionType and the unitSelector options
function updateConversionType() {
  const unitSelector = document.getElementById("unitSelector");
  const selectedUnit = unitSelector.value;

  // Update the conversionType based on the selected option
  switch (selectedUnit) {
    case "lb":
      conversionType = 1;
      break;
    case "kg":
      conversionType = 2;
      break;
    case "miles":
      conversionType = 3;
      break;
    case "km":
      conversionType = 4;
      break;
    case "celsius":
      conversionType = 5;
      break;
    case "fahrenheit":
      conversionType = 6;
      break;
    default:
      // Handle any other cases or errors here
      break;
  }

  // Update the unitSelector options based on the selected conversion type
  const distanceOptions = unitSelector.querySelectorAll('optgroup[label="Distance"] option');
  const temperatureOptions = unitSelector.querySelectorAll('optgroup[label="Temperature"] option');

  switch (conversionType) {
    case 3: // Distance
      distanceOptions.forEach((option) => {
        option.disabled = false;
      });
      temperatureOptions.forEach((option) => {
        option.disabled = true;
      });
      break;
    case 5: // Temperature
      distanceOptions.forEach((option) => {
        option.disabled = true;
      });
      temperatureOptions.forEach((option) => {
        option.disabled = false;
      });
      break;
    default:
      // Enable all options for other conversion types
      distanceOptions.forEach((option) => {
        option.disabled = false;
      });
      temperatureOptions.forEach((option) => {
        option.disabled = false;
      });
      break;
  }
}

// Attach the event listener to the select element
const unitSelector = document.getElementById("unitSelector");
unitSelector.addEventListener("change", updateConversionType);

// Call the updateConversionType function initially to set the initial conversionType and options
updateConversionType();

function setConversion(val) {
  switch (val) {
    //lb to kg
    case 1:
      conversionType = 1;
      break;
    //kg to lb
    case 2:
      conversionType = 2;
      break;
    //mile to km
    case 3:
      conversionType = 3;
      break;
    //km to mile
    case 4:
      conversionType = 4;
      break;
    //c to f
    case 5:
      conversionType = 5;
      break;
    //f to c
    case 6:
      conversionType = 6;
      break;
  }
}

function convertToArray(arr) {
  //take in user input and split into an array of float values
  console.log(arr);
  let array = arr.split(',').map(Number);
  console.log(array);

  convertTo(array, conversionType);
}

function convertTo(array, conversionType) {

  let newArray = [];

  switch (conversionType) {
    //lb to kg
    case 1:
      console.log(array);
      for (let num of array) {
        console.log(num);
        num = (num * 0.453592).toFixed(2);
        console.log(num);
        newArray.push(num);
      };
      //set text of results to newArray
      document.getElementById("results").innerHTML = newArray;
      console.log(newArray);
      break;
    //kg to lb
    case 2:
      console.log(array);
      for (let num of array) {
        console.log(num);
        num = (num * 2.20462).toFixed(2);
        console.log(num);
        newArray.push(num);
      };
      //set text of results to newArray
      document.getElementById("results").innerHTML = newArray;
      console.log(newArray);
      break;
    //mile to km
    case 3:
      console.log(array);
      for (let num of array) {
        console.log(num);
        num = (num * 1.60934).toFixed(2);
        console.log(num);
        newArray.push(num);
      };
      //set text of results to newArray
      document.getElementById("results").innerHTML = newArray;
      console.log(newArray);
      break;
    //km to mile
    case 4:
      console.log(array);
      for (let num of array) {
        console.log(num);
        num = (num * 0.621371).toFixed(2);
        console.log(num);
        newArray.push(num);
      };
      //set text of results to newArray
      document.getElementById("results").innerHTML = newArray;
      console.log(newArray);
      break;
    //c to f
    case 5:
      console.log(array);
      for (let num of array) {
        console.log(num);
        num = ((num * 9 / 5) + 32).toFixed(2);
        console.log(num);
        newArray.push(num);
      };
      //set text of results to newArray
      document.getElementById("results").innerHTML = newArray;
      console.log(newArray);
      break;
    //f to c
    case 6:
      console.log(array);
      for (let num of array) {
        console.log(num);
        num = ((num - 32) * 5 / 9).toFixed(2);
        console.log(num);
        newArray.push(num);
      };
      //set text of results to newArray
      document.getElementById("results").innerHTML = newArray;
      console.log(newArray);
      break;
  }
}
