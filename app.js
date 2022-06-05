document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    const fisrtOperandValue = Number(
      document.getElementById("fisrtOperand").value
    );
    const secondOperandValue = Number(
      document.getElementById("secondOperand").value
    );
    const operator = document.getElementById("operator").value;
    let result = 0;
    let operatorMark = "";
    switch (operator) {
      case "addition":
        result = fisrtOperandValue + secondOperandValue;
        operatorMark = "+";
        break;
      case "subtraction":
        result = fisrtOperandValue - secondOperandValue;
        operatorMark = "-";
        break;
      case "multiplication":
        result = fisrtOperandValue * secondOperandValue;
        operatorMark = "*";
        break;
      case "division":
        result = fisrtOperandValue / secondOperandValue;
        operatorMark = "/";
        break;
    }

    const resultNode = document.createElement("div");
    resultNode.innerHTML = `${fisrtOperandValue} ${operatorMark} ${secondOperandValue} = ${result}`;
    document.getElementById("result").append(resultNode);
  });
