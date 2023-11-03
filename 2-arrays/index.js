/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * Initialise a variable called fruits one to the values: orange, apple, banana
 * Then Initialise a variable called fruits two to the values plum, mango. 
 * Then concatenate the two arrays with the fruits one first then the fruits two
 * Console log and Write a single line comment as to what will be displayed
 */
var fruitsOne = ["orange", "apple", "banana"];
var fruitsTwo = ["plum", "mango"];
console.log(fruitsOne.concat(fruitsTwo)); //[ 'orange', 'apple', 'banana', 'plum', 'mango' ]






/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
  * initialise the variable `my schedule` to a 2-Dimensional array containing the values below:
 * 
 *          column[0]   column[1]                           column[2]
 * Row 1    COMP 1118   Communications                      3.0
 * Row 2    MDIA 1170   Fundamentals Frontend               3.0
 * Row 3    MDIA 1620   Basic Systems Operations and Prog   3.0
 * Row 4    MDIA 1106   Design                              3.0
 * 
 * 
 * Then based on the values stored in the schedule 2D array, console log out the following sentence (use concatenation):
 * I am taking _MDIA 1118, _Communication_ that is worth _3.0_ credits
 * 
 */
var mySchedule = [
    ["COMP 1118", "Communications", 3.0],
    ["MDIA 1170", "Fundamentals Frontend", 3.0],
    ["MDIA 1620", "Basic Systems Operations and Prog", 3.0],
    ["MDIA 1106", "Design", 3.0]
]
console.log("I am taking " + mySchedule[0][0] + " " + mySchedule[0][1] + " that is worth " + mySchedule[0][2].toFixed(1) + " credits"); //I am taking COMP 1118 Communications that is worth 3.0 credits