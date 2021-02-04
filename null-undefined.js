var x;

if (typeof x === "undefined") {
  txt = "x is undefined";
} else {
  txt = "x is defined";
}
console.log(x)

// typeof null          // "object" (not "null" for legacy reasons)
// typeof undefined     // "undefined"
// null === undefined   // false
// null  == undefined   // true
// null === null        // true
// null == null         // true
// !null                // true
// isNaN(1 + null)      // false
// isNaN(1 + undefined) // true