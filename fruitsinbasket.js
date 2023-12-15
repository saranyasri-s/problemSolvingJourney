var totalFruit = function (fruits) {
  let typeA = fruits[0];
  let typeB;
  let pointer = 0;
  let sumTrees = -Infinity;
  let sum = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === typeA) {
      sum++;
      pointer = i;
    } else if (typeB === undefined) {
      typeB = fruits[i];
      sum++;
      pointer = i;
    } else if (fruits[i] === typeB) {
      sum++;
      pointer = i;
    } else {
      pointer = i;
      break;
    }
  }
  if (sum > sumTrees) {
    sumTrees = sum;
  }

  const helper = (pointer, fruits) => {
    typeA = fruits[pointer];
    typeB = fruits[pointer - 1];
    sum = 0;
    for (let i = pointer; i >= 0; i--) {
      if (fruits[i] === typeA || fruits[i] === typeB) {
        sum++;
      } else {
        break;
      }
    }
    for (let i = pointer + 1; i < fruits.length; i++) {
      if (fruits[i] === typeA || fruits[i] === typeB) {
        sum++;
        if (sum > sumTrees) {
          sumTrees = sum;
        }
        pointer = i;
      } else {
        if (sum > sumTrees) {
          sumTrees = sum;
        }
        sum = 0;
        pointer = i;
        break;
      }
    }
    if (pointer < fruits.length - 1) {
      helper(pointer, fruits);
    }
  };

  if (pointer < fruits.length - 1) {
    helper(pointer, fruits);
  }

  return sumTrees;
};

console.log(totalFruit([1, 0, 2, 3, 4]));
