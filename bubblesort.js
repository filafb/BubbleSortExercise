function bubbleSort(arr) {
  let interations = arr.length
  while(interations){

  for (let i = 0; i < interations -1; i++){
    if(arr[i] > arr[i+1]){
      let greater = arr[i];
      let lower = arr[i+1];
      arr[i] = lower;
      arr[i+1] = greater;
      }
    }
    interations--
  }
    return  arr
  }
