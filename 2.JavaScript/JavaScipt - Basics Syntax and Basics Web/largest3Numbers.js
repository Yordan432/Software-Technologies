function threMaxNumbers(arr) {
   let numbers = arr.map(Number);
   numbers.sort((a, b) => b-a);
   let counts = Math.min(3 , numbers.length);
   for(let i=0; i< counts; i++){
       console.log(numbers[i]);
   }
}
largest3Numbers("10 30 15 20 50 5");