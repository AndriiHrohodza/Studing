/*Task 1*/
var band = ["suicideboys", "ramirez"];// Created my favorite band(1)
band.push('Oleg Vinnik');// Added Oleg Vinnik to my band(2)
band.shift();//Delated first element(3)
band.unshift("rap", "dub");//added 2 favorite types of music(4)
console.log(band);//(5)
console.log(band.length);//(6)

/*Task 2*/
var arr = ["bmw", "nissan", "audi", "Volvo", "Jeep"];//Create array with 5 elements(1)
var newArr = arr.slice(2);//Delete 2 elements(2)
newArr.unshift("Mers");//Added Mers element(3)
console.log(newArr);//(4)
newArr[3] = "Toyota";//(5)
console.log(newArr.length);//(6)
console.log(newArr);//(7)

/*Split*/
var x = "Hello.im.Andrew";
var arr = x.split(".");
console.log(arr);

/*Join*/
var x = ["one", "two", "three"];
var y = x.join(",");
console.log(y);

/*Splice*/
var z = ["one", "two", "three"];
z.splice(0, 1);
console.log(z);

var x = ["one", "two", "three"];
x.splice(0, 2, "Hello", "World");
console.log(x);

var y = ["one", "two", "three"];
y.splice(0, 0, "Hello", "World");
console.log(y);

var z = [1, 2, 3, 7, 8];
z.splice(-2, 0, 4, 5, 6);
console.log(z);

/*Slice*/
var arr = [5, 4, 3, 2, 1];
console.log('Old array ' + arr);
var arr2 = arr.slice(1, 3);
console.log("New array with slice " + arr2);

var arr = [5, 4, 3, 2, 1];
arr.sort();
console.log(arr);

/*Sort*/
var g = [2, 6, 4, 99, 103,14];
var h = g.sort(function(a, b) {return a - b});
console.log(h);

var g = [2, 6, 4, 99, 103,14];
var h = g.sort(function(a, b) {return b - a});
console.log(h);

/*Reverse*/
var x = [1, 2, 5, 7];
var y = x.reverse();
console.log("Old array " + x + '\n' + "New array reversed " + y);

/*indexOf*/
var x = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
var y = x.indexOf("Apple", 2);
console.log(y);

/*lastIndexOf*/
var z = ["Banana", "Orange", "Apple", "Mango", "Banana", "Apple"];
var f = z.lastIndexOf("Orange", 3);
console.log(f);

/*Task 3*/
var arr = [1, 9, 6, -12, -4, 5];
var sortArr = arr.sort(function(a, b){return b - a});
console.log(sortArr);

/*Task 4*/
var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.sort();//sorted by Alphabet
console.log(arrSorted);