function reverse(arr) {
    for(let i = 0; i < arr.length / 2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;

    }
    for(let item of arr){
        console.log(item);
    }
}
reverse(['20' , '1' , '20' , '1' , '20']);