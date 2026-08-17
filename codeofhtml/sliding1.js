function bFaSubarr(arr,sum){
      
    for(let i =0; i<arr.length; i++){
        let temp =[];
        for(let j =i; j<arr.length; j++){
          //  let temp =[];
              temp += arr[j]
           // for(let k = i; k<=j; k++){
               // temp.push(arr[k])
           // }
            console.log(temp)
        }
    }
}

bFaSubarr([1,4,20,3,10,5],33);