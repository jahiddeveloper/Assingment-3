/** Problem -03 ( Medicine Planner ) */

var lastDay = 11;

for (let i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(i.toString(), "-", "medicine");
  } 
  else {
    console.log(i.toString(), "-", "rest");
  }
}
