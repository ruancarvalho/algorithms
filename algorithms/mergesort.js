/**
 * 
 * @param {Array} items 
 */
const mergesort = function(items = []) {
  if (items.length < 2) {    
    return items
  } else {
    console.log('mergesort', items);

    let leftItems = items.slice(0, items.length / 2);
    let rightItems = items.slice(items.length / 2);
    
    // divide all items
    let left = mergesort(leftItems);
    let right = mergesort(rightItems);

    // conquer: merge items into one array
    return merge(left, right);
  }
}

/**
 * 
 * @param {Array} left 
 * @param {Array} right 
 */
const merge = function(left = [], right = []) {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  while (left.length) {
    sorted.push(left.shift());
  }

  while (right.length){
    sorted.push(right.shift());
  }
  console.log('sorted', sorted)
  return sorted;
}