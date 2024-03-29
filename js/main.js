///table /////

const students = JSON.parse(localStorage.getItem("students")) || [];



const btnAdd = document.getElementById("btn-add");

const studentList = document.getElementById("students_list");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lasttName");
const adres = document.getElementById("adres");
const date = document.getElementById("date");
const typeOfPromotion = document.getElementById("typeOfPromotion");
const promotion = document.getElementById("promotion");
const salary = document.getElementById("salary");
const isMarried = document.getElementById("isMarried");

function displayStudents(students) {
  let str = "";
  students.forEach((student) => {
    console.log(student);
    str += `
    <tr>
    <td>${student?.id}</td>
    <td>${student?.firstName}</td>
    <td>${student?.lastName}</td>
    <td>${student?.location}</td>
    <td>${student?.date}</td>
    <td>${student?.promotion}</td>
    <td>${student?.typeOfPromotion}</td>
    <td>${student?.salary}</td>
    <td>${student?.isMarried ? "Ha" : "Yo'q"}</td>
    <td>
    <button class="btn btn-sm btn-blue">Edit</button>
    <button class="btn btn-sm btn-danger " onclick="deleteStudent(${student?.id})" >Delete</button>
    </td>
    </tr>
    `;
  });
  studentList.innerHTML = str;
}
displayStudents(students);

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const newStudent = {
    id: students.length + 1,
    firstName: firstName.value,
    location: location.value,
    date: date.value,
    promotion: promotion.value,
    typeOfPromotion: typeOfPromotion.value,
    salary: salary.value,
    isMarried: isMarried.checked,
  };
  let newStudents = [...students, newStudent];
  displayStudents(newStudents);
  localStorage.setItem("students", JSON.stringify(newStudents));
});

function deleteStudent(studentId) {
  if (confirm("Are you sure you want to delete this student?")) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
   let studentDelete=  students.filter((el)=> el?.id !== studentId )
   displayStudents(studentDelete);
   localStorage.setItem("students", JSON.stringify(studentDelete));
  }
}
