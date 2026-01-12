let score = [];
let sum = 0;

function randomscore() {
  document.querySelectorAll("#score").forEach((el, i) => {
    let b = Math.floor(Math.random() * 60) + 40;
    score[i] = b;
    sum += b;

    el.textContent = b;
  });

  if (sum % 2 == 0) {
    darktheme();
  }

  console.log(score);
}

function gradeCalc() {
    let grade = ""
  document.querySelectorAll("#grade").forEach((el, i) => {
    if (score[i] >= 80) {
      grade = "A";
    } else if (80 > score[i] && score[i] >= 70) {
      grade = "B";
    } else if (70 > score[i] && score[i] >= 60) {
      grade = "C";
    } else if (60 > score[i] && score[i] >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }

    el.textContent = grade;

    if (grade == 'F') {
        el.style.color = "red";
    }
  });
}

function darktheme() {
  const ths = document.querySelectorAll("th");

  document.body.style.backgroundColor = "#333";
  document.body.style.color = "white";

  ths.forEach((th) => {
    th.style.color = "black";
  });
}
