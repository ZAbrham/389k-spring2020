/*
 * Function 1: Return the string "hello world".
 * Yep - that's literally it.
 */

function helloWorld(){
  return "hello world";
}

/*
 * Function 2: Given a number (int or float), square it and convert to string.
 * Return the string.
 * Examples:
 *  5 -> '25'
 *  1.2 -> '1.44'
 */

function squareToString(num){
    return (num*num).toString();
}

/*
 * Function 3: Reverse a string. We will only give you strings as input.
 * Examples:
 *  'hello' -> 'olleh'
 *  'fdas' -> 'sadf'
 */

function reverseString(str){
    var ret = "";
    for (var x = str.length - 1; x >= 0; x--){
      ret += str.charAt(x);
    }
    return ret;
}

 /*
  * Function 4: Given a dictionary, compute the average length of the values.
  * If a value is an integer, covert it to a string, and use the length of the
  * converted string in your computation.
  * Example:
  *     {
  *         'hello': 'world',
  *         'timothy': 'chen',
  *         'allen': 'cheng',
  *         2:'hi',
  *         3: 51
  *     }
  * ^ This will return 3.6.
  */

 function avgLenOfVals(dict){
     var count = 0;
     var len = 0;
     for (var key in dict){
        if (typeof dict[key] == 'number'){
            count += dict[key].toString().length;
        }
        else{
          count += dict[key].length;
        }
        len ++;
     }
     if (len == 0){
      return 0.0;
     }
     return (count+0.0)/len;
 }

/*
 * Function 5: stringToArr -> Given a string that has comma + whitespace
 *     separated values, and creates an array containing all the elements.
 *      Example:
 *          'hello, my,   name, is ,dickerson' ->
 *          ['hello','my','name','is','dickerson']
 *      Then, apply the second argument of the function (another function)
 *      to the array. Return this result.
 *      You will have to write your own tests to see if this function works.
 *
 */
var x = function(a) {
  var count = 0;
  for(var i of a){
    console.log(i);
    count += i.length;
  }
  return count;
}
function applyFunToArray(str, fun){
    var arr = str.split(" ");
    var ret = [];
    for(var i of arr){
      if(i.length > 0){
        var x = i;
        if(x.charAt(0) == ','){
          x = x.substring(1);
        }
        if(x.charAt(x.length - 1) == ','){
          x = x.substring(0,x.length - 1);
        }
        ret.push(x);
      }
    }
    return fun(ret);
}

module.exports = {
    helloWorld: helloWorld,
    squareToString: squareToString,
    reverseString: reverseString,
    avgLenOfVals: avgLenOfVals,
    applyFunToArray: applyFunToArray
}
