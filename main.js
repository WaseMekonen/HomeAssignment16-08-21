// Exercise 1: ////

// let FirstName = prompt("Please insert your Name:");
// let LastName = prompt("Please insert your Last Name:");

// function getLongestName (Fname,Lname){
//     if(Fname.length > Lname.length){
//         return Fname;
//     }
//     return Lname;
// }

// console.log( getLongestName (FirstName,LastName));

// Exercise 2: ////

// A:

// function isCharaExists(str){
//     if(str.indexOf("a")>-1){
//         console.log("Char is exists");
//     }
//     else{
//         console.log("Char doesn't exists");

//     }
// }

// console.log(isCharaExists(FirstName));

// B:

// function isApiExists(str){
//     if(str.indexOf("api")>-1){
//         console.log("string is exists");
//     }
//     else{
//         console.log("string doesn't exists");

//     }
// }

// console.log(isApiExists(LastName));

// Exercise 3: ////


// let fullName = prompt("Please insert your fullName:");

// A:
// function LenOfStr (str){
//     console.log(str.length);
// }

// console.log(LenOfStr(fullName));

// B:

// function isSpaceOnString (str){
//     if(str.indexOf(" ")>-1){
//         console.log("There is a space on string");
//     }
//     else{
//         console.log("There is no space on string");

//     }
// }

// console.log(isSpaceOnString(fullName));

// C:

// function getFirstName(str){
//     return str.substring(0,str.indexOf(" "));
// }

// console.log(getFirstName(fullName));

// D:

// function getLasttName(str){
//     return str.substring(str.indexOf(" ")+1);
// }

// console.log(getLasttName(fullName));


// Exercise 4: ////

// let strr= "HelloWorld"

// function isStringLong(str){
//     if(str.length >5){
//         return "string is long"
//     }
//     return "string is small"
// }
// console.log(isStringLong(strr));

// Exercise 5: ////

// let nameOfCountry=prompt("Insert a name of country")

// function isCountryShort(str){
//     if(str.length >3){
//         return "yes"
//     }
//     return "no"
// }
// console.log(isCountryShort(nameOfCountry));

// Exercise 6: ////

// let char1=prompt("insert Only one char")
// let string1 =prompt("insert some word"); 

// function isStringLongThan (str,char){
//     let indOfChr = str.indexOf(char);
//     if(str.length > 6){
//         return str;
//     }
//     return indOfChr;
// }

// console.log(isStringLongThan(string1,char1));

// Exercise 7: ////

// function returnStrOrChrIfChrExists(str,char){
//     if(str.indexOf(char)!=-1){
//         return str.indexOf(char);
//     }
//     return str;
// }

// console.log(returnStrOrChrIfChrExists(string1,char1));

// Exercise 8: ////

// let FirstName = prompt("Please insert your Name:");
// let LastName = prompt("Please insert your Last Name:");

// function getShortFullName (fName,lName){
//     return (`${fName[0].toLowerCase()}.${lName.toUpperCase()}`);
// }

// console.log(getShortFullName(FirstName,LastName));

// Exercise 9: ////

// let lastName1 = prompt("Please insert your the first Last Name:");
// let lastName2 = prompt("Please insert your the second Last Name:");

// function getTheLongest(lName1,lName2){
//     if(lName1.length>lName2.length){
//         return lName1;
//     }
//     console.log(lName2.toLowerCase()); 
// }

// console.log(getTheLongest(lastName1,lastName2));

// Exercise 10: ////

// let char1=prompt("please insert One char!");
// let name1 =prompt("please insert your name:")

// function isChrInName(char,name){
//     if(name.indexOf(char)!=-1){
//         return name;
//     }
//     console.log("Char is not Exists!!");
// }

// console.log(isChrInName(char1,name1));

