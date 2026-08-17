// while loops 
// let i=0; // insitailzer
// while(i<10){
//     console.log(i+1);
//     i++ // 
// }


//var num =0;
// for(let i =0; i<=10; i++){
//     console.log(i)
// }

// var num =1;

//  while(num<=10){
//     console.log("5 * " + num + " = " +"   " + 5 * num );
//     num++;
//  }

// let sum =0;
// for(let num =0; num<=10; num++){
//     sum += num
// }
// console.log(sum)

//find prim

// var num =12 
// var isprime = true;
//  for(var i =2; i<num; i++){
//     if(num%i ===0){
//         isprime = false;
//         break
//     }
//  }

// if(isprime){
//     console.log("num is prime")
// }else{
//     console.log("num is not aprime")
// }

for(let i =0; i<=5; i++){
    var bag = ""
    for(let j =i; j<=5; j++){
        bag += "* " 
    }
    console.log(bag)
    
}
for(let i =0; i<=5; i++){
    var bag = ""
    for(let j =1; j<=i; j++){
        bag += "* " 
    }
    console.log(bag)
}