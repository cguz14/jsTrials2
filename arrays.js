'use strict';

// 1. printIndices
function printIndices(items) {
  for (let i = 0; i < items.length; i ++) {
    console.log(`${items[i]} ${i}`);
  }
}

printIndices(["apple", "berry", "cherry"])

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (let i = 0; i < items.length; i += 2) {
    result.push(items[i]);
  }

  console.log(result);
}

everyOtherItem(["apple", "berry", "cherry", "banana"])

// def smallest_n_items(items, n):
//     """Print a list of the `n` smallest integers in `items`.

//     Order the integers in descending order.

//     You can assume that `n` will be less than the length of the list.

//     Arguments:
//         items (list[int]): A list of integers
//         n (int): Desired length for the resulting list
//     """

//     sorted_items = sorted(items)
//     sorted_n_items = sorted_items[:n]
//     sorted_n_items.reverse()

//     print(sorted_n_items)

// 

// 3. smallestNItems
function smallestNItems(items, n) {

  const sortedItems = items.sort((a, b) => a - b);
  const sortedNItems = sortedItems.slice(0, n);
  console.log(sortedNItems);

}

smallestNItems([3, 5, 23, 64, 100, 2, 55], 5);