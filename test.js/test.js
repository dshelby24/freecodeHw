//1.
function bouncer(arr) {
    function truthy(value) {
     return value;
     }
  
     var filtered = arr.filter(truthy);
     return filtered;
   }

//2.
   function chunkArrayInGroups(arr, size) {
    if (arr.length <= size) {
      return [arr];
    } else {
      return [arr.slice(0, size)].concat(
        chunkArrayInGroups(arr.slice(size), size)
      );
    }
  }