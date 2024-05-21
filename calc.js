function getValues() {
  // احصل على القيم من المدخلات
  let Number1 = parseFloat(document.getElementById("frist").value);
  let Number2 = parseFloat(document.getElementById("last").value);

  // التحقق من صحة القيم
  if (isNaN(Number1) || isNaN(Number2)) {
    alert("Please enter valid numbers");
    return null;
  }
  
  return { Number1, Number2 };
}

function Minus() {
  const values = getValues();
  if (values) {
    const { Number1, Number2 } = values;
    const MinusResult = Number1 - Number2;
    document.getElementById("result").value = MinusResult;
  }
}

function sum() {
  const values = getValues();
  if (values) {
    const { Number1, Number2 } = values;
    const sumResult = Number1 + Number2;
    document.getElementById("result").value = sumResult;
  }
}

function ksma() {
  const values = getValues();
  if (values) {
    const { Number1, Number2 } = values;
    let ksmaResult = Number1 / Number2;
    if (Number2 === 0) {
      ksmaResult = "can't divide by 0";
    }
    document.getElementById("result").value = ksmaResult;
  }
}

function darb() {
  const values = getValues();
  if (values) {
    const { Number1, Number2 } = values;
    const DarbResult = Number1 * Number2;
    document.getElementById("result").value = DarbResult;
  }
}









