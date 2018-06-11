// mergeSort()

function split(arr){
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return [leftArr, rightArr];
}

function merge(arr){
  // [[1,2,4], [3,5,6]] --> [1,2,3,4,5,6]
  let arr1 = arr[0];
  let arr2 = arr[1];
  let finalArr = [];
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

function mergeSort (arr) {
  if (arr.length < 2) return arr;

  const splitArr = mergeSort(split(arr));

  return merge(splitArr);
}

// Array -> split in 2
//   2 arrays, each split in 2
//     again
//       again
//     => arr = [[3], [2], [1], [5], [7], [6], [4]]

//     merge arr[0] arr[1]
//       => arr [[2, 3], [1, 5], [6, 7], [4]]
//       merge
//         => arr 1,2,3,5  4,6,7
//           => arr 1234567  (return)
