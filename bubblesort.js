let arr = [3, 2, 1, 4];

function comparing(left, right) {
  let max = left > right ? left : right;
  return max;
}

function bubbleSort(arr) {
  let result = [];
  let swapCounter = 0;
  if(!arr.length) return arr;

  for (let i = 0; i < arr.length -1; i++){
      // let tempArr = arr.splice(i, 2) // [3,2] & arr [1, 4]
      // //  arr = [3, 2, 1, 4]
      // if(arr[0] > arr[1]) {
      //    tempArr = tempArr.reverse(); // [2,3]
      // }
      // arr = tempArr.concat(arr); // arr = [2,3,1,4] use splice to get values in the middle
    if(arr[i] > arr[i+1]){
      let greater = arr[i];
      let lower = arr[i+1];
      arr[i] = lower;
      arr[i+1] = greater;
      swapCounter++
      }
    }
    return bubbleSort(arr.slice(0,arr.length-1))
  }








  return result;
}
