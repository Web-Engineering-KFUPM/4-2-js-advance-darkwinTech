/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const Student={
    first: "Aleen",
    last: "AlQarni",
    _gpa: 3.8,
    get fullName() {
        return this.first + " " + this.last;
    },
    get gpa() {
        return this._gpa;
    },
    set UpdateGpa(value) {
        if (value >= 0 && value <= 4) {
            this._gpa = value;
        }
    }
};
console.log("Student Full Name: ", Student.fullName);
console.log("Student GPA: ", Student._gpa);
Student.UpdateGpa = 3.9; // update valid GPA
console.log("Updated GPA: ", Student._gpa);
Student.UpdateGpa = 5.0; // invalid update

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courseTitles = {
    SWE363:"WEB DEVELOPMENT",
    MATH201:"CLACULAS3",
    ICS321:"DATABASES"
}
console.log("courseTitles");
for (const key in courseTitles) {
    console.log(`${key} → ${courseTitles[key]}`);
}


// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const str = "KFUPM";
console.log("String is: ",str);
console.log("String Length: ",str.length);
console.log("First Char: ",str.charAt(0));
console.log("Third Char: ",str.charAt(2));

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
const today = new Date();
console.log("Today ", today);
console.log("Today's Date", today.getDate());
console.log("Month: ", today.getMonth()+1);
console.log("Year: ", today.getFullYear());


// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const nums = [10, 20, 30, 40, 50, 60, 70, 80, 100];
const min = Math.min(...nums);
const max = Math.max(...nums);
console.log("Numbers: ",nums);
console.log("Min: ",min);
console.log("Max: ",max);
// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/

function findMax(arr){
    if (arr.length === 0){
        throw new Error("Array is EMPTY!");
    }
    return Math.max(...arr);
}
try {
  console.log("Max of array is: ",findMax([10, 20, 30, 40, 50, 60, 70, 80, 100]));
  console.log("Max value (empty array): ",findMax([]));
}
catch (e){
    console.log("Caught error: ",e.message);
}
finally {
    console.log("Finally always excutes");
}

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/
const words = ["ban", "babble", "make", "flab"];
const pattern = /ab/;

console.log("Words containing 'ab':");
words.forEach(word => {
    if (pattern.test(word)) {
        console.log(`${word} matches!`);
    }
});



// End of Advance JavaScript Lab — good luck!
