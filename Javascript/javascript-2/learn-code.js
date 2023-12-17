// var name ="jack";
// var age =23;

// var message="Hi, my name is " + name + " and I am " + age + " years old";

// var firstName = "pelumi";
// var lastName = "sidiq";
// var dateOfBirth = "25-05-2004";
// var age = 23;
// var profileImgUrl = "http://coolpicks.com/pelumisidiq.jpg";

// var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";

// console.log (loginWelcomeMessage);
// var sum = 10 + 15;
// var sub = 15 - 10;
// var mul = 10 * 3;
// var div = 10 / 3;
// var mod = 10 % 3;

// var message = "10 / 3 = 3 with a remainder of " + mod;

// var result = 10 * ((5 + 3) - 4);
// console.log (result);

// var myAccountBalance = 300;
// var nikeSBShoes = 799.23;
// var coupon = 500;
// == equal to
// === ??
// <= less than or equals to
// >= greater than or equals to
//  !==

// var age = 23;
// var joesAge = "23";

// if (age == joesAge) {
//     console.log("I'm the same age as joe!")
// }
// var val1 = 23;
// var val2 = "23";
// if (val1 !== val2) {
//     console.log("These are not the same!")
// }
// else {
//     console.log("One of these is like the other....");
// }


// if (nikeSBShoes <= myAccountBalance) {
//     myAccountBalance = myAccountBalance - nikeSBShoes
//     console.log("We just bought some dope shoes!");
//     console.log("Account Balance: " + myAccountBalance);
// }

// else if (nikeSBShoes-coupon <= myAccountBalance){
//     console.log("We just bought some dope shoes with a coupon!");
//     myAccountBalance = myAccountBalance - nikeSBShoes -coupon;
//     console.log("Account Balance: " + myAccountBalance);
// }

//  else {
//     console.log ("You to broke for shoes bra!");
// }

// if (1 === 1 && 2 === 2 || "joe" === "joe") {
//     console.log("These are both true!");
// }

// if (true && true) {
//     console.log("These are the same!");
// }

// if (1 === 3 || "joe" === "joe") {
//     console.log("one of these are true!");
// }

// var cat1 = 5;
// var cat2 = 10;
// var cat3 = 1;
// var cat3DisabledHandicap = true;

// if ((cat1 > cat2 && cat1 > cat3) && !cat3DisabledHandicap) {
//     console.log("Cat1 is the cutest!")
// } else if ((cat2 > cat1 && cat2 > cat3) && !cat3DisabledHandicap) {
//     console.log("cat2 is the cutest!")
// } else if ((cat3 > cat1 && cat3 > cat2) || cat3DisabledHandicap) {
//     console.log("cat3 is the cutest!")
// }

// var student1 = "Timmy";
// var student2 = "janessa";
// var student3 = "Arun";

var students = ["Timmy","Janessa","Arun"];

var naughtyList = [];
// var badKid = student[0];
naughtyList.push(students[0])

var index = naughtyList.indexOf("Timmy");
// and we can text this like 
// var index2 = students.indexOf("Arun")
if (index > -1) {
    naughtyList = naughtyList.splice(index, 1);
}

console.log(index);
