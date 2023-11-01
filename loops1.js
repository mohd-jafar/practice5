console.log("loops")

console.log("even no.s")
//1 even numners
for(let i = 0; i<=100;i++)
{
    if(i%2==0)
    {
    console.log(i)
    }
}

//2 odd numbers
console.log("odd no.s")

for(let i = 0; i<=100;i++)
{
    if(i%2!=0)
    {
    console.log(i)
    }
}

// 3

// var sum=0
// for(let i = 0; i<=2;i++)
// {
//     sum=sum+i     0+1  
//                   1+2
// }
// console.log(sum)
console.log("sum of aal no.s")
var sum=0
for(let i = 0; i<=100;i++)
{
    sum=sum+i      
                  
}
console.log(sum)

// 4

// for(var i=0; i<=100; i++)
// {
//     if(i%2==0)
    
// }


// for(let i=0; i<=100; i++){
//     sum=sum+i;
//     if(i%2==0);
// }
// console.log(sum)

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

console.log("Sum of even numbers", sumEven);
console.log("Sum of odd numbers", sumOdd);

let sumEvena = 0;
let sumOddb = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvena += i;
    } else {
        sumOddb += i;
    }
}

const result = [sumEvena, sumOddb];
console.log(result);

  const countries = [
    "ALBANIA",
    "BOLIVIA",
    "CANADA",
    "DENMARK",
    "ETHIOPIA",
    "FINLAND",
    "GERMANY",
    "HUNGARY",
    "IRELAND",
    "JAPAN",
    "KENYA"
  ];
  
  let longestCountry = '';
  
  for (let i = 0; i < countries.length; i++) {
    const countryName = countries[i];
    if (countryName.length > longestCountry.length) {
      longestCountry = countryName;
    }
  }

  const countryLengths = [];

for (let i = 0; i < countries.length; i++) {
  countryLengths.push(countries[i].length);
}

console.log(countryLengths); 
  
  console.log("Country with the most characters:", longestCountry);


  const allcountries = [
    "ALBANIA",
    "BOLIVIA",
    "CANADA",
    "DENMARK",
    "ETHIOPIA",
    "FINLAND",
    "GERMANY",
    "HUNGARY",
    "IRELAND",
    "JAPAN",
    "KENYA"
  ];

//   const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

const resulta = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    resulta.push(countries[i]);
  }
}

console.log("5 char",resulta); // Output: ["JAPAN", "KENYA"]





// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

const reversedCountries = [];

for (let i = countries.length - 1; i >= 0; i--) {
  reversedCountries.push(countries[i]);
}

console.log(reversedCountries); // Output: ["KENYA", "JAPAN", "IRELAND", "HUNGARY", "GERMANY", "FINLAND", "ETHIOPIA", "DENMARK", "CANADA", "BOLIVIA", "ALBANIA"]





// const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

// const countryLengths = [];

// for (let i = 0; i < countries.length; i++) {
//   countryLengths.push(countries[i].length);
// }

// console.log(countryLengths); // Output: [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

