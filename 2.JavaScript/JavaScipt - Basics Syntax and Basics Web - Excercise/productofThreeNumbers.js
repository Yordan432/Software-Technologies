function productNumbers(arr) {
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    if(count % 2 != 0){
        console.log('Negative');
    }else {
        console.log('Positive');
    }

}