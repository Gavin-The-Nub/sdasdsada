function clickNumber(number) {
  let click = document.getElementById("typeBoxJs").value;
  if (click === "Syntax Error") {
    document.getElementById("typeBoxJs").value = "" + number;
  } else if (click === "Calculador") {
    document.getElementById("typeBoxJs").value = "" + number;
  } else {
    document.getElementById("typeBoxJs").value += "" + number + "";
  }
}
function clickOn() {
  setTimeout(clicks, 500);
}
function clicks() {
  document.getElementById("typeBoxJs").value = "Calculador";
  setTimeout(clicked, 2000);
}
function clicked() {
  document.getElementById("typeBoxJs").value = "";
}

function clickDlt() {
  let click = document.getElementById("typeBoxJs").value;
  if (click === "Syntax Error") {
    document.getElementById("typeBoxJs").value = "";
  } else if (click === "Calculador") {
    document.getElementById("typeBoxJs").value = "";
  } else {
    if (click.length > 0) {
      click = click.slice(0, -1);
    }
    document.getElementById("typeBoxJs").value = click;
  }
}
function clickOperation(operation) {
  let click = document.getElementById("typeBoxJs").value;
  if (click === "Syntax Error") {
    document.getElementById("typeBoxJs").value = "" + operation;
  } else if (click === "Calculador") {
    document.getElementById("typeBoxJs").value = "" + operation;
  } else {
    document.getElementById("typeBoxJs").value += " " + operation + " ";
  }
}
function clickDelete(dlt) {
  document.getElementById("typeBoxJs").value = "";
}
function calc() {
  let val = document.getElementById("typeBoxJs").value;
  let result;
  if (val === "Calculador") {
    document.getElementById("typeBoxJs").value = "";
  } else if (val === " = undefined") {
    document.getElementById("typeBoxJs").value = "";
  } else {
    try {
      result = eval(val);
    } catch (kahitAnoAtaIlagayDitoDiKoRinKaseToAlamEh) {
      document.getElementById("typeBoxJs").value = "Syntax Error";
      return;
    }
  }
  document.getElementById("typeBoxJs").value += " = " + result;
}
