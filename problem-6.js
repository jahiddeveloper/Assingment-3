/** Problem 06 :  (Current Salary )  */

var experience = 40;
var startingSalary = 30000;

for (let i = 1; i <= experience; i++) {
  startingSalary = startingSalary + startingSalary * 0.05;
}

startingSalary = startingSalary.toFixed(2);
  console.log(startingSalary);
