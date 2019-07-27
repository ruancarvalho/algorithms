const quicksort = function(items = []) {
  if (items.length <= 1) {
    return items;
  }

  let left = [], right = [];
  const pivot = items.pop();
  let item;

  while (items.length) {
    item = items.shift();

    if (item <= pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  return quicksort(left).concat(pivot).concat(quicksort(right));
}