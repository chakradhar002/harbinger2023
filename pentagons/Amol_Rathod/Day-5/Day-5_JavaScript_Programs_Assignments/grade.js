const showGrade = (marks) => {
  let sum = 0;
  let total = 100 * marks.length;
  marks.forEach((mark) => (sum += mark));

  let avg = (sum / total) * 100;

  if (avg <= 70) {
    return "D";
  } else if (avg < 80) {
    return "C";
  } else if (avg < 90) {
    return "B";
  } else {
    return "A";
  }
};

console.log(`Grade : ${showGrade([90, 90, 90, 92])}`);
