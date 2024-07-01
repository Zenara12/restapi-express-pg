const pool = require("../../../db.js");
const queries = require("../queries/students.js");

const getStudents = async (req, res) => {
  try {
    const data = await pool.query(queries.getStudents);
    res.status(200).send(data.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error:${error}` });
  }
};

const getStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await pool.query(queries.getStudent, [id]);
    res.status(200).send(data.rows);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error:${error}` });
  }
};

const addStudent = async (req, res) => {
  const { name, email, age, dob } = req.body;
  try {
    await pool.query(queries.checkEmail, [email], async (error, results) => {
      if (results.rowCount) {
        res.send({ message: "Email already exist" });
      } else {
        await pool.query(
          queries.addStudent,
          [name, email, age, dob],
          (error, results) => {
            if (error) throw error;
            res.status(201).send("Student Created Succesfully!");
          }
        );
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error:${error}` });
  }
};

const removeStudent = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const data = await pool.query(queries.removeStudent, [id]);
    console.log(data);
    if (!data.rowCount)
      res.send({ message: "Can't remove student does not exist" });
    else res.status(200).send({ message: "Student remove succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error:${error}` });
  }
};

const updateStudent = async (req, res) => {
  const { name, email, age, dob } = req.body;
  const id = parseInt(req.params.id);
  try {
    await pool.query(
      queries.updateStudent,
      [id, name, email, age, dob],
      (error, results) => {
        if (!results.rowCount) res.send({ message: `Error: ${error}` });
        else res.status(200).send({ message: "Student update succesfully" });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error:${error}` });
  }
};

module.exports = {
  getStudents,
  getStudent,
  addStudent,
  removeStudent,
  updateStudent,
};
