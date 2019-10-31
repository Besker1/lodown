'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
/**
 * identity: Designed to take ny value, return that value unchanged 
 * @param {any value} value: The value to be returned.
 * @return {any datatypes} value: value returned
 */
 function identity (value){
// takes value
// return value unchanged
return value;
}

 module.exports.identity = identity;


/**
 * typeof: Designed to take any value, return that value datatype in a string
 * @param {any value} value: The value to return datatypes.
 * @return {any datatypes} value: string datatypes 
 */

// make a function with the name typeof that takes value as its parameters
     function typeOf (value){
        // check if the value is equal to null anbd return null
   if (value === null){
       return "null";
       // check if value is an array using comparison assignment
   }else if (Array.isArray(value)=== true){
       return 'array';
   }else {
   return typeof (value);
}
}
 module.exports.typeOf = typeOf();
/**
 * first: is designed to to get the first number of elements
 * from the array and return them in a new array.
 * @param {any array} array: if there is an array return an array literal
 * @param {any number} number: the value return the first element in <array>
 *  the first <number> items of <array>
 * @return: a new array
 */
 function first(array, number ){

       // check if value is an array using comparison assignment
       // check if number is not a positive number to return an empty bracket
 if (Array.isArray(array)!== true || number < 0){
       return [];
       // if zero is not given or not a number return the first element in the array
}else if ( isNaN(number)=== true){
    return array[0];
}else if(typeof(number)=== 'number'){
     return array.slice(0,number);
 }else if (number > array.length){
    return array;
}
}
 module.exports.first = first();
/**
 * last: Designed to get the last number of element
 * @param {any array} if array is not present: return an array literal
 * @param { a number} if number is not given: return the last element of the array.
 * @return {array} returns a new array of the number of elements
 * starting at the end of the array.
 */

function last(array, number ){

       // check if value is an array using conditional statement
       // check if number is not a positive number to return an empty array
 if (Array.isArray(array)!== true || number < 0){
       return [];
       
       // if zero is not given or not a number 
       //return the last element in the array
       
}else if(typeof(number)!== 'number'){
     return array[array.length-1];
     // if number is positive return the full array.
 }else if (number > array.length -1){
    return array;
}else {
   var i = 0;
   while(i !== array.length - number)
   array.shift(array[i]);
   return array;
}};
 module.exports.last = last();

/**
 * indexOf: Designed to check the array for the value, if it’s found, 
 * returns the index number of the first occurrence of the element,
 * if it’s not found then it returns -1.
 * @param {any value} value: The value to return index.
 * @param {array} array: array to return -1
 * @return -1
 * @return index number
 */

 function indexOf(array,value){
   // initialized var index to null
   var index = null;
   // loop through the array and test the variable
   for (var i = 0; i < array.length; i++){
       // make a if statementy to test out value
       if( value === array[i]){
           index = i;
           i = array.length;
       }
   }
   // if index is never changed inside the loop return negative -1.
 if (index === null){
     return -1;
     // else return the index 
 } else {
     return index;
 }

}

 module.exports.indexOf = indexOf();

/**
 * filter: Designed to return an array of elements 
 * that return true when passed as an argument to the callback function filter takes.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * array and filter anything that is true
 * @return booleans
 */



function filter(array, func){
    console.log(array);
    // use the _.each function check each element in the array passing the argument
    var newArr = [];
             each(array, (element, index, array) => {
                 console.log(array);
                 if(func(element,index, array) === true){
                      newArr.push(element);
             }
                 
             }             
             );
             console.log(newArr);
              return newArr  ; 
         }
          module.exports.filter = filter();
         
         /**
 * reject: Designed to it returns an array of elements
 * that failed the test function.
 * @param {Array} array: The array over which to iterate.
 * @param {Function} funcky: The Function to be applied to each value in the 
 * array and reject anything that is not true
 * @return array
 */

         
         var arrays = [];
function reject (arrya,funcky){
     filter(arrya,(element, index, arrya) => {
        if(funcky(element, index, arrya) != true){
                      arrays.push(element);
             }
                 
    } );
    return arrays;
};

 module.exports.reject = reject();

/**
 * partition: Designed to loop over an Array, and applies the 
 * funck Function to each value in the array and push any element that is true
 * into a new array and any element that is not true to another array
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Function} funck: The Function to be applied to each value in the 
 * array and check if anything that is true or not
 */


          function partition(array, funck){
// make a for loop to run through each element
var newArray=[];
var otherArr = [];
var collection = [];
for (var i =0; i <= array.length -1; i++ ){
if (funck(array[i], i, array)){
    newArray.push(array[i]);
} else if (funck(array[i], i, array)!== true){
    otherArr.push(array[i]);
}

}
collection.push(newArray);
collection.push(otherArr);
     return collection;
};
 module.exports.partition = partition();
