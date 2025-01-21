function calculateAverage(grades) {
    if (grades.length === 0) {
        return 0;
    }
    let sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}
let grades = [85, 90, 78, 92];
let average = calculateAverage(grades);
console.log("Student 1 with [85, 90, 78, 92]");
console.log("Average Grade:", average);