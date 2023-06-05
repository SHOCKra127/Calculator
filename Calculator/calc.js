 const digin = {
    sum: '+',
    substract: '-',
    multy: '*',
    divison: '/'
};

function calculate({a, b, operations}) {
    let result = null;
  switch (operations) {
    case digin.sum:
        result = sum(a, b);
    break;

    case digin.substract:
        result = substract(a, b);
        break;

    case digin.multy:
        result = multy(a, b);
        break;

    case digin.divison:
        result = divison(a, b);
        break;

  
    default:
        break;
  }
    return result;
}