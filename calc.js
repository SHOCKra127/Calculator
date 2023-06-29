const operations = {
  sum: '+',
  substract: '-',
  multy: '*',
  divison: '/',
};

function calculate({ a, b, operation }) {
  let result = null;

  switch (operation) {
    case operations.sum:
      result = sum(a, b);
      break;

    case operations.substract:
      result = substract(a, b);
      break;

    case operations.multy:
      result = multy(a, b);
      break;

    case operations.divison:
      result = divison(a, b);
      break;

    default:
      break;
  }
  return result;
}
