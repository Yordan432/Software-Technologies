function keyValueParis(arr) {
    let dict = {};
    for(let i = 0; i< arr.length - 1; i++){
        let items = arr[i].split(' ');
        let key = items[0];
        let value = items[1];

        dict[key] = value;
    }
    let findKey = arr[arr.length - 1];
    let isExistKey = false;
    for (let item in dict){
        if(item === findKey){
            console.log(dict[item]);
            isExistKey = true;
            break;
        }
    }
    if(!isExistKey){
        console.log('None')
    }
}

arr = ["3 bla" ,"3 alb" , '2'];
keyValueParis(arr);