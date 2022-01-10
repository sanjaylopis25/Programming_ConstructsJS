//Unit Conversion

// a. 1ft = 12 in then 42 in = ? ft
let inch = 12;
let feet =1/inch;
let xinch= 42;
let ConvertInchToFeet =xinch*feet;
console.log(ConvertInchToFeet);

// b. Rectangular Plot of 60 feet x 40 feet in meters
let lengthinfeet=60;
let breadthinfeet=40;
let lengthinmeters=0.3048*lengthinfeet;
let breadthinmeters=0.3048*breadthinfeet;
console.log(lengthinmeters);
console.log(breadthinmeters);

// c. Calculate area of 25 such plots in acres
let Areainsqmt=lengthinmeters*breadthinmeters;
let AreainAcres= 0.000247105*Areainsqmt;
let AreaOf25plots= 25*AreainAcres;
console.log(AreaOf25plots);
