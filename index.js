(function () {
  const el = function (element) {
    if (element.charAt(0) === '#') {
      return document.querySelector(element);
    }

    return document.querySelectorAll(element);
  };

  const viewer = el('#viewer');
  const equals = el('#equals');
  const nums = el('.num');
  const ops = el('.ops');
  let theNum = '';
  let oldNum = '';
  let resultNum;
  let operator;

  const setNum = function () {
    if (resultNum) {
      theNum = this.getAttribute('data-num');
      resultNum = '';
    } else {
      theNum += this.getAttribute('data-num');
    }

    viewer.innerHTML = theNum;
  };

  const moveNum = function () {
    oldNum = theNum;
    theNum = '';
    operator = this.getAttribute('data-ops');

    equals.setAttribute('data-result', '');
  };

  const displayNum = function () {
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    switch (operator) {
      case 'ПЛЮСУЮ':
        resultNum = oldNum + theNum;
        break;

      case 'МИНУСУЮ':
        resultNum = oldNum - theNum;
        break;

      case 'УМНОЖАЮ':
        resultNum = oldNum * theNum;
        break;

      case 'ДЕЛЮ':
        resultNum = oldNum / theNum;
        break;

      default:
        resultNum = theNum;
    }

    if (!Number.isFinite(resultNum)) {
      if (Number.isNaN(resultNum)) {
        resultNum = 'You broke it!';
      } else {
        resultNum = "Look at what you've done";
        el('#calculator').classList.add('broken');
        el('#reset').classList.add('show');
      }
    }

    viewer.innerHTML = resultNum;
    equals.setAttribute('data-result', resultNum);

    oldNum = 0;
    theNum = resultNum;
  };

  const clearAll = function () {
    oldNum = '';
    theNum = '';
    viewer.innerHTML = '0';
    equals.setAttribute('data-result', resultNum);
  };

  for (let i = 0, l = nums.length; i < l; i += 1) {
    nums[i].onclick = setNum;
  }

  for (let i = 0, l = ops.length; i < l; i += 1) {
    ops[i].onclick = moveNum;
  }

  equals.onclick = displayNum;

  el('#clear').onclick = clearAll;

  el('#reset').onclick = function () {
    window.location = window.location;
  };
}());
