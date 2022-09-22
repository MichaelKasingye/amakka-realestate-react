
// Function prevents repetition of elements in an array
export function nonRepeat(arr){
    let data = []
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (!data.includes(element)) {
        data.push(element);
      }
    }
    // console.log(data);
  return data;
  
  }

