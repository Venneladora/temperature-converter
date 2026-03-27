let mark = 90;
let grade;

switch (true) {
    case mark >= 90:
        grade = 'A';
        break;

    case mark >= 80:
        grade = 'B';
        break;

    case mark >= 70:
        grade = 'C';
        break;

    case mark >= 60:
        grade = 'D';
        break;

    default:
        grade = 'F';
}

console.log(grade);