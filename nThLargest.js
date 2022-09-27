function findLargest(n) {
  var a = [3, 0, 6, 99, 4, 8, 6, 15, -2, 88, 101, 23, 45, 9];
  for (i = 0; i < n; i++) {
    var key = i;
    largest = a[key];
    while (key < a.length) {
      if (a[key] > largest) {
        largest = a[key];
        index = key;
      }
      key++;
    }
    temp = a[index];
    a[index] = a[i];
    a[i] = temp;
  }
  return largest;
}
largest = findLargest(4);
console.log(largest);
