export default function random(arr) {
    arr.sort(() => Math.random() - 0.5);
    const arr1 = [];
    const arr2 = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        arr1.push(arr[i]);
      } else {
        arr2.push(arr[i]);
      }
    }
  
    return [arr1, arr2];
}
