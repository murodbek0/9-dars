// 1 misol

// function createArray(arg) {
//   let array = [];
//   let i = 1;

//   while (array.length <= 5) {
//     array.push(i);
//     i++;
//   }
//   return array;
// }
// console.log(createArray());

// 2 misol

// function a(arg) {
//     let array = [];

//     array.push(12);
//     array.push('salom');
//     array.push('hayr');

//     array.pop();
//     let restString = array.join('')
//     return restString ;
// }
// console.log(a());

// 3 misol

// function a(arg) {
//   let array = [];

//   array.unshift(12);
//   array.unshift(10);
//   array.unshift("salom");
//   array.unshift("hayr");

//   array.reverse();
//   let arrayLength = array.length;
//   return arrayLength;
// }
// console.log(a());

// 4 misol

// function a(arg) {
//   let array = [];
//   array.unshift(10);
//   array.unshift('salom');

//   array.shift();

//   let restString = array.join(",");
//   return restString;
// }
// console.log(a());

// 5 misol

// function b(arg) {
//     let a = arg;
//     a.pop();
//     let sum = a.length;
//     console.log(sum);
//     console.log((a[0]));
//     return a;

// }
// console.log(b([1,2,3,4,5]));

// 6 misol

// let myArray = [12,19,17,3];

// myArray.push(20);

// let lastelimet = myArray.at(-1);

// let  lastelimetAsString = lastelimet.toString();

// console.log(lastelimetAsString);

// 7 misol

// 8 misol

// 9 misol

// function a(array) {
//   array.push(1);
//   array.unshift(8);
//   array.push(10);

//   array.reverse();

//   let length = array.length;
//   let resultString = array.join(",");
//   return {
//      length,
//      resultString
//   };
// }
// let myArra = [1,2,3,4,5];
// let result = a(myArra);

// console.log(result);

// 10 misol

// function a(array) {
//     array.pop();
//     array.shift();

//     let remainingLenght = array.length;

//     array.reverse();

//     return{
//         remainingLenght:remainingLenght,
//         reversesedArray:array
//     };

// }
// let myArray = [1,2,3,4,5];

// let result = (a(myArray))
// console.log(result);

// 11 misol
// function a(array) {
//   array.reverse();

//   let resultString = array.toString();
//   let length = resultString.length();
//   return length;
// }
// let myArray = [1, 2, 3, 4, 5];

// let result = a(myArray);

// console.log(result);

// 12 misol

// function a(array1,array2) {
//     let newArray = array1.concat(array2);
//     let slicedArray = newArray,slice (1,newArray,length);
//     let length = slicedarray.length;
//     return length;

// }
// let array1 = [1,2,3];
// let array2 = [4,5,6];

// let result = a(array1,array2);
// console.log(result);

// 13 misol

// function a(array) {
//     array.splice(1,2);

//     let resultString = array.join(',');

//     let length = resultString.length;

//     return{
//      resultString:resultString,
//      length:length

//     };
// }
// let myArray = [1,2,3,4,5];
// let result = a(myArray);
// console.log(result);

// 14 misol

// function a(array) {
//   let slicedArray = array.slice(3);
//   let reversesedArray = slicedArray.reverse();
//   return reversesedArray;
// }
// let myArray = [1,2,3,4,5,6,7,8,9,10];

// let result = a(myArray);
// console.log(result);

// 15 misol

// function a(array) {
//     let flattenedArray = array.flat();
//     let lastelimet = flattenedArray.at(-1);
//     return lastelimet;
    
// }

// let myArray = [1,2,3,4,5,6,7,8,9];
// let result = a(myArray);
// console.log(result);