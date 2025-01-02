//Nullish Coalescing operator '??'

//a ?? b
// This means that if a is defined, then a but if it is not then b

// result = a ?? b // This is the same as this.
// result = (a !== null && a !== undefined) ? a : b;

//Example

// let user; //undefined
// alert (user ?? "Anonymous"); //Anonymous

// let user = "Kunle"; //defined
// alert (user ?? "Anonymous"); //Kunle //(because user is not null/undefined)

//A user that didn't fill the fname and lname

/* let fname = null;
let lname = null;
let nick = "Agbacoder";

alert(fname ?? lname ?? nick ?? "Doe"); //Agbacoder */

/* let fname = null;
let lname = null;
let nick = null;

alert(fname ?? lname ?? nick ?? "Doe" ); //Doe */

/* let fname = "Odejeran";
let lname = null;
let nick = "Agbacoder";

alert(fname ?? lname ?? nick ?? "Doe"); //Odejeran the first defined value is returned */

//Comparison with ||/OR
// || was available from the beginning until ?? was introduced.
// || - returns first truthy value WHILE
// ?? - returns the first defined value. 
// This means that || doesn't distinguish between false, 0 an empty string "" and null/undefined.
//  Since they are all falsy values

/* //For example 
let height = 0;
alert(height || 200); //200
alert(height ?? 200); //0 */

//Precedence
/* //*Use parentheses when using ??, ? and = in an expression
let height = null;
let width = null;
//let area = (height ?? 400) * (width ?? 5);
//alert(area); //2000
*/
 
/* //without parentheses 
let area = height ?? 400 * width ?? 50;
//this is viewed as this:
let area = height ?? (400 * width) ?? 50 // because * has higher parentheses */

/* //when using ?? with || or && it is "forbidden" not to use parentheses
// let x = 2 && 3 ?? 4; //Syntax error

let x = (2 && 3) ?? 4;
alert(x); */

//Up Next - Loopsies :)