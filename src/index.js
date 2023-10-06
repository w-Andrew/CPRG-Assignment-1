//metric <--> imperial conversions
//Weight, Distance, Tempurature
//lbs to kg, miles to km, celsius to fahrenheit
//Must be able to convert single value, as well as array

// mile to km         (val *= 1.60934).toFixed(2);
//  km to mile        (val *= 0.621371).toFixed(2);

//conversion function

var conversionType = 1;

setConversion = (val) => {
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

convertToArray = (arr) => {
    //take in user input and split into array of float values
    console.log(arr);
    let array = arr.split(',').map(Number);
    console.log(array);

    convertTo(array, conversionType);
}

convertTo = (array, conversionType) => {

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
                num = (val *= 0.621371).toFixed(2);
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
                num = ((num * (9 / 5) + 32)).toFixed(2);
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
                num = ((num - 32) * (5 / 9)).toFixed(2);
                console.log(num);
                newArray.push(num);
            };
            //set text of results to newArray
            document.getElementById("results").innerHTML = newArray;
            console.log(newArray);
            break;

    }
}