// var arr = [-22, -45, -202, -10];
// var max = -Infinity;
// for(var i = 0; i < arr.length; i++){
//     if (max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max)
//
// var arr = [22, 45, 202, 10];
// var min = arr[0];
// for(var i = 0; i < arr.length; i++){
//     if (max > arr[i]){
//         max = arr[i];
//     }
// }
// console.log(min)


// var resalt = ``;
// for(var i = 0; i < 5; i++){
//     for(var j = 0; j < 6; j++){
//         if(j == 5){
//             resalt += j
//         }else {
//             resalt += j + `, `;
//         }
//     }
//     console.log(resalt);
//     console.log(``);
//     resalt = ``;
// }


// var resalt = ``;
// var count = 1;
// for(var i = 0; i < 5; i++){
//     for(var j = 0; j < 6; j++){
//         resalt += count++ + ` `;
//     }
//     console.log(resalt);
//     resalt = ``;
// }


// var resalt = ``;
// for (var i = 1; i < 10; i++) {
//   for (var j = 1; j < 10; j++) {
//     if (j == 9) {
//       resalt += j + ` * ` + i + ` = ` + j * i + ` `;
//     } else {
//       resalt += j + ` * ` + i + ` = ` + j * i + `, `;
//     }
//     console.log(resalt);
//     resalt = ``;
//     document.write("<p>"+i+"*"+j+" = "+(i*j)+"</p>");
//   }
//   document.write(`</br>`);
//   console.log(resalt);
//   resalt = ``;
// }



// var resalt = ``;
// for (var i = 1; i < 10; i++) {
//   for (var j = 1; j < 10; j++) {
//     if (j == 9) {
//       resalt += `${j} * ${i} = ${j * i}`;
//     } else {
//       resalt += `${j} * ${i} = ${j * i},`;
//     }
//     console.log(resalt);
//     resalt = ``;
//     document.write("<p>"+i+"*"+j+" = "+(i*j)+"</p>");
//   }
//   document.write(`</br>`);
//   console.log(resalt);3
//   resalt = ``;
// }


// var arr = [2, 5, 22, 10];
// var max = 0;
// var max2 = 0
// for(var i = 0; i < arr.length; i++){
//     if (max < arr[i]){
//         max = arr[i];
//     }
//     if (max2 < arr[i] && max2 < max){
//       max2 = arr[i];
//       console.log(max2)
//     }
// }
// console.log(max)

// function sayName(name) {
//   alert(`my name is ${name}`)
// }
// sayName('exo')

// console.log(typeof sayName)


// function calc (a,b){
//   console.log(a)
//   console.log(b)
//   return a + b;
 
// }

// var y = calc(30, 40);
// console.log(y)


// function f (a, b, c){
//   alert(a);
//   console.log(b+c)
// }
// f(4 ,5 ,6,8,9,7)
// console.log(a)



// var max = Math.max(7, 9, 20);

// console.log(max);




// function floor(number){
//   if (number === null){
//     alert('write')
//     return
//   }return number - (number % 1);

// }
// var x = floor(lkl);
// console.log(x);




// function round(number){
//   if (number % 1 >= 0.5) {
//     return number - (number % 1) + 1;
//   }else {
//     return number - (number % 1);
//   }

// }
// var y = round(2.6);
// console.log(y);


// var arr  = new Array('3');
// console.log(arr)


function min (arr){
  var min = arr[0];
  var sort = 0
  for(var i = 0; i < arr.length; i++){
      if (min > arr[i]){
          min = arr[i];
      }
  }
  return min
}

var minNum = min([22, 45, 202, 10]);
console.log(minNum);