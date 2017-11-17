function addRemove(arr) {
    let array = [];
    for(let i = 0; i < arr.length; i++){
        let line = arr[i].split(' ');
        let command = line[0];
        let number = Number(line[1]);

        if(command === "add"){
            array.splice(i , 0 , number);
        }else {
            array.splice(number , 1);
        }
    }
    for(let item of array){
        console.log(item);
    }
}
arr = ["add 3" , "add 5" , "remove 2" , "remove 0" , "add 7"];
addRemove(arr);