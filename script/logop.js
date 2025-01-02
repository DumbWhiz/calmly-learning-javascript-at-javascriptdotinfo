

// Logical Operations


// ||(OR)

// alert (true || true ); //true
// alert (false || true ); //true
// alert (true || false ); //true
// alert (false || false ); //false

//&& (AND)

// alert (true && true ); //true
// alert (false && true ); //false
// alert (true && false ); //false
// alert (false && false ); //false

//multiple &&&s //checked


//! (NOT)
// alert (!true); //false
// alert (!0); //true

//Double !! - Sometimes used to convert value to boolean type

// Tasks

// alert (null || 2 || undefined); //2

// alert ( alert (1) || 2 || alert (3) ); //3 correction // 1&2

// alert (1 && null && 2); //null

// alert(  alert(1) &&  alert(2) ); //1, 2, 2 //correction 1 & undefined because undefined is a falsy value

//OR AND OR

// alert( null || 2 && 3 || 4 ); //4 correction 3


/* let login = prompt ('Who is There?');
if (login === 'Admin'){
 
   let pass = prompt ('password?', '');
 
 if (pass === 'TheMaster') {
    alert ('Welcome!');
 } else if (pass === '' || pass === null) {
    alert('cancelled');
} else {
    alert('Wrong Password')
}

}  else if (login === '' || login === null){
    alert ('Cancelled')
}  else {
    alert('I do not know you')
} 
*/
