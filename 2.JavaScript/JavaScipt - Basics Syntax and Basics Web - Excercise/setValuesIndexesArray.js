function  setVaueIndex(arr) {
   let sizeArray = Number(arr[0]);
   let array = new Array(sizeArray);

   for(let i = 0; i < array.length; i++){
       array[i] = 0;
   }
    for(let i = 1; i< arr.length; i++){
        let items = arr[i].split(" - ");
        let index = Number(items[0]);
        let value = Number(items[1]);

        array[index] = value;
    }
    for(let item of array){
        console.log(item);
    }
}
setVaueIndex([2, "0 - 5", "0 - 6", "0 - 7"]);