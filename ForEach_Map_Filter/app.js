const array = [1,2,3,4,5,6,7,8,9,10];
const arr2 = ["colt", "matt", "joe", "Tim", "Test"]
let arr3 = (
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ])
let arr4 =(
    [
        {first: 'Elie', last:"Schoppik"},
        {first: 'Tim', last:"Garcia"},
        {first: 'Matt', last:"Lane"},
        {first: 'Colt', last:"Steele"}
    ])


let arr5 =(
        [
          {first: 'Elie', last:"Schoppik"},
          {first: 'Tim', last:"Garcia", isCatOwner: true},
          {first: 'Matt', last:"Lane"},
          {first: 'Colt', last:"Steele", isCatOwner: true}
        ])
        
        
let test = {}
const word = "aaaiiiooouuueee";


//doubleValues and doubleValuesWithMap
const doubleValues = array.map(function(num)
{
   return num * 2;
})

//onlyEvenValues
const onlyEvenValues = array.filter(function(num)
{
    return num % 2 == 0;
})

//showFirstAndLast
const showFirstAndLast = arr2.map(function(num)
{
   return num[0] + num[num.length-1];
})

//addKeyAndValue
const addKeyAndValue = arr3.map(function(num)
{
   return Object.assign(num, {'Title': 'instructer'}) ;
})
//vowelCount
function vowelCount(string)
{
    const vowels = "aeiou"
    let aw = false;
    let ew = false;
    let iw = false;
    let ow = false;
    let uw = false;

    for(let i = 0; i < string.length; i++)
    {
        if (string[i].toLowerCase() === vowels[0])
        { 
            if (aw == false){temp = 0}
                
                test.a = temp + 1;
                temp++;
               aw = true;
         }

         if (string[i].toLowerCase() === vowels[1])
        { 
            if (ew == false){temp = 0}
                
                test.e = temp + 1;
                temp++;
               ew = true;
         }

         if (string[i].toLowerCase() === vowels[2])
        { 
            if (iw == false){temp = 0}
                
                test.i = temp + 1;
                temp++;
               iw = true;
         }

         if (string[i].toLowerCase() === vowels[3])
        { 
            if (ow == false){temp = 0}
                
                test.o = temp + 1;
                temp++;
               ow = true;
         }

         if (string[i].toLowerCase() === vowels[4])
        { 
            if (uw == false){temp = 0}
                
                test.u = temp + 1;
                temp++;
               uw = true;
         }

    }
    return test;
}

//valTimesIndex
const valTimesIndex = array.map(function(num, i)
{
   return num * i;
})

//extractKey
const extractKey = arr3.map(function(num)
{
   return num.name;
})

//extractFullName
const extractFullName = arr4.map(function(num)
{
   return (num.first +" "+ num.last);
})

//filterByValue
const filterByValue = arr5.filter(function(num)
{
    return num.isCatOwner;
})

//find
function find (arr, val) 
{
    for(let i = 0; i <= arr.length; i++)
    {
        if(arr[i] == val)
        {
            return arr[i];
        }
    }
}

