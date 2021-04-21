//1.
function bouncer(arr) {
    function truthy(value) {
     return value;
     }
  
     var filtered = arr.filter(truthy);
     return filtered;
   }
   bouncer([7, "ate", "", false, 9]);

//2.
function chunkArrayInGroups(arr, size) {
  var arr2 =[];
  for(var i=0; i < arr.length; i+= size){
    arr2.push(arr.slice(i, i+size));
  }
  return arr2;
    }
    
    chunkArrayInGroups(["a", "b", "c", "d"], 2);
  