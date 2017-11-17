function keyValueParis(arr) {
    let dict = {};
    for(let i = 0; i< arr.length - 1; i++){
        let items = arr[i].split(' ');
        let key = items[0];
        let value = items[1];

        if(!dict.hasOwnProperty(key)){
            dict[key] = value;
        }else {
           dict[key] = new Array();
           dict[key].push(value);
        }

    }
    let findKey = arr[arr.length - 1];
    let isExistKey = false;
    for (let item in dict){
        if(item === findKey){
            console.log(dict[item]);
            isExistKey = true;
        }
    }
    if(!isExistKey){
        console.log('None')
    }
}

arr = ["key value" ,"key value1" ,"key value2" , 'key'];
keyValueParis(arr);