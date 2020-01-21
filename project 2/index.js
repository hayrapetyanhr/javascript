var arr = [-22, -45, -202, -10];
var max = -Infinity;
for(var i = 0; i < arr.length; i++){
    if (max < arr[i]){
        max = arr[i];
    }    
}
console.log(max)

var arr = [22, 45, 202, 10];
var min = arr[0];
for(var i = 0; i < arr.length; i++){
    if (max > arr[i]){
        max = arr[i];
    }    
}
console.log(min)


var resalt = '';
for(var i = 0; i < 5; i++){
    for(var j = 0; j < 6; j++){
        if(j == 5){
            resalt += j
        }else {
            resalt += j + ', ';
        }
    }
    console.log(resalt);
    console.log('');
    resalt = '';
}  


var resalt = '';
var count = 1;
for(var i = 0; i < 5; i++){
    for(var j = 0; j < 6; j++){
        resalt += count++ +' '
    }
    console.log(resalt);
    resalt = '';
}  