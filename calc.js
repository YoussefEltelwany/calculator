function getValues() {
  let Number1 = parseInt(document.getElementById("frist").value);
  let Number2 = parseInt(document.getElementById("last").value);
  return { Number1, Number2 };
}

function Minus() {
  let { Number1, Number2 } = getValues();
  var MinusResult = Number1 - Number2;
  document.getElementById("result").value = MinusResult;
}

function sum() {
  let { Number1, Number2 } = getValues();
  var sumResult = Number1 + Number2;
  document.getElementById("result").value = sumResult;
}

function ksma() {
  let { Number1, Number2 } = getValues();
  var ksmaResult = Number1 / Number2;
  if (Number2 === 0) {
    ksmaResult = "can't divide by 0";
  }
  document.getElementById("result").value = ksmaResult;
}

function darb() {
  let { Number1, Number2 } = getValues();
  var DarbResult = Number1 * Number2;
  document.getElementById("result").value = DarbResult;
}
   }