/**
 * map: Designed to loop over an Array, and applies the 
 * funck Function to each value in the array and
 * push all modified values in to a new array
 * @param {Array,obect} array,object: The array or object over which to iterate
 * if true.
 * @param {Function} callback: The Function to be applied to each value in the 
 * array and check if anything that is true or false
 * @return an array of modified data
 */



         
function map(array,callback) {
    // create container for return value of function
    var newArr = [];
    // create if statement condition true array type is an array
    if(Array.isArray(array)) {
    // create for loop    
    for(var i = 0; i < array.length; i++) {
        // push function results into array container   
    newArr.push(callback(array[i],i, array));
    // else statement if this is false
    }
        
    } else {
        // for in loop for object
        for(var key in array) {
        // push function action results into newAr container    
            newArr.push(callback(array[key], key, array));
            
        }
    }
    // return newArr
     return newArr;
};
 module.exports.map = map();
         
         /**
 * pluck: Designed to loop over an Array of objects and return the any array containing
 * the value of property
 * @param {Array} array: The array over which to iterate.
 * @param {property} key:return value
 * @return value of property
 */


 function pluck(array,key){
     return map(array,(object, i, a )=>{
        return object[key];
    });
}
 module.exports.pluck = pluck();
/**
 * every: Designed to  Call <function> for every element of <collection> 
 * with the paramaters and check if it's true or false
 * @param {collection} collection: The array over which to iterate and compare from.
 * @param {action} function: the function which every element runs from to check 
 * if true or false.
 * @return boolean value
 */

function every(collection,action) {
   if(action === undefined) {
      action =  function (collectstuff) {
          if(!!collectstuff == true) {
              return true;
          } else {
              return false;
          }
       };
   }
   if(Array.isArray(collection)) {
       for(var i =0; i < collection.length; i++) {
       if(action(collection[i], i, collection) === false) {
           return false;
       }
       }
       return true;
   } else if(typeof(collection) === "object"){
       for (var key in collection) {
           if(action(collection[key], key, collection) === false) {
               return false;
           }
       }
       return true;
   }
}
 module.exports.every = every();

/**
 * some: Designed to  Call <function> for arrays or objects of <collection> 
 * with the paramaters and check if it's true or false
 * @param {collection} collection: The array over which to iterate and compare from.
 * @param {action} function: the function which every element runs from to check 
 * if it's an array or an object and return true or false.
 * @return boolean value
 */

   function some(collection,action) {
   if(action === undefined) {
      action =  function (collect) {
          if(!!collect == true) {
              return true;
          } else {
              return false;
          }
       };
   }
   if(Array.isArray(collection)) {
       for(var i =0; i < collection.length; i++) {
       if(action(collection[i], i, collection) === true) {
           return true;
       }
       }
       return false;
   } else if(typeof(collection) === "object"){
       for (var key in collection) {
           if(action(collection[key], key, collection) === true) {
               return true;
           }
       }
       return false;
   }
}
       module.exports.some = some();
      /**
 * reduce: Designed to 
 * @param {array} array: The array over which to iterate.
 * @param {seed} index : the value that is been returned 
 * @param {action} function: the function which every element are run to check if seeds exist.
 * @return seed
 */
      
      
       function reduce(array,action,seed) {
    
     if(seed === undefined) {
     for (var i = 0;i <= array.length - 1; i++) {
     
     // if the first iteration ends and there is no seed, we use the first array element
     // if its not the first iteration call action on previous result, element ,index
     if(i === 0) {
         seed = array[0];
         // implement action
     } else {
    seed = action(seed,array[i],i);
     
     }
         
     }
     // if there is a seed, then
     
    } else {
        for(var i = 0; i < array.length; i++) {
         seed = action(seed,array[i],i)  
        }
        
    }
    return seed;
};
 module.exports.reduce = reduce();
/**
 * extend: Designed to iterate and copy properties of objects and returned them 
 * to the updated original object (object1)
 *
 * @param {objects} : object1 the updated objects
 * @return {objects} : updated object1
 */


function extend(object1, ...restOfObjects){
    // 1  working with an array of objects, grab all properties/values of every object pass in
    for (let i = 0; i < restOfObjects.length; i++){
    // 2 iterate over rest of objects
    for (var key in restOfObjects[i]){
    // 3 inside that for loop, iterate through every object's properties
        object1[key] = restOfObjects[i][key];
    }    
    // 4 while iterating through those, assign all of the propeties and their values onto object1
    } return object1;
    
    
 
}
 module.exports.extend = extend();
