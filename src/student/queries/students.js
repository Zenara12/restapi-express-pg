const getStudents = "SELECT * FROM students ORDER BY id";
const getStudent = "SELECT * FROM students WHERE id = $1";
const checkEmail = "SELECT s FROM students s WHERE s.email=$1";
const addStudent =
  "INSERT INTO students (name, email, age, dob) VALUES ($1,$2,$3,$4)";
const removeStudent = "DELETE FROM students WHERE id=$1";
const updateStudent =
  "UPDATE students set name=$2, email=$3, age=$4, dob=$5 WHERE id=$1";

module.exports = {
  getStudents,
  getStudent,
  checkEmail,
  addStudent,
  removeStudent,
  updateStudent,
};
