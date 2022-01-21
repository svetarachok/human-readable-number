
module.exports = function toReadable (number) {
   let str = String(number);

   let arrSimple = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      
   let arrDozen = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   
   let result
      console.log(number % 100)
   
   function toDozen(a, arr1, arr2) {
      if (!(a % 10)) {
      return arr2[a[0]-2]
      } 
      return arr2[a[0]-2] + ' ' + arr1[a[1]]
   }
   
   function toHundred (a, arr1, arr2) {
      if (!(a % 100)) { // 100
         return arr1[str[0]] + ' hundred';
      
      } else if ( a % 100 < 20) { // 109
         return arr1[str[0]] + ' hundred ' + arr1[number % 100];
      
      } else if ( !(a % 10)) { // 109
         return arr1[str[0]] + ' hundred ' + arr2[str[1]-2]
      }
      return arr1[str[0]] + ' hundred ' + arr2[str[1]-2] + ' ' + arr1[str[2]] 
   }
   
      if (number < 20) {
      result = arrSimple[str];
   } else if (number <= 99) {
      result = toDozen(str, arrSimple, arrDozen);
   } else if (number <= 999) {
      result = toHundred(number, arrSimple, arrDozen);
   }
   return result
   }


