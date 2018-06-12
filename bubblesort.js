function bubbleSort(arr) {
  let interations = arr.length
  while(interations){

  for (let i = 0; i < interations -1; i++){
    compare(arr,i)
    }
    interations--
  }
    return  arr
  }

  function compare(arr, i){
    if(arr[i] > arr[i+1]){
      swap(arr, i)
      }
  }

  function swap (arr, i){
    let greater = arr[i];
    let lower = arr[i+1];
    arr[i] = lower;
    arr[i+1] = greater;
  }
