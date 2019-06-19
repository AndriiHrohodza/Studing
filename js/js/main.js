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


