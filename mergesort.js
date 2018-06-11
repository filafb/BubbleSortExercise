// mergeSort()

function split(arr){
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return [leftArr, rightArr];
}

function mergeSort (arr) {



}

function merge(arr){
  // [[1,2,4], [3,5,6]] --> [1,2,3,4,5,6]
  let arr1 = arr[0];
  let arr2 = arr[1];
  let finalArr = [];
  // let greaterLength = arr1.length > arr2.length ? arr1.length : arr2.length;
  while(arr1.length || arr2.length){
    if(arr1[0] < arr2[0]){
      finalArr.push(arr1.shift());
    }
    else{
      finalArr.push(arr2.shift())
    }
  }
  return finalArr
}
