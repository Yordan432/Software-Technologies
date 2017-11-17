function printLines(arr) {
    for(let item of arr){
        if(item === 'Stop'){
            break;
        }else {
            console.log(item);
        }
    }
}
printLines(['Line1' , 'Line2' , 'Line3' , 'Stop']);