function sum([array]) {
    let splitArray = array.split(' ');

    let num1 = Number(splitArray[0]);
    let num2 = Number(splitArray[1]);
    let num3 = Number(splitArray[2]);

    if(num1 + num3 == num2){
        let min = Math.min(num1 , num3);
        let max = Math.max(num1 , num3);
        console.log(min + " + " + max + " = " + num2);
    }else  if(num1 + num2 == num3){
        let min = Math.min(num1 , num2);
        let max = Math.max(num1 , num2);
        console.log(min + " + " + max + " = " + num3);
    }else if(num2 + num3 == num1){
        let min = Math.min(num2 , num3);
        let max = Math.max(num2 , num3);
        console.log(min + " + " + max + " = " + num1);
    }else {
        console.log('No')
    }
}
arr = ['-5 -3 -2'];
sum(arr);
